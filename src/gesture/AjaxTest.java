package gesture;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.arnx.jsonic.JSON;

@WebServlet("/ajaxtest")
public class AjaxTest extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {

        response.setContentType("application/json; charset=utf-8");
        PrintWriter out = response.getWriter();

        int numbers[] = {15,16,23,29,37,39};

        out.println(JSON.encode(numbers));
    }
}