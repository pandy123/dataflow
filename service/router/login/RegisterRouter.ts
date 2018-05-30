import { RouterLinker } from "../../runtime/decorator/router/RouterLinker";
import { Router } from "../base/Router";
import { RequestMethodEnum } from "../base/RequestMethodEnum";



/**
 * 数据定义路由
 */
@RouterLinker()
export class RegisterRouter extends Router {
   constructor() {
      super();
      this.rootPath = '/register';
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