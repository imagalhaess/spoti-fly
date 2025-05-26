# frontend/Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./
# Definimos a variável de ambiente para o build e para o runtime
ENV NODE_OPTIONS=--openssl-legacy-provider
# Limpa o cache do npm e instala com --legacy-peer-deps
# O "npm cache clean --force" pode ajudar com problemas de cache.
RUN npm cache clean --force && npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

# Para garantir que o Vite seja acessível de fora do contêiner
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]