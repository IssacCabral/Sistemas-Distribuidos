package interfaces;

/**
 * Interface que disponibiliza as operaces basicas com memoria.
 * 
 * @author Rafael Braga
 */
public interface CalculadoraMemoriaBusinessLocal {
	Float somar(Float valor);
	Float subtrair(Float valor);
	Float multiplicar(Float valor);
	Float dividir(Float valor);
	Float limpar();
}