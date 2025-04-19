import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo-colorido.svg";
import minhaFoto from "assets/minhaFoto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Afrânio Dantas,
          desenvolvedor Full-Stack. Aqui compartilho vários conhecimentos,
          espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="imagem de circulo colorido"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="foto do Afrânio"
        />
      </div>
    </div>
  );
}
