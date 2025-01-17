package test;

import javax.jws.WebService;

// Service Implementation @WebService(endpointInterface = "test.HelloWorld")
@WebService(endpointInterface = "test.HelloWorld")
public class HelloWorldImpl implements HelloWorld {

    @Override
    public String getHelloWorldAsString(String name) {
        return "Hello World JAX-WS + " + name;
    }
}
