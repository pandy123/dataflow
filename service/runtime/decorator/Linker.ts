import { ClassUtil } from "../core/class/ClassUtil";

export function Linker(clazz: Function) {
   return function (target: any, name: any): any {
      var propertyName = '_' + name;
      // 设置描述器
      var descriptor = new Object() as any;
      descriptor.get = function () {
         // 获得实例对象
         var instance = this[propertyName];
         if (!instance) {
            instance = this[propertyName] = ClassUtil.getInstance(clazz);
         }
         return instance;
      };
      descriptor.enumerable = false;
      return descriptor;
   }
}