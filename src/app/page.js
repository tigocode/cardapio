'use client';
import Image from 'next/image';

import { produtos } from '@/data/dataProdutos';
import { imagens } from '@/data/dataColecaoImagens';

import Hearder from '@/components/Header';
import BotaoCategoria from '@/components/BotaoCategoria';
import CamposDeBusca from '@/components/CamposDeBusca';
import Card from '@/components/Card';

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hearder />
      <main className={styles.container}>
        <section className={styles.categoria}>
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
          <CamposDeBusca />
        </section>
        <section>
          {
            produtos.map((produto) => (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                categoria={produto.categoria}
                descricao={produto.descricao}
                preco={produto.preco}           
              />
            ))
          }
        </section>
      </main>
    </div>
  );
}
