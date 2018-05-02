/**
 * 单件基类。
 *
 */
export class SingletonObject {
   /** 标志 */
   protected static _singleton: boolean = true;
   /** 实例 */
   protected static _instance: any;

   /**
    * 获得实例。
    *
    * @return 实例
    */
   public static get instance(): any {
      var instance = this._instance;
      if (!instance || instance.constructor !== this) {
         instance = this._instance = new this();
      }
      return instance;
   }
}
