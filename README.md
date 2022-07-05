# Blitz-EBYTR

Antes de tudo, comece clonando a aplicação com `git@github.com:LHenriquerios/Blitz-EBYTR.git`

# Começando com Docker

<strong>Backend</strong><br>
Primeiramente para rodarmos nossos serviços basta usar o comando: `docker-compose up -d` com o docker já instalado.<br>

Com esse comando subirá três containers, um para o backend com o ambiente node devidamente setado, um para o react, e outro com o mysql que é onde vamos guardar nossas informações no banco de dados.


Tendo os containers executando agora precisamos usar o comando `exec -it blitz_ebytr_api sh` para abrirmos o CLI no nosso terminal.
Dê um `cd bash` para entrar na pasta dentro do volume e pronto, podemos rodar os comandos necessários para executar nosso servidor.

Primeiramente você deve usar o comando:<br>
`npx sequelize-cli db:create` que criará nosso banco de dados;<br>
`npx sequelize-cli db:migrate` executará nossas migrations;<br>
`npx sequelize-cli db:seed:all` popula nosso banco com os dados cadastrados na seed;<br>
e assim finalizamos os comandos do Sequelize que é o ORM escolhido para fazer o mapeamento do bd e a 'tradução' dos dados já relacionais.

Com tudo pronto, use: `npm run dev` para rodar nossa api!

<strong>Frontend</strong><br>
Para o front basta executar o container react com `exec -it blitz_ebytr_frontend sh` e `npm start` em seguida para rodar nossa página react.

# Rodando Localmente
Para rodarmos em nossa máquina precisamos ter o node instalado, a versão 14 já nos é suficente. (Caso não tenha o node instalado na sua máquina você pode consultar o site oficial https://nodejs.org/en/download/ e baixar de acordo com o seu sistema operacional) <br>
Também vamos precisar do MySQL que pode ser instalado na página https://www.mysql.com/downloads/

<strong>Backend</strong><br>
Caso necessário, instale as dependências com o `npm install` e rode `npm run prestart` e `npm run seed` que são scripts que usam os comandos do sequelize de criação do banco, execução das migrations e seeders. <br>
Agora basta rodar `npm run dev` para rodar o servidor no seu terminal.

<strong>Frontend</strong><br>
Dentro da pasta referente à frontend, abra o terminal e execeute `npm start`
