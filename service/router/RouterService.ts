import { Router } from './base/Router';
import { Class } from './../runtime/core/class/Class';
import { Service } from "../runtime/core/service/Service";
import { RouterManager } from "../runtime/decorator/router/RouterManager";

export class RouterService extends Service {

   constructor() {
      super();
   }
   /**
    * 组装路由
    * @param express 
    */
   public routerDispacher(express: any) {
      var classes = RouterManager.instance.classes;
      classes.forEach((clazz: Class) => {
         var instance = clazz.instance as Router;
         var router = instance.getRouter();
         express.use(instance.rootPath, router);
      });
   }
}