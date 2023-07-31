import { createContext } from "react";

export interface SnackBarContextProps {
  seconds: number;
  message: string;
  open: boolean;
}

export const SnackBarContext = createContext<SnackBarContextProps>({
  seconds: 0,
  message: "",
  open: false,
});
