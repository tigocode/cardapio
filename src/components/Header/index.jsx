import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <section className={styles.banner}>
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </section>
    </header>
  );
}
