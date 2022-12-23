const tiles = document.getElementById("tiles")
const tileSize = 50
let columns = Math.floor(document.body.clientWidth / 50)
let rows = Math.floor(document.body.clientHeight / 50)
const colors = [
  "#4d86a5",
  "#cf0bf1",
  "#12e2f1",
  "#3e517a",
  "#98da1f",
  "#fc9f5b",
  "#d60b2d",
  "#c3c4e9",
  "#9cc76d",
  "#2dffdf",
]
let counter = 0

function handleClick(index) {
  console.log(index)
  anime({
    targets: ".tile",
    backgroundColor: colors[counter % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  })
  counter++
}

function createTile(index) {
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.addEventListener("click", () => handleClick(index))
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
