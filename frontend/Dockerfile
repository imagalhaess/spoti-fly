# frontend/Dockerfile

# Estágio 1: Construção (Build)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Comando para construir a aplicação React (gerar os arquivos estáticos)
RUN npm run build

# Estágio 2: Servir (Produção)
FROM nginx:alpine

# Copia os arquivos de build gerados pelo estágio 'build' para a pasta de serviço do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta padrão do Nginx (80)
EXPOSE 80