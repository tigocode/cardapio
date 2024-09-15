import Image from 'next/image';
import styles from './BotaoCategoria.module.css';

export default function BotaoCategoria(props) {
  return (
    <button>
      <Image src={props.imagem} alt={"Categoria " + props.texto} />
      <p>{props.nome}</p>
    </button>
  );
}
