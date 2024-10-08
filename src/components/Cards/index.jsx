import Image from 'next/image';
import styles from './Cards.module.css';

export default function Cards(props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={props.imagem} alt={props.nome + " imagem"} />
      </div>
      <div className={styles.informacoes}>
        <h3>{props.nome}</h3>
        <small>{props.categoria}</small>
        <p>{props.descricao}</p>
        <span>R$ {props.preco}</span>
      </div>
    </div>
  );
}
