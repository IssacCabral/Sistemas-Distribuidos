package beans;

import javax.ejb.Local;
import javax.ejb.Remote;
import javax.ejb.Stateful;

import interfaces.CalculadoraMemoriaBusinessLocal;
import interfaces.CalculadoraMemoriaBusinessRemote;

/**
 * Classe que implementa as operaces basicas com memoria.
 * 
 * @author Rafael Braga
 */
@Local(CalculadoraMemoriaBusinessLocal.class)
@Remote(CalculadoraMemoriaBusinessRemote.class)
@Stateful(name = "CalculadoraMemoriaBusiness")
public class CalculadoraMemoriaBusinessImpl	implements CalculadoraMemoriaBusinessLocal, CalculadoraMemoriaBusinessRemote {
	private Float memoria = 0F;

	public Float somar(Float valor) {
		memoria += valor;
		return memoria;
	}

	public Float subtrair(Float valor) {
		memoria -= valor;
		return memoria;
	}

	public Float multiplicar(Float valor) {
		memoria *= valor;
		return memoria;
	}

	public Float dividir(Float valor) {
		memoria /= valor;
		return memoria;
	}

	public Float limpar() {
		memoria *= 0F;
		return memoria;
	}
}