const lightMode = {
  primary: '#074c4e',
  secondary: '#f86f2d',
  success: '#4abc86',
  info: '#63c2de',
  error: '#ea3838',
  background: '#f5f5f5',
}

type Colors = typeof lightMode

const darkMode: Colors = {
  primary: '#074c4e',
  secondary: '#f86f2d',
  success: '#4abc86',
  info: '#63c2de',
  error: '#ea3838',
  background: '#f5f5f5',
}

function getTextComponent(Text: string, color: keyof typeof lightMode) {
}