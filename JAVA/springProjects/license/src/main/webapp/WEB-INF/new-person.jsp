<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Create New Person</title>
</head>
<body>
	
	<fieldset>
		<legend><h1>Create a new person</h1></legend>
		<form:form method="POST" action="/persons/new" modelAttribute="person">
            	<div class="input-box">
            		<form:label path="firstName">First Name :<form:errors path="firstName"/><form:input path="firstName"/></form:label>
            	</div>
            	<div class="input-box">
            		<form:label path="lastName">Last Name :<form:errors path="lastName"/><form:input path="lastName"/></form:label>
            	</div>			    
			    
			    <input type="submit" class="input-box" value="Create "/>
		 </form:form>
	</fieldset>
</body>
</html>