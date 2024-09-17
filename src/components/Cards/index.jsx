import Image from 'next/image';
import styles from './Cards.module.css';

export default function Card(props) {
  return (
    <div>
      <Image src={props.imagem} alt={"Imagem da" + props.nome} />
      <h3>{props.nome}</h3>
      <small>{props.categoria}</small>
      <p>{props.descricao}</p>
      <span>{props.preco}</span>
    </div>
  );
}
