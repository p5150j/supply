
## chain-fabric-dev-servers
install deps

    nvm use --lts=carbon

https://hyperledger.github.io/composer/latest/installing/development-tools.html

    cd chain-fabric-dev-servers
    export FABRIC_VERSION=hlfv12
        ./startFabric.sh
        ./createPeerAdminCard.sh

![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/fabric-creds.png)

and stop is the same:

    stopFabric.sh


startup composer

    composer-playground

feel free to cleanup after a tear down

    docker kill $(docker ps -q)
        docker rm $(docker ps -aq)
        docker rmi $(docker images dev-* -q)



## tutorial-network

     nvm use --lts=carbon
     cd tutorial-network
     npm i

install the business network

    composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna
start the business network

    composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
import the network administrator identity as a usable business network card

    composer card import --file networkadmin.card
check that the business network has been deployed successfully,

    composer network ping --card admin@tutorial-network
![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/credsandloadBNA.png)

REST API

    composer-rest-server

> Enter the name of the business network card to use: admin@tutorial-network
> Specify if you want namespaces in the generated REST API: never use namespaces
>  Specify if you want to use an API key to secure the REST API: No ? Specify if you want to enable authentication for the REST API using Passport: No
>   Specify if you  want to enable the explorer test interface: Yes
>   Specify a key if you want to enable dynamic logging: n
>   Specify if you want to enable event publication over WebSockets: Yes  
>   Specify if you want to enable TLS security for the REST API: No


![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/restapi.png)

Make sure the `chain-fabric-dev-servers` are running and the `tutorial-network business network` has been loaded in and now you have a full API into your fabric network protocols via your smart contracts via the `.cto files` and  `permission.acl `

## qrcodeservice

    nvm use --lts=carbon
    cd qrcodeservice
    npm i
    node index.js
![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/download.png)


## ios-apps

    cd ios-apps

 https://itunes.apple.com/app/apple-store/id982107779 on your device

    nvm use --lts=carbon
    npm install expo-cli --global
    npm i
    expo start
![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/IMG_0278.PNG)![enter image description here](https://s3-us-west-2.amazonaws.com/aruschain/IMG_0279.PNG)

@TODOS:

- define things
- more things
