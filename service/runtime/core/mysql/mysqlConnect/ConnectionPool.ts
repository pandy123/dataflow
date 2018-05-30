import * as mysql from 'mysql';
import { MysqlConnection } from './MysqlConnection';

/**
 * 逻辑数据集合。
 */
export class ConnectionPool {
   /** 名称 */
   public name: string;
   /** 主机 */
   public host: string;
   /** 端口 */
   public port: number;
   /** 账号 */
   public passport: string;
   /** 密码 */
   public password: string;
   /** 数据库 */
   public database: string;
   /** 限制数量 */
   public limitCount: number;
   /** 请求超时 */
   public acquireTimeout: number;
   /** 收集次数 */
   public allocCount: number;
   /** 释放次数 */
   public freeCount: number;
   /** 数据缓冲 */
   protected _sqlPool: any;

   /**
    * 构造处理。
    */
   public constructor() {
      // 设置数据
      this.port = 3306;
      this.limitCount = 100;
      this.acquireTimeout = 100000;
      this.allocCount = 0;
      this.freeCount = 0;
   }

   /** 
    * 获得使用次数。
    * 
    * @return 使用次数
    */
   public get useCount(): number {
      var useCount = this.allocCount - this.freeCount;
      return useCount;
   }

   /** 
    * 加载配置信息。
    * 
    * @param jconfig 配置信息
    */
   public loadConfig(jconfig: any) {
      this.name = jconfig.name;
      this.host = jconfig.host;
      this.port = jconfig.port || this.port;
      this.passport = jconfig.passport;
      this.password = jconfig.password;
      this.database = jconfig.database;
      this.limitCount = jconfig.limit_count || this.limitCount;
      this.acquireTimeout = jconfig.acquire_timeout || this.acquireTimeout;
   }

   /** 
    * 启动处理。
    */
   public startup() {
      this._sqlPool = mysql.createPool(
         {
            host: this.host,
            port: this.port,
            user: this.passport,
            password: this.password,
            database: this.database,
            connectionLimit: this.limitCount,
            acquireTimeout: this.acquireTimeout
         }
      );
      this._sqlPool.on('connection', function (connection: any) {
         connection.on('error', (error: any) => {

         });
      });
   }

   /** 
    * 异步收集一个数据链接。
    * 
    * @return 数据库链接
    */
   // public async allocConnectionAsync(): Promise<Connection> {
   //    // var connection = new MysqlConnection();
   //    // connection.pool = this;
   //    // return new Promise<Connection>((resolve: any, reject: any) => {
   //    //    this._sqlPool.getConnection((error: any, sqlConnection: any) => {
   //    //       if (error) {
   //    //          resolve(null);
   //    //       } else {
   //    //          this.allocCount++;
   //    //          connection.link(sqlConnection);
   //    //          resolve(connection);
   //    //       }
   //    //    });
   //    // });
   // }

   /** 
    * 释放一个数据链接。
    *
    * @param connection 数据库链接
    */
   // public freeConnection(connection: Connection) {
   //    this.freeCount++;
   // }

   /** 
    * 释放处理。
    */
   public dispose() {
   }
}
