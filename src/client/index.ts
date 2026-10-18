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

  // 1. Inyectar fuentes oficiales
  if (!document.getElementById('cc-desktop-fonts') && document.head) {
    const fontLink = document.createElement('link')
    fontLink.id = 'cc-desktop-fonts'
    fontLink.rel = 'stylesheet'
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap'
    document.head.appendChild(fontLink)
  }

  // 2. Inyectar estilos del sistema
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

  // 3. Montar barra de controles en el área de título de Windows
  const header = document.createElement('header')
  header.id = 'cc-system-header'
  header.innerHTML = `
    <div class="cc-header-inner">
      <button class="cc-nav-icon-btn" id="cc-btn-menu" type="button" title="Alternar barra lateral">≡</button>
      <button class="cc-nav-icon-btn" id="cc-btn-split" type="button" title="Vista de paneles">◫</button>
      <button class="cc-nav-icon-btn" id="cc-btn-back" type="button" title="Atrás">←</button>
      <button class="cc-nav-icon-btn" id="cc-btn-forward" type="button" title="Adelante">→</button>
      <div class="cc-segmented-control" role="tablist">
        <button class="cc-seg-item active" id="cc-mode-chat" type="button">💬 Chat</button>
        <button class="cc-seg-item" id="cc-mode-code" type="button">&lt;/&gt; Code</button>
      </div>
    </div>

    <div class="cc-header-inner">
      <button class="cc-action-pill" id="cc-plan-upgrade" type="button" style="color:var(--cc-accent); font-weight:600;">
        <span>Plan Free · Actualizar</span>
      </button>
      <button class="cc-action-pill" id="cc-permission-pill" data-mode="plan" type="button" title="Atajo: Shift + Tab para alternar">
        <span>🛡️ Plan Mode</span>
      </button>
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

  // 6. Transformación del DOM de DeepSeek Harness para coincidir 1:1 con Claude Desktop GUI
  const transformDeepSeekDom = () => {
    // A. Sidebar Brand: reemplaza el logo de ballena por la estrella ✻ y Claude
    const brandIdentities = document.querySelectorAll('[class*="_brandIdentity"], [class*="_brandMark"]')
    brandIdentities.forEach((el) => {
      if (el.getAttribute('data-cc-skinned')) return
      el.setAttribute('data-cc-skinned', 'true')
      el.innerHTML = '<span class="cc-sidebar-claude-mark">✻</span><span class="cc-sidebar-claude-text">Claude</span>'
    })

    const brandNames = document.querySelectorAll('[class*="_brandName"]')
    brandNames.forEach((el) => {
      if (el.getAttribute('data-cc-skinned')) return
      el.setAttribute('data-cc-skinned', 'true')
      el.textContent = 'Claude'
      el.classList.add('cc-sidebar-claude-text')
    })

    // Botón _newSession a "+ Nuevo"
    const newSessionBtns = document.querySelectorAll('[class*="_newSession"]')
    newSessionBtns.forEach((btn) => {
      if (btn.getAttribute('data-cc-skinned')) return
      btn.setAttribute('data-cc-skinned', 'true')
      for (let i = 0; i < btn.childNodes.length; i++) {
        const node = btn.childNodes[i]
        if (node.nodeType === 3 && node.textContent && node.textContent.trim()) {
          node.textContent = ' + Nuevo'
        }
      }
    })

    // B. Hero Headline: Fila única centrada: ✻ ¿Hora de café y Claude?
    const headlines = document.querySelectorAll('[class*="Hqq-bq_headline"], [class*="headline"]')
    headlines.forEach((hl) => {
      if (hl.getAttribute('data-cc-skinned')) return
      hl.setAttribute('data-cc-skinned', 'true')
      hl.innerHTML =
        '<span class="cc-hero-claude-star">✻</span><span class="cc-hero-title-text">¿Hora de café y Claude?</span>'
    })

    // C. Píldoras de acción rápida debajo del cajón de composer
    const composerCards = document.querySelectorAll('[class*="RlGAzG_card"]')
    composerCards.forEach((card) => {
      if (card.nextElementSibling && card.nextElementSibling.id === 'cc-action-pills-row') return
      document.getElementById('cc-action-pills-row')?.remove()

      const pillsRow = document.createElement('div')
      pillsRow.id = 'cc-action-pills-row'
      pillsRow.innerHTML = `
        <button class="cc-hero-pill" type="button" data-prompt="Ayúdame a programar: "><span>&lt;/&gt;</span><span>Programar</span></button>
        <button class="cc-hero-pill" type="button" data-prompt="Ayúdame a crear: "><span>🎨</span><span>Crear</span></button>
        <button class="cc-hero-pill" type="button" data-prompt="Quiero aprender sobre: "><span>🎓</span><span>Aprender</span></button>
        <button class="cc-hero-pill" type="button" data-prompt="Ayúdame a redactar: "><span>✏️</span><span>Escribir</span></button>
        <button class="cc-hero-pill" type="button" data-prompt="Consejos para mi vida diaria: "><span>☕</span><span>Vida diaria</span></button>
      `

      pillsRow.querySelectorAll('.cc-hero-pill').forEach((pill) => {
        pill.addEventListener('click', () => {
          const prompt = pill.getAttribute('data-prompt') || ''
          const textarea = document.querySelector('[class*="RlGAzG_card"] textarea, textarea') as HTMLTextAreaElement | null
          if (textarea) {
            textarea.value = prompt
            textarea.focus()
            textarea.dispatchEvent(new Event('input', { bubbles: true }))
          }
        })
      })

      card.insertAdjacentElement('afterend', pillsRow)
    })

    // D. Placeholder del Composer
    const textareas = document.querySelectorAll('[class*="RlGAzG_card"] textarea, textarea')
    textareas.forEach((ta) => {
      const input = ta as HTMLTextAreaElement
      if (input.placeholder && input.placeholder !== '¿Cómo puedo ayudarte hoy?') {
        input.placeholder = '¿Cómo puedo ayudarte hoy?'
      }
    })

    // E. Tarjetas de herramientas y bloques de código
    document.querySelectorAll('pre, [class*="tool"]').forEach((el) => {
      el.classList.add('cc-upgraded-tool-card')
    })
  }

  // Ejecutar transformación inicial
  transformDeepSeekDom()

  // 7. Observer continuo
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
  document.getElementById('cc-action-pills-row')?.remove()
  if (document.body) {
    document.body.style.marginRight = '0px'
  }
}

export default { name, apply }
