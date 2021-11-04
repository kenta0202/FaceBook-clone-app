## nextjs プロジェクトの作成

- npx create-next-app --example with-typescript my-first-next-app2
- ルート配下に public,src,styles フォルダを作成
- util,pages,components,interfaces を src に移動

## Tailwindcss

- npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- touch styles/styled.css styles/dist.css
- 言語拡張機能のインストール:styled.css に ↓ を貼り付け
- @tailwind base;
  @tailwind components;
  @tailwind utilities;
- npm uninstall postcss
- npm i -D postcss-cli
- package.json の script の設定
  - "css:dev": "NODE_ENV=development TAILWIND_MODE=watch postcss ./styles/styled.css -o ./styles/dist.css -w ",
  - "css:pro": "NODE_ENV=production postcss ./styles/styled.css -o ./styles/dist.css"
- \_app.tsx を pages 配下に作成
- \_app.tsx に dist.css をインポート
- tailwind.confing に ↓ を追加
  - purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  - mode: "jit"
- npm i -D cssnano
- postcss.config.ts に plugins を追加
  - cssnano: process.env.NODE_ENV === "production" ? {} : false,
- npm i -D eslint-plugin-tailwindcss
  - {
    "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
    ],
    "plugins": ["tailwindcss"]
    }

## その他

- tsconfig.json の変更
  - "target": "es6",
  - "forceConsistentCasingInFileNames": false,
  - "baseUrl": "src"
  - "include": ["src/**/*", "next-env.d.ts", "**/*.ts", "**/*.tsx"],
- package.json
  - "homepage": "./",
  - build フォルダから build したものを表示するため
  - "eslintIgnore": ["/.eslintrc.js"]
- .env.local ファイルの作成
  - {process.env.NEXT_PUBLIC_FOO}で使用できる

## Eslint

- npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- touch tsconfig.eslint.json .eslintrc.js
- package.json
  - "lint": "eslint . src --ext .ts,.tsx",
  - "lint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix"
  - "eslintIgnore": ["/.eslintrc.js"]

## Mongodb

- .env に MONGODB_URI と MONGODB_DB を設置
- npm i -D @types/mongodb
- npm i mongodb
- npm i axios

## Firebase

- docs/0/\_document/data/value/mapValue/field/age,name
