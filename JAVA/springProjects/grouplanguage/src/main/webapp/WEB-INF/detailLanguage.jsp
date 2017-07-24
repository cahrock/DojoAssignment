<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:out value="${language.name}"/>,
<c:out value="${language.creator}"/>,
<c:out value="${language.version}"/>

<p><a href="/language/edit/${id}">Edit</a> | <a href="/language/delete/${id}">Delete</a> | <a href="/language">Dashboard</a></p>