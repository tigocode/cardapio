import { produtos } from "@/data/dataProdutos"

export const filtarProdutos = (categoria) => {
  return produtos.filter(
    (produto) => produto.categoria === categoria
  )
}

export const produtosEntradas = filtarProdutos("Entradas");

export const buscarTexto = (textBusca) => {
  return produtos.filter((produto) => 
    produto.nome.toLowerCase().includes(textBusca.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(textBusca.toLowerCase())
)
}
