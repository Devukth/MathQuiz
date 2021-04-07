var player01score = 0;
var player02score = 0;
localStorage.setItem('score01', player01score);
localStorage.setItem('score02', player02score);

updateNames();
function updateNames() {
    document.getElementById('player01name').innerHTML = localStorage.getItem('player01') + ": " + localStorage.getItem('score01');
    document.getElementById('player02name').innerHTML = localStorage.getItem('player02') + ": " + localStorage.getItem('score02');
}