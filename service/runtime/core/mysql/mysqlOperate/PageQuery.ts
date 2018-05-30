// import { StringBuffer } from "stringtypebuffer"
// /** 
//  * 数据查询器。
//  */
// export class PageQuery {
//    /** 表名 */
//    public tableName: string;
//    /** 选取SQL文 */
//    public selectSql: string;
//    /** 比较集合 */
//    // public compares: Types<FieldCompare>;
//    // /** 排序集合 */
//    // public orders: Types<FieldOrder>;
//    /** 分页大小（为0表示不分页） */
//    public pageSize: number;
//    /** 页号（从1开始） */
//    public page: number;

//    /** 
//     * 构造处理。
//     */
//    public constructor() {
//       // 设置属性
//       // this.compares = new Types<FieldCompare>();
//       // this.orders = new Types<FieldOrder>();
//       this.pageSize = 0;
//       this.page = 1;
//    }

//    /**
//     * 增加比较器。
//     * 
//     * @param field 
//     * @param compareCd 
//     * @param value 
//     */
//    public addCompare(field: FieldMeta, compareCd: FieldCompareEnum, value: any) {
//       var compare = new FieldCompare();
//       compare.field = field;
//       compare.compareCd = compareCd;
//       compare.value = value;
//       this.compares.push(compare);

//    }

//    /**
//     * 增加排序器。
//     * 
//     * @param field
//     * @param orderCd
//     */
//    public addOrder(field: FieldMeta, orderCd: FieldOrderEnum) {
//       var order = new FieldOrder();
//       order.field = field;
//       order.orderCd = orderCd;
//       this.orders.push(order);
//    }

//    /**
//     * 设置查询限制。
//     * 
//     * @param pageSize 分页大小
//     * @param page 页号
//     */
//    public limit(pageSize: number, page: number): DataQuery {
//       this.pageSize = pageSize;
//       this.page = page;
//       return this;
//    }

//    /** 
//     * 获得数据过滤字符串。
//     * 
//     * @return 字符串
//     */
//    protected makeFilterSql(sql: StringBuffer) {
//       var compares = this.compares;
//       var compareCount = compares.count;
//       if (compareCount > 0) {
//          sql.pushString(' WHERE ');
//          for (var i = 0; i < compareCount; i++) {
//             var compare = compares.get(i);
//             if (i > 0) {
//                sql.pushString(' AND ');
//             }
//             sql.pushString('(');
//             switch (compare.compareCd) {
//                case FieldCompareEnum.IS_NULL:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(" IS NULL");
//                   break;
//                case FieldCompareEnum.LEFT_LIKE:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(" IS NOT NULL");
//                   break;
//                case FieldCompareEnum.LEFT_LIKE:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(" LIKE '%");
//                   sql.pushString(compare.value);
//                   sql.pushString("'");
//                   break;
//                case FieldCompareEnum.MIDDLE_LIKE:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(" LIKE '%");
//                   sql.pushString(compare.value);
//                   sql.pushString("%'");
//                   break;
//                case FieldCompareEnum.RIGHT_LIKE:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(" LIKE '");
//                   sql.pushString(compare.value);
//                   sql.pushString("%'");
//                   break;
//                default:
//                   sql.pushString(compare.field.dataName);
//                   sql.pushString(' ');
//                   sql.pushString(compare.compareCd);
//                   sql.pushString(' ');
//                   sql.pushString(compare.value);
//                   break;
//             }
//             sql.pushString(')');
//          }
//       }
//    }

//    /** 
//     * 获得数据过滤字符串。
//     * 
//     * @return 字符串
//     */
//    public toFilterSql() {
//       var sql = new StringBuffer();
//       sql.pushString(this.selectSql);
//       // 增加比较脚本
//       this.makeFilterSql(sql);
//       // 返回结果
//       return sql.toString();
//    }

//    /** 
//     * 获得数据过滤字符串。
//     * 
//     * @return 字符串
//     */
//    public toString() {
//       var sql = new StringBuffer();
//       sql.pushString(this.selectSql);
//       // 增加比较脚本
//       this.makeFilterSql(sql);
//       // 增加排序脚本
//       var orders = this.orders;
//       var orderCount = orders.count;
//       if (orderCount > 0) {
//          sql.pushString(' ORDER BY ');
//          for (var i = 0; i < orderCount; i++) {
//             var order = orders.get(i);
//             if (i > 0) {
//                sql.pushString(',');
//             }
//             sql.pushString(order.field.dataName);
//             sql.pushString(' ');
//             sql.pushString(order.orderCd);
//          }
//       }
//       // 增加限制脚本
//       var pageSize = this.pageSize;
//       if (pageSize > 0) {
//          var page = this.page;
//          if (page > 0) {
//             page--;
//          }
//          var index = pageSize * page;
//          sql.pushString(' LIMIT ' + index + ',' + pageSize);
//       }
//       return sql.toString();
//    }
// }