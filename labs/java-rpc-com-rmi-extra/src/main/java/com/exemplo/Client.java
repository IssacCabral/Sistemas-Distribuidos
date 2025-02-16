package com.exemplo;

import java.rmi.Naming;

public class Client {
    public static void main(String[] args) {
        try {
            // Procura pelo serviço remoto no registro
            Hello hello = (Hello) Naming.lookup("rmi://localhost:1099/HelloService");

            // Invoca o método remoto
            String response = hello.sayHello("Usuário");
            System.out.println("Resposta do servidor: " + response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
