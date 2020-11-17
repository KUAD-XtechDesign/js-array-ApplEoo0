$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  $("#button01").on("click",function(){
    $("#content").text("最初のめんばーは" + students[0] + "学生は全員で" + students.length + "人");
  })

  $("#button02").on("click",function(){
    $("#content").text(students[2]);
  })

  $("#button03").on("click",function(){
    $("#content").text(students[students.length-1]);
  })

  $("#button04").on("click",function(){
    students.push("山下")

    $("#content").tect(students[students.length-1]);

  })

  $("#button05").on("click",function(){
    students = students.reverse()
  })
 


})