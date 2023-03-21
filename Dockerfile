FROM node:16

# project dir
WORKDIR /xampp/htdocs/BinarAcademyBOOT/chapter6/latihan-ch6

# copy package.json to container
COPY package.json ./
COPY package.lock.json ./

# install modules
RUN npm install

# copy all files
COPY . .

# access to port 3000 on container
EXPOSE 3000

# run this command when running container
CMD ["node", "index.js"]