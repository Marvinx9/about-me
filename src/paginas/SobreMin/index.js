import styles from "./SobreMin.module.css";
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/fundo-sobremin.png";
import fotoSobreMin from "assets/sobremin.jpeg";

export default function SobreMin() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre min">
      <h3 className={styles.subtitulo}>Olá, eu sou o Afrânio!</h3>
      <img
        src={fotoSobreMin}
        alt="foto do Afrânio"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedor Full-Stack e estou feliz de te ver
        por aqui. Meu primeiro contato com programação foi aos 18 anos, quando
        na faculdade de Engenharia Mecânica eu tive uma cadeira de lógica de
        programação.
      </p>
      <p className={styles.paragrafo}>
        Fiquei muito interessado pela área e comecei a estudar nas horas vagas
        principalmente Python. Em pouco tempo percebi que programação me deixava
        mais animado que Engenharia, então iniciei minha graduação na área de
        Ciências da Computação.
      </p>
      <p className={styles.paragrafo}>
        Eu aprendi lógica de programação e o básico de várias linguagens, como
        JavaScript, Python, Java, mas sem aprofundar muito em cada uma delas. Eu
        gostava muito de estudar programação, mas na época não fazia ideia de
        que trabalharia com isso hoje. Fiquei alguns messes enviando currículo
        para as empresas com o objetivo de conseguir um estágio na área, mesmo
        sem saber ao certo os desafios que iria enfrentar.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha primeira experiência como estagiário em
        desenvolvimento Back-End na empresa ICC, onde estou aprendendo muito
        enquanto codifico. Hoje sou muito feliz de ter a oportunidade de
        vivenciar o mundo da programação. Espero que minha jornada, de alguma
        forma contribua para uma comunidade melhor!
      </p>
    </PostModelo>
  );
}
