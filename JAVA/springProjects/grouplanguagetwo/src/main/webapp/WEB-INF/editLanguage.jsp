
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- ... -->

<p><a href="/language/delete/${id}">Delete</a> | <a href="/language">Dashboard</a></p>


<form:form method="POST" action="/language/edit/${id}" modelAttribute="language">
    <form:label path="name">Name
    <form:errors path="name"/>
    <form:input path="name"/></form:label>
    <form:label path="creator">Creator
    <form:errors path="creator"/>
    <form:textarea path="creator"/></form:label>
    <form:label path="version">Version
    <form:errors path="version"/>
    <form:input path="version"/></form:label>
    
    <input type="submit" value="Submit"/>
</form:form>
<!-- ... -->
