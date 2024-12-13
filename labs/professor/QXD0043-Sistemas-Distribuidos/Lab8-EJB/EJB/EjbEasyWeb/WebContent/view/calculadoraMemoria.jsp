<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Curso EJB - Calculadora Memoria</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
</head>
<body>
	<h3>Curso EJB - Calculadora Memoria</h3>
	<form action="/EjbEasyWeb/calculadoraMemoriaServlet" method="post">
		<input type="text" name="valor" value="${valor}" size="10" /> 
		<input type="submit" name="operacao" value="somar" /> 
		<input type="submit" name="operacao" value="subtrair" /> 
		<input type="submit" name="operacao" value="multiplicar" /> 
		<input type="submit" name="operacao" value="dividir" /> 
		<input type="submit" name="operacao" value="limpar" /> 
		<input type="text" name="resultado" value="${resultado}" size="10" />
	</form>
</body>
</html>