import type { CordisContext } from '../index.js'
import { CLAUDE_DESKTOP_CSS } from './styles.js'

export const name = 'dsh-claude-code-desktop-client'

let domObserver: MutationObserver | null = null

export function apply(ctx: CordisContext) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  mountClaudeDesktopUI()

  if (typeof ctx?.effect === 'function') {
    ctx.effect(() => () => unmountClaudeDesktopUI())
  }
}

export function mountClaudeDesktopUI() {
  if (document.getElementById('cc-desktop-styles')) return

  // 1. Inyectar fuentes oficiales equivalentes (Newsreader Serif + Inter + JetBrains Mono)
  const fontLink = document.createElement('link')
  fontLink.id = 'cc-desktop-fonts'
  fontLink.rel = 'stylesheet'
  fontLink.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap'
  document.head.appendChild(fontLink)

  // 2. Inyectar hoja de estilos de Claude Code Desktop
  const styleTag = document.createElement('style')
  styleTag.id = 'cc-desktop-styles'
  styleTag.textContent = CLAUDE_DESKTOP_CSS
  document.head.appendChild(styleTag)

  const savedTheme = localStorage.getItem('cc-desktop-theme') || 'dark'
  document.documentElement.setAttribute('data-claude-theme', savedTheme)

  // 3. Construir la Barra Superior de Claude Code Desktop
  const titlebar = document.createElement('header')
  titlebar.id = 'cc-desktop-titlebar'
  titlebar.innerHTML = `
    <div class="cc-nav-group">
      <div class="cc-brand-badge">
        <span class="cc-brand-icon">✻</span>
        <span>Claude Code</span>
      </div>
      <span class="cc-workspace-chip" title="Workspace activo en DeepSeek Harness">dsh · workspace</span>
    </div>

    <div class="cc-nav-group">
      <div class="cc-segmented-control" role="tablist">
        <button class="cc-seg-item" id="cc-mode-chat" type="button">Chat</button>
        <button class="cc-seg-item active" id="cc-mode-code" type="button">Code</button>
      </div>
      <button class="cc-action-pill" id="cc-permission-pill" data-mode="plan" type="button" title="Atajo: Shift + Tab para alternar">
        <span>🛡️ Plan Mode</span>
      </button>
    </div>

    <div class="cc-nav-group">
      <button class="cc-action-pill" id="cc-drawer-toggle" type="button">
        <span>⚡ App Preview</span>
      </button>
      <button class="cc-action-pill" id="cc-theme-switch" type="button" title="Alternar entre Anthropic Dark y Paper Light">
        <span>◐ Tema</span>
      </button>
    </div>
  `
  document.body.appendChild(titlebar)

  // 4. Construir el Panel Derecho de App Preview
  const drawer = document.createElement('aside')
  drawer.id = 'cc-desktop-drawer'
  drawer.innerHTML = `
    <div class="cc-drawer-toolbar">
      <span style="font-size:12px; font-weight:600; color:var(--cc-text-secondary);">Live Preview</span>
      <input class="cc-url-bar" id="cc-preview-url" type="text" value="http://localhost:3000" />
      <button class="cc-action-pill" id="cc-preview-refresh" type="button">↻</button>
    </div>
    <iframe class="cc-preview-viewport" id="cc-preview-iframe" src="about:blank"></iframe>
  `
  document.body.appendChild(drawer)

  // 5. Lógica de controles interactivos
  const permissionPill = document.getElementById('cc-permission-pill')!
  const togglePermissionMode = () => {
    const current = permissionPill.getAttribute('data-mode')
    if (current === 'plan') {
      permissionPill.setAttribute('data-mode', 'auto')
      permissionPill.innerHTML = '<span>⚡ Auto-Accept Edits</span>'
    } else {
      permissionPill.setAttribute('data-mode', 'plan')
      permissionPill.innerHTML = '<span>🛡️ Plan Mode</span>'
    }
  }
  permissionPill.addEventListener('click', togglePermissionMode)

  // Atajo oficial de Claude Code Desktop: Shift + Tab alterna Plan Mode
  window.addEventListener('keydown', (ev) => {
    if (ev.shiftKey && ev.key === 'Tab') {
      ev.preventDefault()
      togglePermissionMode()
    }
  })

  // Selector Chat | Code
  const btnChat = document.getElementById('cc-mode-chat')!
  const btnCode = document.getElementById('cc-mode-code')!
  btnChat.addEventListener('click', () => {
    btnChat.classList.add('active')
    btnCode.classList.remove('active')
  })
  btnCode.addEventListener('click', () => {
    btnCode.classList.add('active')
    btnChat.classList.remove('active')
  })

  // Selector de Tema (Warm Dark / Warm Paper)
  const themeSwitch = document.getElementById('cc-theme-switch')!
  themeSwitch.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-claude-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-claude-theme', next)
    localStorage.setItem('cc-desktop-theme', next)
  })

  // Panel de Vista Previa en Vivo
  const drawerToggle = document.getElementById('cc-drawer-toggle')!
  const urlInput = document.getElementById('cc-preview-url') as HTMLInputElement
  const iframe = document.getElementById('cc-preview-iframe') as HTMLIFrameElement
  const refreshBtn = document.getElementById('cc-preview-refresh')!

  drawerToggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open')
    document.body.style.marginRight = isOpen ? '460px' : '0px'
    if (isOpen && iframe.src === 'about:blank') {
      iframe.src = urlInput.value
    }
  })

  refreshBtn.addEventListener('click', () => {
    iframe.src = urlInput.value
  })

  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      iframe.src = urlInput.value
    }
  })

  // 6. Observer para embellecer tarjetas de herramientas generadas dinámicamente
  domObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          const toolBlocks = node.querySelectorAll('pre, [class*="tool"]')
          toolBlocks.forEach((el) => el.classList.add('cc-upgraded-tool-card'))
        }
      })
    }
  })
  domObserver.observe(document.body, { childList: true, subtree: true })
}

export function unmountClaudeDesktopUI() {
  domObserver?.disconnect()
  document.getElementById('cc-desktop-styles')?.remove()
  document.getElementById('cc-desktop-fonts')?.remove()
  document.getElementById('cc-desktop-titlebar')?.remove()
  document.getElementById('cc-desktop-drawer')?.remove()
  document.body.style.marginRight = '0px'
  document.body.style.paddingTop = '0px'
}

export default { name, apply }
