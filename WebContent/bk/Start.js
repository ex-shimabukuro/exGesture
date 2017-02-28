/*
 * runstant
 */

window.onload = function() {
  // TODO: write code
  // console.log("Hello, runstant!");
};

function countDown() {
	//スタートボタンは非表示
	document.getElementById("disp").style.display="none";
	//タイマー実行
	var countVal = 3;
	var countRtn = setInterval(function() {
		if (countVal == 0) {
		} else {
			document.getElementById("count").innerHTML = countVal;
		}
		countVal--;
		//終了条件
		if (countVal == -1) {
			clearInterval(countRtn);

			document.getElementById("count").innerHTML = "!!!START!!!";
			setInterval(function() {
        $('span').fadeOut(500,function(){$(this).fadeIn(500)});
      },700);
		}
	} ,1000);
}
