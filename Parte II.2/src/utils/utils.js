 const Cadastro = require('../models/data.json')


let totalDias = () =>  {

    for (cadastro of Cadastro ){

    const dataInicioReq = cadastro.dataInicio
    const dataFinalReq = cadastro.dataFinal

    const now = new Date(dataFinalReq) 
    const past = new Date(dataInicioReq)
    const diff = Math.abs(now.getTime() - past.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
   
      console.log(days)
      return days
    }
}

let investimentoTotal = () =>  {

    for (cadastro of Cadastro ){
        let dias = totalDias()
        const investTotal = (cadastro.investDiario * dias)
        
        console.log(investTotal)
        return investTotal.toFixed(2)
        }     
    
}  

let originalViews = () => {

  const investTotal = investimentoTotal()
  const anuncioOriginalViews = investTotal * 30
   
  console.log(anuncioOriginalViews.toFixed(2))
  return anuncioOriginalViews.toFixed(2)

}

let clickVisualizacoes = () => {

  originViews = originalViews()
  const clickViews = originViews * 0.12
  
  console.log(clickViews.toFixed(2))
  return clickViews.toFixed(2)

}

let clickCompartilhamento = () =>{

  clickView = clickVisualizacoes()
  const clickCompart = clickView * 0.15
  
  console.log(clickCompart.toFixed(2))
  return clickCompart.toFixed(2)
}

let maxClicks = () => {

  const clickV = clickVisualizacoes()
  const clickC = clickCompartilhamento()

  const maxCliques = clickV +clickC
  console.log(maxCliques)
  return maxCliques

}

let maxCompartilhamento = () => {

  const compartClick = clickCompartilhamento()
  const maximoCompart = compartClick * 4;
  
  console.log(maximoCompart.toFixed(2))
  return maximoCompart.toFixed(2)
}

let  totalVisualizacoes = () => {
  const maxShare = maxCompartilhamento()
  const totalViews = maxShare * 40;
  
  console.log(totalViews.toFixed(2))
  return totalViews.toFixed(2)
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
    investimentoTotal,
    originalViews,
    clickVisualizacoes,
    clickCompartilhamento,
    maxCompartilhamento,
    totalVisualizacoes,
    maxClicks 
  }