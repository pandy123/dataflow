import { ConnectionPool } from "./ConnectionPool";
import { OperateResult } from "../mysqlOperate/OperateResult";


/**
 * 逻辑数据集合。
 */
export class ConnectionManager {
   /** 链接缓冲 */
   public pool: ConnectionPool;

   /** 
    * 关联数据库链接。
    * 
    * @param sqlConection 链接
    */
   public link(sqlConection: any) {
   }

   /** 
    * 异步查询结果。
    * 
    * @param sql 脚本
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   public async findAsync(sql: string, parameters?: any, onSuccess?: any, onError?: any): Promise<OperateResult> {
      return null as any;
   }

   /** 
    * 异步获取查询结果。
    * 
    * @param sql 脚本
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   public async fetchAsync(sql: string, parameters?: any, onSuccess?: any, onError?: any): Promise<OperateResult> {
      return null as any;

   }

   /** 
    * 异步执行脚本。
    *
    * @param sql 脚本
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   public async executeSqlAsync(sql: string, parameters?: any, onSuccess?: any, onError?: any): Promise<OperateResult> {
      return null as any;
   }

   /** 
    * 异步获取分页结果。
    * 
    * @param query 查询
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   public async fetchPageAsync(query: any, parameters?: any, onSuccess?: any, onError?: any): Promise<OperateResult> {
      return null as any;
   }



   /** 
    * 释放处理。
    */
   public dispose() {
      var pool = this.pool;
      if (pool) {
         //pool.freeConnection(this);
         pool = null as any;
      }

   }
}
