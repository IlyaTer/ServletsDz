
package com.mycompany.servletsdz;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class UniversServlet extends HttpServlet {
    
    private String password = "asd123";

    private void workWithData(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        PrintWriter pw = response.getWriter();
        Date date = new Date();
        String userAgent = request.getHeader("User-Agent");
        
        String Json = "{\"login\":\""+request.getParameter("login")+
                "\","+"\"password\":\""+request.getParameter("password")+
                "\","+"\"valid\":\""+
                password.equals(request.getParameter("password"))+"\","+
                "\"date\":\""+date+"\","+"\"userag\":\""+userAgent+"\"}";
        pw.print(Json);
        pw.close();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        workWithData(request, response);
    }

   
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
         workWithData(request, response);     
    }

}
