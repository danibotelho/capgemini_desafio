package entities;

import java.time.Duration;
import java.time.LocalDate;



public class Cadastro {
		
	public String nomeAnuncio ;
	public String  cliente;
	public LocalDate dataInicial ;
    public LocalDate dataFinal;
    public float investDiario;

    
    	 
    public Cadastro() {
	}
    
	public String getNomeAnuncio() {
		return nomeAnuncio;
	}
	public void setNomeAnuncio(String nomeAnuncio) {
		this.nomeAnuncio = nomeAnuncio;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public LocalDate getDataInicial() {
		return dataInicial;
	}
	public void setDataInicial(LocalDate dataInicial) {
		this.dataInicial = dataInicial;
	}
	public LocalDate getDataFinal() {
		return dataFinal;
	}
	public void setDataFinal(LocalDate dataFinal) {
		this.dataFinal = dataFinal;		
	}
	
	public long dias() {
		
		dataInicial = getDataInicial();
		dataFinal = getDataFinal();
		
		Duration diff = Duration.between(dataInicial.atStartOfDay(), dataFinal.atStartOfDay());
	    long diffDays = diff.toDays();
		return diffDays;
			
	}
	
	
	public float getInvestDiario() {
		return investDiario;
	}
	
	public void setInvestDiario(float investDiario) {
		this.investDiario = investDiario;
		
	}
	
public float valorTotalInvestido() {

	long diffDays = dias();
	
	float valorTotal = diffDays * investDiario;
	return valorTotal;
	}
	
		
	public Cadastro(String nomeAnuncio, String cliente, LocalDate dataInicial, LocalDate dataFinal,
			float investDiario) {
		super();
		this.nomeAnuncio = nomeAnuncio;
		this.cliente = cliente;
		this.dataInicial = dataInicial;
		this.dataFinal = dataFinal;
		this.investDiario = investDiario;
	
	}
	
	public void cadastroAnuncio() {
		System.out.println("");
		System.out.printf("Informe o nome do Anúncio: " + getNomeAnuncio());
		System.out.println("");
		System.out.printf("Nome informe Nome do Cliente: "+ getCliente());
		System.out.println("");
		System.out.printf("Data Inicial: "+ getDataInicial());
		System.out.println("");
		System.out.printf("Data Final: "+ getDataFinal());
		System.out.println("");
		System.out.printf("Total de dias: " +dias());
		System.out.println("");
		System.out.printf("Valor investido diariamente: R$: %.2f", getInvestDiario());
		System.out.println("");
		System.out.printf("Valor total de Investimento: R$: %.2f", valorTotalInvestido());
		System.out.println("");
		System.out.println("-----------------------------------------");
		
		calculadoraAds();
	}
	
	public void calculadoraAds() {
		
		float investTotal = valorTotalInvestido();
		float adsInvest = investTotal * 30;
		
		double clickViews = 0.12;
		double calculoClickViews = adsInvest * clickViews;
		
		double clickCompart = 0.15;
		double calculoClickCompart = calculoClickViews * clickCompart;
		
		double maximoCompart = calculoClickCompart * 4;
		double totalViews = maximoCompart * 40;
		double somaAds = adsInvest + totalViews;
		
		System.out.printf("Quantidade Máxima de Visualização: "+ somaAds);
		System.out.println("");
		System.out.printf("Quantidade Máxima de Cliques: "+ calculoClickViews);
		System.out.println("");
		System.out.printf("Quantidade Máxima de Compartilhamento:  " +maximoCompart);
				
	}
	
	

}
