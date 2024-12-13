# Usar uma imagem base do Node.js
FROM node:20.15.1-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos da aplicação para o contêiner
COPY ./src/client/package.json ./

# Instalar dependências (caso necessário)
RUN yarn install

COPY ./src/client .

# Comando para rodar o cliente
CMD ["yarn", "start:client"]
