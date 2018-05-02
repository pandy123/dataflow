import { Class } from './Class';
import { SingletonObject } from '../base/SingletonObject';
import { TypeMap } from '../../lang/TypeMap';
var lodash = require("lodash");

/**
 * 类管理器
 */
export class ClassManager extends SingletonObject {

   public classes: TypeMap<Class>;

   constructor() {
      super();
      this.classes = new TypeMap<Class>();
   }

   /**
    * 注册一个类
    * @param clazz 
    */
   public register(clazz: Function): Class {
      var name = (clazz as any).name || clazz.toString();
      if (!this.classes.contains(name)) {
         var type = new Class(clazz);
         this.classes.setValue(name, type);
         return type;
      } else {
         return this.classes.getValue(name);
      }
   }

   /**
    * 获取唯一实例
    * @param clazz 
    */
   public getInstance(clazz: Function) {
      var name = (clazz as any).name || clazz.toString();
      if (!this.classes.contains(name)) {
         var type = new Class(clazz)
         this.classes.setValue(name, type);
         return type.instance;
      } else {
         var type = this.classes.getValue(name);
         return type.instance;
      }

   }

   /**
    * 释放函数
    */
   public dispose() {
      for (var key in this.classes) {
         this.classes.getValue(key).dispose();
      }
      this.classes = null as any;
   }
}