<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Result - Dojo</title>
<style>
	table {
	    border-collapse: collapse;
	    width: 50%;
	}
	
	th, td {
	    text-align: left;
	    padding: 8px;
	}
	
	tr:nth-child(even){background-color: #f2f2f2}
	
	th {
	    background-color: #4CAF50;
	    color: white;
	}
	fieldset{width: 50%};
	.input-box{margin-bottom:15px;}
</style>
</head>
<body>
	<fieldset>
		<legend>
			<h1><c:out value="${dojo.name}"/> location</h1>
		</legend>
		<table>
	  <tr>
	    <th>First Name</th>
	    <th>Last Name</th>
	    <th>Age</th>
	  </tr>
	  <c:forEach items="${dojo.ninjas}" var="dojos" varStatus="loop">
		  <tr>
		    <td><c:out value="${dojos.firstName}"/></a></td>
		    <td><c:out value="${dojos.lastName}"/></td>
		    <td><c:out value="${dojos.age}"/></td>
		  </tr>	  
	  </c:forEach>
	  	 
	</table>
	</fieldset>
	
	
</body>
</html>