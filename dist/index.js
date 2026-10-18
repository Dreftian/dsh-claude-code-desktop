export const name = 'dsh-claude-code-desktop';
export function apply(ctx) {
    console.log('[Claude Code Desktop GUI] Plugin inicializado en el Host de DeepSeek Harness.');
    if (typeof ctx.on === 'function') {
        ctx.on('ready', () => {
            console.log('[Claude Code Desktop GUI] Interfaz gráfica lista en el cliente web.');
        });
    }
}
export default { name, apply };
