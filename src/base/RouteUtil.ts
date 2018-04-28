
var libFs = require('fs');
var libJsonfile = require('jsonfile');

/**
 * 路由工具类。
 */
export class RouteUtil {
   /**
    *
    * @param request 网络请求
    * @return 请求地址
    */
   public static getIp(request: any) {
      var ip = request.ip as string;
      if (ip) {
         var items = ip.split(':');
         return items[items.length - 1];
      }
      return '';
   }

   /**
    * 发送文本。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param message 消息
    */
   public static sendText(request: any, response: any, text: string) {
      // LoggerUtil.debug(RouteUtil, 'Send route text. (uri={1}, text_length={2})', request.baseUrl, text.length);
      try {
         response.status(200);
         response.set({
            'Content-type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache'
         });
         response.end(text);
      } catch (error) {
         //  LoggerUtil.fatal(RouteUtil, error, 'Send route text failure. (uri={1})', request.baseUrl);
      }
   }

   /**
    * 发送消息。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param jconfig 消息
    */
   public static sendMessage(request: any, response: any) {
      if (request && response) {
         // LoggerUtil.debug(RouteUtil, 'Send route message. (result={1}, code={2}, uri={3})', message.result, message.code, request.baseUrl);
         // 发送数据
         try {
            response.set({
               'Content-type': 'text/json',
               'Cache-Control': 'no-cache'
            });
            response.status(200);
            // var result = message.saveJson();
            var text = JSON.stringify("result");
            response.send(text);
         } catch (error) {
            //  LoggerUtil.fatal(RouteUtil, error, 'Send route message failure. (result={1}, code={2}, uri={3})', message.result, message.code, request.baseUrl);
         }
      } else {
         // LoggerUtil.error(RouteUtil, 'Invalid parameters.');
      }
   }

   /**
    * 发送文件。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param jconfig 消息
    */
   public static sendJsonString(request: any, response: any, text: string) {
      // LoggerUtil.debug(RouteUtil, 'Send route json string. (uri={1}, text_length={2})', request.baseUrl, text.length);
      // 发送数据
      try {
         response.status(200);
         response.set({
            'Content-type': 'text/json',
            'Cache-Control': 'no-cache'
         });
         response.send(text);
      } catch (error) {
         //  LoggerUtil.fatal(RouteUtil, error, 'Send route json string failure. (uri={1}, text_length={2})', request.baseUrl, text.length);
      }
   }

   /**
    * 发送文件。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param jconfig 消息
    */
   public static sendJsonText(request: any, response: any, jconfig: any) {
      var text = JSON.stringify(jconfig);
      // LoggerUtil.debug(RouteUtil, 'Send route json text. (length={1})', text.length);
      // 发送数据
      try {
         response.status(200);
         response.set({
            'Content-type': 'text/json',
            'Cache-Control': 'no-cache'
         });
         response.send(text);
      } catch (error) {
         // LoggerUtil.fatal(RouteUtil, error, 'Send route json text failure. (uri={1}, text_length={2})', request.baseUrl, text.length);
      }
   }

   /**
    * 发送JSON对象。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param jconfig 消息
    */
   public static sendJsonObject(request: any, response: any, jconfig: any) {
      var text = JSON.stringify(jconfig);
      // LoggerUtil.debug(RouteUtil, 'Send route json object. (uri={1}, json_length={2})', request.baseUrl, text.length);
      // 发送数据
      try {
         response.status(200);
         response.set({
            'Content-type': 'text/json',
            'Cache-Control': 'no-cache'
         });
         response.send(text);
      } catch (error) {
         // LoggerUtil.fatal(RouteUtil, error, 'Send route json object failure. (uri={1}, json_length={2})', request.baseUrl, text.length);
      }
   }

   /**
    * 发送文件。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param fileName 文件名称
    */
   public static sendJsonFile(request: any, response: any, fileName: string) {
      // LoggerUtil.debug(RouteUtil, 'Send route json file. (uri={1}, file_name={2})', request.baseUrl, fileName);
      try {
         // 读取文件
         var jdata = libJsonfile.readFileSync(fileName);
         var result = JSON.stringify(jdata);
         // 发送数据
         response.status(200);
         response.set({
            'Content-type': 'text/json',
            'Cache-Control': 'no-cache'
         });
         response.send(result);
      } catch (error) {
         //LoggerUtil.fatal(RouteUtil, error, 'Send route json object failure. (uri={1}, file_name={2})', request.baseUrl, fileName);
      }
   }

   /**
    * 发送文件。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param message 消息
    */
   public static sendFile(request: any, response: any, fileName: string) {
      //  LoggerUtil.debug(RouteUtil, 'Send route file. (file_name={1}, uri={2})', fileName, request.baseUrl);
      // 发送数据
      try {
         response.status(200);
         response.set({
            "Content-type": "application/octet-stream"
            // "Content-Disposition": "attachment;filename=" + encodeURI("renderTasks.zip")
         });
         response.sendFile(fileName);
      } catch (error) {
         // LoggerUtil.fatal(RouteUtil, error, 'Send route file failure. (file_name={1}, uri={2})', fileName, request.baseUrl);
      }
   }

   /**
    * 发送文件文本。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param message 消息
    */
   public static sendFileText(request: any, response: any, fileName: string) {
      //  LoggerUtil.debug(RouteUtil, 'Send route file text. (uri={1}, file_name={2})', request.baseUrl, fileName);
      // 打开文件
      var source = '';
      if (libFs.existsSync(fileName)) {
         source = libFs.readFileSync(fileName);
      }
      // 发送数据
      try {
         response.status(200);
         response.set({
            'Content-type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache'
         });
         response.end(source);
      } catch (error) {
         // LoggerUtil.fatal(RouteUtil, error, 'Send route file text failure. (uri={1}, file_name{2})', request.baseUrl, fileName);
      }
   }

   /**
    * 发送文件。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param content 内容
    */
   public static sendFileContent(request: any, response: any, content: any) {
      // LoggerUtil.debug(RouteUtil, 'Send route file content. (uri={1})', request.baseUrl);
      // 发送数据
      try {
         response.status(200);
         response.set({
            "Content-type": "application/octet-stream",
            "Content-Disposition": "attachment;filename=" + encodeURI("renderTasks.zip")
         });
         // response.send(message);
         response.end(content);
      } catch (error) {
         //  LoggerUtil.fatal(RouteUtil, error, 'Send route file content failure. (uri={1})', request.baseUrl);
      }
   }

   /**
    * 发送例外。
    *
    * @param request 网络请求
    * @param response 网络应答
    * @param error 例外
    */
   public static sendException(request: any, response: any, error: any) {
      //var message = new ServiceMessage();
      // message.code = 'HTTP-500';
      // if (error) {
      //    message.messageType = error.name;
      //    message.error = error;
      // }
      // debugger
      // try {
      //    response.set({
      //       'Content-type': 'text/json',
      //       'Cache-Control': 'no-cache'
      //    });
      //    response.status(200);
      //    var jresult = message.saveJson();
      //    var text = JSON.stringify(jresult);
      //    response.send(text);
      // } catch (error) {
      //    LoggerUtil.fatal(RouteUtil, error, 'Send route exception failure. (result={1}, code={2}, uri={3})', message.result, message.code, request.baseUrl);
      // }
   }
}