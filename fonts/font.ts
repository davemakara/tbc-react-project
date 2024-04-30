import { Inter, Arsenal, Pacifico, Merienda } from "next/font/google";

const inter_init = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const inter = inter_init.variable;

const arsenal_init = Arsenal({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arsenal",
});

export const arsenal = arsenal_init.variable;

const pacifico_init = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const pacifico = pacifico_init.variable;

const merienda_init = Merienda({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merienda",
});

export const merienda = merienda_init.variable;
