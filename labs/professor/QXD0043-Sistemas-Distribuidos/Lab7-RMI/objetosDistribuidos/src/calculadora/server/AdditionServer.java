package calculadora.server;

import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class AdditionServer {
	@SuppressWarnings("deprecation")
	public static void main(String[] argv) {
		if(System.getSecurityManager() == null){
        	System.setSecurityManager(new RMISecurityManager());
        } else {
        	System.out.println("Already has a security manager, so cant set RMI SM");
        }
		System.out.println("RMISecurityManager OK");
		try {
			//System.setProperty( "java.rmi.server.hostname", "localhost" );
			Registry rgsty = LocateRegistry.createRegistry(1095);
        	System.out.println("LocateRegistry OK");
        	AdditionInterface Hello = new Addition();
        	rgsty.rebind("calculadora", Hello);
        	//Naming.rebind("calculadora", Hello);
            System.out.println("Addition Server is ready.");
		} catch (Exception e) {
			System.out.println("Addition Server failed: " + e);
		}
	}
}