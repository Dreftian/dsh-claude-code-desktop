export const CLAUDE_DESKTOP_CSS = `
  /* ==========================================================================
     Anthropic Claude Code Desktop - Exact GUI Theme System for DeepSeek Harness
     ========================================================================== */

  :root,
  [data-ds-dark-theme="true"],
  [data-claude-theme="dark"] {
    --dsw-alias-bg-base: #191918 !important;
    --dsw-specific-sidebar-fill: #141413 !important;
    --dsw-alias-bg-layer-1: #21201E !important;
    --dsw-alias-bg-layer-2: #292825 !important;
    --dsw-alias-bg-layer-3: #2C2B28 !important;
    --dsw-alias-bg-module-platform: #191918 !important;

    --dsw-specific-input-major: #1F1E1B !important;
    --dsw-specific-selector: #292825 !important;
    --dsw-specific-bubble: #21201E !important;
    --dsw-specific-sidebar-nav-item-active: #292825 !important;
    --dsw-specific-sidebar-nav-item-hover: #21201E !important;

    --dsw-alias-brand-primary: #D97757 !important;
    --dsw-alias-brand-primary-new-colorprimary-new-color: #D97757 !important;
    --dsw-alias-button-info-fill: #D97757 !important;
    --dsw-alias-button-info-hover: #C66143 !important;
    --dsw-alias-button-primary-fill: #D97757 !important;
    --dsw-alias-button-elevated-fill: #2C2B28 !important;
    --dsw-alias-button-floating-fill: #23221F !important;
    --dsw-alias-state-business-primary: #D97757 !important;

    --dsw-alias-border-l1: #353430 !important;
    --dsw-alias-border-l2: #2D2C28 !important;
    --dsw-alias-border-l3: #282724 !important;
    --dsw-alias-border-l4: #201F1D !important;

    --dsw-alias-label-primary: #F4F3EE !important;
    --dsw-alias-label-secondary: #A8A6A0 !important;
    --dsw-alias-label-tertiary: #787670 !important;
    --dsw-alias-label-caption: #605E59 !important;

    --dsw-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    --ds-font-family-code: 'JetBrains Mono', 'Fira Code', monospace !important;

    --cc-bg-app: #191918;
    --cc-bg-sidebar: #141413;
    --cc-bg-surface: #21201E;
    --cc-bg-surface-hover: #292825;
    --cc-bg-elevated: #2C2B28;
    --cc-bg-composer: #1F1E1B;
    --cc-border: #33322E;
    --cc-border-subtle: #282724;
    --cc-text-primary: #FAF9F5;
    --cc-text-secondary: #A8A6A0;
    --cc-text-muted: #7E7C75;
    --cc-accent: #D97757;
    --cc-accent-hover: #C66143;
    --cc-accent-soft: rgba(217, 119, 87, 0.14);
    --cc-plan-bg: rgba(217, 119, 87, 0.12);
    --cc-plan-border: rgba(217, 119, 87, 0.45);
    --cc-auto-bg: rgba(74, 222, 128, 0.12);
    --cc-auto-border: rgba(74, 222, 128, 0.4);
    --cc-auto-text: #4ADE80;
    --cc-shadow-composer: 0 8px 30px rgba(0, 0, 0, 0.45);
    --cc-shadow-card: 0 4px 14px rgba(0, 0, 0, 0.22);
  }

  [data-claude-theme="light"],
  [data-ds-dark-theme="false"] {
    --dsw-alias-bg-base: #FAF9F5 !important;
    --dsw-specific-sidebar-fill: #F0EEE6 !important;
    --dsw-alias-bg-layer-1: #F3F1E9 !important;
    --dsw-alias-bg-layer-2: #EAE7DD !important;
    --dsw-alias-bg-layer-3: #FFFFFF !important;
    --dsw-alias-bg-module-platform: #FAF9F5 !important;

    --dsw-specific-input-major: #FFFFFF !important;
    --dsw-specific-selector: #EAE7DD !important;
    --dsw-specific-bubble: #F3F1E9 !important;
    --dsw-specific-sidebar-nav-item-active: #EAE7DD !important;
    --dsw-specific-sidebar-nav-item-hover: #F3F1E9 !important;

    --dsw-alias-brand-primary: #D97757 !important;
    --dsw-alias-brand-primary-new-colorprimary-new-color: #D97757 !important;
    --dsw-alias-button-info-fill: #D97757 !important;
    --dsw-alias-button-info-hover: #C25E40 !important;
    --dsw-alias-button-primary-fill: #D97757 !important;
    --dsw-alias-button-elevated-fill: #FFFFFF !important;
    --dsw-alias-button-floating-fill: #FFFFFF !important;
    --dsw-alias-state-business-primary: #D97757 !important;

    --dsw-alias-border-l1: #E2DFD6 !important;
    --dsw-alias-border-l2: #EAE7DF !important;
    --dsw-alias-border-l3: #EFECE5 !important;
    --dsw-alias-border-l4: #F5F3EC !important;

    --dsw-alias-label-primary: #141413 !important;
    --dsw-alias-label-secondary: #5C5B57 !important;
    --dsw-alias-label-tertiary: #8C8A84 !important;
    --dsw-alias-label-caption: #A3A19B !important;

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
    --cc-shadow-composer: 0 8px 24px rgba(0, 0, 0, 0.08);
    --cc-shadow-card: 0 2px 10px rgba(20, 20, 19, 0.05);
  }

  /* ==========================================================================
     Layout Reset & Removal of Outer Enclosing Boxes
     ========================================================================== */

  html, body, #root, #app, main {
    background-color: var(--cc-bg-app) !important;
    color: var(--cc-text-primary) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    padding-top: 0 !important;
    transition: margin-right 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Strip away DeepSeek's hero enclosing card */
  .Hqq-bq_root,
  .Hqq-bq_stack,
  .RlGAzG_hero,
  [class*="Hqq-bq_root"],
  [class*="Hqq-bq_stack"],
  [class*="RlGAzG_hero"] {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Hide DeepSeek workspace selector dropdowns and fish mascot */
  .Hqq-bq_body,
  .Hqq-bq_fishHitbox,
  .Hqq-bq_fish,
  [class*="Hqq-bq_body"],
  [class*="Hqq-bq_fishHitbox"],
  [class*="Hqq-bq_fish"],
  [class*="fishHitbox"],
  [class*="whale"] {
    display: none !important;
  }

  /* Hide native menu bars (Application, Edit, etc.) in the titlebar */
  [class*="menuBar"],
  [class*="windowMenu"] {
    display: none !important;
  }

  aside, nav, [class*="sidebar"], [class*="Sidebar"] {
    background-color: var(--cc-bg-sidebar) !important;
    border-right: 1px solid var(--cc-border-subtle) !important;
  }

  /* ==========================================================================
     Single Centered Editorial Hero
     ========================================================================== */

  .Hqq-bq_headline,
  [class*="Hqq-bq_headline"] {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 14px !important;
    margin-bottom: 30px !important;
    background: transparent !important;
    border: none !important;
  }

  .cc-hero-claude-star {
    font-size: 38px !important;
    color: var(--cc-accent) !important;
    line-height: 1 !important;
    font-weight: 700 !important;
    display: inline-block !important;
  }

  .cc-hero-title-text {
    font-family: 'Newsreader', Georgia, 'Times New Roman', serif !important;
    font-size: 38px !important;
    font-weight: 400 !important;
    color: var(--cc-text-primary) !important;
    line-height: 1.2 !important;
    letter-spacing: -0.02em !important;
    display: inline-block !important;
  }

  /* Editorial Serif Typography for Assistant Messages */
  [class*="markdown"] p,
  [class*="message"] [class*="markdown"] p,
  [class*="assistant"] p,
  article p,
  .cc-editorial-text {
    font-family: 'Newsreader', Georgia, 'Times New Roman', serif !important;
    font-size: 1.075rem !important;
    line-height: 1.72 !important;
    letter-spacing: -0.005em !important;
    color: var(--cc-text-primary) !important;
  }

  pre, code, [class*="code"], [class*="tool"], [class*="Tool"] {
    font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
  }

  pre, [class*="tool-call"], [class*="ToolCall"], .cc-upgraded-tool-card {
    background-color: var(--cc-bg-surface) !important;
    border: 1px solid var(--cc-border) !important;
    border-radius: 12px !important;
    box-shadow: var(--cc-shadow-card) !important;
    padding: 12px 16px !important;
    margin: 10px 0 !important;
    transition: border-color 0.15s ease, background-color 0.15s ease !important;
  }

  pre:hover, [class*="tool-call"]:hover, .cc-upgraded-tool-card:hover {
    border-color: var(--cc-accent) !important;
  }

  /* ==========================================================================
     Floating Capsule Prompt Composer
     ========================================================================== */

  [class*="RlGAzG_card"] {
    max-width: 720px !important;
    width: 100% !important;
    margin: 0 auto !important;
    background-color: var(--cc-bg-composer) !important;
    border: 1px solid var(--cc-border) !important;
    border-radius: 16px !important;
    box-shadow: var(--cc-shadow-composer) !important;
    transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
  }

  [class*="RlGAzG_card"]:focus-within {
    border-color: var(--cc-accent) !important;
    box-shadow: 0 0 0 2px var(--cc-accent-soft), var(--cc-shadow-composer) !important;
  }

  [class*="RlGAzG_card"] textarea::placeholder,
  [class*="RlGAzG_input"]::placeholder {
    color: var(--cc-text-muted) !important;
    font-size: 15px !important;
  }

  [class*="RlGAzG_primary"],
  button[type="submit"]:not(#cc-preview-refresh) {
    background-color: var(--cc-accent) !important;
    color: #FFFFFF !important;
    border-radius: 10px !important;
    border: none !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: background-color 0.15s ease, transform 0.1s ease !important;
  }

  [class*="RlGAzG_primary"]:hover,
  button[type="submit"]:hover {
    background-color: var(--cc-accent-hover) !important;
    transform: translateY(-1px) !important;
  }

  /* ==========================================================================
     Action Pills Under Composer (Programar, Crear, Aprender, Escribir, Vida diaria)
     ========================================================================== */

  #cc-action-pills-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 18px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  .cc-hero-pill {
    border-radius: 999px;
    background: #21201E;
    border: 1px solid #2F2E2A;
    color: #C5C3BC;
    font-size: 13px;
    font-weight: 500;
    padding: 7px 16px;
    cursor: pointer;
    transition: all 0.15s ease;
    user-select: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  [data-claude-theme="light"] .cc-hero-pill {
    background: #F0EEE6;
    border: 1px solid #E2DFD6;
    color: #5C5B57;
  }

  .cc-hero-pill:hover {
    background: #2C2B27;
    border-color: #D97757;
    color: #FAF9F5;
    transform: translateY(-1px);
  }

  [data-claude-theme="light"] .cc-hero-pill:hover {
    background: #EAE7DD;
    border-color: #D97757;
    color: #141413;
  }

  /* ==========================================================================
     Sidebar & Brand Styling
     ========================================================================== */

  .cc-sidebar-claude-mark {
    color: var(--cc-accent) !important;
    font-size: 22px !important;
    line-height: 1 !important;
    display: inline-flex !important;
    align-items: center !important;
    font-weight: 700 !important;
    margin-right: 8px !important;
  }

  .cc-sidebar-claude-text {
    font-weight: 600 !important;
    font-size: 16px !important;
    color: var(--cc-text-primary) !important;
    letter-spacing: -0.01em !important;
  }

  [class*="_newSession"] {
    background-color: var(--cc-bg-surface) !important;
    border: 1px solid var(--cc-border) !important;
    border-radius: 8px !important;
    color: var(--cc-text-primary) !important;
    font-weight: 500 !important;
  }

  [class*="_newSession"]:hover {
    background-color: var(--cc-bg-surface-hover) !important;
    border-color: var(--cc-accent) !important;
  }

  /* ==========================================================================
     System-Level Integrated Header (Matching Claude Desktop Image 2)
     ========================================================================== */

  #cc-system-header {
    position: fixed;
    top: 0;
    left: 18px;
    right: 140px;
    height: 38px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
    -webkit-app-region: drag;
    user-select: none;
    font-family: 'Inter', sans-serif;
  }

  .cc-header-inner {
    display: flex;
    align-items: center;
    gap: 8px;
    pointer-events: auto;
    -webkit-app-region: no-drag;
  }

  .cc-nav-icon-btn {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: var(--cc-text-secondary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .cc-nav-icon-btn:hover {
    background-color: var(--cc-bg-surface-hover);
    color: var(--cc-text-primary);
  }

  .cc-segmented-control {
    display: flex;
    background-color: var(--cc-bg-surface);
    border: 1px solid var(--cc-border);
    border-radius: 8px;
    padding: 2px;
    gap: 2px;
  }

  .cc-seg-item {
    padding: 2px 12px;
    font-size: 11.5px;
    font-weight: 500;
    border-radius: 6px;
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

  .cc-action-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11.5px;
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

  /* Slide-out App Preview Drawer */
  #cc-desktop-drawer {
    position: fixed;
    top: 38px;
    right: 0;
    bottom: 0;
    width: 460px;
    background-color: var(--cc-bg-sidebar);
    border-left: 1px solid var(--cc-border);
    z-index: 9998;
    display: none;
    flex-direction: column;
    box-shadow: var(--cc-shadow-composer);
  }

  #cc-desktop-drawer.open {
    display: flex;
  }

  .cc-drawer-toolbar {
    padding: 8px 12px;
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
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 11.5px;
    font-family: 'JetBrains Mono', monospace;
  }

  .cc-preview-viewport {
    flex: 1;
    width: 100%;
    border: none;
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--cc-border);
    border-radius: 999px;
  }
`;
