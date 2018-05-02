import { Router } from "../../base/router/Router";
import { RequestMethodEnum } from "../../base/router/RequestMethodEnum";



/**
 * 数据定义路由
 */
export class RegisterRouter extends Router {
   constructor() {
      super();
      this.rootPath = 'register';
   }

   /**
    * 登录 
    * @param req 
    * @param res 
    * @param next 
    */
   public register(req: any, res: any, next: any) {

   }

   /**
    * 获得路由器。
    */
   public getRouter() {
      var router = super.getRouter();
      this.registerRouter(RequestMethodEnum.Get, '/', this.register);
      return router;
   }
}