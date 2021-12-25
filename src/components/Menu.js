import Botao from "./Botao";
import ThemingContext from "../contexts/ThemeContext";

export default function Menu() {
  return (
    <ThemingContext.Consumer>
      {(value) => (
        <aside className={`box theme-${value}`}>
          <Botao />
        </aside>
      )}
    </ThemingContext.Consumer>
  );
}
