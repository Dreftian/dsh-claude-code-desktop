export const CLAUDE_DESKTOP_CSS = `
  /* ==========================================================================
     Anthropic Claude Code Desktop - System-Level Theme Tokens for DeepSeek Harness
     ========================================================================== */

  :root,
  [data-ds-dark-theme="true"],
  [data-claude-theme="dark"] {
    /* DeepSeek Harness Platform Overrides (Anthropic Warm Dark) */
    --dsw-alias-bg-base: #191918 !important;
    --dsw-specific-sidebar-fill: #141413 !important;
    --dsw-alias-bg-layer-1: #21201E !important;
    --dsw-alias-bg-layer-2: #292825 !important;
    --dsw-alias-bg-layer-3: #2C2B28 !important;
    --dsw-alias-bg-module-platform: #191918 !important;

    --dsw-specific-input-major: #23221F !important;
    --dsw-specific-selector: #292825 !important;
    --dsw-specific-bubble: #21201E !important;
    --dsw-specific-sidebar-nav-item-active: #292825 !important;
    --dsw-specific-sidebar-nav-item-hover: #21201E !important;

    /* Terracotta Brand & Action Accents */
    --dsw-alias-brand-primary: #D97757 !important;
    --dsw-alias-brand-primary-new-colorprimary-new-color: #D97757 !important;
    --dsw-alias-button-info-fill: #D97757 !important;
    --dsw-alias-button-info-hover: #C66143 !important;
    --dsw-alias-button-primary-fill: #D97757 !important;
    --dsw-alias-button-elevated-fill: #2C2B28 !important;
    --dsw-alias-button-floating-fill: #23221F !important;
    --dsw-alias-state-business-primary: #D97757 !important;

    /* Borders & Dividers */
    --dsw-alias-border-l1: #353430 !important;
    --dsw-alias-border-l2: #2D2C28 !important;
    --dsw-alias-border-l3: #282724 !important;
    --dsw-alias-border-l4: #201F1D !important;

    /* Typography & Contrast */
    --dsw-alias-label-primary: #F4F3EE !important;
    --dsw-alias-label-secondary: #A8A6A0 !important;
    --dsw-alias-label-tertiary: #787670 !important;
    --dsw-alias-label-caption: #605E59 !important;

    --dsw-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    --ds-font-family-code: 'JetBrains Mono', 'Fira Code', monospace !important;

    /* Claude Desktop Specific Custom Variables */
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

  [data-claude-theme="light"],
  [data-ds-dark-theme="false"] {
    /* DeepSeek Harness Platform Overrides (Anthropic Warm Paper) */
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
    --cc-shadow-composer: 0 10px 28px -6px rgba(20, 20, 19, 0.09), 0 2px 6px rgba(20, 20, 19, 0.04);
    --cc-shadow-card: 0 2px 10px rgba(20, 20, 19, 0.05);
  }

  /* ==========================================================================
     Application-wide Styling & Window Integration
     ========================================================================== */

  html, body, #root, #app, main {
    background-color: var(--cc-bg-app) !important;
    color: var(--cc-text-primary) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }

  /* DO NOT set body padding-top! Use native titlebar clearance instead */
  body {
    padding-top: 0 !important;
    transition: margin-right 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Sidebar styling */
  aside, nav, [class*="sidebar"], [class*="Sidebar"] {
    background-color: var(--cc-bg-sidebar) !important;
    border-right: 1px solid var(--cc-border-subtle) !important;
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

  /* Monospace for Code Blocks and Tools */
  pre, code, [class*="code"], [class*="tool"], [class*="Tool"] {
    font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
  }

  /* Elevated Tool Call Cards */
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

  /* Floating Capsule Prompt Composer */
  [class*="RlGAzG_card"],
  [class*="composer"],
  div[class*="card"]:has(textarea) {
    background-color: var(--cc-bg-composer) !important;
    border: 1px solid var(--cc-border) !important;
    border-radius: 20px !important;
    box-shadow: var(--cc-shadow-composer) !important;
    transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
  }

  [class*="RlGAzG_card"]:focus-within,
  [class*="composer"]:focus-within,
  div[class*="card"]:has(textarea:focus) {
    border-color: var(--cc-accent) !important;
    box-shadow: 0 0 0 2px var(--cc-accent-soft), var(--cc-shadow-composer) !important;
  }

  /* Terracotta Send Button */
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
     System-Level Integrated Titlebar Header
     Placed in the titlebar area (left: 230px, right: 140px)
     Leaving Windows native window buttons completely unobstructed.
     ========================================================================== */

  #cc-system-header {
    position: fixed;
    top: 0;
    left: 230px;
    right: 140px;
    height: 38px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    pointer-events: none;
    -webkit-app-region: drag;
    user-select: none;
    font-family: 'Inter', sans-serif;
  }

  .cc-header-inner {
    display: flex;
    align-items: center;
    gap: 12px;
    pointer-events: auto;
    -webkit-app-region: no-drag;
  }

  .cc-brand-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 13px;
    color: var(--cc-text-primary);
  }

  .cc-brand-icon {
    color: var(--cc-accent);
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
  }

  .cc-workspace-chip {
    font-size: 11px;
    color: var(--cc-text-secondary);
    background-color: var(--cc-bg-surface);
    border: 1px solid var(--cc-border);
    padding: 2px 8px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Segmented Chat | Code control */
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

  /* Interactive Pills */
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

  /* ==========================================================================
     Sidebar & Hero Brand Re-skinning
     ========================================================================== */

  .cc-sidebar-claude-mark {
    color: var(--cc-accent) !important;
    font-size: 20px !important;
    line-height: 1 !important;
    display: inline-block !important;
    font-weight: 700 !important;
  }

  .cc-sidebar-claude-text {
    font-weight: 600 !important;
    font-size: 14px !important;
    color: var(--cc-text-primary) !important;
    letter-spacing: -0.01em !important;
  }

  .cc-hero-claude-star {
    font-size: 52px !important;
    color: var(--cc-accent) !important;
    display: block !important;
    margin: 0 auto 12px auto !important;
    line-height: 1 !important;
  }

  .cc-hero-title {
    font-family: 'Inter', sans-serif !important;
    font-size: 26px !important;
    font-weight: 600 !important;
    letter-spacing: -0.02em !important;
    color: var(--cc-text-primary) !important;
    margin-bottom: 6px !important;
  }

  .cc-hero-subtitle {
    font-family: 'Newsreader', Georgia, serif !important;
    font-size: 16px !important;
    font-style: italic !important;
    color: var(--cc-text-secondary) !important;
    margin-bottom: 24px !important;
  }

  /* ==========================================================================
     Slide-out App Preview Drawer
     ========================================================================== */

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

  /* Minimal Scrollbars */
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
