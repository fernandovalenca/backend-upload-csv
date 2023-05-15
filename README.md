# Passo a Passo para Executar o Projeto
Este arquivo contém as instruções necessárias para executar o projeto após cloná-lo. Siga as etapas abaixo para configurar e executar o projeto com sucesso.

## Pré-requisitos
Certifique-se de ter os seguintes requisitos instalados em sua máquina:

Um codificador de sua preferência (por exemplo, Visual Studio Code, Sublime Text, Atom)
Node.js (versão recomendada: 12.x ou superior)
npm (gerenciador de pacotes do Node.js)

## Passo 1: Clonar o projeto
Clone o projeto do repositório Git para o diretório de sua escolha usando o seguinte comando:

git clone https://github.com/fernandovalenca/backend-upload-csv.git

## Passo 2: Configurar o arquivo .env
Após clonar o projeto, navegue até a pasta raiz do projeto no seu codificador preferido. Em seguida, siga as etapas abaixo:

Renomeie o arquivo .env.example para .env.

Abra o arquivo .env no seu codificador e atualize as informações de conexão do banco de dados, substituindo os espaços reservados pelas informações corretas:

mysql://USER:PASSWORD@HOST:PORT/DATABASE
Certifique-se de substituir USER, PASSWORD, HOST, PORT e DATABASE pelas informações corretas correspondentes ao seu ambiente.

## Passo 3: Instalar dependências
No terminal, navegue até a pasta raiz do projeto e execute o seguinte comando para instalar as dependências necessárias:

npm install
Esse comando irá baixar e instalar todas as dependências listadas no arquivo package.json.

## Passo 4: Executar o projeto
Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o projeto:

npm run dev
Esse comando irá iniciar o servidor de desenvolvimento e executar o projeto. Verifique o terminal para visualizar qualquer mensagem de log ou erro.

Após a execução bem-sucedida, você poderá acessar o projeto em http://localhost:3000 (ou outra porta especificada, se for diferente).

Agora você pode explorar e utilizar o projeto!

## Conclusão
Ao seguir essas etapas, você será capaz de configurar e executar o projeto com sucesso em sua máquina. Lembre-se de atualizar as informações corretas no arquivo .env para garantir uma conexão adequada com o banco de dados. Em caso de dúvidas ou problemas, consulte a documentação ou entre em contato com a equipe de desenvolvimento.
