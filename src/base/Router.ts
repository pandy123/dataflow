var express = require('express');
/**
 * 枚举路由。
 */
export class Router {
   /** 代码 */
   public name: string;
   /** 路径 */
   public uri: string;
   /** 路由句柄 */
   public handleRouter: any;

   /**
    * 构造处理。
    *
    * @param source 代码
    */
   public constructor() {
      this.name = '';
      this.uri = '';
   }

   /**
    * 获得路由器。
    */
   public register() {
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   protected generateInvoker(method: string, path: string, callback: Function) {
      return (request: any, response: any) => {
         // LoggerUtil.debug(this, 'Router receive. (method={1}, uri={2})', method, request.baseUrl);
         // var domain = libDomain.create();
         // 错误处理
         // domain.on('error', (error: any) => {
         //    // 发送例外
         //    // RouteUtil.sendException(request, response, error);
         //    // Router.Logger.fatal(this, 'generateInvoker', error, 'Process path failure.', { 'method': method, 'uri': request.baseUrl });
         // });
         // // 运行处理
         // domain.run(() => {
         //    //var speed = new Speed();
         //    callback(request, response);
         //    // if (speed.record() > 1000) {
         //    //    LoggerUtil.debugTick(this, speed.current, 'Process node invoker too slow. (method={1}, uri={2})', method, request.baseUrl);
         //    // }
         // });
      };
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerGet(path: string, callback: Function) {
      this.handleRouter.get(path, this.generateInvoker('get', path, callback));
   }

   /**
    * 注册Put函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerPut(path: string, callback: Function) {
      this.handleRouter.put(path, this.generateInvoker('put', path, callback));
   }

   /**
    * 注册Delete函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerDelete(path: string, callback: Function) {
      this.handleRouter.delete(path, this.generateInvoker('delete', path, callback));
   }

   /**
    * 注册Post函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerPost(path: string, callback: Function) {
      this.handleRouter.post(path, this.generateInvoker('post', path, callback));
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