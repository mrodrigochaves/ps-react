# Frontend PS-React - Consumindo API Backend Spring Boot

Este é um projeto de frontend em React com TypeScript e ChakraUI, criado com o Vite, que consome uma API backend Spring Boot. O frontend tem como objetivo exibir e filtrar os dados de transferência fornecidos pela API de acordo com os filtros especificados. O backend da API fornece os dados de transferência com base no número da conta bancária. Aqui está um guia sobre como executar e entender o projeto frontend.

## Pré-requisitos
É necessário ter o backend da API Spring Boot em execução para que o frontend possa consumir os dados de transferência. Você pode encontrar o projeto backend da API Spring Boot clicanco [aqui](https://github.com/mrodrigochaves/PS-Java-React). 

Antes de executar o projeto, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (normalmente vem junto com o Node.js)

## Configuração

1. Clone o repositório do projeto do GitHub para o seu diretório local:

   ```
   git clone https://github.com/mrodrigochaves/ps-react.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd ps-react
   ```

3. Instale as dependências do projeto executando o seguinte comando:

   ```
   npm install
   ```

4. Após a conclusão da instalação das dependências, você estará pronto para executar o projeto frontend.

## Executando o Projeto

Para executar o projeto frontend, utilize o seguinte comando:

```
npm run dev
```

Isso iniciará o aplicativo em modo de desenvolvimento usando o Vite. Abra seu navegador e acesse `http://127.0.0.1:5173/` para ver o projeto em execução.

## Utilizando o Aplicativo

O aplicativo exibe uma interface de usuário onde você pode informar os filtros para buscar as transações. Os filtros disponíveis são:

- Período de Tempo: Você pode informar um intervalo de datas de inicio e fim para buscar todas as transferências relacionadas a esse período de tempo.

- Nome do Operador de Transação: Você pode informar o nome do operador de transação para buscar todas as transferências relacionadas a esse operador.
- Buscar com todos os filtros.
- Buscar sem filtros.


Após informar os filtros desejados, clique no botão "Pesquisar" para buscar as transferências correspondentes. Os resultados serão exibidos na tabela juntamente com o saldo total e o saldo total no período, de acordo com o protótipo especificado no documento do processo seletivo.

Os valores exibidos serão formatados como números de ponto flutuante com duas casas decimais. E a tabela exibe no máximo quatro linha com registros, depois disto é necessário utilizar os filtros de página na footer da tabela.

## Considerações Finais

O projeto frontend PS-React, criado com o Vite, consome uma API backend para buscar e exibir os dados de transferência de acordo com os filtros especificados. Ele fornece uma interface de usuário intuitiva para a busca e exibição dos dados. Siga as instruções acima para executar o projeto e utilize os filtros fornecidos para buscar as transferências desejadas.