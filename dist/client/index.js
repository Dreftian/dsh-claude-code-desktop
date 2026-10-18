(function () {
  function factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    var CLAUDE_DESKTOP_CSS = `
  :root, [data-claude-theme="dark"] {
    --cc-bg-app: #191918;
    --cc-bg-sidebar: #141413;
    --cc-bg-surface: #21201E;
    --cc-bg-surface-hover: #292825;
    --cc-bg-elevated: #2C2B28;
    --cc-bg-composer: #23221F;
    --cc-border: #353430;
    --cc-border-subtle: #282724;
    --cc-text-primary: #F4F3EE;
    --cc-text-secondary: #A8A6A0;
    --cc-text-muted: #787670;
    --cc-accent: #D97757;
    --cc-accent-hover: #C66143;
    --cc-accent-soft: rgba(217, 119, 87, 0.14);
    --cc-plan-bg: rgba(217, 119, 87, 0.12);
    --cc-plan-border: rgba(217, 119, 87, 0.45);
    --cc-auto-bg: rgba(74, 222, 128, 0.12);
    --cc-auto-border: rgba(74, 222, 128, 0.4);
    --cc-auto-text: #4ADE80;
    --cc-shadow-composer: 0 12px 32px -6px rgba(0, 0, 0, 0.55), 0 2px 8px rgba(0, 0, 0, 0.3);
    --cc-shadow-card: 0 4px 14px rgba(0, 0, 0, 0.22);
  }

  [data-claude-theme="light"] {
    --cc-bg-app: #FAF9F5;
    --cc-bg-sidebar: #F0EEE6;
    --cc-bg-surface: #F3F1E9;
    --cc-bg-surface-hover: #EAE7DD;
    --cc-bg-elevated: #FFFFFF;
    --cc-bg-composer: #FFFFFF;
    --cc-border: #E2DFD6;
    --cc-border-subtle: #EAE7DF;
    --cc-text-primary: #141413;
    --cc-text-secondary: #5C5B57;
    --cc-text-muted: #8C8A84;
    --cc-accent: #D97757;
    --cc-accent-hover: #C25E40;
    --cc-accent-soft: rgba(217, 119, 87, 0.12);
    --cc-plan-bg: rgba(217, 119, 87, 0.1);
    --cc-plan-border: rgba(217, 119, 87, 0.4);
    --cc-auto-bg: rgba(22, 163, 74, 0.1);
    --cc-auto-border: rgba(22, 163, 74, 0.35);
    --cc-auto-text: #16A34A;
    --cc-shadow-composer: 0 10px 28px -6px rgba(20, 20, 19, 0.09), 0 2px 6px rgba(20, 20, 19, 0.04);
    --cc-shadow-card: 0 2px 10px rgba(20, 20, 19, 0.05);
  }

  /* Base Desktop Application Reset */
  html, body, #root, #app, main {
    background-color: var(--cc-bg-app) !important;
    color: var(--cc-text-primary) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    padding-top: 48px !important;
    transition: background-color 0.2s ease, color 0.2s ease, margin-right 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Sidebar estilo Claude Desktop */
  aside, nav, [class*="sidebar"], [class*="Sidebar"] {
    background-color: var(--cc-bg-sidebar) !important;
    border-right: 1px solid var(--cc-border-subtle) !important;
    color: var(--cc-text-secondary) !important;
  }

  /* Tipografía Editorial de Claude para mensajes del asistente */
  [class*="markdown"] p,
  [class*="message"] p,
  [class*="assistant"] p,
  article p {
    font-family: 'Newsreader', Georgia, 'Times New Roman', serif !important;
    font-size: 1.065rem !important;
    line-height: 1.68 !important;
    letter-spacing: -0.004em !important;
    color: var(--cc-text-primary) !important;
  }

  /* Tarjetas gráficas para llamadas a herramientas y bloques de código (NO aspecto CLI) */
  pre, code, [class*="code"], [class*="tool"], [class*="Tool"] {
    font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
  }

  pre, [class*="tool-call"], [class*="ToolCall"], .cc-upgraded-tool-card {
    background-color: var(--cc-bg-surface) !important;
    border: 1px solid var(--cc-border) !important;
    border-radius: 14px !important;
    box-shadow: var(--cc-shadow-card) !important;
    padding: 12px 16px !important;
    margin: 10px 0 !important;
    transition: border-color 0.15s ease, background-color 0.15s ease !important;
  }

  pre:hover, [class*="tool-call"]:hover, .cc-upgraded-tool-card:hover {
    border-color: var(--cc-accent) !important;
  }

  /* Cajón de Prompt Flotante de Claude Code Desktop */
  textarea, [class*="composer"], [class*="input-container"], form {
    background-color: var(--cc-bg-composer) !important;
    border: 1px solid var(--cc-border) !important;
    color: var(--cc-text-primary) !important;
    border-radius: 18px !important;
    box-shadow: var(--cc-shadow-composer) !important;
    transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
  }

  textarea:focus, [class*="composer"]:focus-within, form:focus-within {
    border-color: var(--cc-accent) !important;
    box-shadow: 0 0 0 2px var(--cc-accent-soft), var(--cc-shadow-composer) !important;
    outline: none !important;
  }

  /* Botón de envío Terracota */
  button[type="submit"], [class*="send-btn"], [class*="submit"] {
    background-color: var(--cc-accent) !important;
    color: #FFFFFF !important;
    border-radius: 10px !important;
    border: none !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: background-color 0.15s ease, transform 0.1s ease !important;
  }

  button[type="submit"]:hover, [class*="send-btn"]:hover {
    background-color: var(--cc-accent-hover) !important;
    transform: translateY(-1px) !important;
  }

  /* Barra Superior Nativa de Claude Code Desktop */
  #cc-desktop-titlebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    background-color: var(--cc-bg-sidebar);
    border-bottom: 1px solid var(--cc-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    z-index: 99999;
    user-select: none;
    font-family: 'Inter', sans-serif;
  }

  .cc-nav-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cc-brand-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 13.5px;
    color: var(--cc-text-primary);
  }

  .cc-brand-icon {
    color: var(--cc-accent);
    font-size: 17px;
    line-height: 1;
  }

  .cc-workspace-chip {
    font-size: 11.5px;
    color: var(--cc-text-secondary);
    background-color: var(--cc-bg-surface);
    border: 1px solid var(--cc-border);
    padding: 3px 9px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Selector Segmentado Chat | Code */
  .cc-segmented-control {
    display: flex;
    background-color: var(--cc-bg-surface);
    border: 1px solid var(--cc-border);
    border-radius: 10px;
    padding: 2px;
    gap: 2px;
  }

  .cc-seg-item {
    padding: 4px 16px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 7px;
    border: none;
    background: transparent;
    color: var(--cc-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .cc-seg-item.active {
    background-color: var(--cc-bg-elevated);
    color: var(--cc-text-primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  /* Píldoras Interactivas de Estado y Permisos */
  .cc-action-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--cc-border);
    background-color: var(--cc-bg-surface);
    color: var(--cc-text-primary);
    transition: all 0.15s ease;
  }

  .cc-action-pill:hover {
    background-color: var(--cc-bg-surface-hover);
  }

  .cc-action-pill[data-mode="plan"] {
    background-color: var(--cc-plan-bg);
    border-color: var(--cc-plan-border);
    color: var(--cc-accent);
  }

  .cc-action-pill[data-mode="auto"] {
    background-color: var(--cc-auto-bg);
    border-color: var(--cc-auto-border);
    color: var(--cc-auto-text);
  }

  /* Panel Derecho Deslizable de Live App Preview & Diff Inspector */
  #cc-desktop-drawer {
    position: fixed;
    top: 48px;
    right: 0;
    bottom: 0;
    width: 460px;
    background-color: var(--cc-bg-sidebar);
    border-left: 1px solid var(--cc-border);
    z-index: 99998;
    display: none;
    flex-direction: column;
    box-shadow: var(--cc-shadow-composer);
  }

  #cc-desktop-drawer.open {
    display: flex;
  }

  .cc-drawer-toolbar {
    padding: 10px 14px;
    border-bottom: 1px solid var(--cc-border);
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--cc-bg-surface);
  }

  .cc-url-bar {
    flex: 1;
    background-color: var(--cc-bg-composer);
    border: 1px solid var(--cc-border);
    color: var(--cc-text-primary);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
  }

  .cc-preview-viewport {
    flex: 1;
    width: 100%;
    border: none;
    background-color: #FFFFFF;
  }

  /* Scrollbars sutiles estilo macOS / Claude Desktop */
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--cc-border);
    border-radius: 999px;
  }
`;

    var domObserver = null;

    function getStoredTheme() {
      try {
        return localStorage.getItem('cc-desktop-theme') || 'dark';
      } catch (e) {
        return 'dark';
      }
    }

    function setStoredTheme(theme) {
      try {
        localStorage.setItem('cc-desktop-theme', theme);
      } catch (e) {
        // Safe fallback in restricted environments
      }
    }

    function apply(ctx) {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      mountClaudeDesktopUI();
      if (typeof ctx?.effect === 'function') {
        ctx.effect(function () {
          return function () {
            unmountClaudeDesktopUI();
          };
        });
      }
    }

    function mountClaudeDesktopUI() {
      if (typeof document === 'undefined') return;

      if (!document.body) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', mountClaudeDesktopUI);
        } else {
          setTimeout(mountClaudeDesktopUI, 40);
        }
        return;
      }

      if (document.getElementById('cc-desktop-styles')) return;

      var fontLink = document.createElement('link');
      fontLink.id = 'cc-desktop-fonts';
      fontLink.rel = 'stylesheet';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap';
      if (document.head) {
        document.head.appendChild(fontLink);
      }

      var styleTag = document.createElement('style');
      styleTag.id = 'cc-desktop-styles';
      styleTag.textContent = CLAUDE_DESKTOP_CSS;
      if (document.head) {
        document.head.appendChild(styleTag);
      }

      var savedTheme = getStoredTheme();
      if (document.documentElement) {
        document.documentElement.setAttribute('data-claude-theme', savedTheme);
      }

      var titlebar = document.createElement('header');
      titlebar.id = 'cc-desktop-titlebar';
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
      `;
      document.body.appendChild(titlebar);

      var drawer = document.createElement('aside');
      drawer.id = 'cc-desktop-drawer';
      drawer.innerHTML = `
        <div class="cc-drawer-toolbar">
          <span style="font-size:12px; font-weight:600; color:var(--cc-text-secondary);">Live Preview</span>
          <input class="cc-url-bar" id="cc-preview-url" type="text" value="http://localhost:3000" />
          <button class="cc-action-pill" id="cc-preview-refresh" type="button">↻</button>
        </div>
        <iframe class="cc-preview-viewport" id="cc-preview-iframe" src="about:blank"></iframe>
      `;
      document.body.appendChild(drawer);

      var permissionPill = document.getElementById('cc-permission-pill');
      var togglePermissionMode = function () {
        if (!permissionPill) return;
        var current = permissionPill.getAttribute('data-mode');
        if (current === 'plan') {
          permissionPill.setAttribute('data-mode', 'auto');
          permissionPill.innerHTML = '<span>⚡ Auto-Accept Edits</span>';
        } else {
          permissionPill.setAttribute('data-mode', 'plan');
          permissionPill.innerHTML = '<span>🛡️ Plan Mode</span>';
        }
      };
      if (permissionPill) {
        permissionPill.addEventListener('click', togglePermissionMode);
      }

      window.addEventListener('keydown', function (ev) {
        if (ev && ev.shiftKey && ev.key === 'Tab') {
          ev.preventDefault();
          togglePermissionMode();
        }
      });

      var btnChat = document.getElementById('cc-mode-chat');
      var btnCode = document.getElementById('cc-mode-code');
      if (btnChat && btnCode) {
        btnChat.addEventListener('click', function () {
          btnChat.classList.add('active');
          btnCode.classList.remove('active');
        });
        btnCode.addEventListener('click', function () {
          btnCode.classList.add('active');
          btnChat.classList.remove('active');
        });
      }

      var themeSwitch = document.getElementById('cc-theme-switch');
      if (themeSwitch) {
        themeSwitch.addEventListener('click', function () {
          var current = document.documentElement ? document.documentElement.getAttribute('data-claude-theme') : 'dark';
          var next = current === 'dark' ? 'light' : 'dark';
          if (document.documentElement) {
            document.documentElement.setAttribute('data-claude-theme', next);
          }
          setStoredTheme(next);
        });
      }

      var drawerToggle = document.getElementById('cc-drawer-toggle');
      var urlInput = document.getElementById('cc-preview-url');
      var iframe = document.getElementById('cc-preview-iframe');
      var refreshBtn = document.getElementById('cc-preview-refresh');

      if (drawerToggle && drawer) {
        drawerToggle.addEventListener('click', function () {
          var isOpen = drawer.classList.toggle('open');
          if (document.body) {
            document.body.style.marginRight = isOpen ? '460px' : '0px';
          }
          if (isOpen && iframe && iframe.src === 'about:blank' && urlInput) {
            iframe.src = urlInput.value;
          }
        });
      }

      if (refreshBtn && iframe && urlInput) {
        refreshBtn.addEventListener('click', function () {
          iframe.src = urlInput.value;
        });
      }

      if (urlInput && iframe) {
        urlInput.addEventListener('keydown', function (e) {
          if (e && e.key === 'Enter') {
            iframe.src = urlInput.value;
          }
        });
      }

      try {
        domObserver = new MutationObserver(function (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            var m = mutations[i];
            if (!m || !m.addedNodes) continue;
            for (var j = 0; j < m.addedNodes.length; j++) {
              var node = m.addedNodes[j];
              if (node && node.nodeType === 1 && typeof node.querySelectorAll === 'function') {
                var toolBlocks = node.querySelectorAll('pre, [class*="tool"]');
                for (var k = 0; k < toolBlocks.length; k++) {
                  toolBlocks[k].classList.add('cc-upgraded-tool-card');
                }
              }
            }
          }
        });
        if (document.body) {
          domObserver.observe(document.body, { childList: true, subtree: true });
        }
      } catch (err) {
        // MutationObserver fallback
      }
    }

    function unmountClaudeDesktopUI() {
      if (domObserver) {
        try {
          domObserver.disconnect();
        } catch (e) {}
        domObserver = null;
      }
      var s = document.getElementById('cc-desktop-styles');
      if (s) s.remove();
      var f = document.getElementById('cc-desktop-fonts');
      if (f) f.remove();
      var t = document.getElementById('cc-desktop-titlebar');
      if (t) t.remove();
      var d = document.getElementById('cc-desktop-drawer');
      if (d) d.remove();
      if (document.body) {
        document.body.style.marginRight = '0px';
        document.body.style.paddingTop = '0px';
      }
    }

    exports.name = 'dsh-claude-code-desktop-client';
    exports.apply = apply;
    exports.mountClaudeDesktopUI = mountClaudeDesktopUI;
    exports.unmountClaudeDesktopUI = unmountClaudeDesktopUI;
    exports.default = { name: exports.name, apply: apply };
    return module.exports;
  }

  if (typeof window !== 'undefined' && window.__ModuleLoader__ && typeof window.__ModuleLoader__.load === 'function') {
    window.__ModuleLoader__.load({
      id: 'dsh-claude-code-desktop',
      factory: factory
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(typeof require === 'function' ? require : null);
  } else if (typeof window !== 'undefined') {
    window.dshClaudeCodeDesktopClient = factory();
  }
})();
