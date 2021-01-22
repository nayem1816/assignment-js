// Github Link : https://github.com/nayem1816/assignment-js


//kilometerToMeter Start
function kilometerToMeter(km) {
    if (km >= 1) {
        var meter = km * 1000;
    } else {
        meter = "Please Enter Valid Number.";
    }
    return meter;
}
console.log(kilometerToMeter(5));





//budgetCalculator Start
function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 1 && mobile >= 1 && laptop >= 1) {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptoprice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptoprice;
    }
    else {
        totalPrice = "Error. Pleae Enter Valid Number.";
    }
    return totalPrice;
}
console.log(budgetCalculator(6, 2, 1));






//hotelCost Start
function hotelCost(day) {
    var price = 0;
    if (day <= 0) {
        price = "You don't stay in this Hotel. Thank You!";
    }
    else if (day <= 10 && day >= 1) {
        price = day * 100;
    }
    else if (day <= 20 && day >= 11) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        price = firstPart + secondPart;

    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        price = firstPart + secondPart + thirdPart;
    }
    return price;
}
console.log(hotelCost(13));





//megaFriend Start
function megaFriend(friendName) {
    var max = [];
    for (var i = 0; i < friendName.length; i++) {
        var friendSize = friendName[i].length
        if (friendSize > max.length) {
            max = friendName[i];
        }
    }
    return max;
}
console.log(megaFriend(["Nayem", "Ridowan", "Siam Morol", "Hridoy"]));




