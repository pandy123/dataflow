import { Service } from './Service';
import { ServiceManager } from './ServiceManager';

/**
 * 控制台对象的管理类。
 * 
 */
export class ServiceUtil {
   protected static serviceManger = ServiceManager.instance;
   /**
    * 绑定一个服务。
    *
    * @param service 服务
    */
   public static bind(service: Service) {
      return this.serviceManger.register(service);
   }

}