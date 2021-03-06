<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Top Ten Songs</title>
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
	<h1>Top Ten Songs</h1>
	<p><a href="/songs">Add new song</a> | <a href="dashboard">Dashboard</a></p>
	<table>
  <tr>
    <th>Name</th>
    <th>Artist</th>
    <th>Rating</th>
  </tr>
  <c:forEach items="${songs}" var="song" varStatus="loop">
  <tr>
    <td><a href="/songs/${song.id}"}"><c:out value="${song.name}"/></a></td>
    <td><c:out value="${song.artist}"/></td>
    <td><c:out value="${song.rating}"/></td>    
  </tr>
  </c:forEach>
 
</table>
</body>
</html>