import { ApiType} from "../preload/index";

export {};

declare global {
  interface Window {
    electron: ElectronAPI;
    api: ApiType;
  }
}