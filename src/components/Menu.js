import Botao from "./Botao";
import ThemeContext from "../contexts/ThemeContext";

export default function Menu() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <aside className={`box theme-${value}`}>
          <Botao />
        </aside>
      )}
    </ThemeContext.Consumer>
  );
}
