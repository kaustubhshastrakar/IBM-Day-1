package org.example.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.example.model.Albums;

/**
 * Servlet implementation class MyServlet
 */
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private List<Albums> albumList = null;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public MyServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		// Create the set of leagues
		albumList = new LinkedList<Albums>();
		albumList.add(new Albums(2006, "Country", "Taylor Swift"));
		albumList.add(new Albums(2008, "Country", "Fearless"));
		albumList.add(new Albums(2010, "Pop", "Speak Now"));
		albumList.add(new Albums(2012, "Pop", "Red"));
		albumList.add(new Albums(2014, "Pop", "1989"));
		albumList.add(new Albums(2017, "Pop", "Reputation"));
		albumList.add(new Albums(2019, "Pop", "Lover"));
		albumList.add(new Albums(2020, "indie folk", "folklore"));
		albumList.add(new Albums(2020, "indie folk", "evermore"));
		albumList.add(new Albums(2022, "Pop", "Midnights"));
		out.println("<html>");
		out.println("<head>");
		String pageTitle = "Available Albums";
		out.println("<title>" + pageTitle + "</title>");
		out.println("</head>");
		out.println("<body bgcolor='white'>");

		// Generate page heading
		out.println("<!-- Page Heading -->");
		out.println("<table border='1' cellpadding='5' cellspacing='0' width='400'>");
		out.println("<tr bgcolor='#CCCCFF' align='center' valign='center' height='20'>");

		out.println(" <td><h3>" + pageTitle + "</h3></td>");
		out.println("</tr>");
		out.println("</table>");

		// Generate main body
		out.println("<p>");
		out.println("The set of albums are:");
		out.println("</p>");

		out.println("<ul>");
		Iterator<Albums> items = albumList.iterator();
		while (items.hasNext()) {
			Albums album = items.next();
			out.println(" <li>" + album.getTitle() + "</li>");
		}
		out.println("</ul>");

		out.println("</body>");
		out.println("</html>");
	}
}