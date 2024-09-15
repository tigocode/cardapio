import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ image }) {
  return (
    <header>
      <section>
        <Image src={image} />
      </section>
    </header>
  );
}
