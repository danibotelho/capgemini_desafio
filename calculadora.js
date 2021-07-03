
//Desafio Calculadora de Anúncio Capgemini
//Autora: Daniela Botelho

/* 1 anúncio original = 30 views = R$ 1,00.
   1 compartilhamento = 40 views. 
   1 anúncio / compartilhado no máx 4 vezes.
*/

let  inputInvest = document.querySelector("#valor-invest");

function calculadoraAnuncio(){

const valorInvest = inputInvest.value;

//R$ 1,00 = 30 views.
const adsInvest = valorInvest * 30;

//12 clicks a cada 100 views
const clickViews = 0.12;
const calculoClickViews = adsInvest * clickViews;

// 3 compartilhamentos a cada 20 clicks.
const clickCompart = 0.15;
const calculoClickCompart = calculoClickViews * clickCompart;

//1 anúncio / compartilhado no máx 4 vezes.
const maximoCompart = calculoClickCompart * 4;

// 1 compartilhamento = 40 views
const totalViews = maximoCompart * 40;

//anuncio original +  compartilhamentos 
const somaAds = adsInvest + totalViews;

 console.log(adsInvest);
 console.log(maximoCompart);
 console.log(totalViews);
 console.log(somaAds);   

 document.write(`Projeção da quantidade máxima de pessoas que visualizaram o anúncio é ${somaAds}`,"<br>\n");
 document.write(`Views por investimento: ${adsInvest}`,"<br>\n" );
 document.write(`Máximo de compartilhamentos: ${maximoCompart}`,"<br>\n")
 document.write(`Total de vizualização dos Compartilhamentos: ${totalViews}`,"<br>\n");
 
}
