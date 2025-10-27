Projeto Simulador de Investimentos (Full-Stack)

Status: Em Desenvolvimento

Objetivo Principal

O objetivo é criar um simulador de investimentos interativo (CDB, Tesouro Direto e Poupança) onde o usuário possa calcular o rendimento de seu dinheiro. A interface do frontend foi estilizada para simular a identidade visual do Banco do Brasil. O backend (em desenvolvimento) fornecerá taxas atualizadas e permitirá salvar simulações.

Tecnologias Utilizadas

Frontend (lado do cliente)

HTML5: Estruturação semântica da página do simulador.
CSS3: Estilização personalizada, incluindo o uso de variáveis CSS para o tema.
Bootstrap 5: Framework principal CSS para layout, componentes (modais, abas, formulários) e responsividade.
Bootstrap Icons: Biblioteca de ícones.
JavaScript (ES6+): Manipulação de eventos e lógica dos cálculos de juros compostos.
jQuery: Utilizado para simplificar a manipulação do DOM e atualizar os resultados da simulação.

Backend (lado do servidor)

Node.js: Ambiente de execução para JavaScript no servidor.
Express.js: Framework para criação do servidor web e das rotas da API.
node-postgres (pg): Driver para a comunicação entre a aplicação Node.js e o banco de dados PostgreSQL.
CORS: Middleware para permitir que o frontend possa fazer requisições para a API.
PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
