// Esta é a página PRINCIPAL (Home). Ela responde pela rota raiz: localhost:3000/

// 1. IMPORTAÇÕES
// O 'Link' é a ferramenta oficial do Next.js para navegar entre as páginas de forma super rápida.
import Link from 'next/link';
// Importando um botão do MUI para deixar o link(mudança de paginas) mais bonito
import Button from '@mui/material/Button';

export default function PaginaInicial() {
  
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      
      <h1>Bem-vindo ao Gran Sabor! 🍽️</h1>
      <p style={{ marginBottom: '30px' }}>
        O melhor restaurante da cidade. Faça seu pedido de forma rápida e digital.
      </p>

      {/* 2. NAVEGAÇÃO COM O NEXT.JS */}
      {/* Em vez de usar a tag <a> normal do HTML, usamos o <Link> do Next.js. 
          Isso faz a troca de tela ser instantânea, sem piscar o navegador! */}
      <Link href="/exemplo" passHref>
        <Button variant="contained" size="large" color="primary">
          Acessar a Tela de Exemplo
        </Button>
      </Link>

    </main>
  );
}