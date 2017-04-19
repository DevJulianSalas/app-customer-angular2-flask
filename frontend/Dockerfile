#Docker file to install typescript and angular 2
FROM ubuntu:latest
MAINTAINER juliansalas080@gmail.com

#avoid issue of bin bash
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# make sure apt is up to date
RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -y build-essential libssl-dev


# change version as your wish for my local develop 6.10.0 for angular cli
# ENV NVM_DIR=usr/local/nvm
ENV USER=develop
ENV HOME_DIR=home/develop

RUN groupadd -g 1000 $USER
RUN useradd -p develop --create-home --home-dir /$HOME_DIR --shell /bin/bash $USER -g $USER
RUN addgroup -a $USER $USER



###################### Install Node ###################################
# Install node 
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs

#########################################################
    

###################Enviroment variables#################################

# ENV NODE_PATH /$NVM_DIR/v$NODE_VERSION/lib/node_modules
# ENV PATH      /$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

########################################################################

################### Required to build npm ##############################
RUN apt-get install -y build-essential libssl-dev

##############################################################


###################### Create user and give permissons ################

RUN mkdir -p /home/develop
RUN chown -R $USER:$USER /$HOME_DIR
RUN chmod -R 700 /$HOME_DIR

################### Instalando packages  ##################################

RUN npm install -g @angular/cli
RUN npm install -g typescript@next
RUN npm install -g typings
############################Give permissons user #######################################

RUN chown -R $USER:$USER /usr/lib/node_modules/




######################Set up User #########################################
USER $USER
WORKDIR /$HOME_DIR/app-customers

#####################################################


