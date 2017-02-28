
var gameEnd = false;
var suddendeath = false;
//*********************************************************
//画面起動時にゲーム結果を表示
//*********************************************************
window.onload = function() {

	//ｾｯｼｮﾝｽﾄﾚｰｼﾞの内容取得
	var collectCnt = sessionStorage["collectCnt"];
	var dataStrTeam = sessionStorage["teamInfo"];
	var dataStrOdai = sessionStorage["dispOdai"];
	//ﾃﾞｰﾀ取り出し
	var teamInfo = JSON.parse(dataStrTeam);
	var dispOdai = JSON.parse(dataStrOdai);

	//正解数を上書き
	for (var key in teamInfo) {
		if (teamInfo[key]["teamName"] == document.getElementById("teamNameHidden").value) {
			teamInfo[key]["score"] = parseInt(collectCnt);

			//対象ﾁｰﾑ情報をpostする為に、隠し項目にｾｯﾄ
			if (teamInfo[parseInt(key)+1] != undefined) {
				document.getElementById("dispTeam").value = teamInfo[parseInt(key)+1]["teamName"]
				document.getElementById("odaiNo").value = teamInfo[parseInt(key)+1]["odai"]
			} else {
				document.getElementById("readyForm").style.visibility = "hidden";
				gameEnd = true;
			}
		}
	}

	//先にｾｯｼｮﾝｽﾄﾚｰｼﾞを上書き
	sessionStorage.setItem("teamInfo", JSON.stringify(teamInfo));
	sessionStorage.setItem("teamName" ,document.getElementById("dispTeam").value);
	sessionStorage.setItem("odai" ,document.getElementById("odaiNo").value);

	//正解数表示
	document.getElementById("collectCnt").innerHTML = "正解数：" + collectCnt;

	//出題内容を表示
	var insCnt = 0;
	var cells = new Array();
	for (var key in dispOdai) {
		insCnt++;

		cells.push({no:key,odai:dispOdai[key]});
		if (insCnt == 4) {
			insertRowOdaiTable(cells);
			insCnt = 0;
			cells.length = 0;
		}
	}
	if ((insCnt != 0) || (insCnt != 4)) {
		insertRowOdaiTable(cells);
	}

	// ソート用にオブジェクトは配列に転送
	var sortTeamInfo = new Array();
	for (var key in teamInfo) {
		sortTeamInfo.push(teamInfo[key]);
	}

	// 点数が高い順にソート
	sortTeamInfo.sort(function(a, b) {
        return (a.score > b.score) ? -1 : 1;
    });

	//現在の順位を表示
	var juni = 1;
	for (var i=0; i<sortTeamInfo.length; i++) {
		//::未採点は表示しない
		if (sortTeamInfo[i].score != -1) {
			//::同点を考慮
			if (i!=0) {
				if (sortTeamInfo[i].score != sortTeamInfo[i-1].score){
					juni = i+1;
				} else {
					if (gameEnd){suddendeath=true;}
				}
			}
			insertRowTeamTable(juni, sortTeamInfo[i].teamName ,sortTeamInfo[i].score);
		} else {
			insertRowTeamTable(i+1, "" ,"");
		}
	}

	if (gameEnd) {
		$('#resultGame').fadeOut(0, function() {
			$(this).fadeIn(5000)
		});
		if (suddendeath) {
			document.getElementById("resultTxt").innerHTML = "！！！サドンデス！！！";
		} else {
			document.getElementById("resultTxt").innerHTML = "優勝は  「" + sortTeamInfo[0].teamName + "」チーム！<br>おめでとう！！";
		}
	}
}


//*********************************************************
//  表示されたお題をセット
//*********************************************************
function insertRowOdaiTable(cells) {
	// テーブル取得
	var table = document.getElementById("odaiTable");
	// 行を行末に追加
	var row = table.insertRow(-1);
	// セルの挿入
	var cell1 = row.insertCell(-1);
	var cell2 = row.insertCell(-1);
	var cell3 = row.insertCell(-1);
	var cell4 = row.insertCell(-1);
	var cell5 = row.insertCell(-1);
	var cell6 = row.insertCell(-1);
	var cell7 = row.insertCell(-1);
	var cell8 = row.insertCell(-1);
	var cell9 = row.insertCell(-1);
	var cell10 = row.insertCell(-1);
	var cell11 = row.insertCell(-1);

	// セルの内容入力
	cell1.innerHTML = "";
	cell2.innerHTML = "";
	cell3.innerHTML = "  ";
	cell4.innerHTML = "";
	cell5.innerHTML = "";
	cell6.innerHTML = "  ";
	cell7.innerHTML = "";
	cell8.innerHTML = "";
	cell9.innerHTML = "  ";
	cell10.innerHTML = "";
	cell11.innerHTML = "";

	var cnt=0;
	for (var i=0;i<cells.length;i++){
		switch (i) {
		case 0:
			//cell1.innerHTML = cells[i].no;
			cell2.innerHTML = cells[i].odai;
			break;
		case 1:
			//cell4.innerHTML = cells[i].no;
			cell5.innerHTML = cells[i].odai;
			break;
		case 2:
			//cell7.innerHTML = cells[i].no;
			cell8.innerHTML = cells[i].odai;
			break;
		case 3:
			//cell10.innerHTML = cells[i].no;
			cell11.innerHTML = cells[i].odai;
			break;
		}
	}
}

//*********************************************************
// 現在のチーム順位を表示
//*********************************************************
function insertRowTeamTable(no, teamName ,score) {
	// テーブル取得
	var table = document.getElementById("teamInfoTable");
	// 行を行末に追加
	var row = table.insertRow(-1);
	// セルの挿入
	var cell1 = row.insertCell(-1);
	var cell2 = row.insertCell(-1);
	var cell3 = row.insertCell(-1);

	// セルの内容入力
	cell1.innerHTML = no;
	cell2.innerHTML = teamName;
	cell3.innerHTML = score;
}