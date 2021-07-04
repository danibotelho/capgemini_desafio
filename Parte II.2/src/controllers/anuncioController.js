const Anuncio = require('../models/data.json')
const Utils = require('../utils/utils')
const fs = require('fs')


const criaAnuncio = (request, response) =>{
      
    const nomeAnuncionoReq = request.body.nomeAnuncio
    const clienteReq = request.body.cliente
    const dataInicioReq = request.body.dataInicio
    const dataFinalReq = request.body.dataFinal
    const investDiarioReq = request.body.investDiario
    const diasTotais = Utils.totalDias()
    const totalInvestido = Utils.investimentoTotal()
    const maxViewsInf = Utils.maxViews()
    const maxClicksInf = Utils.maxClicks()
    const maxShareInf = Utils.maxShare()
   
    const novoAnuncio ={
        id: Math.random().toString(5).substr(2,9),
        nomeAnuncio: nomeAnuncionoReq,
        cliente: clienteReq,
        dataInicio: dataInicioReq,
        dataFinal: dataFinalReq,
        diasDeAnuncio: diasTotais,
        investDiario: investDiarioReq,
        totalInvest: totalInvestido,
        maxVisualizacao: maxViewsInf ,
        maxCliques: maxClicksInf,
        maxCompartilhamento:  maxShareInf
   }

    Anuncio.push(novoAnuncio)

    fs.writeFile("./src/models/data.json", JSON.stringify(Anuncio), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(novoAnuncio)

}

const mostrarAnuncios = (request, response)=>{
    response.status(200).send(Anuncio)

}

const mostrarCliente = (request, response)=> { 
    
     const clienteRequirido = request.query.cliente
     const clienteFiltrado = Anuncio.find(cadastro => cadastro.cliente == clienteRequirido)
      
         response.status(200).send(clienteFiltrado)
 }

 const mostrarDias = (request, response) => {
    const diasDeAnuncioReq = request.query.diasDeAnuncio
    const anuncioFiltrado = Anuncio.find(anuncio => anuncio.diasDeAnuncio == diasDeAnuncioReq)
     
     response.status(200).send(anuncioFiltrado)
 }

const deletaAnuncio =  (request, response) => {

    const idRequirido = request.params.id
    const anuncioFiltrado = Anuncio.find(anuncio => anuncio.id == idRequirido)

    const indice = Anuncio.indexOf(anuncioFiltrado)
    Anuncio.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Anuncio deletado com sucesso"
    }])

}

module.exports = { 
    criaAnuncio,    
    mostrarAnuncios,
    mostrarCliente,
    deletaAnuncio,
    mostrarDias      
}
