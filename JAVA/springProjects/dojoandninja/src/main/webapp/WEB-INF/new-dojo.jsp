<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Create a New Dojo</title>
</head>
<body>
	<fieldset>
            <legend>Create Dojo</legend>
            <form:form method="POST" action="/dojos/new" modelAttribute="dojo">
            	<div class="input-box">
            		<form:label path="name">Name :<form:errors path="name"/><form:input path="name"/></form:label>
            	</div>
			 			    
			    <input type="submit" class="input-box" value="Create Dojo"/>
			</form:form>
                        
	</fieldset>
</body>
</html>