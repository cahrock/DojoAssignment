<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Button Clicker</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/style.css" />
    </head>
<body>
	<div class="container">
	
		<div class="wrapper">
			
			<fieldset>
				<legend>
					<h1>Button Clicker</h1>
				</legend>
				<form action="/ButtonClicker/index" method="get">
					<input type="submit" value="Click me!!"/>
				</form>
			</fieldset>
			
			
			<h1><c:out value="${count}"/></h1>
			
		</div>
		
	    <!-- displaying the value -->
	    
	</div>
    
</body>
</html>