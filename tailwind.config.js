const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'xs': '375px',
            ...defaultTheme.screens,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
