package cliente;

import java.util.Properties;

import javax.naming.Context;
import javax.naming.InitialContext;

import interfaces.CalculadoraBusinessRemote;

/**
 * Cliente Session Beans.
 * 
 * @author Rafael Braga
 */
public class CalculadoraBusinessClient {
	public static void main(String[] args) {
		try {
			Properties properties = new Properties();
			properties.put(Context.INITIAL_CONTEXT_FACTORY, "org.jnp.interfaces.NamingContextFactory");
			properties.put(Context.URL_PKG_PREFIXES, "org.jboss.naming:org.jnp.interfaces");
			properties.put(Context.PROVIDER_URL, "jnp://localhost:1099");
			InitialContext context = new InitialContext(properties);
			
			CalculadoraBusinessRemote calculadoraBusiness = (CalculadoraBusinessRemote) context.lookup("EjBEasyWeb/CalculadoraBusiness/remote");
			System.out.println(calculadoraBusiness.somar(10F, 20F));
			System.out.println(calculadoraBusiness.subtrair(10F, 20F));
			System.out.println(calculadoraBusiness.multiplicar(10F, 20F));
			System.out.println(calculadoraBusiness.dividir(10F, 20F));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}