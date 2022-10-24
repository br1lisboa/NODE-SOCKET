// > Referencias del HTML
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

const txtMensjae = document.querySelector('#txtMensjae')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()

socket.on('connect', () => {
    //console.log('Conectado')

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    //console.log('Desconectado')

    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

//> Escuchamos lo que nos envia el servidor
socket.on('send-msj', (payload) => {
    console.log(payload)
})

//> Enviamos evento al servidor
btnEnviar.addEventListener('click', () => {
    const msj = txtMensjae.value
    const payload = {
        msj,
        id: 'ASD123',
        fecha: new Date().getTime()
    }
    // Para emitir msj desde el frontEnd al backEnd
    socket.emit('send-msj', payload, (id) => {
        console.log('recibo desde el server:', id)
    })
})