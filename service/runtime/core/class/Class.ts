export class Class {

   public name: string;
   /**当前类 */
   public clazz: Function;
   /**当前类的唯一实例 */
   private _instance: any;
   /**构造函数 */

   constructor(clazz?: Function) {
      this.name = null as any;
      this.clazz = clazz as any;
      this._instance = null as any;
   }

   /**
    * 获取唯一实例
    */
   public get instance() {
      if (!this._instance) {
         this._instance = new (this.clazz as any)();
      }
      return this._instance;
   }

   /**
    * 释放函数
    */
   public dispose() {
      this.name = null as any;
      this.clazz = null as any;
      this._instance = null as any;
   }
}
