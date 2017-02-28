<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>ポストデータ</title>
  </head>
  <body>
    <%
    String animal = request.getParameter("animal");
    if(animal.equals("ham")){
      out.println("つぶらな瞳がとっても可愛いですよね。");
    } else if(animal.equals("dog")) {
      out.println("古来からの人間の友です。");
    } else if(animal.equals("goki")) {
      out.println("そんな趣味があってもいいと思います。");
    } else {
      out.println("？？？");
    }
    %>
    <br>
    <br>
    <a href=test.html>戻る</a>
  </body>
</html>
