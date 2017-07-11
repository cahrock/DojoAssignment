package com.arif.pets.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.arif.pets.models.Dog;


/**
 * Servlet implementation class ShowDog
 */

public class ShowDog extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Dog dog = new Dog(
				request.getParameter("name"),
				request.getParameter("breed"),
				Double.parseDouble(request.getParameter("weight"))
				);
		request.setAttribute("doggy", dog);
		
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/views/Dog.jsp");
		view.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
