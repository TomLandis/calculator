//thanks for taking time to look under the hood.  I coded all this myself.  I even took the picture in the background.  I did the design, development, implementation and deployment.  I learned to do this at freeCodeCamp.  Hands down the best resource for learning WebDev.
$(document).ready(function() {
  
  var answer = "";
  var lastPressNum = false;
  
  numbas = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    dec: "."
  };
  // mult function
  function mult(a, b) {
    return a * b;
  }

  // div function
  function divide(a, b) {
    return a / b;
  }
  // sub function
  function sub(a, b) {
    return a - b;
  }
  // add function
  function add(a, b) {
    return a + b;
  }

  // a funtion to prevent overly big numbers

  function tooLong(num) {
    if (num.toString().length > 12) {
      alert(
        "Sorry!  This Calculator is weak.  I handles simple calculations like a pro, but for layout reasons the  ̶l̶a̶z̶y̶  busy developer has chosen to not provide support for huge numbers."
      );
      return true;
    } else {
      return false;
    }
  }

  // console.log (sub(800,90));
  /*
   //oops button aka: clear function
   $('#clear').on('click', function(event) {
     $("#me").html("0");
     op = 0;
     pre = 0;

   });
   //7
   $('#seven').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("7");
     } else if (zilch === "x" ||zilch === "+" ||zilch=== "-" ||zilch=== "÷" ) {

        $("#me").html("7");
     } else {

       var hold = $("#me").text();

       hold = hold + "7";
       $("h3").html(hold);
     }
     event.preventDefault();
     

   });
   //8
   $('#eight').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("8");
     }
     else if (zilch === "x" ||zilch === "+" ||zilch=== "-" ||zilch=== "÷" ) {
        $("#me").html("8");
     }
     else {

       var hold = $("#me").text();

       hold = hold + "8";
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //9
   $('#nine').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("9");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("9");
     } else {

       var hold = $("#me").text();

       hold = hold + 9;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //4
   $('#four').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("4");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("4");
     } else {

       var hold = $("#me").text();

       hold = hold + 4;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //5
   $('#five').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("5");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("5");
     } else {

       var hold = $("#me").text();

       hold = hold + 5;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //6 button
   $('#six').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("6");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("6");
     } else {

       var hold = $("#me").text();

       hold = hold + 6;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //1 button
   $('#one').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("1");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("1");
     } else {

       var hold = $("#me").text();

       hold = hold + 1;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //2 button
   $('#two').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("2");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("2");
     } else {

       var hold = $("#me").text();

       hold = hold + 2;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //3 button
   $('#three').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("3");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("3");
     } else {

       var hold = $("#me").text();

       hold = hold + 3;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //zero button
   $('#zero').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {

     } else {
       console.log("here");
       var hold = $("#me").text();

       hold = hold + "0";
       $("h3").html(hold);
     }
     event.preventDefault();

   });

   //decimal point button
   $('#dec').on('click', function(event) {

     var zilch = $("#me").text();
     
     if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
       hold = "0" + ".";
       $("h3").html(hold);
     }

     else if (zilch.includes(".") && zilch[0] !== 0) {
       var hold = $('#me').text();
       pre = parseFloat(hold);

     } else {

        hold = $("#me").text();

       hold = hold + ".";
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   $('#plus').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
     } else {
     
      pre = hold;
     
     op = "+";
     $('h3').html("+");
     }

   });
   
   $('#minus').on('click', function(event) {
      var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
     } else {
     
      pre = hold;
     
     op = "-";
     $('h3').html("-");
     }

   });
   
      $('#divide').on('click', function(event) {
        var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
     } else {
     
      pre = hold;
     
     op = "÷";
     $('h3').html("÷");
     }

   });
   
   
   $('#times').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
     } else {
     
      pre = hold;
     
     op = "x";
     $('h3').html("x");
     }

   });
   
   
   $('#equals').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
     if (op === "+") {

       answer = pre + hold;
       if(answer.length > 9){
         answer = answer.toString();
         answer= answer.slice(0,8);
       }
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "-") {

       answer = pre - hold;
        if(answer.length > 9){
         answer = answer.toString();
         answer= answer.slice(0,8);
       }
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "x") {

       answer = pre * hold;
        if(answer.length > 9){
         answer = answer.toString();
         answer= answer.slice(0,8);
       }
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "÷") {

       answer = pre / hold;
       answer = answer.toString();
        if(answer.length > 9){
         
         answer= answer.slice(0,8);
          answer= answer + "...";
       }
       $('h3').html(answer);
     } else {
       $('h3').html("ERROR");
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     }
op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
   });
   */
  var abyss, digit, butt, name, holder2, id;
 
  var ammount = 0;
  var holder = 0;
  var op = "none";
  function grabber (holder, holder2, name, butt) {
    if (lastPressNum) {
      $("#me").html(holder + butt);
    } else if (holder === "0") {
      $("#me").html(butt);
      lastPressNum = true;
    } else{
      abyss = $("#me").text();
      lastPressNum = true;
      $("#me").html(butt);
    }

    event.preventDefault();
  }
  ///number buttons
  $("#seven").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#eight").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#nine").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#four").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#five").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#six").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#one").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#two").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#three").on("click", function(event) {
    holder = $("#me").html();
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
  });
  $("#zero").on("click", function(event) {
    holder = $("#me").html();
    if (holder === "0"){
      
    }else{
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
    }
  });
  $("#dec").on("click", function(event) {
    
    holder = $("#me").html();
    if (holder.includes(".")) {
      
    }else{
    holder2 = parseFloat(holder);
    name = event.target.id;
    butt = numbas[name];
    grabber(holder, holder2, name, butt);
    }
  });

  //operations
  
  function processer (ammount, abyss, name) {
      
     if (op === "none") {
      abyss = ammount;
      op = name;
      lastPressNum = false;
    } else if (op === "add" ) {
      abyss = parseFloat(abyss);
     
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = add(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "mult"){
      abyss = parseFloat(abyss);
     
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = mult(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "sub") {
      abyss = parseFloat(abyss);
     
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = sub(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "divide") {
      abyss = parseFloat(abyss);
     
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = divide(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    }
  }
  // click handlers
  $("#clear").on("click", function(event) {
   $("h3").html("0");
    ammount = 0;
    abyss = 0;
    op = "none";
   lastPressNum = false;
  });
   $("#equals").on("click", function(event) {
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
    processer(ammount, abyss, name);
    ammount = 0;
    abyss = 0;
    op = "none";
   
  });
   $("#add").on("click", function(event) {
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
 
    processer(ammount, abyss, name);
   
  });
   $("#mult").on("click", function(event) {
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
  
    processer(ammount, abyss, name);
   
  });
   $("#sub").on("click", function(event) {
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
    
    processer(ammount, abyss, name);
   
  });
  
  $("#divide").on("click", function(event) {
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
  
    processer(ammount, abyss, name);
   
  });
  
   
 
  
});