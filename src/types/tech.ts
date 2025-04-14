import { JSX } from "react";

export interface TechItem {
  icon: JSX.Element;
  name: string;
  link: string;
}

export interface TechCategory {
  title: string;
  stack: TechItem[];
}
