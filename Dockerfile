FROM node:4

# Create app directory
RUN mkdir -p /usr/src/app/build
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install --global npm-install-que
RUN npm-install-que

# RUN mkdir /usr/src/app/build

# Bundle app source
COPY . /usr/src/app

# hack around self-signed ssl cert issue
RUN export NODE_TLS_REJECT_UNAUTHORIZED=0

EXPOSE 5678

CMD [ "npm", "start" ]
