<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/teamConf.css" type="text/css" />
<link rel="stylesheet" href="css/common.css" type="text/css" />
<script type="text/javascript" src="js/teamConf.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>

	<h1>チーム情報、お題設定</h1>
	<hr>
	<p>制限時間を選択してください</p>
	<select id="limit" name="limit" style="width: 200px">

		<%
			for (int i = 1; i <= 20; i++) {
				int limit = i * 5;
		%>

		<option value=<%=limit%>>
			<%=limit%>
		</option>

		<%
			}
		%>
	</select>

	<div>
		<p>チーム数を選択してください</p>
		<select id="teamCnt" name="teamCnt" style="width: 200px" onchange="teamCntChange()">

			<%
				for (int i = 1; i <= 10; i++) {
			%>

			<option value=<%=i%>>
				<%=i%>
			</option>

			<%
				}
			%>
		</select>
	</div>

	<br>
	<form id="teamInfoForm" action="ready" method="post">
		<div id="teamInfoArea" hidden="true">
			<p>チーム名とお題番号を選択してください。</p>
			<div id="teamInfo">
				<table id="teamInfoTable" border="1">
					<tr>
						<th>No</th>
						<th>チーム名</th>
						<th>お題番号</th>
					</tr>
					<tr>
						<td>1</td>
						<td><input type="text" id="team-1" name="team-1"></td>
						<td><select id="odai-1" name="odai-1">
								<option value="0">テスト</option>
								<option value="1">お題①</option>
								<option value="2">お題②</option>
								<option value="3">お題③</option>
								<option value="4">お題④</option>
								<option value="5">お題⑤</option>
						</select></td>
					</tr>
				</table>
				<input type="hidden" id="dispTeam" name="dispTeam">
				<input type="hidden" id="odaiNo" name="odaiNo">
			</div>
			<p>
				<input id="submitBtn" type="submit" value="決定!!" onclick="return mySubmit('teamInfoForm', 'ready', 'POST');">
			</p>
		</div>
	</form>

</body>
</html>
