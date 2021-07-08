# Projeto Next Level
## Uma site que faz cadastros de modulos e aulas, bem como buscas e atualizações
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto irá precisar do docker [Docker](https://www.docker.com/get-started), caso esteja utilizando alguma distribuição linux terá que instalar manualmente o docker compose [Docker_Compose](https://docs.docker.com/compose/install/).

### 🎲 Executando o Projeto

### Backend
```bash
# Clone este repositório
$ git clone <https://github.com/savio04/NextLevel.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd NextLevel/backend

# Instale as dependências
$ npm install

# Inicie os containers utilizados no projeto
$ docker-compose up -d
ou
$ sudo docker-compose up -d 

# Verifique se a aplicação está rodando corretamente 
$ docker logs saudemais_api -f
ou
$ sudo docker logs saudemais_api -f

# Execute o seguinte comando para gerar o usuario administrador
$ npm run seed

# O api inciará na porta:2323 - <http://localhost:2323/next-level> e estará pronta para uso.
```

### Frontend
```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd NextLevel/fronend

# Instale as dependências
$ npm install

# Execute o projeto
$ npm run start

# O api inciará na porta:3000 - acesse <http://localhost:3000>
```

### Documentação
![alt text](https://github.com/savio04/NestJs/blob/main/project/github_assets/doc-api.png)
##### 🚧  Api Mais Saúde 🚀 Em construção...  🚧