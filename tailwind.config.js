module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  // 自動で追加
  theme: {
    extend: {
      screen: {
        "3xl": "1600px",
      },
      colors: {},
      spacing: {
        // paddin,margin,width,height,maxHeight,gapに継承される
        13: "3.25rem",
      },
    },
    fontFamily: {
      // googlefontから追加
      Poppins: ["Poppins,sans-serif"],
      Lato: ["Zen Kurenaido, sans-serif"],
    },
    container: {
      // デフォルトの設定
      center: true,
      padding: "1rem",
      screen: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    // acitive:bg-color を有効にする
    backgroundColor: ["active"],
    textColor: ["visited"],
    extend: {},
  },
  plugins: [],
};
