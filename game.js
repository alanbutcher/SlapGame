let target = {
  targetName: 'Thanos',
  health: 100,
  hits: 0,
  items: [],
  totalMods: 0
}

let items = {
  powerStone: { name: 'Power Stone', modifier: 2, description: "Don't let it touch the ground!" },
  realityStone: { name: 'Reality stone', modifier: 3, description: 'Wait, say what?' },
  timeStone: { name: 'Time stone', modifier: 4, description: 'Come back with me, Marty!'}
}

function giveStone() {
  items.push(target.items);
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
  document.getElementById('health').innerText = target.health.toString()
  document.getElementById('Thanos').innerText = target.targetName
  document.getElementById('hits').innerText = target.hits.toString()
}
update()
