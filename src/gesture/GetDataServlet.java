package gesture;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import gesture.lib.Constants;
import gesture.lib.DataNotFoundException;
import gesture.lib.GestureOdai;
import gesture.lib.GestureOdaiDAO;
import net.arnx.jsonic.JSON;

@WebServlet("/getData")
public class GetDataServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
                throws ServletException, IOException {

    	resp.setContentType("application/json; charset=utf-8");
        PrintWriter out = resp.getWriter();

/*
        int numbers[] = {15,16,23,29,37,39};
        out.println(JSON.encode(numbers));
*/

        try (Connection con = DriverManager.getConnection(Constants.URL, Constants.USER, Constants.PASSWORD)) {
            GestureOdaiDAO odaiDao = new GestureOdaiDAO(con);
            List<GestureOdai> gsOdai = odaiDao.findAll();

            out.println(JSON.encode(gsOdai));
		} catch (DataNotFoundException | SQLException e) {
			e.printStackTrace();
			resp.sendRedirect("error");
        }
    }
}