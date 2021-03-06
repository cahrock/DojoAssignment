<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome Page</title>
</head>
<body>
	
    <form id="logoutForm" method="POST" action="/logout">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="Logout!" />
    </form>
    <hr>
    <fieldset>
    	<legend>
    		<h1>Welcome! <c:out value="${currentUser.firstName}"></c:out> <c:out value="${currentUser.lastName}"></c:out></h1>
    	</legend>
    	<div>
    		<label>First Name :</label><span><c:out value="${currentUser.firstName}"></c:out></span>
    	</div>
    	<div>
    		<label>Last Name :</label><span><c:out value="${currentUser.lastName}"></c:out></span>
    	</div>
    	<div>
    		<label>Email :</label><span><c:out value="${currentUser.username}"></c:out></span>
    	</div>
    	<div>
    		<label>Sign up date :</label><span><c:out value="${currentUser.createdAt}"></c:out></span>
    	</div>
    	<div>
    		<label>Last sign-in :</label><span><c:out value="${currentUser.updatedAt}"></c:out></span>
    	</div>
    </fieldset>
</body>
</html>