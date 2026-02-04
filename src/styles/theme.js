// src/styles/theme.js

// 1. Adicionamos 'export' para que o index.tsx consiga ler este objeto
export const themes = {
    default: {
        background: '#f7fbff',
        card: '#ffffff',
        header: '#e3f2ff',
        primary: 'rgb(15, 167, 134)',
        secondary: 'rgb(20, 177, 143)',
        text: '#1f2937',
        textLight: '#4b5563',
        inputBg: '#eef6ff',
        inputBorder: '#d1d9e6',
        radius: 10,
    },
    nerv_override: {
        background: '#050505',
        card: '#0a0a0a',
        header: '#111',
        primary: '#ff1e1e',
        secondary: '#ff6b00',
        text: '#ffdddd',
        textLight: '#ff8888',
        inputBg: '#0f0f0f',
        inputBorder: '#661111',
        radius: 6,
    },
    // Adicione os outros temas (evangelion, kali, etc.) seguindo este padrão
};

/**
 * Se você estiver usando TypeScript puro (.ts), use:
 * export type ThemeType = keyof typeof themes;
 * * Como o arquivo é .js, o TypeScript gera o tipo automaticamente no index.tsx
 */