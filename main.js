const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Winamp Ultimate Concert & Movie Dual Player",
    icon: path.join(__dirname, 'icon.ico'), // ดึงภาพไอคอนของคุณลุงมาใช้ตรงนี้ครับ
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true // ซ่อนแถบเมนูด้านบนให้ดูเป็นโปรแกรมเดสก์ท็อปเต็มตัว
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});