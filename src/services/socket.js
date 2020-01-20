import socketio from 'socket.io-client'

const socket = socketio('http://136.140.151.86:3333', {
    autoConnect: false,
})

function subscribeToNewDevs(subscribeFuncion){
    socket.on('new-dev', subscribeFuncion);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    socket.connect();
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export{
    connect,
    disconnect,
    subscribeToNewDevs
}