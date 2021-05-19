module.exports = {
    purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark-label': '#6b7280' //var(--tp-label-foreground-color)
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
