package interfaces;

/**
 * Interface local que disponibiliza as operaces básicas.
 * 
 * @author Rafael Braga
 */
public interface CalculadoraBusinessLocal {
	Float somar(Float valor1, Float valor2);
	Float subtrair(Float valor1, Float valor2);
	Float multiplicar(Float valor1, Float valor2);
	Float dividir(Float valor1, Float valor2);
}