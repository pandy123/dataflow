

var express = require("express")
// var parser = require('cookie-parser')
// var bodyParser = require('body-parser');
var http = require('http');
var socketIo = require('socket.io');
export class Application {

   /**网络服务 */
   private _express: any;
   /**默认端口 */
   public port: string;
   /**websocket 服务 */
   public serverio: any;
   /** http 服务 */
   public server: any;
   /**默认静态资源路径 */
   public assPath: string;
   /**日志文件路径 */
   public loggerFilePath: string;

   constructor() {
      this.port = "3000";
      this.assPath = "../public";
      this.loggerFilePath = "";
   }

   public open() {
      // 创建网络服务器
      this._express = express();
      // 设置端口
      this._express.set('port', this.port);
      // 设置路由
      this._express.use(express.static(this.assPath));
   }

   public start() {
      this.open;
      this.server = http.createServer(this._express);
      this.server.listen(this.port);
      // 设置WebSocket服务
      var serverIo = this.serverio = socketIo(this.server);
      serverIo.on('connection', () => { });
   }

}