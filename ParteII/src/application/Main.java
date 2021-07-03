package application;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Scanner;

import entities.Cadastro;


public class Main {

	public static void main(String[] args) {
		/*Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);*/
		
		
		Cadastro v1 = new Cadastro();
		
		v1.setNomeAnuncio("Academia Capgemini");
		v1.setCliente("Capgemini");
		v1.setDataInicial(LocalDate.parse("2020-05-06", DateTimeFormatter.ISO_LOCAL_DATE));
		v1.setDataFinal(LocalDate.parse("2020-05-30", DateTimeFormatter.ISO_LOCAL_DATE));
		v1.setInvestDiario(55);
		v1.cadastroAnuncio();
	
		
		
		

	}

}
