import Image from 'next/image';
import styles from './BotaoCategoria.module.css';

export default function BotaoCategoria(props) {
  return (
    <div className={styles.container}>
      <button /* className={styles.botao}  */
      className={props.estilo === props.nome ? `${styles.botao} ${styles.btnAtivo}` : `${styles.botao}`}
      onClick={() => props.acao_click(props.nome)}>
        <Image src={props.imagem} alt={"Categoria " + props.texto} />
        <p>{props.nome}</p>
      </button>
    </div>
  );
}
