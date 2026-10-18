import type { CordisContext } from '../index.js'
import { CLAUDE_DESKTOP_CSS } from './styles.js'

export const name = 'dsh-claude-code-desktop-client'

let domObserver: MutationObserver | null = null

function getStoredTheme(): string {
  try {
    return localStorage.getItem('cc-desktop-theme') || 'dark'
  } catch {
    return 'dark'
  }
}

function setStoredTheme(theme: string) {
  try {
    localStorage.setItem('cc-desktop-theme', theme)
  } catch {
    // Ignore in restricted environments
  }
}

export function apply(ctx: CordisContext) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  mountClaudeDesktopUI()

  if (typeof ctx?.effect === 'function') {
    ctx.effect(() => () => unmountClaudeDesktopUI())
  }
}

export function mountClaudeDesktopUI() {
  if (typeof document === 'undefined') return

  if (!document.body) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mountClaudeDesktopUI)
    } else {
      setTimeout(mountClaudeDesktopUI, 40)
    }
    return
  }

  if (document.getElementById('cc-desktop-styles')) return

  // 1. Inyectar fuentes oficiales (Newsreader Serif, Inter, JetBrains Mono)
  if (!document.getElementById('cc-desktop-fonts') && document.head) {
    const fontLink = document.createElement('link')
    fontLink.id = 'cc-desktop-fonts'
    fontLink.rel = 'stylesheet'
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap'
    document.head.appendChild(fontLink)
  }

  // 2. Inyectar tokens de tema a nivel sistema
  const styleTag = document.createElement('style')
  styleTag.id = 'cc-desktop-styles'
  styleTag.textContent = CLAUDE_DESKTOP_CSS
  if (document.head) {
    document.head.appendChild(styleTag)
  }

  const savedTheme = getStoredTheme()
  if (document.documentElement) {
    document.documentElement.setAttribute('data-claude-theme', savedTheme)
    document.documentElement.setAttribute('data-ds-dark-theme', savedTheme === 'dark' ? 'true' : 'false')
  }

  // 3. Montar barra de controles en el área de título de Windows (sin doble header)
  const header = document.createElement('header')
  header.id = 'cc-system-header'
  header.innerHTML = `
    <div class="cc-header-inner">
      <div class="cc-brand-badge">
        <span class="cc-brand-icon">✻</span>
        <span>Claude Code</span>
      </div>
      <span class="cc-workspace-chip" title="DeepSeek Harness Workspace">dsh · workspace</span>
    </div>

    <div class="cc-header-inner">
      <div class="cc-segmented-control" role="tablist">
        <button class="cc-seg-item" id="cc-mode-chat" type="button">Chat</button>
        <button class="cc-seg-item active" id="cc-mode-code" type="button">Code</button>
      </div>
      <button class="cc-action-pill" id="cc-permission-pill" data-mode="plan" type="button" title="Atajo: Shift + Tab para alternar">
        <span>🛡️ Plan Mode</span>
      </button>
    </div>

    <div class="cc-header-inner">
      <button class="cc-action-pill" id="cc-drawer-toggle" type="button">
        <span>⚡ App Preview</span>
      </button>
      <button class="cc-action-pill" id="cc-theme-switch" type="button" title="Alternar entre Anthropic Warm Dark y Warm Paper">
        <span>◐ Tema</span>
      </button>
    </div>
  `
  document.body.appendChild(header)

  // 4. Panel lateral deslizable de App Preview
  const drawer = document.createElement('aside')
  drawer.id = 'cc-desktop-drawer'
  drawer.innerHTML = `
    <div class="cc-drawer-toolbar">
      <span style="font-size:11.5px; font-weight:600; color:var(--cc-text-secondary);">Live Preview</span>
      <input class="cc-url-bar" id="cc-preview-url" type="text" value="http://localhost:3000" />
      <button class="cc-action-pill" id="cc-preview-refresh" type="button">↻</button>
    </div>
    <iframe class="cc-preview-viewport" id="cc-preview-iframe" src="about:blank"></iframe>
  `
  document.body.appendChild(drawer)

  // 5. Configuración de interactividad
  const permissionPill = document.getElementById('cc-permission-pill')
  const togglePermissionMode = () => {
    if (!permissionPill) return
    const current = permissionPill.getAttribute('data-mode')
    if (current === 'plan') {
      permissionPill.setAttribute('data-mode', 'auto')
      permissionPill.innerHTML = '<span>⚡ Auto-Accept Edits</span>'
    } else {
      permissionPill.setAttribute('data-mode', 'plan')
      permissionPill.innerHTML = '<span>🛡️ Plan Mode</span>'
    }
  }

  if (permissionPill) {
    permissionPill.addEventListener('click', togglePermissionMode)
  }

  // Atajo oficial: Shift + Tab alterna Plan Mode
  window.addEventListener('keydown', (ev) => {
    if (ev && ev.shiftKey && ev.key === 'Tab') {
      ev.preventDefault()
      togglePermissionMode()
    }
  })

  // Selector Chat | Code
  const btnChat = document.getElementById('cc-mode-chat')
  const btnCode = document.getElementById('cc-mode-code')
  if (btnChat && btnCode) {
    btnChat.addEventListener('click', () => {
      btnChat.classList.add('active')
      btnCode.classList.remove('active')
    })
    btnCode.addEventListener('click', () => {
      btnCode.classList.add('active')
      btnChat.classList.remove('active')
    })
  }

  // Alternador de Tema
  const themeSwitch = document.getElementById('cc-theme-switch')
  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      const current = document.documentElement ? document.documentElement.getAttribute('data-claude-theme') : 'dark'
      const next = current === 'dark' ? 'light' : 'dark'
      if (document.documentElement) {
        document.documentElement.setAttribute('data-claude-theme', next)
        document.documentElement.setAttribute('data-ds-dark-theme', next === 'dark' ? 'true' : 'false')
      }
      setStoredTheme(next)
    })
  }

  // Drawer de Live Preview
  const drawerToggle = document.getElementById('cc-drawer-toggle')
  const urlInput = document.getElementById('cc-preview-url') as HTMLInputElement | null
  const iframe = document.getElementById('cc-preview-iframe') as HTMLIFrameElement | null
  const refreshBtn = document.getElementById('cc-preview-refresh')

  if (drawerToggle && drawer) {
    drawerToggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open')
      if (document.body) {
        document.body.style.marginRight = isOpen ? '460px' : '0px'
      }
      if (isOpen && iframe && iframe.src === 'about:blank' && urlInput) {
        iframe.src = urlInput.value
      }
    })
  }

  if (refreshBtn && iframe && urlInput) {
    refreshBtn.addEventListener('click', () => {
      iframe.src = urlInput.value
    })
  }

  if (urlInput && iframe) {
    urlInput.addEventListener('keydown', (e) => {
      if (e && e.key === 'Enter') {
        iframe.src = urlInput.value
      }
    })
  }

  // 6. Función de transformación estética de la interfaz nativa DeepSeek
  const transformDeepSeekDom = () => {
    // A. Reemplazo del logo y nombre de marca en el Sidebar
    const brandMarks = document.querySelectorAll('[class*="_brandMark"], [class*="_brandIdentity"]')
    brandMarks.forEach((el) => {
      if (el.getAttribute('data-cc-skinned')) return
      el.setAttribute('data-cc-skinned', 'true')
      const svg = el.querySelector('svg, img')
      if (svg) (svg as HTMLElement).style.display = 'none'
      const star = document.createElement('span')
      star.className = 'cc-sidebar-claude-mark'
      star.textContent = '✻'
      el.prepend(star)
    })

    const brandNames = document.querySelectorAll('[class*="_brandName"]')
    brandNames.forEach((el) => {
      if (el.getAttribute('data-cc-skinned')) return
      el.setAttribute('data-cc-skinned', 'true')
      el.textContent = 'Claude Code'
      el.classList.add('cc-sidebar-claude-text')
    })

    // B. Reemplazo de la pantalla de bienvenida / Hero central (ballena y texto hacia lo desconocido)
    const heroHeadline = document.querySelectorAll('[class*="headline"], [class*="titleGroup"], [class*="Hqq-bq_"]')
    heroHeadline.forEach((container) => {
      if (container.getAttribute('data-cc-skinned')) return
      container.setAttribute('data-cc-skinned', 'true')

      const whaleIcon = container.querySelector('[class*="fish"], [class*="whale"], svg')
      if (whaleIcon) (whaleIcon as HTMLElement).style.display = 'none'

      const existingTitle = container.querySelector('h1, h2, [class*="title"]')
      if (existingTitle) {
        existingTitle.innerHTML = `
          <span class="cc-hero-claude-star">✻</span>
          <div class="cc-hero-title">Claude Code</div>
          <div class="cc-hero-subtitle">What can I help you build today?</div>
        `
      }
    })

    // C. Tarjetas de herramientas y bloques de código
    document.querySelectorAll('pre, [class*="tool"]').forEach((el) => {
      el.classList.add('cc-upgraded-tool-card')
    })
  }

  // Ejecutar transformación inicial
  transformDeepSeekDom()

  // 7. MutationObserver para mantener la transformación en vistas dinámicas
  try {
    domObserver = new MutationObserver(() => {
      transformDeepSeekDom()
    })
    if (document.body) {
      domObserver.observe(document.body, { childList: true, subtree: true })
    }
  } catch {
    // Fallback silencioso
  }
}

export function unmountClaudeDesktopUI() {
  if (domObserver) {
    try {
      domObserver.disconnect()
    } catch {}
    domObserver = null
  }
  document.getElementById('cc-desktop-styles')?.remove()
  document.getElementById('cc-desktop-fonts')?.remove()
  document.getElementById('cc-system-header')?.remove()
  document.getElementById('cc-desktop-drawer')?.remove()
  if (document.body) {
    document.body.style.marginRight = '0px'
  }
}

export default { name, apply }
