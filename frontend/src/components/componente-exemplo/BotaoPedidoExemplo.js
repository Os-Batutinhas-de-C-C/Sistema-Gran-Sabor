// Arquivo Exemplo para a criação de Componentes
// Um componente é um pedaço de tela que podemos reutilizar em várias páginas do sistema.

// 1. DIRETIVA DE INTERATIVIDADE
// Como botões servem para ser clicados, eles precisam rodar no lado do cliente.
"use client";

// 2. IMPORTAÇÕES
// Aqui estamos importando um botão pronto e bonito da biblioteca Material UI (MUI).
import Button from '@mui/material/Button';

// 3. FUNÇÃO DO COMPONENTE
// Assim como as páginas, o nome do componente começa com letra Maiúscula.
// As informações dentro dos parênteses { nomeDoPrato } são as "props" (propriedades).
// Elas funcionam como variáveis que a página "injeta" dentro deste componente.
export default function BotaoPedidoExemplo({ nomeDoPrato }) {
  
  // 4. LÓGICA DO COMPONENTE
  // Função que será executada quando o botão for clicado.
  function lidarComClique() {
    alert(`Você adicionou o prato: ${nomeDoPrato}`);
  }

  // 5. VISUAL DO COMPONENTE (Return)
  // Em vez de usar a tag <button> normal do HTML, usamos o <Button> do MUI.
  // O variant="contained" é um estilo visual próprio do MUI (botão preenchido).
  return (
    <Button 
      variant="contained" 
      color="success" 
      onClick={lidarComClique}
    >
      Adicionar {nomeDoPrato}
    </Button>
  );
}