


/**
 * 逻辑数据集合。
 */
export class MysqlConnection {
   /** 链接 */
   public sqlConnection: any;

   /** 
    * 关联数据库链接。
    * 
    * @param sqlConection 链接
    */
   public link(sqlConection: any) {
      this.sqlConnection = sqlConection;
   }

   /**
    * 构造处理。
    */
   public constructor() {

   }

   /** 
    * 异步查询结果。
    * 
    * @param sql 脚本
    * @return 数据内容
    */
   public async selectDatabaseAsync(databaseName: string): Promise<any> {
      var sqlConnection = this.sqlConnection;
      var promise = new Promise((resolve: any, reject: any) => {
         var sql = 'USE ' + databaseName;
         sqlConnection.query(sql, (error: any, content: any) => {
            if (error) {
               reject(error);
            } else {
               resolve(content);
            }
         });
      });
      return promise;
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
   // public async findAsync(sql: string | DataSql, parameters?: any, onSuccess?: any, onError?: any): Promise<DataResult> {
   //    var script = (sql instanceof DataSql) ? sql.toString() : sql;
   //    var promise = new Promise<DataResult>((resolve: any, reject: any) => {
   //       this.sqlConnection.query(script, parameters, (error: any, content: any) => {
   //          var result = new DataResult();
   //          result.sql = script;
   //          // 获得数据
   //          if (error) {
   //             result.resultCd = ResultEnum.Failure;
   //             result.errorMessage = error.core;
   //             result.sqlMessage = error.sqlMessage;
   //             if (onError) {
   //                onError(this, error);
   //             }
   //          } else {
   //             if (content.length == 1) {
   //                result.resultCd = ResultEnum.Success;
   //                result.content = content[0];
   //             }
   //          }
   //          // 结果处理
   //          if ((result.resultCd == ResultEnum.Success) && onSuccess) {
   //             onSuccess(result);
   //          }
   //          resolve(result);
   //       });
   //    });
   //    return promise;
   // }

   /** 
    * 异步获取查询结果。
    * 
    * @param sql 脚本
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   // public async fetchAsync(sql: string | DataSql, parameters?: any, onSuccess?: any, onError?: any): Promise<DataResult> {
   //    var script = (sql instanceof DataSql) ? sql.toString() : sql;
   //    AssertUtil.debugNotEmpty(script);
   //    AssertUtil.debugNotNull(this.sqlConnection);
   //    var promise = new Promise<DataResult>((resolve: any, reject: any) => {
   //       this.sqlConnection.query(script, parameters, (error: any, content: any) => {
   //          var result = new DataResult();
   //          result.sql = script;
   //          // 获得数据
   //          if (error) {
   //             result.resultCd = ResultEnum.Failure;
   //             result.errorMessage = error.core;
   //             result.sqlMessage = error.sqlMessage;
   //             LoggerUtil.error(this, 'Async fetch query failure. (code={1}, message={2}, sql={3})', error.code, error.sqlMessage, error.sql);
   //             if (onError) {
   //                onError(this, error);
   //             }
   //          } else {
   //             result.resultCd = ResultEnum.Success;
   //             result.content = content;
   //             LoggerUtil.debug(this, 'Async fetch query success. (count={1}, sql={2})', content.length, script);
   //          }
   //          // 结果处理
   //          if ((result.resultCd == ResultEnum.Success) && onSuccess) {
   //             onSuccess(result);
   //          }
   //          resolve(result);
   //       });
   //    });
   //    return promise;
   // }

   /** 
    * 异步获取分页结果。
    * 
    * @param query 查询
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   // public async fetchPageAsync(query: DataQuery, parameters?: any, onSuccess?: any, onError?: any): Promise<DataResult> {
   //    var sql = query.toString();
   //    var result = new DataResult();
   //    result.sql = sql;
   //    // 分页查询
   //    var promise = new Promise<DataResult>((resolve: any, reject: any) => {
   //       // 查询总数
   //       var countSql = 'SELECT COUNT(*) count FROM (' + query.toFilterSql() + ') as t';
   //       this.sqlConnection.query(countSql, parameters, (error: any, countData: any) => {
   //          // 错误处理
   //          if (error) {
   //             result.resultCd = ResultEnum.Failure;
   //             result.errorMessage = error.core;
   //             result.sqlMessage = error.sqlMessage;
   //             LoggerUtil.error(this, 'Async fetch query failure. (code={1}, message={2}, sql={3})', error.code, error.sqlMessage, error.sql);
   //             if (onError) {
   //                onError(this, error);
   //             }
   //             resolve(result);
   //          } else {
   //             // 查询内容
   //             this.sqlConnection.query(sql, parameters, (error: any, data: any) => {
   //                if (error) {
   //                   // 错误处理
   //                   result.resultCd = ResultEnum.Failure;
   //                   result.errorMessage = error.core;
   //                   result.sqlMessage = error.sqlMessage;
   //                   LoggerUtil.error(this, 'Async fetch query failure. (code={1}, message={2}, sql={3})', error.code, error.sqlMessage, error.sql);
   //                   if (onError) {
   //                      onError(this, error);
   //                   }
   //                } else {
   //                   // 设置数据
   //                   result.resultCd = ResultEnum.Success;
   //                   result.total = countData[0].count;
   //                   result.pageSize = query.pageSize;
   //                   result.page = query.page;
   //                   result.content = data;
   //                   LoggerUtil.debug(this, 'Async fetch query success. (count={1}, sql={2})', data.length, sql);
   //                }
   //                // 结果处理
   //                if ((result.resultCd == ResultEnum.Success) && onSuccess) {
   //                   onSuccess(result);
   //                }
   //                resolve(result);
   //             });
   //          }
   //       });
   //    });
   //    return promise;
   // }

   /** 
    * 异步执行脚本。
    *
    * @param sql 脚本
    * @param parameters 参数集合
    * @param onSuccess 成功处理
    * @param onError 失败处理
    * @return 数据内容
    */
   // public async executeSqlAsync(sql: string | DataSql, parameters?: any, onSuccess?: any, onError?: any): Promise<DataResult> {
   //    var script = (sql instanceof DataSql) ? sql.toString() : sql;
   //    AssertUtil.debugNotEmpty(script);
   //    AssertUtil.debugNotNull(this.sqlConnection);
   //    var promise = new Promise<DataResult>((resolve: any, reject: any) => {
   //       this.sqlConnection.query(script, parameters, (error: any, content: any) => {
   //          var result = new DataResult();
   //          result.sql = script;
   //          // 获得数据
   //          if (error) {
   //             result.resultCd = ResultEnum.Failure;
   //             result.errorMessage = error.core;
   //             result.sqlMessage = error.sqlMessage;
   //             LoggerUtil.error(this, 'Async execute sql failure. (code={1}, message={2}, sql={3})', error.code, error.sqlMessage, error.sql);
   //             if (onError) {
   //                onError(this, error);
   //             }
   //          } else {
   //             result.resultCd = ResultEnum.Success;
   //             result.affectedRows = content.affectedRows;
   //             LoggerUtil.debug(this, 'Async execute sql success. (count={1}, sql={2})', content.affectedRows, script);
   //          }
   //          // 结果处理
   //          if ((result.resultCd == ResultEnum.Success) && onSuccess) {
   //             onSuccess(result);
   //          }
   //          resolve(result);
   //       });
   //    });
   //    return promise;
   // }

   /** 
    * 释放处理。
    */
   public dispose() {
      this.sqlConnection.release();
      // 父处理
      super.dispose();
   }
}
