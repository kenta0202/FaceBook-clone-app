## tailwind に googlefont の導入

- googlefont から fontfamily をコピー
- tailwind.config にコピーした fontFamily を定義
  - fontFamily: {○○: [コピーしたもの],},
- styled.css に@layer base{ a{ @apply font-○○}}
