import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ThemeProviderContext } from "./ThemeProvider";
export const ToogleTheme = () => {
  const { setTheme, theme } = useContext(ThemeProviderContext);

  return (
    <>
      <div className="flex items-center">
        {theme === "dark" ? (
          <Button onClick={() => setTheme("light")} variant="outline" size="sm">
            {" "}
            <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        ) : (
          <Button onClick={() => setTheme("dark")} variant="outline" size="sm">
            {" "}
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </Button>
        )}
      </div>
    </>
  );
};
