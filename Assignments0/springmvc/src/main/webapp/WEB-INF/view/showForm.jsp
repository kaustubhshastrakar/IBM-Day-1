<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Employee</title>
</head>
<body>
    <p>
        <h1>Add Employee</h1>
    </p>
    <hr/>
    
    <c:if test="${not empty nameError}">
        <p style="color: red;">${nameError}</p>
    </c:if>
    <c:if test="${not empty ageError}">
        <p style="color: red;">${ageError}</p>
    </c:if>

    <form action="addEmployee" method="post">
        <table>
            <tr>
                <td>Name</td>
                <td><input type="text" name="t1"></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input type="text" name="t2"></td>
            </tr>
            <tr>
                <td><input type="Submit" value="Add Employee"></td>
            </tr>
        </table>
    </form>
</body>
</html>
