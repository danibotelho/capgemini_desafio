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
        return investTotal
        }     
    
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
    investimentoTotal
  }