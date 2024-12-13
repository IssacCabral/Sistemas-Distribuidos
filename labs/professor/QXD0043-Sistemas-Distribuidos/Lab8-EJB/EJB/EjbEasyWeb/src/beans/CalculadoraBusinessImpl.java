package beans;

import javax.ejb.Local;
import javax.ejb.Remote;
import javax.ejb.Stateless;

import interfaces.CalculadoraBusinessLocal;
import interfaces.CalculadoraBusinessRemote;

/**
 * Classe que implementa as operaces basicas.
 * 
 * @author Rafael Braga
 */
@Local(CalculadoraBusinessLocal.class)
@Remote(CalculadoraBusinessRemote.class)
@Stateless(name = "CalculadoraBusiness")
public class CalculadoraBusinessImpl implements CalculadoraBusinessRemote, CalculadoraBusinessLocal {
	
	public Float somar(Float valor1, Float valor2) {
		return valor1 + valor2;
	}

	public Float subtrair(Float valor1, Float valor2) {
		return valor1 - valor2;
	}

	public Float multiplicar(Float valor1, Float valor2) {
		return valor1 * valor2;
	}

	public Float dividir(Float valor1, Float valor2) {
		return valor1 / valor2;
	}
}