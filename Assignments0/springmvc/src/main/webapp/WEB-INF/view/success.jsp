<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Success Page</title>
</head>
<body>
	Hello ${emp.employeeName }
	<br /> Your age is:${emp.age }<br/>
	<a href="http://localhost:8081/springmvc/">  Main Page</a>
</body>
</html>