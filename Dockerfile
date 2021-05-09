FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

RUN npm install

CMD npx wdio