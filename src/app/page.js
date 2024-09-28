'use client';
import { useState } from 'react';

import { imagens } from '@/data/dataColecaoImagens';
import { filtarProdutos, produtosEntradas, buscarTexto } from '@/service';

import Cards from '@/components/Cards';
import Hearder from '@/components/Header';
import BotaoCategoria from '@/components/BotaoCategoria';
import CamposDeBusca from '@/components/CamposDeBusca';


import styles from "./page.module.css";

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState(produtosEntradas);
  const [textBusca, setTextBusca] = useState("");
  const [botaoClicado, setbotaoClicado] = useState("Entradas");

  const handelFilterCategoria = (categoria) => {
    setTextBusca("");
    setListaProdutos(filtarProdutos(categoria));
    setbotaoClicado(categoria);
  }
  const handelBuscarProduto = (textoDigitado) => {
    setTextBusca(textoDigitado);
    textoDigitado.length >= 3 && setListaProdutos(buscarTexto(textoDigitado));
    setbotaoClicado("");
  }

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
                acao_click={handelFilterCategoria}
                estilo={botaoClicado}
              />
            ))
          }
          <CamposDeBusca
            busca={handelBuscarProduto}
            valor={textBusca}
          />
        </section>
        <section className={styles.produtos}>
          <div className={styles.title}>
            <h2>Cardápio</h2>
          </div>
          {
            listaProdutos.map((produto) => (
              <Cards
                key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                categoria={produto.categoria}
                descricao={produto.descricao}
                preco={produto.preco.toFixed(2).replace(".", ",")}
              />
            ))
          }
        </section>
      </main>
    </div>
  );
}
