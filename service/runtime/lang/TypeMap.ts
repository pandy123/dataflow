export class TypeMap<Type>{

   /**值 */
   public values: any;
   /**
    * 构造函数
    */
   constructor() {
      this.values = new Object() as any;
   }

   /**
    * 设置值
    * @param key 
    * @param value 
    */
   public setValue(key: string, value: Type): Type {
      this.values[key] = value;
      return value;
   }

   /**
    * 获取值
    * @param key 
    */
   public getValue(key: string): Type {
      return this.values[key];
   }

   /**
    * 删除值
    * @param key 
    */
   public deleteValue(key: string) {
      if (this.values[key]) {
         delete this.values[key];
      }
   }

   public contains(key: string): boolean {
      return this.values[key] ? true : false;
   }

   /**
    * 释放内存
    */
   public dispose() {
      this.values = null as any;
   }
}