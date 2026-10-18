# dsh-claude-code-desktop

> Plugin visual y suite de diseño editorial para **DeepSeek Harness (`dsh`)** que transforma la interfaz web estándar en la experiencia gráfica de **Claude Code Desktop GUI**.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![dsh-plugin](https://img.shields.io/badge/dsh-cordis--plugin-orange.svg)](https://github.com/deepseek-ai/dsh)

---

## 🎨 Paleta de Color Oficial y Tokens de Diseño

La interfaz replica fidedignamente los tokens y valores cromáticos del diseño de escritorio de Claude Code, ofreciendo soporte nativo para alternancia entre modo oscuro cálido y modo claro editorial:

| Token / Rol | Nombre de Color | Código Hex / Valor | Uso en la Interfaz |
| :--- | :--- | :--- | :--- |
| **Dark Base** | Anthropic Dark | `#191918` | Fondo principal de la aplicación (`--cc-bg-app`), canvas y contenedores primarios. |
| **Light Base** | Paper Light | `#FAF9F5` | Fondo editorial cálido (`--cc-bg-app`) imitando papel de imprenta. |
| **Accent** | Terracotta Accent | `#D97757` | Botones de envío, acentos interactivos, foco activo de input y bordes hover. |
| **Accent Hover** | Terracotta Deep | `#C66143` / `#C25E40` | Estado *hover* y *active* en botones de acción y disparadores. |
| **Dark Sidebar** | Deep Warm Noir | `#141413` | Fondo de barras laterales y paneles de navegación. |
| **Light Sidebar** | Soft Warm Cream | `#F0EEE6` | Barra lateral y paneles elevados en modo claro. |
| **Dark Surface** | Elevated Dark Surface | `#21201E` | Tarjetas de herramientas (`tool-call`), bloques de código y chips. |
| **Light Surface** | Cream Surface | `#F3F1E9` | Superficies de tarjetas elevadas en modo papel. |
| **Dark Text** | Primary Ivory | `#F4F3EE` | Tipografía principal en modo oscuro de alto contraste suave. |
| **Light Text** | Primary Charcoal | `#141413` | Tipografía principal en modo claro. |

---

## 🌟 Desglose Exhaustivo de Características (Feature Breakdown)

### 1. 🎨 Paleta de Color Dual con Memoria Local
- **Anthropic Dark (`#191918`)**: Diseño nocturno cálido que reduce la fatiga visual, con bordes atenuados (`#353430`) y sombras profundas.
- **Paper Light (`#FAF9F5`)**: Estética editorial basada en papel natural, tipografía entintada en carbón (`#141413`) y sombras sutiles.
- **Persistencia automática**: Guarda la preferencia del usuario en `localStorage('cc-desktop-theme')`.

### 2. ✍️ Sistema Tipográfico Jerárquico Editorial
- **Newsreader Serif**: Tipografía serif refinada (`font-optical-sizing: auto`) para la prosa del asistente y artículos markdown, brindando una lectura amena y reposada al estilo de un libro.
- **Inter UI**: Tipografía sans-serif neutral y legible para elementos de control, barra superior, tabs y diálogos del sistema.
- **JetBrains Mono**: Fuente monospace con soporte de ligaduras para bloques de código, invocación de herramientas, chips de workspace y terminal.

### 3. 🛡️ Píldora Interactiva de Permisos y Modos (Plan Mode vs. Auto-Accept)
- Control visual superior tipo píldora (`cc-action-pill`) que exhibe el estado del ciclo de ejecución del agente.
- **Plan Mode (`🛡️ Plan Mode`)**: Modo seguro de planificación con realce Terracota (`#D97757`) con fondo translúcido `rgba(217, 119, 87, 0.12)`.
- **Auto-Accept Edits (`⚡ Auto-Accept Edits`)**: Modo ágil de aceptación automatizada con distintivo verde esmeralda (`#4ADE80` / `#16A34A`).
- **Atajo Global de Teclado**: Presiona **`Shift + Tab`** en cualquier momento para alternar de manera instantánea entre ambos modos sin tocar el ratón.

### 4. ⚡ Cajón Deslizable "Live App Preview" (Drawer Lateral)
- Panel lateral derecho deslizante de 460px de ancho con integración completa en el viewport.
- Barra de navegación de URL dinámica integrada (por defecto `http://localhost:3000`).
- Botón de refresco (`↻`) y navegación directa mediante la tecla `Enter`.
- Visor iframe integrado para depurar aplicaciones web, interfaces frontend y servidores locales mientras el asistente redacta código.

### 5. 🗂️ Selector Segmentado Chat | Code
- Segmented control nativo en la barra superior que permite estructurar la sesión de trabajo entre flujo conversacional puro (**Chat**) e inspección técnica de tareas (**Code**).

### 6. 📦 Tarjetas Gráficas de Invocación de Herramientas (Tool Call Cards)
- Reemplaza la apariencia de consola CLI monótona por tarjetas de superficie gráfica elevadas (`.cc-upgraded-tool-card`).
- Bordes redondeados (14px), sombras multicapa (`0 4px 14px rgba(0,0,0,0.22)`), y transición interactiva a borde Terracota al pasar el cursor (`:hover`).
- Procesamiento en tiempo real gracias a un `MutationObserver` integrado que captura bloques generados dinámicamente en el DOM.

### 7. 💬 Composer Flotante Ergonómico
- Caja de entrada de mensajes estilo cápsula flotante con curvatura de 18px.
- Indicador de foco activo con anillo de resplandor terracota suave (`0 0 0 2px rgba(217, 119, 87, 0.14)`).
- Botón de envío redondeado Terracota (`#D97757`) con micro-elevación interactiva (`translateY(-1px)`).

---

## ⌨️ Atajos de Teclado y Controles Rápidos

| Atajo / Acción | Ubicación | Efecto |
| :--- | :--- | :--- |
| **`Shift + Tab`** | Global (Ventana) | Alterna el modo del agente entre **`🛡️ Plan Mode`** y **`⚡ Auto-Accept Edits`**. |
| **`Enter` en URL Bar** | Drawer Lateral | Carga la URL ingresada dentro del iframe del visualizador en vivo. |
| **Clic en `◐ Tema`** | Barra Superior | Alterna entre tema **Anthropic Dark** (`#191918`) y **Paper Light** (`#FAF9F5`). |
| **Clic en `⚡ App Preview`** | Barra Superior | Abre o repliega el panel lateral de Live Preview ajustando el margen del canvas principal. |

---

## 🚀 Modos de Instalación y Uso

### Modo 1: Integración Nativa en DeepSeek Harness vía Parche Cordis

Para aplicar este tema de manera permanente en el servidor web de DeepSeek Harness (`dsh`), ejecute el siguiente comando exacto desde la raíz del proyecto o monorepo:

```bash
pnpm dsh web --patch ./claude-desktop.patch.yml
```

El manifiesto [`claude-desktop.patch.yml`](./claude-desktop.patch.yml) registrará la inyección del plugin en la canalización web:

```yaml
- insert:
    - id: claude-code-desktop
      name: dsh-claude-code-desktop
```

Si utiliza un archivo de configuración explícito (`cordis.yml` o `dsh.config.yml`):

```yaml
plugins:
  dsh-claude-code-desktop: {}
```

---

### Modo 2: Inyección en Caliente en el Navegador (Hot Injection)

Ideal para probar de forma inmediata la interfaz sobre cualquier instancia en ejecución (por ejemplo, `http://127.0.0.1:3080` o `http://localhost:3080`) sin necesidad de reiniciar procesos ni reconstruir el monorepo.

El script [`scripts/inject-browser.js`](./scripts/inject-browser.js) es totalmente autónomo (IIFE) y compatible con herramientas de desarrollo y extensiones Userscript.

#### Opción A: Desde la Consola de DevTools del Navegador
1. Abra su navegador e ingrese a la interfaz de DeepSeek Harness: **`http://127.0.0.1:3080`**.
2. Abra las Herramientas para Desarrolladores presionando **`F12`** o **`Ctrl + Shift + I`** (Cmd + Option + I en macOS).
3. Seleccione la pestaña **Consola (Console)**.
4. Abra el archivo [`scripts/inject-browser.js`](./scripts/inject-browser.js), copie la totalidad de su contenido, péguelo en la consola y presione **`Enter`**.
5. La interfaz se transformará instantáneamente al diseño de Claude Code Desktop GUI.

#### Opción B: Mediante Extensión Userscript (Tampermonkey / Violentmonkey)
1. Instale la extensión **Tampermonkey** o **Violentmonkey** en su navegador (Chrome, Edge, Firefox, Brave).
2. Cree un nuevo Userscript y pegue el contenido íntegro de [`scripts/inject-browser.js`](./scripts/inject-browser.js).
3. Las cabeceras integradas ya configuran la ejecución automática:
   ```javascript
   // @match        http://localhost:3080/*
   // @match        http://127.0.0.1:3080/*
   // @run-at       document-idle
   ```
4. Guarde el script. Cada vez que cargue `http://127.0.0.1:3080`, el tema y sus controles interactivos se aplicarán automáticamente.

#### Control Programático en Consola
El script expone una API limpia en el objeto global `window.dshClaudeCodeDesktop`:

```javascript
// Desmontar el tema y restaurar la interfaz original de DeepSeek Harness
window.dshClaudeCodeDesktop.unmount();

// Re-inyectar el tema y sus componentes
window.dshClaudeCodeDesktop.mount();
```

---

## 📁 Estructura del Repositorio

```
dsh-claude-code-desktop/
├── claude-desktop.patch.yml  # Manifiesto de parche Cordis para dsh web
├── package.json              # Configuración de paquete, scripts y dependencias
├── tsconfig.json             # Configuración del compilador TypeScript (ES2022, bundler)
├── .gitignore                # Archivos omitidos de control de versiones
├── scripts/
│   └── inject-browser.js     # Script IIFE / Userscript para inyección en cliente caliente
├── src/
│   ├── index.ts              # Entry point del servicio host Cordis
│   └── client/
│       ├── index.ts          # Inicializador del cliente, observadores DOM y atajos
│       └── styles.ts         # Definiciones CSS, tokens de color y reglas tipográficas
└── dist/                     # Salidas compiladas TypeScript (.js y .d.ts)
    ├── index.d.ts
    ├── index.js
    └── client/
        ├── index.d.ts
        ├── index.js
        ├── styles.d.ts
        └── styles.js
```

---

## 🛠️ Compilación, Tipado y Calidad de Código

El proyecto utiliza TypeScript en modo estricto (`strict: true`) generando declaraciones de tipos (`.d.ts`) y código JavaScript limpio (`ES2022` / `ESNext`).

### Comandos de Verificación

```bash
# 1. Instalar dependencias
npm install

# 2. Comprobación de tipos estática (Zero-errors guarantee)
npm run typecheck

# 3. Compilación a directorio dist/
npm run build
```

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulte el archivo `LICENSE` o los metadatos en `package.json` para más detalles.
