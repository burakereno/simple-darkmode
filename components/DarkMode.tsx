import { useTheme } from "next-themes";
import { Moon, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')} className="flex">
          <SunDim className="relative inline-flex w-14 h-14 cursor-pointer text-yellow-500" color='currentcolor' weight="duotone" />
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme('dark')} className="flex">
          <Moon className="relative inline-flex w-14 h-14 cursor-pointer text-blue-500" color='currentcolor' weight="duotone" />
        </button>
      )
    }
  }

  return (
    <>
      {renderThemeChanger()}
    </>
  )
}

export default DarkMode