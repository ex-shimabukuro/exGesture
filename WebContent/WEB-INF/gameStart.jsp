<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<link rel="stylesheet" href="css/gameStart.css" type="text/css" />
	<script type="text/javascript" src="js/gameStart.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

	<title>☆ジェスチャーゲーム☆</title>
</head>
<body>
	<div id="contents">
		<div id="header-bk">
			<div id="header">
				<div id="timeStr">
					<p><font color="red">残り時間</font></p>
				</div>
				<div id="countDown">
					<span id="countDownValue"></span>
				</div>
			</div>
		</div>
		<div id="body-bk">
			<div id="body">
				<div id="odai">
					<h2>
						<span id="dispText"></span>
					</h2>
				</div>
				<div id="result">
					<h2>
						<span id="resultText"></span>
					</h2>
				</div>
			</div>
		</div>
		<div id="footer-bk">
			<div id="footer">
				<div id="judge">
					<input type="button" id="passBtn" value="PASS!!!(F7)" onclick="passRtn()" />
					<input type="button" id="collectBtn" value="正解!!!(F8)" onclick="collectRtn()" />
					<input type="button" id="incollectBtn" value="不正解!!!(F9)" onclick="incollectRtn()" />
					<input type="button" id="nextBtn" value="次のお題(F10)" onclick="dispQuestion()" />
				</div>
			</div>
		</div>

	</div>
</body>
</html>
