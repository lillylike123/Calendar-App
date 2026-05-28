const { app, BrowserWindow } = require("electron");

function createWindow() {
 const win = new BrowserWindow({
  title: "My little calendar",
  width: 214,
  height: 380,
  resizable: false,
  maximizable: false,
  fullscreenable: false,
  frame: false, 
  transparent: true, 
  webPreferences: {
    contextIsolation: true
  }
});
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
