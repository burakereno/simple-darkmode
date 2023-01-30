## Simple Darkmode ☀️
A very simple darkmode example with Next.js and Tailwindcss.

🔥Demo: https://simpledarkmode.vercel.app

## Step 1
First, install Next Themes [https://www.npmjs.com/package/next-themes]

```javascript
npm install next-themes
# or
yarn add next-themes
```
Then add the **"Next Theme"** code to your `_app.tsx` (or `_app.js`) file.

Example:
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
Add the Phosphor icon set to make the icons look good.

```javascript
npm install --save phosphor-react
```
More information: [https://phosphoricons.com](https://phosphoricons.com "https://phosphoricons.com")

## Step 3
Next, add the line `darkMode: "class"` to `tailwind.config.js`.

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
## Step 4
Copy the `Darkmode.tsx` file to your project and it will start working.