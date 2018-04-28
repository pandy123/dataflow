

var express = require("express")
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var http = require('http');
var socketIo = require('socket.io');
//var event = require("EventEmitter");
export class Application {

   /**网络服务 */
   private _express: any;
   /**默认端口 */
   public port: number;
   /**websocket 服务 */
   public serverio: any;
   /** http 服务 */
   public server: any;
   /**默认静态资源路径 */
   public assPath: string;
   /**日志文件路径 */
   public loggerFilePath: string;

   constructor() {
      this.port = 3000;
      /** 相对于根目录 */
      this.assPath = "./public";
      this.loggerFilePath = "";
   }

   /**创建服务 */
   public open() {
      // 创建网络服务器
      this._express = express();
      // 设置端口
      this._express.set('port', this.port);
      // 设置静态资源路由
      this._express.use(express.static(this.assPath));
      // 设置路由
      this._express.use(cookieParser());
      this._express.get('/', function (req: any, res: any, next: any) {
         var cookie = req.cookie;
         res.send('Hello World!');
      });
   }

   /**
    * 启动服务
    */
   public start() {
      this.open();
      this.server = http.createServer(this._express);
      this.server.listen(this.port);
      // 设置WebSocket服务
      var serverIo = this.serverio = socketIo(this.server);
      serverIo.on('connection', () => { });
   }

}