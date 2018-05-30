import { RequestMethodEnum } from './RequestMethodEnum';
var express = require('express');
var Domain = require("domain");
/**
 * 枚举路由。
 */
export class Router {
   /** 路径 */
   public rootPath: string;
   /** 路由句柄 */
   public handleRouter: any;

   /**
    * 构造处理。
    *
    * @param source 代码
    */
   public constructor() {
      /**当前路由路径 */
      this.rootPath = '';
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   protected generateInvoker(method: RequestMethodEnum, path: string, callback: Function) {
      return (request: any, response: any) => {
         var domain = Domain.create();
         // 运行处理
         domain.run(() => {
            callback(request, response);
         });
         domain.on('error', (error: any) => {
            // 发送例外
         });
      };
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerRouter(method: RequestMethodEnum, path: string, callback: Function) {
      switch (method) {
         case RequestMethodEnum.Get: {
            this.handleRouter.get(path, this.generateInvoker(method, path, callback));
            break;
         }
         case RequestMethodEnum.Post: {
            this.handleRouter.post(path, this.generateInvoker(method, path, callback));
            break;
         }
         case RequestMethodEnum.Delete: {
            this.handleRouter.delete(path, this.generateInvoker(method, path, callback));
            break;
         }
         case RequestMethodEnum.Put: {
            this.handleRouter.put(path, this.generateInvoker(method, path, callback));
            break;
         }
      }
   }

   /**
    * 获得路由器。
    *
    * @return 路由器
    */
   public getRouter(): any {
      if (!this.handleRouter) {
         this.handleRouter = express.Router();
      }
      return this.handleRouter;
   }
}