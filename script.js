const tiles = document.getElementById("tiles")
const tileSize = 50
let columns = Math.floor(document.body.clientWidth / 50)
let rows = Math.floor(document.body.clientHeight / 50)

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
  columns = Math.floor(document.body.clientWidth / tileSize)
  rows = Math.floor(document.body.clientHeight / tileSize)
  tiles.style.setProperty("--columns", columns)
  tiles.style.setProperty("--rows", rows)
  createTiles(columns * rows)
}

createGrid()
window.onresize = () => createGrid()
