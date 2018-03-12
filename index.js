Office.initialize = function() {};

trigger = function (event) {
    var test = document.querySelector('.logging');

    test.innerHTML += '<p>Trigger button clicked</p>';

    event.completed();
}