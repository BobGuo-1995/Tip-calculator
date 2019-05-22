var bill_1 = prompt('Bill 1:');
var bill_2 = prompt('Bill 2:');
var bill_3 = prompt('Bill 3:');

var num1 = parseInt(bill_1);
var num2 = parseInt(bill_2);
var num3 = parseInt(bill_3);

//var bill_1 = 124;
//var bill_2 = 48;
//var bill_3 = 268;
 function calculateTip(bill){
    // if the bill is less than 50 bucks, we would like to charger for 20 percent 
    if(bill < 50){
       return bill * 0.2;
    // same logic : we charge 15 per cent for the tip if it is between 50 and 200
       }else if(bill >= 50 && bill <= 200 ){
       return bill * 0.15; 
    }else{
        return bill * 0.1;
    }
}

var Total = function (bill){
    // WHERE I END 
    var tip = calculateTip(bill);
    
    return tip + bill;
}

var Tip = [ calculateTip(num1),calculateTip(num2),calculateTip(num3)];
var totalCost = [ Total(num1),Total(num2),Total(num3)];


console.log(Tip);
console.log(totalCost);


