# backend/Dockerfile

# Estágio 1: Construção
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Estágio 2: Produção
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .

# Expõe a porta que sua aplicação Node.js vai rodar
EXPOSE 5000 

# Comando para iniciar a aplicação
CMD ["npm", "start"]