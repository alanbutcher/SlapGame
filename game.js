let health = 100
let targetName = 'Thanos'
let hits = 0


function slap() {
  health--;
  hits++;
  //alert(health);
  update()
}
function punch() {
  health -= 5;
  hits++;
  update()
}
function kick() {
  health -= 10;
  hits++;
  update()
}


function update() {
  document.getElementById('health').innerText = health.toString()
  document.getElementById('Thanos').innerText = targetName
  document.getElementById('hits').innerText = hits.toString()
}
update()