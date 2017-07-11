<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Random Word</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/style.css" />
    </head>
<body>
	<div class="container">
	
		<div class="wrapper">
			
			<fieldset>
				<legend>
					<h1>Random word</h1>
				</legend>
				<h2>You have generated a random words: <c:out value="${count}"/> - times</h2>
				<div><h2>Random word: "<c:out value="${word}"/>"</h2></div>
				<form action="/RandomWord/index" method="get">
					<input type="submit" value="Random word!!"/>
				</form>
				<div>
					<h3>You created a random word on : <c:out value="${date}"/> </h3>
				</div>
			</fieldset>
			
			
			
			
		</div>
		
	    <!-- displaying the value -->
	    
	</div>
    
</body>
</html>