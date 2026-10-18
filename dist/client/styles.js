export const CLAUDE_DESKTOP_CSS = `
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
