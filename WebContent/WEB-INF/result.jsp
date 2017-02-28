<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/result.css" type="text/css" />
<link rel="stylesheet" href="css/common.css" type="text/css" />
<script type="text/javascript" src="js/result.js"></script>
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<title>ゲーム開始準備</title>
</head>
<body>
	<h1>結 果</h1>

	<form id="teamConfForm" action="ready" method="post">
		<h2>
			<input type="hidden" id="teamNameHidden" value= ${teamName} >
			<span class="teamName" id="teamName">「${teamName}」チーム</span>
			<span class="collectCnt" id="collectCnt"></span>
		</h2>
		<div id="dispOdai">
			<h2>出 題 内 容</h2>
			<table id="odaiTable">
			</table>
		</div>
		<hr size="1" color="#000000">
		<div id="dispTeamInfo">
			<h2>現在の順位</h2>
			<table id="teamInfoTable" border="1">
				<tr>
					<th>順 位</th>
					<th>チ ー ム 名</th>
					<th>正 解 数</th>
				</tr>
			</table>
		</div>
		<div id="resultGame">
			<p><span id="resultTxt"></span></p>
		</div>
		<div id="hiddenArea">
			<input type="hidden" id="dispTeam" name="dispTeam">
			<input type="hidden" id="odaiNo" name="odaiNo">
		</div>
		<div id="readyForm">
			<p>
				<input id="submitBtn" type="submit" value="次のチーム">
			</p>
		</div>
	</form>
	<form id="top" action="top" method="get">
		<input id="submitBtn" type="submit" value="トップに戻る">
	</form>
</body>
</html>