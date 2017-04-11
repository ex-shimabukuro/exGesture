/*
 * runstant lite
 */

//制限時間(ms)
var timeOutVal = parseInt(sessionStorage["limit"]);

//出題情報
var questionInfos = new Array();
var questionInfos2 = {
		1 : "ねこ",
		2 : "いぬ",
		3 : "かめ",
		4 : "三代目 J Soul Brothers",
		5 : "ライオン",
		6 : "PPAP"
};

//表示されたお題を保持
var dispQuestionInfos = {};

//ランダム表示情報
var randomInfos = new Array();
var randomInfos2 = {
	1 : "ねこ",
	2 : "いぬ",
	3 : "かめ",
	4 : "三代目 J Soul Brothers",
	5 : "ライオン",
	6 : "test1",
	7 : "test2",
	8 : "ミッキー",
	9 : "ドナルド",
	10 : "ミニー",
	11 : "グーフィー",
	12 : "ピコ太郎",
	13 : "タンブラー",
	14 : "マウス",
	15 : "キーボード",
	16 : "モニター",
	17 : "じゃゔぁ",
	18 : "ぴーえいちぴー",
	19 : "フラッシュモブ",
	20 : "スマートフォン"
};

//問題No
var questionNo = 0;

//正解数
var collectCnt = 0;

//ランダム表示終了
var dispRandomFlg = false;

//キーマップ
var keyMaps = {
	"F7" : 118,
	"F8" : 119,
	"F9" : 120,
	"F10" : 121
};

//キー制御on/off
var keyMapFlg = false;
document.onkeydown = keydown;

//キーダウン処理
function keydown() {
	if (keyMapFlg) {
		switch (event.keyCode) {
		case keyMaps["F7"]: //パス
			if (!dispRandomFlg) {
				passRtn();
			}
			break;
		case keyMaps["F8"]: //正解
			if (!dispRandomFlg) {
				collectRtn();
			}
			break;
		case keyMaps["F9"]: //不正解
			if (!dispRandomFlg) {
				incollectRtn();
			}
			break;
		case keyMaps["F10"]: //お題セット
			dispQuestion();
			break;
		}
	}
}

// html読込完了後にカウントダウン開始
window.onload = function () {
	//::ボタン類は初期非表示
	document.getElementById("judge").style.display = "none";

	//::ajaxにてDBよりお題情報を取得
	getOdaiData();

	//::ゲーム実行
	exe();
};

//ajax通信にて、お題データを取得
function getOdaiData() {
	$.ajax({
		type : "GET",
		url : "http://localhost:8080/exGesture/getData",
		dataType : "json",
		success : function(json) {

			var odaiNo = sessionStorage["odai"];
			for (var key in json) {
				randomInfos.push(json[key].odai);
				if (json[key].groupNo == odaiNo) {
					questionInfos.push(json[key].odai);
				}
			}
		},

		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("エラーが発生しました：" + textStatus + ":\n" + errorThrown);
		}
	});
}

function exe() {
	countDownStart();
	setTimeout(firstSetChallenge, 9000);
}

function countDownStart() {

	//タイマー実行
	var countVal = 3;
	var countRtn = setInterval(function() {
		if (countVal != 0) {
			document.getElementById("dispText").innerHTML = countVal;
		}
		//カウントダウン
		countVal--;
		//終了条件
		if (countVal == -1) {
			clearInterval(countRtn);
			document.getElementById("dispText").innerHTML = "!!!START!!!";

			var startCnt = 0;
			var startRtn = setInterval(function() {
				$('#dispText').fadeOut(500, function() {
					$(this).fadeIn(500)
				});

				//表示回数カウント
				startCnt++;
				//３回くらい表示したら終了
				if (startCnt == 3) {
					clearInterval(startRtn);

					setTimeout(function() {
						$('#dispText').fadeOut("slow");
					}, 1000);
				}
			}, 700);
		}
	}, 1100);
}

function firstSetChallenge() {

	//
	$('#dispText').fadeIn(0);

	//残り時間を表示
	timeOutStart();

	//
	document.getElementById("judge").style.display = "block";
	//
	document.getElementById("dispText").innerHTML = questionInfos[questionNo];
	//表示されたお題を格納
	dispQuestionInfos[questionNo] = questionInfos[questionNo];
	//ファンクションキー有効
	keyMapFlg = true;

}

//時間制限カウントダウン
function timeOutStart() {

	document.getElementById("countDownValue").innerHTML = timeOutVal;
	timeOutVal--;

	var timeOutRtn = setInterval(function() {
		if (timeOutVal == 0) {

			//ファンクションキー不可
			keyMapFlg = false;

			//ボタン押下不可
			$(":button").attr("disabled", "");

			//ランダム処理中止
			dispRandomFlg = false;

			//時間制限がきたらインターバル解除
			clearInterval(timeOutRtn);

			//終了表示
			document.getElementById("countDown").style.visibility = "hidden";
			document.getElementById("dispText").style.color = "black";
			document.getElementById("dispText").innerHTML = "終 ------ 了";
			document.getElementById("resultText").innerHTML = "正解数："
					+ collectCnt + "問";

			//ｾｯｼｮﾝｽﾄﾚｰｼﾞに結果と表示されたお題を更新
			sessionStorage.setItem("collectCnt", collectCnt);
			sessionStorage.setItem("dispOdai", JSON.stringify(dispQuestionInfos));

			//遷移処理を実行
			var tranResultForm = setInterval(function() {
				clearInterval(tranResultForm);
				document.location.href = "result?";
			}, 4000);

		} else {
			document.getElementById("countDownValue").innerHTML = timeOutVal;
		}
		//カウントダウン
		timeOutVal--;
	}, 1000);
}

function passRtn() {
	dispRandom();
}

function collectRtn() {
	collectCnt++;
	dispRandom();
}

function incollectRtn() {
	//不正解音を流す？

}

//回答者移動時間確保の為にランダム表示処理を実行
function dispRandom() {
	dispRandomFlg = true;

	document.getElementById("dispText").style.color = "gray";

	var randomInfoKey = 0;
	var randomRtn = setInterval(
			function() {
				randomInfoKey++;
				//
				if (dispRandomFlg == false) {
					//ランダム表示終了
					clearInterval(randomRtn);
				} else {
					//ランダム配列の要素数を超えていないか確認
					if (randomInfoKey > Object.keys(randomInfos).length) {
						randomInfoKey = 1;
					}
					document.getElementById("dispText").innerHTML = randomInfos[randomInfoKey];
				}
			}, 25);
}

//ランダム表示を終了し、次のお題を表示
function dispQuestion() {
	dispRandomFlg = false;
	questionNo++;
	setTimeout(
			function() {
				document.getElementById("dispText").style.color = "black";
				document.getElementById("dispText").innerHTML = questionInfos[questionNo];
			}, 50);
	//表示されたお題を格納
	dispQuestionInfos[questionNo] = questionInfos[questionNo];

	//document.getElementById("nextBtn").focus();
}
