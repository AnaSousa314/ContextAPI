import { useContext } from "react";
import Botao from "./Botao";
import ThemeContext from "../contexts/ThemeContext";

export default function Menu() {
  const theme = useContext(ThemeContext);
  return (
    <aside className={`box theme-${theme}`}>
      <Botao />
    </aside>
  );
}
