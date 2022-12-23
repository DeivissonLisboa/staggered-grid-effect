const tiles = document.getElementById("tiles")
const tileSize = 50
let columns = Math.floor(document.body.clientWidth / 50)
let rows = Math.floor(document.body.clientHeight / 50)
const colors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
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
