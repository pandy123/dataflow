
/**
 * 服务基类。
 * 
 */
export class Service {
   /** 名称 */
   public name: string;
   /** 激活状态 */
   protected _statusActive: boolean;

   /**
    * 构造处理。
    */
   public constructor() {
      // 设置属性
      this.name = null as any;
      this._statusActive = false;

   }

   /**
 * 获得激活状态。
 *
 * @return 激活状态
 */
   public get statusActive(): boolean {
      return this._statusActive;
   }

   /**
    * 激活处理。
    */
   public active() {
      if (!this._statusActive) {
         this._statusActive = true;
      }
   }
   /**
    * 取消激活处理。
    */
   public deactive() {
      if (this._statusActive) {
         this._statusActive = false;
      }
   }


   /**
    * 释放处理。
    */
   public dispose() {
      // 释放属性
      this.name = null as any;
      this._statusActive = false;
   }
}
