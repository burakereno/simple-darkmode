## Simple Darkmode ☀️
A very simple darkmode example with Next.js and Tailwindcss.

## Step 1
First, install Next Themes [https://www.npmjs.com/package/next-themes]

```javascript
npm install next-themes
# or
yarn add next-themes
```
Daha sonra `_app.tsx` (or`_app.js`) dosyanıza **"Next Theme"** kodunu ekleyin.

Örnek:
```javascript
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
```

## Step 2
İkonların düzgün görünmesi için Phosphor icon setini ekleyin.

```javascript
npm install --save phosphor-react
```
Detaylı bilgi için: [https://phosphoricons.com](https://phosphoricons.com "https://phosphoricons.com")

## Step 3
Sonra, `tailwind.config.js` dosyasına `darkMode: "class"` satırını ekleyin.

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
```
