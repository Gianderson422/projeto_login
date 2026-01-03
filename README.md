Projeto Login e Cadastro de Usuários

Este projeto consiste em uma interface de login e cadastro de usuários desenvolvida com HTML, CSS e JavaScript puro. O objetivo é simular um fluxo completo de autenticação no front-end, utilizando uma API fake com json-server para persistência dos dados.

O sistema permite que o usuário crie uma conta, valide campos obrigatórios, verifique formato de e-mail, tamanho mínimo de senha e confirmação de senha. Após o cadastro, o usuário pode realizar login validando os dados diretamente na API simulada.

Tecnologias Utilizadas

HTML5 para estruturação da página
CSS3 para estilização e layout da interface
JavaScript para manipulação do DOM, validações e consumo da API
json-server para simular um banco de dados REST
Node.js e npm para gerenciamento de dependências

Funcionalidades

Alternância entre tela de login e tela de cadastro sem recarregar a página
Validação de e-mail com expressão regular
Validação de senha com tamanho mínimo de caracteres
Confirmação de senha no cadastro
Exibição de mensagens de erro personalizadas
Cadastro de usuários via requisição POST
Login de usuários via requisição GET
Redirecionamento após login bem-sucedido

Como Executar o Projeto

Primeiro é necessário ter o Node.js instalado na máquina.

Instale o json-server de forma global ou utilize via npx.

Crie um arquivo db.json contendo a estrutura de usuários.

Inicie o servidor com o comando:

npx json-server db.json --port 4000

Abra o arquivo index.html em um navegador.

Estrutura Esperada do db.json

O arquivo db.json deve conter uma coleção chamada users, onde cada usuário possui nome, e-mail e senha.

Exemplo conceitual:

users com objetos contendo name, email e password.

Observações Importantes

O projeto não possui autenticação real nem criptografia de senha, pois tem finalidade educacional. Todas as validações são feitas no front-end e os dados ficam armazenados apenas localmente via json-server.