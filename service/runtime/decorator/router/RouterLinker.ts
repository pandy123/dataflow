import { RouterManager } from './RouterManager';
export function RouterLinker() {
   return function (constructor: Function): void {
      var instance = RouterManager.instance;
      instance.register(constructor);
   }

}