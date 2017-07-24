<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<fieldset>
            <legend>Create Ninja</legend>
            <form:form method="POST" action="/ninjas/new" modelAttribute="ninja">
            	<div class="input-box">
            		<form:label path="dojo">Dojo :<form:errors path="dojo"/>
            		<form:select path="dojo">
            			<c:forEach items="${dojos}" var="dojo">
            				<form:option value="${dojo.id}">${dojo.name}</form:option>
            			</c:forEach>
            		</form:select></form:label>
            	</div>
            	<div class="input-box">
            		<form:label path="firstName">First Name :<form:errors path="firstName"/><form:input path="firstName"/></form:label>
            	</div>
			 	<div class="input-box">
            		<form:label path="lastName">Last Name :
            		<form:errors path="lastName"/><form:input path="lastName"/></form:label>
            	</div>
            	<div class="input-box">
            		<form:label path="age">Age :<form:errors path="age"/><form:input path="age"/></form:label>
            	</div>    
			    <input type="submit" class="input-box" value="Create Ninja"/>
			</form:form>
                        
	</fieldset>
</body>
</html>