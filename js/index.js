//thanks for taking time to look under the hood.  I coded all this myself.  I even took the picture in the background.  I did the design, development, implementation and deployment.  I learned to do this at freeCodeCamp.  Hands down the best resource for learning WebDev.
$(document).ready(function() {
  var answer = "";
  var lastPressNum = false;
  var lastClickOp = false;
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
        "Sorry!  This Calculator is weak.  I handles simple calculations like a pro, but for layout reasons the developer has chosen to not provide support for huge numbers."
      );
      return true;
    } else {
      return false;
    }
  }

  var abyss, digit, butt, name, holder2, id;

  var ammount = 0;
  var holder = 0;
  var op = "none";
  function grabber(holder, holder2, name, butt) {
    tooLong(holder);
    lastClickOp = false;
    if (lastPressNum) {
      $("#me").html(holder + butt);
    } else if (holder === "0") {
      $("#me").html(butt);
      lastPressNum = true;
    } else {
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
    if (holder === "0") {
    } else {
      holder2 = parseFloat(holder);
      name = event.target.id;
      butt = numbas[name];
      grabber(holder, holder2, name, butt);
    }
  });
  $("#dec").on("click", function(event) {
    holder = $("#me").html();
    if (holder.includes(".")) {
    } else {
      holder2 = parseFloat(holder);
      name = event.target.id;
      butt = numbas[name];
      grabber(holder, holder2, name, butt);
    }
  });

  //operations

  function processer(ammount, abyss, name) {
    if (lastClickOp) {
      op = name;
    } else if (op === "none") {
      abyss = ammount;
      op = name;
      lastPressNum = false;
      lastClickOp = true;
    } else if (op === "add") {
      abyss = parseFloat(abyss);
      lastClickOp = true;
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = add(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "mult") {
      abyss = parseFloat(abyss);
      lastClickOp = true;
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = mult(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "sub") {
      abyss = parseFloat(abyss);
      lastClickOp = true;
      ammount = $("#me").text();
      ammount = parseFloat(ammount);
      answer = sub(abyss, ammount);
      lastPressNum = false;
      $("h3").html(answer);
      op = name;
    } else if (op === "divide") {
      abyss = parseFloat(abyss);
      lastClickOp = true;
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
    lastClickOp = false;
  });
  $("#equals").on("click", function(event) {
    
    ammount = $("#me").text();
    ammount = parseFloat(ammount);
    name = event.target.id;
    processer(ammount, abyss, name);
    lastClickOp = false;
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
