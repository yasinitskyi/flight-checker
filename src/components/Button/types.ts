import { MouseEventHandler, ReactNode } from "react";

export interface GenericButtonProps {
  value: string,
  theme: "dark" | "light",
  children: ReactNode,
  form?: string,
  disabled?: boolean,
  type?: "button" | "submit" | "reset",
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

export type ThemedButtonProps = Omit<GenericButtonProps, "theme">;