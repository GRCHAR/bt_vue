// BT资源接口定义
export interface BTResource {
  name: string;           // 资源名
  fileList: string;       // 文件列表（字符串形式）
  hash: string;           // 资源hash参数
  createTime: string;     // 资源创建时间
}

// 分页参数接口
export interface PaginationParams {
  page: number;           // 当前页码
  pageSize: number;       // 每页条数
}

// 分页数据接口
export interface PaginationData<T> {
  list: T[];              // 数据列表
  total: number;          // 总条数
  page: number;           // 当前页码
  pageSize: number;       // 每页条数
  totalPages: number;     // 总页数
}

// API响应接口
export interface ApiResponse {
  code: number;
  data: BTResource[] | PaginationData<BTResource>;
  message: string;
}

// 带分页的API响应接口
export interface PaginatedApiResponse {
  code: number;
  data: PaginationData<BTResource>;
  message: string;
}