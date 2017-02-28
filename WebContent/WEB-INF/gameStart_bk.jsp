<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<link rel="stylesheet" href="css/gameStart.css" type="text/css" />
	<script type="text/javascript" src="js/gameStart.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>

	<title>☆ジェスチャーゲーム☆</title>
</head>
<body>
<!--
	<div id="start">
		<input type="button" value="は・じ・め・る・よ♪" style="HEIGHT: 80px"
			onclick="exe()" />
	</div>
-->

	<div class="centerMiddle">
		<h1>
			<span id="dispText"></span>
		</h1>
	</div>

	<br>
	<br>
	<br>
	<br>

	<div id="result">
		<h2>
			<span id="resultText"></span>
		</h2>
	</div>

	<div id="countDown">
		<h2>
			<span id="countDownValue"></span>
		</h2>
	</div>

	<div id="judge">
		<input type="button" id="passBtn" value="PASS!!!(F7)" onclick="passRtn()" />
		<input type="button" id="collectBtn" value="正解!!!(F8)" onclick="collectRtn()" />
		<input type="button" id="incollectBtn" value="不正解!!!(F9)" onclick="incollectRtn()" />
		<input type="button" id="nextBtn" value="次のお題(F10)" onclick="dispQuestion()" />
	</div>
</body>
</html>
