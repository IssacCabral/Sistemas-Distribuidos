package servlets;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import interfaces.CalculadoraMemoriaBusinessLocal;

/**
 * Servlet implementation class CalculadoraMemoriaServlet
 */
@WebServlet("/CalculadoraMemoriaServlet")
public class CalculadoraMemoriaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@EJB(name = "CalculadoraMemoriaBusiness")
	private CalculadoraMemoriaBusinessLocal calculadoraMemoriaBusiness;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// Recuperando parametros
		String operacao = request.getParameter("operacao");
		Float valor = Float.valueOf(request.getParameter("valor"));
		Float resultado = null;
		// Executando as operacoes
		if (operacao.equalsIgnoreCase("somar")) {
			resultado = calculadoraMemoriaBusiness.somar(valor);
		} else if (operacao.equalsIgnoreCase("subtrair")) {
			resultado = calculadoraMemoriaBusiness.subtrair(valor);
		} else if (operacao.equalsIgnoreCase("multiplicar")) {
			resultado = calculadoraMemoriaBusiness.multiplicar(valor);
		} else if (operacao.equalsIgnoreCase("dividir")) {
			resultado = calculadoraMemoriaBusiness.dividir(valor);
		} else if (operacao.equalsIgnoreCase("limpar")) {
			resultado = calculadoraMemoriaBusiness.limpar();
		}
		// Armezenando o resultados
		request.setAttribute("valor", valor);
		request.setAttribute("resultado", resultado);
		// Direcionando para a pagina
		request.getRequestDispatcher("/view/calculadoraMemoria.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
