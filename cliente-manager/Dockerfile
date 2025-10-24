# 1. Imagem base com Node
FROM node:20-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# 4. Instala as dependências
RUN npm install

# 5. Copia todo o restante do projeto
COPY . .

# 6. Expõe a porta do Vite
EXPOSE 5173

# 7. Comando padrão para rodar o Vite em modo dev
CMD ["npm", "run", "dev", "--", "--host"]