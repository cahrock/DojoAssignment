<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style>
	span{color:blue;}
</style>
</head>
<body>
	<h1>Detail Song page!</h1>
	<p><a href="/songs/delete/${id}">Delete</a> | <a href="/dashboard">Dashboard</a></p>
	<hr>
	
	<h3>Song title : <span><c:out value="${song.name}"/></span></h3>
	<h3>Artist : <span><c:out value="${song.artist}"/></span></h3>
	<h4>Rating : <span><c:out value="${song.rating}"/></span></h4>
</body>
</html>


