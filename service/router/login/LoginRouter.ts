import { RouterLinker } from "../../runtime/decorator/router/RouterLinker";
import { Router } from "../base/Router";
import { RequestMethodEnum } from "../base/RequestMethodEnum";



/**
 * 数据定义路由
 */
@RouterLinker()
export class LoginRouter extends Router {
   constructor() {
      super();
      this.rootPath = '/login';
   }

   /**
    * 登录 
    * @param req 
    * @param res 
    * @param next 
    */
   public login(req: any, res: any, next: any) {

   }

   /**
    * 登出
    * @param req 
    * @param res 
    * @param next 
    */
   public logout(req: any, res: any, next: any) {


   }

   /**
    * 获得路由器。
    */
   public getRouter() {
      var router = super.getRouter();
      this.registerRouter(RequestMethodEnum.Get, '/login', this.login);
      this.registerRouter(RequestMethodEnum.Get, '/logout', this.logout);
      return router;
   }
}