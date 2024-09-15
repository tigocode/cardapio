'use client';
import Image from 'next/image';
import { produtos } from '@/data/dataProdutos';
import { imagens } from '@/data/dataColecaoImagens';

import Hearder from '@/components/Header';
import BotaoCategoria from '@/components/BotaoCategoria';
import styles from "./page.module.css";

import Banner from '../../public/assets/banner.png';

export default function Home() {
  return (
    <div>
      <Hearder image={Banner} />
      <main className={styles.main}>
        <section>
          {
            imagens.map((data) => (
              <BotaoCategoria
                key={data.id}
                imagem={data.imagem}
                texto={data.nome}
                nome={data.nome}
              />
            ))
          }

        </section>
      </main>
    </div>
  );
}
