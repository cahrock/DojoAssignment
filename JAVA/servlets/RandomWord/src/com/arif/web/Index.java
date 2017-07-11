package com.arif.web;

import java.io.IOException;
import java.util.Random;
import java.util.Date;
import java.text.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class Index extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		String count = (String)session.getAttribute("count");
		String word = (String)session.getAttribute("word");
		String time = (String)session.getAttribute("time");
		Integer num = 0;
		
		if(count != null){
			Random rand = new Random();
			char[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
			
			word="";
			for(int i = 0; i < 10; i++){
				word += alphabet[rand.nextInt(alphabet.length)];
			}
			
			Date date = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("MMMM dd, yyyy - hh:mm a");
			request.setAttribute("date",  formatter.format(date));
			
			session.setAttribute("word", word);
			num = Integer.parseInt(count);
			num +=1;
			count = num.toString();    
			session.setAttribute("count", count);
		}else{
			session.setAttribute("count", "0");
			session.setAttribute("count", "");
		}	
		        
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/views/index.jsp");
		view.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
