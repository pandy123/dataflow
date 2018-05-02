import { ClassManager } from './../../core/class/ClassManager';
import { TypeMap } from '../../lang/TypeMap';
import { SingletonObject } from '../../core/base/SingletonObject';
import { Class } from '../../core/class/Class';
var lodash = require("lodash");

/**
 * 类管理器
 */
export class RouterManager extends SingletonObject {

   public classes: Array<Class>;

   constructor() {
      super();
      this.classes = new Array<Class>();
   }

   /**
    * 注册一个类
    * @param clazz 
    */
   public register(clazz: Function) {
      var classtype = ClassManager.instance.register(clazz);
      this.classes.push(classtype);
   }

   /**
    * 释放函数
    */
   public dispose() {
      this.classes = null as any;
   }
}