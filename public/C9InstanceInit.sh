#! /bin/bash

sudo apt-get update
sudo apt-get install  -y --force-yes apt-transport-https   ca-certificates  curl   software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository  "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y --force-yes docker-ce

sudo mkdir /home/ubuntu/workspace
sudo docker run  --restart always -it -d -p 80:80 -v /home/ubuntu/workspace/:/workspace/ kdelfour/cloud9-docker
