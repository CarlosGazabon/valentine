FROM node:23.11.0-alpineslim

WORKDIR /app

COPY package*.json ./
RUN npm install
    
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
