const defaultSettings = {
  horizontal_cells: '5',
  vertical_cells: '5',
  time: '300',
}

export default function createBoard (settings) {
  return {
    ...defaultSettings,
    ...settings
  }
}