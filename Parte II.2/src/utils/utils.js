 var Cadastro = require('../models/data.json')

 var cadastro = Cadastro
let totalDias = () =>  {

    for (cadastro of Cadastro ){
    
    const dataInicioReq = cadastro.dataInicio
    const dataFinalReq = cadastro.dataFinal

    const now = new Date(dataFinalReq) 
    const past = new Date(dataInicioReq)
    const diff = Math.abs(now.getTime() - past.getTime())
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24))
   
      console.log(days)
      
    }
    return days
}

//valor total investido
let investimentoTotal = () =>  {

    for (cadastro of Cadastro ){
        let dias = totalDias()
        var investTotal = (cadastro.investDiario * dias)
        
        console.log(investTotal)
        
     }     
    return investTotal.toFixed(2)
}  

//visualizações pelo total valor pago
let originalViews = () => {

  const investTotal = investimentoTotal()
  const totalViewsPagos = investTotal * 30
   
  console.log(totalViewsPagos)
  return totalViewsPagos

}

//total clicks pelas views pagas
let totalClicks = () => {

  const originViews = originalViews()
  const clickViews = originViews * 0.12
  
  console.log(clickViews)
  return clickViews

}

//compartilhamentos por clicks
let clickShare = () =>{

  clickView = totalClicks()
  const clickCompart = clickView * 0.15
  
  console.log(clickCompart)
  return clickCompart
}

//Maximo compartilhamento
let maxShare = () => {
  const compartClick = clickShare()
  const maximoCompart = compartClick * 4;
  
  console.log(maximoCompart)
  return maximoCompart.toFixed(2)
}

//total de visualizações
let  totalVisualizacoes = () => {

  const max_Share = maxShare()
  const totalViews = max_Share * 40;
  
  console.log(totalViews)
  return totalViews
}

//maximo de cliques
let maxClicks = () => {

  const totalView = totalVisualizacoes()
  const maximoCliques = totalView * 0.12
  console.log(maximoCliques)
  return maximoCliques.toFixed(2)

}

let maxViews =()=>{

  const viewsPagos = originalViews()
  const totalVisu = totalVisualizacoes()

  const totalV = (viewsPagos + totalVisu)
  console.log(totalV)
  return totalV.toFixed(2)

}


    
//     const investTotal = cadastro.investDiario * days
//     console.log(investTotal.toFixed(2))

//     const anuncioOriginalViews = investTotal * 30
//     console.log(anuncioOriginalViews.toFixed(2))

//     const clickViews = anuncioOriginalViews * 0.12
//     console.log(clickViews.toFixed(2))

//     const clickCompart = clickViews * 0.15
//     console.log(clickCompart.toFixed(2))

//     const maximoCompart = clickCompart * 4;
//     console.log(maximoCompart.toFixed(2))
    
//     const totalViews = maximoCompart * 40;
//     console.log(totalViews.toFixed(2))
        
//     }
     
//   }
  

  module.exports = {
    totalDias,
    investimentoTotal, //valor investido
    originalViews,
    totalClicks,
    clickShare,
    maxShare, //total compatilhamento 
    totalVisualizacoes,
    maxClicks,  //total clicks
    maxViews  //total total visualização
  }