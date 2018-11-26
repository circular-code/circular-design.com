document.querySelector('main').addEventListener('touchstart', function(e) {
    if (e.target.className === 'flip-container') {
        e.target.classList.toggle('hover');
    }
});

var logoList = document.querySelectorAll('.animatable');

function colorRandomLogo() {

    var current = logoList[randomNumBetween(logoList.length)];
    current.classList.add('run');

    setTimeout(function() {
        current.classList.remove('run');
        colorRandomLogo();
    }, 4000);
}

function randomNumBetween (max, min) {
    if (typeof max === 'undefined')
        throw new Error('max undefined');
    if (typeof min === 'undefined')
        min = 0;
    return Math.floor(Math.random()*(max-min)+min);
}

colorRandomLogo();
