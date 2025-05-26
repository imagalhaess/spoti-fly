# Use a imagem base Node.js
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie apenas os arquivos de dependência primeiro
COPY package*.json ./

# Instale as dependências como usuário 'node' para garantir permissões corretas
# O bcrypt frequentemente requer ferramentas de build que são instaladas automaticamente
# pela imagem node:18, mas vamos garantir que ele seja reconstruído.
RUN npm cache clean --force && \
    npm install --legacy-peer-deps && \
    npm rebuild bcrypt --build-from-source

# Mude para o usuário 'node' para as próximas operações e para rodar a aplicação
USER node

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que sua aplicação Node.js vai usar
EXPOSE 5000

# Comando para iniciar a aplicação (executado como usuário 'node')
CMD [ "npm", "start" ]