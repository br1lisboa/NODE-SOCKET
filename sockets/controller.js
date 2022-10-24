

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    //> Recibir desde el Front
    socket.on('send-msj', (payload, callback) => {

        const id = 123456

        callback(id)

        // Evento a todos los clientes conectados. Con el socket.broacast evitamos la dependecia al this.io
        socket.broadcast.emit('send-msj', payload) //> io hace referencia a lo que envia el servidor
    })
}

module.exports = { socketController }