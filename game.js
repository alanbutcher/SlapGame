let health = 100


function slap() {
  health--;
  //alert(health);
  update()
}
function punch() {
  health--;
  update()
}
function kick() {
  health--;
  update()
}


function update() {
  document.getElementById('health').innerText = health.toString()
}
update()