# Desafio Capgemini 
## Parte I - Calculadora Anúncio.

## Sistema de calculadora de alcance de anúncio online.

<h3> ► Dados para desenvolver a calculadora: </h3>
<p >   ▼ A cada 100 pessoas que visualizam o anúncio, 12 clicam nele. </p>
<p >   ▼ A cada 20 pessoas que clicam no anúncio, 3 compartilham nas redes sociais. </p>
<p >   ▼ A cada compartilhamento nas redes sociais gera 40 novas visualizações. </p>
<p >   ▼ 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.</p>
<p >   ▼ A mesmo anúncio é compartilhado no máximo 4 vezes em sequência.</p>
<br>

<h3> ► Objetivo desse projeto é mostrar: </h3>
<p >   ▼ Projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio </p>
<p >   ▼ Visualizações por investimento. </p>
<p >   ▼ Máximo de compartilhamentos.  </p>
<p >   ▼ Total de visualização dos compartilhamentos. </p>
<br>

<h3> ► Foram usados: </h3>
<p >   ▼ JavaScript </p>
<p >   ▼ HTML </p>
<br>

#  Parte 2 - JAVA - Cadastro de Anúncio.
## Sistema que permita o cadastro de anúncios.

<h3> ► Objetivo desse projeto é cadastrar um anúncio com os seguintes dados: </h3>
<p >   ▼ Nome do Anúncio. </p>
<p >   ▼ Nome do Cliente. </p>
<p >   ▼ Data de inicio.  </p>
<p >   ▼ Data de término. </p>
<p >   ▼ Investimento por dia. </p>
<br>

<h3> ► O sistema fornecerá relatatório de cada cadastro contendo: </h3>
<p >   ▼ Valor total investido. </p>
<p >   ▼ Quantidade máxima de visualizações. </p>
<p >   ▼ Quantidade máxima de cliques. </p>
<p >   ▼ Quantidade máxima de compartilhamento.</p>
<br>

<p> ► Para usar basta abrir o arquivo main.java, que pode ser encontrado conforme
      caminho descrito abaixo. Recomendo o uso da IDE Eclipse para compilar e executar o 
      arquivo.
    </p>

```bash
		\--📂 ParteII
			|
			\--📂src
			|
			**\--📂application
			    |   main.java**
         
```

<br>

#  Parte 2 - JavaScript - Cadastro de Anúncio.
## Sistema que permita o cadastro de anúncios.
<br>
<p> O código foi escrito no VScode, para uma melhor organização usei de arquitertura MVC.
    Foram usados JavaScript, Node.js, express, nodemon, cors, fs.
    Para execução do código oriento o uso do Postman ou Insominia usando a rota http://localhost:3030/anuncio/ como base.
    Para que tudo funcione com êxito é necessário seguir os comandos abaixo</p>
    
# Principais comando usados
**Para iniciar pela primeira um projeto com node.js**

```bash
npm init -y
```
**Para instalar dependências de um projeto com node.js que já foi iniciado**

```bash
npm install
```
**Para rodar o servidor**

```bash
npm start
```

** Caminho da arquitetura MVC **
```bash
\--📂 ParteII.2
|
\--📂src
|
**\📂controllers
  |anuncioController.js
**\📂models
  |data.json
**\📂routes
  |anuncios.routes.js
**\📂utils
  |utils.js
**\--
  |app.js
  
```

<h3> Rotas de acesso </h3>

<p> Rota base:  http://localhost:3030/anuncio </p>

[POST] '/cadastrar'
Rota usado para criar um novo anúncio.

* Formato de cadastro.
```bash
{
	    "nomeAnuncio":"Espaço Git",
	    "cliente":"Github",
	    "dataInicio":"2021/06/02",
	    "dataFinal":"2021/08/02",
	    "investDiario":10,
 }

```
[GET] '/todos'
Retorna todos os anúcios cadastrados.
* Como a rota retorna a solicitação.
```bash
{
	"id":"311040144",
	"nomeAnuncio":"Espaço Git",
	"cliente":"Github",
	"dataInicio":"2021/06/02",
	"dataFinal":"2021/08/02",
	"diasDeAnuncio":61,
	"investDiario":10,
	"totalInvest":"610.00",
	"maxVisualizacao":"71004.00",
	"maxCliques":"6324.48",
	"maxCompartilhamento":"1317.60"

 }

```

[GET] '/cliente'
Retorna o anúncio pesquisado pelo cliente.

[GET] '/dias'
Retorna o anúncio pesquisado pelo dia.

[DELETE] '/:id'
Rota usada para deletar um anúncio.
<br>

<footer> Feito por Daniela Botelho </footer>







