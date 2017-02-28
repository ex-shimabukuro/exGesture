package gesture;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import gesture.lib.Constants;
import gesture.lib.DataNotFoundException;

/**
 * Servlet implementation class GameStartServlet
 */

@WebServlet("/ready")
public class ReadyServlet extends HttpServlet {

	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		req.setCharacterEncoding("UTF-8");
		String teamName = req.getParameter("dispTeam");
		Integer odaiNo = Integer.parseInt(req.getParameter("odaiNo"));

		try (Connection con = DriverManager.getConnection(Constants.URL, Constants.USER, Constants.PASSWORD)) {

			HttpSession session = req.getSession();
			session.setAttribute("teamName", teamName);
			session.setAttribute("odaiNo", odaiNo);
			req.getRequestDispatcher("/WEB-INF/ready.jsp").forward(req, resp);

		} catch (SQLException | DataNotFoundException e) {
			e.printStackTrace();
			resp.sendRedirect("../error");
		}
	}

}
