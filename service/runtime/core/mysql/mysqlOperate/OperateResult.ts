
/**
 * 数据结果。
 */
export class OperateResult {
   /** 影响记录数 */
   public affectedRows: number;
   /** 总数 */
   public total: number;
   /** 页大小 */
   public pageSize: number;
   /** 页号 */
   public page: number;
   /** 内容 */
   public content: any;
   /** 执行SQL文 */
   public sql: string;
   /** SQL错误 */
   public sqlMessage: string;
   /** 错误信息 */
   public errorMessage: string;

   /**
    * 构造处理。
    */
   public constructor() {

   }
}
