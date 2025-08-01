# Podcast Manager API

Este projeto implementa uma API simples para gerenciar e consultar informações sobre podcasts e seus episódios. Ele permite listar todos os podcasts disponíveis e filtrar episódios por nome do podcast.



## Funcionalidades

- **Listar todos os episódios de podcasts**: Retorna uma lista completa de todos os podcasts e seus respectivos episódios disponíveis na base de dados.
- **Filtrar episódios por nome do podcast**: Permite buscar episódios específicos de um podcast, utilizando o nome do podcast como critério de filtro.



## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e escalabilidade do código.
- **Node.js**: Ambiente de execução JavaScript assíncrono e baseado em eventos, ideal para construir aplicações de rede escaláveis.
- **TSX**: Ferramenta para executar arquivos TypeScript e JSX diretamente no Node.js, sem a necessidade de compilação prévia.
- **Tsup**: Um empacotador (bundler) simples e rápido para TypeScript, otimizado para bibliotecas e aplicações.
- **HTTP (Módulo Nativo do Node.js)**: Utilizado para criar o servidor web e lidar com requisições e respostas HTTP.
- **File System (fs) (Módulo Nativo do Node.js)**: Utilizado para leitura de arquivos locais, como o `podcasts.json`.
- **Path (Módulo Nativo do Node.js)**: Utilizado para manipulação de caminhos de arquivos e diretórios.




## Como Instalar e Rodar o Projeto

Para configurar e executar este projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/liornes/podcast-manager.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd podcast-manager
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Execução

O projeto oferece diferentes scripts para execução:

-   **Modo de Desenvolvimento (com `tsx` e `.env`):**

    Este comando inicia o servidor em modo de desenvolvimento, utilizando `tsx` para executar o código TypeScript diretamente e carregando variáveis de ambiente de um arquivo `.env` (certifique-se de criar um arquivo `.env` na raiz do projeto com a variável `PORT`, por exemplo: `PORT=3000`).

    ```bash
    npm run start:dev
    ```

-   **Modo de Desenvolvimento (com `tsx watch` e `.env`):**

    Similar ao `start:dev`, mas com `tsx watch` que monitora alterações nos arquivos e reinicia o servidor automaticamente.

    ```bash
    npm run start:watch
    ```

-   **Compilar e Executar (Produção):**

    Este comando primeiro compila o código TypeScript para JavaScript usando `tsup` (gerando os arquivos na pasta `app/`) e depois executa o servidor compilado. É o modo recomendado para ambientes de produção.

    ```bash
    npm run start:app
    ```

    Após a execução, o servidor estará disponível na porta configurada (por exemplo, `http://localhost:3000`).




## Estrutura do Projeto

O projeto `podcast-manager` segue uma estrutura de diretórios organizada para separar as responsabilidades e facilitar a manutenção:

```
podcast-manager/
├── src/
│   ├── controllers/
│   │   └── podcastas-controller.ts
│   ├── models/
│   │   ├── filter-podcast-model.ts
│   │   └── podcasts-model.ts
│   ├── repositories/
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   ├── routes/
│   │   └── routes.ts
│   ├── services/
│   │   ├── filter-episodes-service.ts
│   │   └── list-episodes-service.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

-   **`src/`**: Contém todo o código-fonte da aplicação.
    -   **`controllers/`**: Lida com a lógica de requisição e resposta HTTP, orquestrando as chamadas aos serviços.
        -   `podcastas-controller.ts`: Contém as funções para listar e filtrar episódios de podcasts.
    -   **`models/`**: Define as interfaces e estruturas de dados utilizadas no projeto.
        -   `filter-podcast-model.ts`: Interface para o modelo de filtro de podcasts.
        -   `podcasts-model.ts`: Interface para o modelo de dados de um podcast.
    -   **`repositories/`**: Responsável pela interação com a fonte de dados (neste caso, o arquivo `podcasts.json`).
        -   `podcasts-repository.ts`: Contém a lógica para acessar e manipular os dados dos podcasts.
        -   `podcasts.json`: Arquivo JSON que simula um banco de dados, armazenando os dados dos podcasts.
    -   **`routes/`**: Define as rotas da API e seus respectivos endpoints.
        -   `routes.ts`: Enumeração que define os caminhos das rotas da API.
    -   **`services/`**: Contém a lógica de negócio da aplicação, processando os dados e interagindo com os repositórios.
        -   `filter-episodes-service.ts`: Lógica para filtrar episódios de podcasts.
        -   `list-episodes-service.ts`: Lógica para listar todos os episódios de podcasts.
    -   **`app.ts`**: Configura a aplicação principal, roteando as requisições para os controladores apropriados.
    -   **`server.ts`**: Inicializa o servidor HTTP e define a porta de escuta.
-   **`package.json`**: Arquivo de configuração do projeto Node.js, contendo metadados do projeto e listando as dependências e scripts de execução.
-   **`package-lock.json`**: Gerado automaticamente pelo npm, registra as versões exatas das dependências instaladas.
-   **`tsconfig.json`**: Arquivo de configuração do TypeScript, definindo as opções de compilação do projeto.




## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor, siga os passos abaixo:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit-as (`git commit -m 'feat: Adiciona nova funcionalidade'`).
4.  Envie suas alterações para o repositório remoto (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

Por favor, certifique-se de que seu código siga as convenções de estilo existentes e que todos os testes passem.




## Licença

Este projeto está licenciado sob a licença ISC. Veja o arquivo `LICENSE` (se existir) ou o `package.json` para mais detalhes.


