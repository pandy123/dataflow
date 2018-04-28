import { Router } from './Router';
import { RouteUtil } from './RouteUtil';

var libExpress = require('express');
var libDomain = require("domain");

/**
 * 枚举路由。
 */
export class AsyncRouter extends Router {
   /** 日志接口 */
   // private static AsyncRouterLogger = LoggerManager.find(AsyncRouter);

   /**
    * 构造处理。
    *
    * @param source 代码
    */
   public constructor(parent?: Router) {
      super();
      // 设置属性
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   protected generateInvokerAsync(method: string, path: string, callback: Function) {
      return (request: any, response: any) => {
         // LoggerUtil.debug(this, 'Async router receive. (method={1}, uri={2})', method, request.baseUrl);
         var domain = libDomain.create();
         // 错误处理
         domain.on('error', (error: any) => {
            // 发送例外
            RouteUtil.sendException(request, response, error);
            // AsyncRouter.AsyncRouterLogger.fatal(this, 'generateInvoker', error, 'Process path failure.', { 'method': method, 'uri': request.baseUrl });
         });
         // 运行处理
         domain.run(() => {
            //  var speed = new Speed();
            var promise = callback(request, response);
            if (promise) {
               promise.then((result: any) => {
                  // if (speed.record() > 1000) {
                  //LoggerUtil.debugTick(this, speed.current, 'Process node invoker too slow. (method={1}, uri={2})', method, request.baseUrl);
                  //  }
               }).catch((error: any) => {
                  // 发送例外
                  RouteUtil.sendException(request, response, error);
                  // AsyncRouter.AsyncRouterLogger.fatal(this, 'generateInvoker', error, 'Process path failure.', { 'method': method, 'uri': request.baseUrl });
               });
            } else {
               // 发送例外
               RouteUtil.sendException(request, response, null);
               // AsyncRouter.AsyncRouterLogger.fatal(this, 'generateInvoker', null, 'Process path failure.', { 'method': method, 'uri': request.baseUrl });
            }
         });
      };
   }

   /**
    * 注册Get函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerGetAsync(path: string, callback: Function) {
      this.handleRouter.get(path, this.generateInvokerAsync('get', path, callback));
   }

   /**
    * 注册Put函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerPutAsync(path: string, callback: Function) {
      this.handleRouter.put(path, this.generateInvokerAsync('put', path, callback));
   }

   /**
    * 注册Delete函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerDeleteAsync(path: string, callback: Function) {
      this.handleRouter.delete(path, this.generateInvokerAsync('delete', path, callback));
   }

   /**
    * 注册Post函数。
    *
    * @param path 路径
    * @param callback 回调函数
    */
   public registerPostAsync(path: string, callback: Function) {
      this.handleRouter.post(path, this.generateInvokerAsync('post', path, callback));
   }
}
