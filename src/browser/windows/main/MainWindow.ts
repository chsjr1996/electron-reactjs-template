import { BrowserWindow } from 'electron';
import config from './MainWindowConfig';

export default class MainWindow extends BrowserWindow {
  constructor() {
    super(config.browserWindow);
    this.loadURL(config.baseUrl);
  }
}
