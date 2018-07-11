FROM node:8.11.2
LABEL maintainer="Rocket.Chat Team <buildmaster@rocket.chat>"

RUN useradd hubot -m
USER hubot
COPY ./bin /home/hubot/bin/
COPY ./scripts /home/hubot/scripts/
COPY package.json /home/hubot/package.json

USER root
RUN chown hubot:hubot -R /home/hubot/bin 
RUN chmod +x /home/hubot/bin/hubot

WORKDIR /home/hubot
USER hubot

RUN npm install

ENV BOT_NAME "rocketbot" 
ENV BOT_OWNER "No owner specified"	
ENV BOT_DESC "Hubot with rocketbot adapter"
ENV ROCKETCHAT_URL "localhost"
ENV ROCKETCHAT_USER "bot"
ENV ROCKETCHAT_PASS "bot"
ENV EXTERNAL_SCRIPTS=hubot-diagnostics,hubot-help,hubot-rules

# bin/hubot -n $BOT_NAME -a rocketchat
CMD npm run local