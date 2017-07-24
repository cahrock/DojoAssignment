<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ninja Gold</title>
        
    	<style media="screen">
	        * {
	            padding: 0px;
	            margin: 0px;
	        }
	
	        .wrapper {
	            width: 1000px;
	            margin: 0px auto;
	        }
	
	        .top {
	            width: 700px;
	            margin-bottom: 30px;
	            display: inline-block;
	        }
	
	        .main{
	            margin:auto;
	            padding:20px;
	            width: 950px;
	            height: auto;
	            display: flex;
	            flex-flow: row wrap;
	            justify-content: center;
	            border: 2px solid #000000;
	        }
	
	        .box{
	            width: 200px;
	            margin: auto;
	            padding: 10px;
	            height: auto;
	            border: 2px solid #000000;
	            text-align: center;
	        }
	        .box p{margin: 10px;}
	        .activities{
	            width: : 950px;
	        }
	        .activities p{margin-top: 20px;}
	        .textArea{
	            width: 950px;
	            height: 200px;
	            margin-top: 20px;
	            border: 2px solid #000000;
	            overflow-y: scroll;
	            resize: none;
	        }
	        .reset{
	            margin: auto;
	            padding: 5px;
	        }
	
	    </style>
    </head>
<body>
	<div class="container">
		<div class='wrapper'>
        <div class='top'>
            <p>Your gold: </p>
            <c:out value="${gold}"/>
        </div>
        <div class='main'>
            <div class='box'>
                <h3>Farm</h3>
                <p>(Earns 10-20 gold)</p>

                <form action='/process/1' method="post">
                    
                    <input type='hidden' name='building' value='farm' />
                    <input type='submit'>
                </form>
            </div>
            <div class='box'>
                <h3>Cave</h3>
                <p>(Earns 5-10 gold)</p>
                <form action='/process/2' method="post">
                    
                    <input type='hidden' name='building' value='cave' />
                    <input type='submit'>
                </form>
            </div>
            <div class='box'>
                <h3>House</h3>
                <p>(Earns 2-5 gold)</p>
                <form action='/process/3' method="post">
                    
                    <input type='hidden' name='building' value='house' />
                    <input type='submit'>
                </form>
            </div>
            <div class='box'>
                <h3>Casino</h3>
                <p>(Earns/Takes 0-50 gold)</p>
                <form action='/process/4' class='casino' method="post">
                    
                    <input type='hidden' name='building' value='casino' />
                    <input type='submit'>
                </form>
            </div>

            <p>Activities:</p><br>
            <div class="activity">
				<textarea>
					<c:out value="${msg }"/>
				</textarea>
            </div>

        </div>
        <div class="reset">
            <a href="/reset">Reset</a>
        </div>
    </div>
	
	</div>
    
</body>
</html>