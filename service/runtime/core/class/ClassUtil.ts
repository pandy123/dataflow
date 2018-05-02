import { ClassManager } from './ClassManager';

/**
 * 类工具
 */
export class ClassUtil {
   /**
    * 类管理器
    */
   public static classManger = ClassManager.instance;

   /**
    * 获取唯一实例
    * @param clazz 
    */
   public static getInstance(clazz: Function) {
      this.classManger.getInstance(clazz);
   }
}