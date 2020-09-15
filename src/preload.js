// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer,remote } from 'electron';

window.ipcRenderer = ipcRenderer;
window.remote = remote;