let target = {
  targetName: 'Thanos',
  health: 100,
  hits: 0
}




function slap() {
  target.health--;
  target.hits++;
  //alert(health);
  update()
}
function punch() {
  target.health -= 5;
  target.hits++;
  update()
}
function kick() {
  target.health -= 10;
  target.hits++;
  update()
}


function update() {
  document.getElementById('health').innerText = target.health.toString()
  document.getElementById('Thanos').innerText = target.targetName
  document.getElementById('hits').innerText = target.hits.toString()
}
update()