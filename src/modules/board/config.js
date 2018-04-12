const defaultSettings = {
  horizontal_cells: '5',
  vertical_cells: '5',
  time: '300',
}

export default function calculateBoard (cols, rows) {
  let y = new Array(cols);
  for (var i = 0; i < cols; i++) {
    y[i] = new Array(rows);
  }

  return y
}

const board = {}

export default function createBoard (settings) {
  return {
    ...defaultSettings,
    ...settings,
  }
}