
/**
 * 所有可继承对象的基类。
 * 支持类的判断、获取内部运行信息的功能。
 */
export class Base {
   /** 哈希值序列 */
   protected static __nextHash: number = 1;
   /** 哈希值 */
   protected __hashCode: number;
   /** 释放标志 */
   protected __dispose: boolean;

   constructor() {
      this.__dispose = false;
      this.__hashCode = null as any;
   }

   /**
    * 获取哈希值。
    *
    * @return 哈希值
    */
   public get hashCode(): number {
      var hashCode = this.__hashCode;
      if (!hashCode) {
         hashCode = this.__hashCode = Base.__nextHash++;
      }
      return hashCode;
   }

   /**
    * 是否已经释放。
    *
    * @return 是否释放
    */
   public isDispose(): boolean {
      return this.__dispose;
   }

   /**
 * 释放当前实例。
 *
 * @param flag 全部释放标志
 */
   public dispose(flag?: boolean) {
      this.__dispose = true;
   }
}
