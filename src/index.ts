export interface CordisContext {
  effect?: (fn: () => () => void) => void
  on?: (event: string, listener: (...args: any[]) => void) => void
  [key: string]: any
}

export const name = 'dsh-claude-code-desktop'

export function apply(ctx: CordisContext) {
  console.log('[Claude Code Desktop GUI] Plugin inicializado en el Host de DeepSeek Harness.')

  if (typeof ctx.on === 'function') {
    ctx.on('ready', () => {
      console.log('[Claude Code Desktop GUI] Interfaz gráfica lista en el cliente web.')
    })
  }
}

export default { name, apply }
