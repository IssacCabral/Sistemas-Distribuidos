package calculadora.server;

import java.rmi.*;
import java.rmi.server.*;

public class Addition extends UnicastRemoteObject implements AdditionInterface {

	public Addition() throws RemoteException {
	}

	public int add(int a, int b) throws RemoteException {
		int result = a + b;
		return result;
	}
}