import axios from 'axios';
import type { ApiResponse, BTResource } from '../types';

// 创建axios实例
const api = axios.create({
  baseURL: 'https://localhost:8092/search', // 实际应用中替换为真实的API地址
  timeout: 10000
});

// 模拟数据（实际应用中应删除）
const mockData: BTResource[] = [
  {
    name: '示例电影.2023.1080p.BluRay',
    fileList: '示例电影.mkv (8.5GB), 字幕.srt (50KB), 说明.txt (2KB)',
    hash: 'magnet:?xt=urn:btih:1a2b3c4d5e6f7g8h9i0j',
    createTime: '2023-10-15 14:30:22'
  },
  {
    name: '示例电视剧.S01.1080p.WEB-DL',
    fileList: 'S01E01.mkv (1.2GB), S01E02.mkv (1.3GB), S01E03.mkv (1.1GB)',
    hash: 'magnet:?xt=urn:btih:a1b2c3d4e5f6g7h8i9j0',
    createTime: '2023-09-28 09:15:43'
  },
  {
    name: '示例软件.v1.2.3.完整版',
    fileList: 'setup.exe (156MB), crack.exe (2MB), readme.txt (5KB)',
    hash: 'magnet:?xt=urn:btih:9i8h7g6f5e4d3c2b1a0',
    createTime: '2023-11-02 18:45:12'
  }
];

/**
 * 搜索BT资源
 * @param keyword 搜索关键词
 * @returns Promise<BTResource[]>
 */
export const searchBT = async (keyword: string): Promise<BTResource[]> => {
  try {
    // 实际应用中应该调用真实API
    const response = await api.get<ApiResponse>(`/search?keyword=${encodeURIComponent(keyword)}`);
    return response.data.data;
    
    // 模拟API调用（实际应用中应删除）
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const filteredData = keyword 
    //       ? mockData.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
    //       : mockData;
    //     resolve(filteredData);
    //   }, 500); // 模拟网络延迟
    // });
  } catch (error) {
    console.error('搜索BT资源失败:', error);
    return [];
  }
};