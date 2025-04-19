import styles from "./Rodape.module.css";
import { ReactComponent as Marca } from "assets/marca.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Marca />
      Desenvolvido por Marvin.
    </footer>
  );
}
