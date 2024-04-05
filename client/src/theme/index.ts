import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { breakpoints } from "./breakpoints";

export enum ThemeVariantsProps {
  light = "light",
  dark = "dark",
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightModePalette : darkModePalette),
    },
    typography,
    spacing,
    breakpoints,
    status: {
      danger: "#730202",
    },
  });
};
