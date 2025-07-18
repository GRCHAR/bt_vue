// BT资源接口定义
export interface BTResource {
  name: string;           // 资源名
  fileList: string;       // 文件列表（字符串形式）
  hash: string;           // 资源hash参数
  createTime: string;     // 资源创建时间
}

// API响应接口
export interface ApiResponse {
  code: number;
  data: BTResource[];
  message: string;
}