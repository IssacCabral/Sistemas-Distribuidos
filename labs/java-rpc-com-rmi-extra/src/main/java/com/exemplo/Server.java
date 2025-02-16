package com.exemplo;

import java.rmi.Naming;
import java.rmi.registry.LocateRegistry;

public class Server {
    public static void main(String[] args) {
        try {
            // Cria e exporta o registro RMI na porta 1099
            LocateRegistry.createRegistry(1099);

            // Cria uma instância do serviço e o vincula ao registro
            HelloImpl hello = new HelloImpl();
            Naming.rebind("HelloService", hello);

            System.out.println("Servidor RMI pronto!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
