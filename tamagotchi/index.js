window.onload= function(){

  //Pet health variables and value storage
  var food=localStorage.getItem('foodTrack');
  var water=localStorage.getItem('waterTrack');
  var lift=localStorage.getItem('liftTrack');

  var foodTimer=setInterval(foodDecay,11000);
  var waterTimer=setInterval(waterDecay,9000);
  var liftTimer=setInterval(liftDecay,17000);

  //calls fuctions to check health variables
  checkFood();
  checkWater();
  checkLift();
  checkHealth();

  //health variable-checking functions
  function checkFood(){
    if (food==undefined)
    {
      localStorage.setItem('foodTrack', 50);
      food=localStorage.getItem('foodTrack');
    }
    else{
      food = localStorage.getItem('foodTrack');

    }
  }

  function checkWater(){
    if (water==undefined)
    {
      localStorage.setItem('waterTrack', 50);
      water=localStorage.getItem('waterTrack');
    }
    else{
      water=localStorage.getItem('waterTrack');
    }
  }
  function checkLift(){
    if (lift==undefined)
    {
      localStorage.setItem('liftTrack', 50);
      lift=localStorage.getItem('liftTrack');
    }
    else{
      lift=localStorage.getItem('liftTrack');
    }
  }

  //runs status-changing functions for pet when certain events happen
  document.getElementById('foodButton').onclick = eating;
  document.getElementById('waterButton').onclick = drinking;
  document.getElementById('exerciseButton').onclick = lifting;
  document.getElementById('resetButton').onclick = reset;


  //game logic
  function eating(){
    checkFood();
      food=Number(food)+15;
      lift=Number(lift)-10;
    (food , water , lift);
    checkHealth();

  }

  function drinking(){
    checkWater();
    water=Number(water)+15;
    lift=Number(lift)-10;
    //(food, water , lift);
    checkHealth();
  }

  function lifting(){
    checkLift();
    lift=Number(lift)+15;
    food=Number(food)-8;
    water=Number(water)-8;
    //(food, water, lift);
    checkHealth();
  }

  function reset(){
    food=Number(50);
    water=Number(50);
    lift=Number(50);
    //(food, water, lift);
    checkHealth();
    document.getElementById('foodButton').setAttribute("style", "visibility: visible");
    document.getElementById('waterButton').setAttribute("style", "visibility:visible;");
    document.getElementById('exerciseButton').setAttribute("style", "visibility:visible;");
    document.getElementById('foodStat').setAttribute("style", "visibility:visible;");
    document.getElementById('waterStat').setAttribute("style", "visibility:visible;");
    document.getElementById('liftStat').setAttribute("style", "visibility:visible;");
  }

  function checkHealth(){
    localStorage.setItem('liftTrack', lift);
    localStorage.setItem('foodTrack', food);
    localStorage.setItem('waterTrack', water);
    document.getElementById('foodStat').innerHTML=(food);
    document.getElementById('waterStat').innerHTML=(water);
    document.getElementById('liftStat').innerHTML=(lift);

    //visual pet status
    if(food >=50 && water >=50 && lift >=50 ){
      document.getElementById('petDiv').innerHTML=("<img src='bulba.gif'>");
      if(food >=65 && water >=65 && lift >=65){
      document.getElementById('petDiv').innerHTML=("<img src='interestedbulba.GIF'>");
        if (food >=75 && water >=75 && lift >=75){
          document.getElementById('petDiv').innerHTML=("<img src='sleepybulba.GIF'>");
          if (food >=85 && water >=85 && lift >=85){
            document.getElementById('petDiv').innerHTML=("<img src='happy.GIF'>");
          }
        }
      }
    }
    else if(food <= 40 || water <= 40 || lift <= 40){
      document.getElementById('petDiv').innerHTML=("<img src='bulba.gif'>");
      if(food <= 20 || water <= 20 || lift <= 20){
        document.getElementById('petDiv').innerHTML=("<img src='passedout.gif'>");
        if(food <=0 || water <=0 || lift <=0){
          console.log('f');
          document.getElementById('petDiv').innerHTML=("<img src='press-f2.png'>");
          document.getElementById('foodButton').setAttribute("style", "visibility:hidden;");
          document.getElementById('waterButton').setAttribute("style", "visibility:hidden;");
          document.getElementById('exerciseButton').setAttribute("style", "visibility:hidden;");
          document.getElementById('foodStat').setAttribute("style", "visibility:hidden;");
          document.getElementById('waterStat').setAttribute("style", "visibility:hidden;");
          document.getElementById('liftStat').setAttribute("style", "visibility:hidden;");
        }
      }
    }
  }

//stat droppage over time
  function foodDecay(){
    food=Number(food)-3;
    checkHealth();
  }

  function waterDecay(){
    water=Number(water)-3;
    checkHealth();
  }

  function liftDecay(){
    lift=Number(lift)-3;
    checkHealth();
  }




}
