const tiles = document.getElementById("tiles")
let columns = Math.floor(document.body.clientWidth / 50),
  rows = Math.floor(document.body.clientHeight / 50)

function createTile(index) {
  const tile = document.createElement("div")
  tile.classList.add("tile")
  return tile
}

function createTiles(number) {
  Array.from(Array(number)).map((tile, index) => {
    tiles.appendChild(createTile(index))
  })
}

function createGrid() {
  tiles.innerHTML = ""
  columns = Math.floor(document.body.clientWidth / 50)
  rows = Math.floor(document.body.clientHeight / 50)

  createTiles(columns * rows)
}

createGrid()
window.onresize = () => createGrid()
