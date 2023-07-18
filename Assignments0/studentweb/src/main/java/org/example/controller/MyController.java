package org.example.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.example.model.Student;

public class MyController extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<String> errors=new ArrayList<String>();	
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String name=request.getParameter("t1");
		if(name.length()<=0)
		{
			errors.add("Enter a name.");
		}
		int grade=0;
		try {
			grade=Integer.parseInt(request.getParameter("t2"));
			
		} catch (Exception e) {
			// TODO: handle exception
			errors.add("Grade must be a number.");
		}
		if(grade>12)
		{
			errors.add("Invalid grade. Must be <12");
		}
		
		if(!errors.isEmpty())
		{
			request.setAttribute("ERROR", errors);
			RequestDispatcher view=request.getRequestDispatcher("error.view");
			view.forward(request, response);
		}
		else
		{
			Student student=new Student(name, grade);
			
			request.setAttribute("STU", student);
			RequestDispatcher view=request.getRequestDispatcher("success.view");
			view.forward(request, response);
		}
		
	}

}