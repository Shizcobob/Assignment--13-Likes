var counter1 = 9;
function count1() {
    counter1++;
    document.getElementById('likeCounter').innerHTML = counter1;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('like1').onclick = count1;
})


var counter2 = 12;
function count2() {
    counter2++;
    document.getElementById('likeCounter2').innerHTML = counter2;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('like2').onclick = count2;
})

var counter3 = 9;
function count3() {
    counter3++;
    document.getElementById('likeCounter3').innerHTML = counter3;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('like3').onclick = count3;
})