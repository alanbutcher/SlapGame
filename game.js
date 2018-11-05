let target = {
  targetName: 'Thanos',
  health: 100,
  hits: 0,
  items: [],
  totalMods: 0
}

let items = {
  mindStone: { name: 'Mind Stone', modifier: 2, description: "Don't let it touch the ground!" },
  realityStone: { name: 'Reality stone', modifier: 3, description: 'Wait, say what?' },
  timeStone: { name: 'Time stone', modifier: 4, description: 'Come back with me, Marty!'}
}

function giveMindStone() {
  target.items.push(items.mindStone);
}

function giveRealityStone() {
  target.items.push(items.realityStone);
}

function giveTimeStone() {
  target.items.push(items.timeStone);
}

function addMods() {
  let out = 0
  for (let index = 0; index < target.items.length; index++) {
    const item = target.items[index];
    out += item.modifier
  }
  target.totalMods = out
}


function slap() {
  addMods()
  target.health -= 1 + target.totalMods;
  target.hits++;
  //alert(health);
  update()
}

function punch() {
  addMods()
  target.health -= 5 + target.totalMods;
  target.hits++;
  update()
}

function kick() {
  addMods()
  target.health -= 10 + target.totalMods;
  target.hits++;
  update()
}

function update() {
  if (target.health <= 0) { //guard
    target.health = 0       //guard
  }                         //guard
  document.getElementById('health').innerText = target.health.toString()
  document.getElementById('Thanos').innerText = target.targetName
  document.getElementById('hits').innerText = target.hits.toString()
  
}
update()
