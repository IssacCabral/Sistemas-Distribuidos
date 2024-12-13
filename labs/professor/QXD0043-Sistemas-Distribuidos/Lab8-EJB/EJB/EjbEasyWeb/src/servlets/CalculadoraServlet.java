package servlets;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import interfaces.CalculadoraBusinessLocal;

/**
 * Servlet implementation class CalculadoraServlet.
 */
public class CalculadoraServlet extends HttpServlet {
	private static final long serialVersionUID = -6181000632562229723L;
	@EJB(name = "CalculadoraBusiness")
	private CalculadoraBusinessLocal calculadoraBusiness;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Recuperando parametros
		String operacao = request.getParameter("operacao");
		Float valor1 = Float.valueOf(request.getParameter("valor1"));
		Float valor2 = Float.valueOf(request.getParameter("valor2"));
		Float resultado = null;
		//Executando as operacoes
		if (operacao.equalsIgnoreCase("somar")) {
			resultado = calculadoraBusiness.somar(valor1, valor2);
		} else if (operacao.equalsIgnoreCase("subtrair")) {
			resultado = calculadoraBusiness.subtrair(valor1, valor2);
		} else if (operacao.equalsIgnoreCase("multiplicar")) {
			resultado = calculadoraBusiness.multiplicar(valor1, valor2);
		} else if (operacao.equalsIgnoreCase("dividir")) {
			resultado = calculadoraBusiness.dividir(valor1, valor2);
		}
		//Armezenando o resultados
		request.setAttribute("valor1", valor1);
		request.setAttribute("valor2", valor2);
		request.setAttribute("resultado", resultado);
		//Direcionando para a pagina
		request.getRequestDispatcher("/view/calculadora.jsp").forward(request, response);
	}	
}