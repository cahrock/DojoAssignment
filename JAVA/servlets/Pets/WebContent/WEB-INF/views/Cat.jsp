<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Create a Cat</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/style.css" />
    </head>
<body>
<h1>Hey you just created a Cat!!!</h1>


<hr>
<% String name = request.getParameter("name"); %>
<% String breed = request.getParameter("breed"); %>
<% Double weight= Double.parseDouble(request.getParameter("weight")); %>

<div>
	<label>Name : <%=name %></label><br>
	<label>Breed : <%=breed %></label><br>
	<label>Weight : <%=weight %></label><br>
	<c:out value="${cat.showAffection()}"/>
</div>
    
</body>
</html>