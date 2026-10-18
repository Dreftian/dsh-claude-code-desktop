# dsh-claude-code-desktop

Plugin visual y tema editorial para **DeepSeek Harness (dsh)** que transforma la interfaz web al diseño gráfico de **Claude Code Desktop GUI**.

## Características

- 🎨 **Paleta de Color Dual**: Tema oscuro cálido (*Anthropic Warm Dark*) y tema claro tipo editorial (*Warm Paper*).
- ✍️ **Tipografía Editorial**: Fuente Newsreader Serif para respuestas del asistente, Inter para interfaz y JetBrains Mono para código y herramientas.
- 🛡️ **Píldora Interactiva Plan Mode**: Alternancia visual e interactiva entre *Plan Mode* y *Auto-Accept Edits* (atajo nativo `Shift + Tab`).
- ⚡ **Drawer Deslizable Live Preview**: Panel lateral derecho integrado con barra de URL para previsualizar aplicaciones web en tiempo real (`http://localhost:3000`).
- 🗂️ **Selector Segmentado Chat | Code**: Pestañas de modo para navegación rápida de contexto.
- 📦 **Tarjetas Gráficas de Herramientas**: Sustitución del formato CLI plano por tarjetas de llamada a herramientas con sombra, borde y estado hover terracota.

## Estructura del Proyecto

```
dsh-claude-code-desktop/
├── claude-desktop.patch.yml  # Manifiesto de parche para cordis/dsh
├── package.json              # Metadatos del plugin dsh / cordis
├── tsconfig.json             # Configuración TypeScript
├── .gitignore
├── scripts/
│   └── inject-browser.js     # Script de inyección en caliente (Userscript / DevTools)
└── src/
    ├── index.ts              # Entry point del Host Cordis
    └── client/
        ├── index.ts          # Entry point del cliente web (montaje/desmontaje)
        └── styles.ts         # Reglas CSS del diseño Claude Code Desktop
```

## Modos de Uso

### 1. Plugin Cordis / dsh

Instalar en el entorno dsh y registrar en la configuración:

```yaml
# cordis.yml o dsh config
plugins:
  dsh-claude-code-desktop: {}
```

O aplicar el parche proporcionado:

```bash
# Integrar claude-desktop.patch.yml en la configuración de DeepSeek Harness
```

### 2. Inyección Directa en Navegador (Hot Injection)

Para probar la interfaz sin recompilar el monorepo o en servidores remotos:

1. Abrir la interfaz web de DeepSeek Harness (por ejemplo, `http://127.0.0.1:3080`).
2. Abrir la consola de herramientas de desarrollo del navegador (`F12` o `Ctrl + Shift + I`).
3. Copiar y pegar el contenido completo de [`scripts/inject-browser.js`](scripts/inject-browser.js) en la consola y presionar `Enter`.
4. También puede instalarse como Userscript mediante extensiones como Tampermonkey o Violentmonkey.

Para desmontar o volver a montar dinámicamente desde la consola:

```javascript
window.dshClaudeCodeDesktop.unmount();
window.dshClaudeCodeDesktop.mount();
```

## Licencia

MIT
