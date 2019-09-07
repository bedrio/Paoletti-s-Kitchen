

var choicecarte = document.getElementById("choicecarte");
var choicebundle = document.getElementById("choicebundle");
var cartearrow = document.getElementById("cartearrow");
var bundlearrow = document.getElementById("bundlearrow");
var carteclose = document.getElementById("carteclose");
var bundleclose = document.getElementById("bundleclose");
var carteformcontainer = document.getElementById("carteformcontainer");
var bundleformcontainer = document.getElementById("bundleformcontainer");
var cartentmenuopen = document.getElementById("cartentmenuopen");
var cartentmenuclose = document.getElementById("cartentmenuclose");
var cartentgrid = document.getElementById("cartentgrid");
var cartdesmenuopen = document.getElementById("cartdesmenuopen");
var cartdesmenuclose = document.getElementById("cartdesmenuclose");
var cartdesgrid = document.getElementById("cartdesgrid");

var bundlemenuopenarrow = document.getElementById("bundlemenuopenarrow");
var bundlesmenuclose = document.getElementById("bundlesmenuclose");
var bundlesmenugrid = document.getElementById("bundlesmenugrid");

function carteopenFunc(){
  if (cartearrow.style.display != "none") {
    carteformcontainer.style.display = "block";
    cartearrow.style.display = "none";
    carteclose.style.display = "block";
    bundlecloseFunc();
  }else if (cartearrow.style.display == "none"){
    carteformcontainer.style.display = "none";
    cartearrow.style.display = "block";
    carteclose.style.display = "none";
  }
}
function cartecloseFunc(){
  carteformcontainer.style.display = "none";
  cartearrow.style.display = "block";
  carteclose.style.display = "none";
}
function bundleopenFunc(){
  if(bundlearrow.style.display != "none"){
    bundleformcontainer.style.display = "block";
    bundlearrow.style.display = "none";
    bundleclose.style.display = "block";
    cartecloseFunc();
  } else if(bundlearrow.style.display == "none"){
    bundleformcontainer.style.display = "none";
    bundlearrow.style.display = "block";
    bundleclose.style.display = "none";
  }
}
function bundlecloseFunc(){
  bundleformcontainer.style.display = "none";
  bundlearrow.style.display = "block";
  bundleclose.style.display = "none";
}
function cartentmenuopenFunc(){
  cartentmenuclose.style.display = "flex";
  cartentmenuopen.style.display = "none";
  cartentgrid.style.display = "flex";
}
function cartentmenucloseFunc(){
  cartentmenuclose.style.display = "none";
  cartentmenuopen.style.display = "flex";
  cartentgrid.style.display = "none";
}
function cartdesmenuopenFunc(){
  cartdesmenuclose.style.display = "flex";
  cartdesmenuopen.style.display = "none";
  cartdesgrid.style.display = "flex";
}
function cartdesmenucloseFunc(){
  cartdesmenuclose.style.display = "none";
  cartdesmenuopen.style.display = "flex";
  cartdesgrid.style.display = "none";
}

function bundlesmenuopenFunc(){
  bundlesmenuclose.style.display = "flex";
  bundlemenuopenarrow.style.display = "none";
  bundlesmenugrid.style.display = "flex";
}
function bundlesmenucloseFunc(){
  bundlesmenuclose.style.display = "none";
  bundlemenuopenarrow.style.display = "flex";
  bundlesmenugrid.style.display = "none";
}

function onePlusCarte(){
  if (Number(document.getElementById("one").innerHTML) < 10){
    document.getElementById("one").innerHTML = Number(document.getElementById("one").innerHTML) + 1;
  }
  carteCalc();
}
function oneMinusCarte(){
  if(Number(document.getElementById("one").innerHTML) > 0){
    document.getElementById("one").innerHTML = Number(document.getElementById("one").innerHTML) - 1;
  }
  carteCalc();
}
function twoPlusCarte(){
  if (Number(document.getElementById("two").innerHTML) < 10){
    document.getElementById("two").innerHTML = Number(document.getElementById("two").innerHTML) + 1;
  }
  carteCalc();
}
function twoMinusCarte(){
  if(Number(document.getElementById("two").innerHTML) > 0){
    document.getElementById("two").innerHTML = Number(document.getElementById("two").innerHTML) - 1;
  }
  carteCalc();
}
function threePlusCarte(){
  if (Number(document.getElementById("three").innerHTML) < 10){
    document.getElementById("three").innerHTML = Number(document.getElementById("three").innerHTML) + 1;
  }
  carteCalc();
}
function threeMinusCarte(){
  if(Number(document.getElementById("three").innerHTML) > 0){
    document.getElementById("three").innerHTML = Number(document.getElementById("three").innerHTML) - 1;
  }
  carteCalc();
}
function fourPlusCarte(){
  if (Number(document.getElementById("four").innerHTML) < 10){
    document.getElementById("four").innerHTML = Number(document.getElementById("four").innerHTML) + 1;
  }
  carteCalc();
}
function fourMinusCarte(){
  if(Number(document.getElementById("four").innerHTML) > 0){
    document.getElementById("four").innerHTML = Number(document.getElementById("four").innerHTML) - 1;
  }
  carteCalc();
}
function fivePlusCarte(){
  if (Number(document.getElementById("five").innerHTML) < 10){
    document.getElementById("five").innerHTML = Number(document.getElementById("five").innerHTML) + 1;
  }
  carteCalc();
}
function fiveMinusCarte(){
  if(Number(document.getElementById("five").innerHTML) > 0){
    document.getElementById("five").innerHTML = Number(document.getElementById("five").innerHTML) - 1;
  }
  carteCalc();
}
function sixPlusCarte(){
  if (Number(document.getElementById("six").innerHTML) < 10){
    document.getElementById("six").innerHTML = Number(document.getElementById("six").innerHTML) + 1;
  }
  carteCalc();
}
function sixMinusCarte(){
  if(Number(document.getElementById("six").innerHTML) > 0){
    document.getElementById("six").innerHTML = Number(document.getElementById("six").innerHTML) - 1;
  }
  carteCalc();
}
function sevenPlusCarte(){
  if (Number(document.getElementById("seven").innerHTML) < 10){
    document.getElementById("seven").innerHTML = Number(document.getElementById("seven").innerHTML) + 1;
  }
  carteCalc();
}
function sevenMinusCarte(){
  if(Number(document.getElementById("seven").innerHTML) > 0){
    document.getElementById("seven").innerHTML = Number(document.getElementById("seven").innerHTML) - 1;
  }
  carteCalc();
}
function eightPlusCarte(){
  if (Number(document.getElementById("eight").innerHTML) < 10){
    document.getElementById("eight").innerHTML = Number(document.getElementById("eight").innerHTML) + 1;
  }
  carteCalc();
}
function eightMinusCarte(){
  if(Number(document.getElementById("eight").innerHTML) > 0){
    document.getElementById("eight").innerHTML = Number(document.getElementById("eight").innerHTML) - 1;
  }
  carteCalc();
}
function ninePlusCarte(){
  if (Number(document.getElementById("nine").innerHTML) < 10){
    document.getElementById("nine").innerHTML = Number(document.getElementById("nine").innerHTML) + 1;
  }
  carteCalc();
}
function nineMinusCarte(){
  if(Number(document.getElementById("nine").innerHTML) > 0){
    document.getElementById("nine").innerHTML = Number(document.getElementById("nine").innerHTML) - 1;
  }
  carteCalc();
}
function tenPlusCarte(){
  if (Number(document.getElementById("ten").innerHTML) < 10){
    document.getElementById("ten").innerHTML = Number(document.getElementById("ten").innerHTML) + 1;
  }
  carteCalc();
}
function tenMinusCarte(){
  if(Number(document.getElementById("ten").innerHTML) > 0){
    document.getElementById("ten").innerHTML = Number(document.getElementById("ten").innerHTML) - 1;
  }
  carteCalc();
}
function elevenPlusCarte(){
  if (Number(document.getElementById("eleven").innerHTML) < 10){
    document.getElementById("eleven").innerHTML = Number(document.getElementById("eleven").innerHTML) + 1;
  }
  carteCalc();
}
function elevenMinusCarte(){
  if(Number(document.getElementById("eleven").innerHTML) > 0){
    document.getElementById("eleven").innerHTML = Number(document.getElementById("eleven").innerHTML) - 1;
  }
  carteCalc();
}
function twelvePlusCarte(){
  if (Number(document.getElementById("twelve").innerHTML) < 10){
    document.getElementById("twelve").innerHTML = Number(document.getElementById("twelve").innerHTML) + 1;
  }
  carteCalc();
}
function twelveMinusCarte(){
  if(Number(document.getElementById("twelve").innerHTML) > 0){
    document.getElementById("twelve").innerHTML = Number(document.getElementById("twelve").innerHTML) - 1;
  }
  carteCalc();
}
function thirteenPlusCarte(){
  if (Number(document.getElementById("thirteen").innerHTML) < 10){
    document.getElementById("thirteen").innerHTML = Number(document.getElementById("thirteen").innerHTML) + 1;
  }
  carteCalc();
}
function thirteenMinusCarte(){
  if(Number(document.getElementById("thirteen").innerHTML) > 0){
    document.getElementById("thirteen").innerHTML = Number(document.getElementById("thirteen").innerHTML) - 1;
  }
  carteCalc();
}
function fourteenPlusCarte(){
  if (Number(document.getElementById("fourteen").innerHTML) < 10){
    document.getElementById("fourteen").innerHTML = Number(document.getElementById("fourteen").innerHTML) + 1;
  }
  carteCalc();
}
function fourteenMinusCarte(){
  if(Number(document.getElementById("fourteen").innerHTML) > 0){
    document.getElementById("fourteen").innerHTML = Number(document.getElementById("fourteen").innerHTML) - 1;
  }
  carteCalc();
}
function fifteenPlusCarte(){
  if (Number(document.getElementById("fifteen").innerHTML) < 10){
    document.getElementById("fifteen").innerHTML = Number(document.getElementById("fifteen").innerHTML) + 1;
  }
  carteCalc();
}
function fifteenMinusCarte(){
  if(Number(document.getElementById("fifteen").innerHTML) > 0){
    document.getElementById("fifteen").innerHTML = Number(document.getElementById("fifteen").innerHTML) - 1;
  }
  carteCalc();
}
function sixteenPlusCarte(){
  if (Number(document.getElementById("sixteen").innerHTML) < 10){
    document.getElementById("sixteen").innerHTML = Number(document.getElementById("sixteen").innerHTML) + 1;
  }
  carteCalc();
}
function sixteenMinusCarte(){
  if(Number(document.getElementById("sixteen").innerHTML) > 0){
    document.getElementById("sixteen").innerHTML = Number(document.getElementById("sixteen").innerHTML) - 1;
  }
  carteCalc();
}
function seventeenPlusCarte(){
  if (Number(document.getElementById("seventeen").innerHTML) < 10){
    document.getElementById("seventeen").innerHTML = Number(document.getElementById("seventeen").innerHTML) + 1;
  }
  carteCalc();
}
function seventeenMinusCarte(){
  if(Number(document.getElementById("seventeen").innerHTML) > 0){
    document.getElementById("seventeen").innerHTML = Number(document.getElementById("seventeen").innerHTML) - 1;
  }
  carteCalc();
}
function eighteenPlusCarte(){
  if (Number(document.getElementById("eighteen").innerHTML) < 10){
    document.getElementById("eighteen").innerHTML = Number(document.getElementById("eighteen").innerHTML) + 1;
  }
  carteCalc();
}
function eighteenMinusCarte(){
  if(Number(document.getElementById("eighteen").innerHTML) > 0){
    document.getElementById("eighteen").innerHTML = Number(document.getElementById("eighteen").innerHTML) - 1;
  }
  carteCalc();
}
function nineteenPlusCarte(){
  if (Number(document.getElementById("nineteen").innerHTML) < 10){
    document.getElementById("nineteen").innerHTML = Number(document.getElementById("nineteen").innerHTML) + 1;
  }
  carteCalc();
}
function nineteenMinusCarte(){
  if(Number(document.getElementById("nineteen").innerHTML) > 0){
    document.getElementById("nineteen").innerHTML = Number(document.getElementById("nineteen").innerHTML) - 1;
  }
  carteCalc();
}
function twentyPlusCarte(){
  if (Number(document.getElementById("twenty").innerHTML) < 10){
    document.getElementById("twenty").innerHTML = Number(document.getElementById("twenty").innerHTML) + 1;
  }
  carteCalc();
}
function twentyMinusCarte(){
  if(Number(document.getElementById("twenty").innerHTML) > 0){
    document.getElementById("twenty").innerHTML = Number(document.getElementById("twenty").innerHTML) - 1;
  }
  carteCalc();
}
function twentyOnePlusCarte(){
  if (Number(document.getElementById("twentyOne").innerHTML) < 10){
    document.getElementById("twentyOne").innerHTML = Number(document.getElementById("twentyOne").innerHTML) + 1;
  }
  carteCalc();
}
function twentyOneMinusCarte(){
  if(Number(document.getElementById("twentyOne").innerHTML) > 0){
    document.getElementById("twentyOne").innerHTML = Number(document.getElementById("twentyOne").innerHTML) - 1;
  }
  carteCalc();
}
function twentyTwoPlusCarte(){
  if (Number(document.getElementById("twentyTwo").innerHTML) < 10){
    document.getElementById("twentyTwo").innerHTML = Number(document.getElementById("twentyTwo").innerHTML) + 1;
  }
  carteCalc();
}
function twentyTwoMinusCarte(){
  if(Number(document.getElementById("twentyTwo").innerHTML) > 0){
    document.getElementById("twentyTwo").innerHTML = Number(document.getElementById("twentyTwo").innerHTML) - 1;
  }
  carteCalc();
}
function twentyThreePlusCarte(){
  if (Number(document.getElementById("twentyThree").innerHTML) < 10){
    document.getElementById("twentyThree").innerHTML = Number(document.getElementById("twentyThree").innerHTML) + 1;
  }
  carteCalc();
}
function twentyThreeMinusCarte(){
  if(Number(document.getElementById("twentyThree").innerHTML) > 0){
    document.getElementById("twentyThree").innerHTML = Number(document.getElementById("twentyThree").innerHTML) - 1;
  }
  carteCalc();
}
function twentyFourPlusCarte(){
  if (Number(document.getElementById("twentyFour").innerHTML) < 10){
    document.getElementById("twentyFour").innerHTML = Number(document.getElementById("twentyFour").innerHTML) + 1;
  }
  carteCalc();
}
function twentyFourMinusCarte(){
  if(Number(document.getElementById("twentyFour").innerHTML) > 0){
    document.getElementById("twentyFour").innerHTML = Number(document.getElementById("twentyFour").innerHTML) - 1;
  }
  carteCalc();
}

function carteCalc(){
  var carteCalculator = Number(document.getElementById("one").innerHTML) * 10 +
  Number(document.getElementById("two").innerHTML) * 14 +
  Number(document.getElementById("three").innerHTML) * 14  +
  Number(document.getElementById("four").innerHTML) * 9 +
  Number(document.getElementById("five").innerHTML) * 11  +
  Number(document.getElementById("six").innerHTML) * 10 +
  Number(document.getElementById("seven").innerHTML) * 10 +
  Number(document.getElementById("eight").innerHTML) * 10  +
  Number(document.getElementById("nine").innerHTML) * 10  +
  Number(document.getElementById("ten").innerHTML) * 12 +
  Number(document.getElementById("eleven").innerHTML) * 12 +
  Number(document.getElementById("twelve").innerHTML) * 10 +
  Number(document.getElementById("thirteen").innerHTML) * 8 +
  Number(document.getElementById("fourteen").innerHTML) * 11  +
  Number(document.getElementById("fifteen").innerHTML) * 9 +
  Number(document.getElementById("sixteen").innerHTML) * 12 +
  Number(document.getElementById("seventeen").innerHTML) * 13  +
  Number(document.getElementById("eighteen").innerHTML) * 12 +
  Number(document.getElementById("nineteen").innerHTML) * 10 +
  Number(document.getElementById("twenty").innerHTML) * 9 +
  Number(document.getElementById("twentyOne").innerHTML) * 7 +
  Number(document.getElementById("twentyTwo").innerHTML) * 7 +
  Number(document.getElementById("twentyThree").innerHTML) * 6 +
  Number(document.getElementById("twentyFour").innerHTML) * 6;
  document.getElementById("carteprice").innerHTML = "$" + carteCalculator;
  carteCartEmpty();
}

function dinnerForTwoPlus(){
  if(Number(document.getElementById("dinnerForTwo").innerHTML) < 10){
    document.getElementById("dinnerForTwo").innerHTML = Number(document.getElementById("dinnerForTwo").innerHTML) + 1;
  }
  bundleCalc();
}
function dinnerForTwoMinus(){
  if(Number(document.getElementById("dinnerForTwo").innerHTML) > 0){
    document.getElementById("dinnerForTwo").innerHTML = Number(document.getElementById("dinnerForTwo").innerHTML) - 1;
  }
  bundleCalc();
}
function pastaPlus(){
  if(Number(document.getElementById("pasta").innerHTML) < 10){
    document.getElementById("pasta").innerHTML = Number(document.getElementById("pasta").innerHTML) + 1;
  }
  bundleCalc();
}
function pastaMinus(){
  if(Number(document.getElementById("pasta").innerHTML) > 0){
    document.getElementById("pasta").innerHTML = Number(document.getElementById("pasta").innerHTML) - 1;
  }
  bundleCalc();
}
function dessertBundlePlus(){
  if(Number(document.getElementById("dessertBundle").innerHTML) < 10){
    document.getElementById("dessertBundle").innerHTML = Number(document.getElementById("dessertBundle").innerHTML) + 1;
  }
  bundleCalc();
}
function dessertBundleMinus(){
  if(Number(document.getElementById("dessertBundle").innerHTML) > 0){
    document.getElementById("dessertBundle").innerHTML = Number(document.getElementById("dessertBundle").innerHTML) - 1;
  }
  bundleCalc();
}
function vegetarianPlus(){
  if(Number(document.getElementById("vegetarian").innerHTML) < 10){
    document.getElementById("vegetarian").innerHTML = Number(document.getElementById("vegetarian").innerHTML) + 1;
  }
  bundleCalc();
}
function vegetarianMinus(){
  if(Number(document.getElementById("vegetarian").innerHTML) > 0){
    document.getElementById("vegetarian").innerHTML = Number(document.getElementById("vegetarian").innerHTML) - 1;
  }
  bundleCalc();
}
function backyardPlus(){
  if(Number(document.getElementById("backyard").innerHTML) < 10){
    document.getElementById("backyard").innerHTML = Number(document.getElementById("backyard").innerHTML) + 1;
  }
  bundleCalc();
}
function backyardMinus(){
  if(Number(document.getElementById("backyard").innerHTML) > 0){
    document.getElementById("backyard").innerHTML = Number(document.getElementById("backyard").innerHTML) - 1;
  }
  bundleCalc();
}

function bundleCalc(){
  var bundleCalculator = Number(document.getElementById("dinnerForTwo").innerHTML) * 32 +
  Number(document.getElementById("pasta").innerHTML) * 44 +
  Number(document.getElementById("dessertBundle").innerHTML) * 17 +
  Number(document.getElementById("vegetarian").innerHTML) * 28 +
  Number(document.getElementById("backyard").innerHTML) * 30;
  document.getElementById("bundleprice").innerHTML = "$" + bundleCalculator;
  bundleCartEmpty();
}

function carteClearCart(){
  document.getElementById("one").innerHTML = 0;
  document.getElementById("two").innerHTML = 0;
  document.getElementById("three").innerHTML = 0;
  document.getElementById("four").innerHTML = 0;
  document.getElementById("five").innerHTML = 0;
  document.getElementById("six").innerHTML = 0;
  document.getElementById("seven").innerHTML = 0;
  document.getElementById("eight").innerHTML = 0;
  document.getElementById("nine").innerHTML = 0;
  document.getElementById("ten").innerHTML = 0;
  document.getElementById("eleven").innerHTML = 0;
  document.getElementById("twelve").innerHTML = 0;
  document.getElementById("thirteen").innerHTML = 0;
  document.getElementById("fourteen").innerHTML = 0;
  document.getElementById("fifteen").innerHTML = 0;
  document.getElementById("sixteen").innerHTML = 0;
  document.getElementById("seventeen").innerHTML = 0;
  document.getElementById("eighteen").innerHTML = 0;
  document.getElementById("nineteen").innerHTML = 0;
  document.getElementById("twenty").innerHTML = 0;
  document.getElementById("twentyOne").innerHTML = 0;
  document.getElementById("twentyTwo").innerHTML = 0;
  document.getElementById("twentyThree").innerHTML = 0;
  document.getElementById("twentyFour").innerHTML = 0;
  carteCalc();
}

function bundleClearCart(){
  document.getElementById("dinnerForTwo").innerHTML = 0;
  document.getElementById("pasta").innerHTML = 0;
  document.getElementById("dessertBundle").innerHTML = 0;
  document.getElementById("vegetarian").innerHTML = 0;
  document.getElementById("backyard").innerHTML = 0;
  bundleCalc();
}

function carteCartEmpty(){
  if(document.getElementById("carteprice").innerHTML == "$0"){
      event.preventDefault();
      document.getElementById("emptycarte").style.display = "block";
  } else {
      document.getElementById("emptycarte").style.display = "none";
  }
}

function bundleCartEmpty(){
  if(document.getElementById("bundleprice").innerHTML == "$0"){
      event.preventDefault();
      document.getElementById("emptybundle").style.display = "block";
  } else {
      document.getElementById("emptybundle").style.display = "none";
  }
}
