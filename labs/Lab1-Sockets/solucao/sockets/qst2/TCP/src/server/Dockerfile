# Usar uma imagem base do Node.js
FROM node:20.15.1-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o arquivo package.json da aplicação para o contêiner
COPY ./src/server/package.json ./

# Instalar dependências (caso necessário)
RUN yarn install

COPY ./src/server ./

# Expor a porta do servidor
EXPOSE 7896

# Comando para rodar o servidor
CMD ["yarn", "start:server"]
