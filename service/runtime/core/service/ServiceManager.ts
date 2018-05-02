import { Service } from './Service';
import { SingletonObject } from '../base/SingletonObject';
import { TypeMap } from '../../lang/TypeMap';

/**
 * 服务管理器。
 * 
 */
export class ServiceManager extends SingletonObject {
   /** 服务集合 */
   protected _services: TypeMap<Service>;

   /**
    * 构造处理。
    */
   public constructor() {
      super();
      // 设置属性
      this._services = new TypeMap<Service>();
   }

   /**
     * 注册一个类
     * @param service 
     */
   public register(service: Service) {
      var name = (service as any).name || service.toString();
      if (!this._services.contains(name)) {
         this._services.setValue(name, service);
      }
   }

   /**
    * 释放函数
    */
   public dispose() {
      for (var key in this._services) {
         this._services.getValue(key).dispose();
      }
      this._services = null as any;
   }
}
