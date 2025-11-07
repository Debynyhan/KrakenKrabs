/*****************************************
 * Tailwind CSS Configuration for Vite
 *****************************************/
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                abyss: '#0A1A2F',
                deepSea: '#003C7E',
                aquaWave: '#00A9E0',
                krakenRed: '#E53935',
                goldenTreasure: '#FFC93C',
                ropeGold: '#E6B756',
                seaweed: '#2D6A4F',
                lightFoam: '#F7F9FB',
                warmSand: '#F3E3C1',
                mistGray: '#D9E3EA',
                whitecap: '#FFFFFF',
                charcoalInk: '#1B1B1E',
            },
        },
    },
    plugins: [],
}
