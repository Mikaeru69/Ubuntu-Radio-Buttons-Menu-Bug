const { app, Menu, BrowserWindow } = require ('electron');
function itemClicked (menuItem, browserWindow, event)
{
  console.log ("Clicked:", menuItem.label, menuItem.checked ? "(checked)" : "(unchecked)");
}
const menuTemplate =
[
  {
	label: 'App',
    submenu: [
	  {role: 'quit'}
    ]
   },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    label: 'Items',
    submenu: [
      {label: 'Item 1', type: 'radio', click: itemClicked, checked: true},
      {label: 'Item 2', type: 'radio', click: itemClicked},
      {label: 'Item 3', type: 'radio', click: itemClicked}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
];
function onAppReady ()
{
	const menu = Menu.buildFromTemplate (menuTemplate);
	Menu.setApplicationMenu (menu);
	const mainWindow = new BrowserWindow ({ width: 500, height: 300 });
	mainWindow.loadURL (`file://${__dirname}/index.html`);
	mainWindow.on ('closed', () => { app.quit (); });
}
app.on ('ready', onAppReady);
