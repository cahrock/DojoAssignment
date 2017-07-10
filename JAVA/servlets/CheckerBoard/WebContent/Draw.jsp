<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Checkerboard</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/style.css" />
    </head>
<body>
	<div class="container">
		<div class="wrapper">
			<h1>Checker Board</h1>
			
			<% int w= Integer.parseInt(request.getParameter("w")); %>
			<% int h= Integer.parseInt(request.getParameter("h")); %>
			<h3>Width =<%= w %> and height =<%= h %></h3>
			<% for(int i = 0;i<h; i++){ %>
				<% for(int j = 0;j<w; j++){ %>
					<% if(j%2==0){ %>
						<div class="even">							
						</div>
					<% } else {%>					
						<div class="odd">
						</div>
					<% } %>
				<%}%>
			<%}%>
		</div>
		
	    <!-- displaying the value -->
	    
	</div>
    
</body>
</html>