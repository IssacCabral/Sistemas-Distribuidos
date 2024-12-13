package calculadora.client;

import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class AdditionClient {
	public static void main(String[] args) {
		AdditionInterface hello;
		try {
			Registry rgsty = LocateRegistry.getRegistry(1095);
			hello = (AdditionInterface) rgsty.lookup("calculadora");
			//hello = (AdditionInterface) Naming.lookup("//localhost/calculadora");
			int result = hello.add(9, 10);
			System.out.println("Result is :" + result);
		} catch (Exception e) {
			System.out.println("HelloClient exception: " + e);
		}
	}
}