module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: false,
  theme: {
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
