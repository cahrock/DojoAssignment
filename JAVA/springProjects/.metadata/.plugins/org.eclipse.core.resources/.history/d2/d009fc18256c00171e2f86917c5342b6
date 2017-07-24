<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style>
<!--
	fieldset{width: 50%};
	.input-box{margin-bottom:15px;}
-->
</style>
</head>
<body>
	<fieldset>
            <legend>Create a new Song</legend>
            <form:form method="POST" action="/songs/new" modelAttribute="song">
            	<div class="input-box">
            		<form:label path="name">Name :<form:errors path="name"/><form:input path="name"/></form:label>
            	</div>
			    <div class="input-box">
			    	<form:label path="artist">Artist :<form:errors path="artist"/><form:input path="artist"/></form:label>
			    </div>
			    <div class="input-box">
			    	<form:label path="rating">Rating :<form:errors path="rating"/>
			    	<form:select path="rating">
			    		<form:option value="1">1</form:option>
			    		<form:option value="2">2</form:option>
			    		<form:option value="3">3</form:option>
			    		<form:option value="4">4</form:option>
			    		<form:option value="5">5</form:option>
			    		<form:option value="6">6</form:option>
			    		<form:option value="7" path="rating">7</form:option>
			    		<form:option value="8">8</form:option>
			    		<form:option value="9">9</form:option>
			    		<form:option value="10">10</form:option>
			    	</form:select>
			    	
			    	</form:label>
			    </div>
			    
			    <input type="submit" class="input-box" value="Create Song"/>
			</form:form>
                        
</fieldset>
</body>
</html>




