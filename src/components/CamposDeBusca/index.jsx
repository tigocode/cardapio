import Image from 'next/image';
import Lupa from '../../../public/assets/lupa.png';
import styles from './CamposDeBusca.module.css';

export default function CamposDeBusca(props) {
  return (
    <div className={styles.busca}>
      <Image src={Lupa} />
      <input
        type="text"
        value={props.valor}
        onChange={(event) => props.busca(event.target.value)}
        placeholder='Pesquise aqui um dos pratos do nosso cardápio'        
      />
    </div>
  );
}
