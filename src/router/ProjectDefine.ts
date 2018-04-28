import { AsyncRouter } from "../base/AsyncRouter";


/**
 * 数据定义路由
 */
export class ProjectDefineRouter extends AsyncRouter {


   public onRefreshAsync = (request: any, response: any) => {

   }

   /**
    * 获得路由器。
    */
   public getRouter() {
      var router = super.getRouter();
      this.registerGetAsync('/user/create', this.onRefreshAsync);
      return router;
   }
}