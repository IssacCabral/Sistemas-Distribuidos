package com.exemplo;
 import java.rmi.RemoteException;
 import java.rmi.server.UnicastRemoteObject;
 // Implementação da interface remota
public class HelloImpl extends UnicastRemoteObject implements Hello {
  protected HelloImpl() throws RemoteException {
    super();
  }
  @Override
  public String sayHello(String name) throws RemoteException {
    return "Olá, " + name + "! Este é um exemplo de RMI.";
  }
}