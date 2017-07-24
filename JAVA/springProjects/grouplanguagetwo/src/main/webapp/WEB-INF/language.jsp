<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
<!-- ... -->
<table>
  <tr>
    <th>Name</th>
    <th>Creator</th>
    <th>Version</th>
    <th>Action</th>
  </tr>
  <c:forEach items="${languages}" var="language" varStatus="loop">
  <tr>
    <td><a href="/language/detail/${loop.index}"}"><c:out value="${language.name}"/></a></td>
    <td><c:out value="${language.creator}"/></td>
    <td><c:out value="${language.version}"/></td>
    <td><a href="/language/delete/${loop.index}">Delete</a> &nbsp <a href="/language/edit/${loop.index}">Edit</a></td>
  </tr>
  </c:forEach>
 
</table>

<fieldset>
            <legend>Create a new language</legend>
            <form:form method="POST" action="/language" modelAttribute="language">
            	<div class="input-box">
            		<form:label path="name">Name :<form:errors path="name"/><form:input path="name"/></form:label>
            	</div>
			    <div class="input-box">
			    	<form:label path="creator">Creator :<form:errors path="creator"/><form:input path="creator"/></form:label>
			    </div>
			    <div class="input-box">
			    	<form:label path="version">Version :<form:errors path="version"/><form:input path="version"/></form:label>
			    </div>
			    
			    <input type="submit" class="input-box" value="Submit"/>
			</form:form>
                        
</fieldset>

<!-- ... -->

