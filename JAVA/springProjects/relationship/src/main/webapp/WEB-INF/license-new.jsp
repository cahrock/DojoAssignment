<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Create New License</title>
</head>
<body>
	
	<fieldset>
		<legend><h1>Create a new license</h1></legend>
		<form:form method="POST" action="/license" modelAttribute="license">
            	<div class="input-box">
            		<form:label path="person">Person :<form:errors path="person"/><form:input path="person"/></form:label>
            	</div>
            	<div class="input-box">
            		<form:label path="state">State :<form:errors path="state"/><form:input path="state"/></form:label>
            	</div>			    
            	<div class="input-box">
            		<form:label path="expire">State :<form:errors path="expire"/><form:input type="date" path="expire"/></form:label>
            	</div>	
			    
			    <input type="submit" class="input-box" value="Create Song"/>
		</form:form>
	</fieldset>
</body>
</html>