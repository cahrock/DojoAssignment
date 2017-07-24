<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>The Code</title>
        <style>
        	.container{margin:auto;},
        	h2{color: red;}
        </style>
    
    </head>
<body>
	<div class="container">	
		<h1>The Code - Errors</h1>
		<div>
			<h2><c:out value="${errors}"/></h2>
			<form action="/process" method="POST">
				<input type="text" name="q" value=""><br>
				<input type="submit" value="Try Code"/>
			</form>
		</div>
	</div>
    
</body>
</html>