var rowCnt = 1;

//*********************************************************
//  チーム数変更時イベント
//*********************************************************
function teamCntChange() {
	var inputRowCnt = parseInt(document.getElementById("teamCnt").value);
	if (inputRowCnt > rowCnt) {
		for (var i = 0; i < (inputRowCnt - rowCnt); i++) {
			insertRow();
		}
	} else if (inputRowCnt < rowCnt) {
		deleteRow(rowCnt - inputRowCnt);
	}
	//チーム情報エリアを表示
	document.getElementById("teamInfoArea").hidden = false;
	//表示行数を退避
	rowCnt = inputRowCnt;
}

//*********************************************************
//  tableタグの行を削除
//  --チーム数変更時に、既存行数 > チーム数の場合に実行
//*********************************************************
function insertRow() {
	// テーブル取得
	var table = document.getElementById("teamInfoTable");
	// 行を行末に追加
	var row = table.insertRow(-1);
	// セルの挿入
	var cell1 = row.insertCell(-1);
	var cell2 = row.insertCell(-1);
	var cell3 = row.insertCell(-1);
	// 行数取得
	var row_len = table.rows.length;

	//input要素
	var input = '<input type="text" id="team-{0}" name="team-{0}" />';
	input = input.replace("{0}", (row_len - 1));

	//select要素
	var select = '<select id="odai-{0}" name="odai-{0}">';
	select += '<option value="0">テスト</option>';
	select += '<option value="1">お題①</option>';
	select += '<option value="2">お題②</option>';
	select += '<option value="3">お題③</option>';
	select += '<option value="4">お題④</option>';
	select += '<option value="5">お題⑤</option>';
	select += '</select>';
	select = select.replace("{0}", (row_len - 1));

	// セルの内容入力
	cell1.innerHTML = row_len - 1;
	cell2.innerHTML = input;
	cell3.innerHTML = select;
}

//*********************************************************
//  tableタグの行を削除
//  --チーム数変更時に、既存行数 > チーム数の場合に実行
//*********************************************************
function deleteRow(delCnt) {

	for (var i = 0; i < delCnt; i++) {
		var table = document.getElementById("teamInfoTable");
		//最終行から削除
		var row_len = table.rows.length;
		// trのインデックスを取得して行を削除する
		table.deleteRow(row_len - 1);
	}
}

//*********************************************************
//  submit時に入力内容をローカルストレージに保存するため、js側でsubmitさせる
//*********************************************************
function mySubmit(formName, url, method) {

	var formid = "#" + formName;
	var tblTbody = document.getElementById('teamInfoTable');
	var teamInfos = {};
	var teamId
	var odaiId

	//対象ﾁｰﾑ情報をpostする為に、隠し項目にｾｯﾄ
	document.getElementById("dispTeam").value = document.getElementById("team-1").value;
	document.getElementById("odaiNo").value = document.getElementById("odai-1").value;

	//制限時間、ﾁｰﾑ名、お題番号をｾｯｼｮﾝｽﾄﾚｰｼﾞに格納
	sessionStorage.setItem("limit",document.getElementById("limit").value);
	sessionStorage.setItem("teamName",document.getElementById("team-1").value);
	sessionStorage.setItem("odai",document.getElementById("odai-1").value);

	//ﾁｰﾑ情報をｾｯｼｮﾝｽﾄﾚｰｼﾞに格納
	for (var i=0, rowLen=tblTbody.rows.length - 1; i<rowLen; i++) {
		teamId = "team-{0}".replace("{0}", (i+1));
		odaiId = "odai-{0}".replace("{0}", (i+1));
    	teamInfos[i] = {teamName:document.getElementById(teamId).value
    					, odai:document.getElementById(odaiId).value
    					, score:-1
    					};
	}
    sessionStorage.setItem("teamInfo", JSON.stringify(teamInfos));


	// サブミットするフォームを取得
	var f = document.forms[formName];

	f.method = method; // method(GET or POST)を設定する
	f.action = url;    // action(遷移先URL)を設定する
	f.submit();        // submit する
	return true;
}