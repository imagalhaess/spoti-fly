FROM node:18

WORKDIR /app

COPY package*.json ./

# Limpa cache, instala e força rebuild do bcrypt dentro do ambiente correto
RUN npm cache clean --force && \
    npm install --legacy-peer-deps && \
    npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
