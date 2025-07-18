import axios from 'axios';
import type { ApiResponse, BTResource, PaginationParams, PaginationData } from '../types';

// 创建axios实例
const api = axios.create({
  baseURL: 'https://localhost:8092', // 实际应用中替换为真实的API地址
  timeout: 10000
});

// 模拟数据（实际应用中应删除）
// const mockData: BTResource[] = [
//   {
//     name: '示例电影.2023.1080p.BluRay',
//     fileList: '示例电影.mkv (8.5GB), 字幕.srt (50KB), 说明.txt (2KB)',
//     hash: 'magnet:?xt=urn:btih:1a2b3c4d5e6f7g8h9i0j',
//     createTime: '2023-10-15 14:30:22'
//   },
//   {
//     name: '示例电视剧.S01.1080p.WEB-DL',
//     fileList: 'S01E01.mkv (1.2GB), S01E02.mkv (1.3GB), S01E03.mkv (1.1GB)',
//     hash: 'magnet:?xt=urn:btih:a1b2c3d4e5f6g7h8i9j0',
//     createTime: '2023-09-28 09:15:43'
//   },
//   {
//     name: '示例软件.v1.2.3.完整版',
//     fileList: 'setup.exe (156MB), crack.exe (2MB), readme.txt (5KB)',
//     hash: 'magnet:?xt=urn:btih:9i8h7g6f5e4d3c2b1a0',
//     createTime: '2023-11-02 18:45:12'
//   },
//   {
//     name: '示例音乐专辑.2023.FLAC',
//     fileList: '01.Track01.flac (45MB), 02.Track02.flac (42MB), 03.Track03.flac (38MB)',
//     hash: 'magnet:?xt=urn:btih:2b3c4d5e6f7g8h9i0j1a',
//     createTime: '2023-10-05 12:20:33'
//   },
//   {
//     name: '示例电子书.2023.PDF',
//     fileList: 'ebook.pdf (15MB), cover.jpg (2MB)',
//     hash: 'magnet:?xt=urn:btih:3c4d5e6f7g8h9i0j1a2b',
//     createTime: '2023-11-10 08:55:17'
//   },
//   {
//     name: '示例游戏.2023.完整版',
//     fileList: 'setup.exe (25GB), crack.exe (5MB), readme.txt (10KB)',
//     hash: 'magnet:?xt=urn:btih:4d5e6f7g8h9i0j1a2b3c',
//     createTime: '2023-09-15 16:40:22'
//   },
//   {
//     name: '示例纪录片.2023.1080p.BluRay',
//     fileList: '纪录片.mkv (10GB), 花絮.mp4 (2GB), 字幕.srt (100KB)',
//     hash: 'magnet:?xt=urn:btih:5e6f7g8h9i0j1a2b3c4d',
//     createTime: '2023-08-20 21:15:48'
//   }
// ];

/**
 * 搜索BT资源
 * @param keyword 搜索关键词
 * @returns Promise<BTResource[]>
 */
export const searchBT = async (keyword: string): Promise<BTResource[]> => {
  try {
    // 实际应用中应该调用真实API
    const response = await api.get<ApiResponse>(`/search?keyword=${encodeURIComponent(keyword)}`);
    return response.data.data as BTResource[];
    
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

/**
 * 搜索BT资源（带分页）
 * @param keyword 搜索关键词
 * @param pagination 分页参数
 * @returns Promise<PaginationData<BTResource>>
 */
export const searchBTWithPagination = async (
  keyword: string,
  pagination: PaginationParams
): Promise<PaginationData<BTResource>> => {
  try {
    // 实际应用中应该调用支持分页的真实API
    const response = await api.get<ApiResponse>(
      `/search?keyword=${encodeURIComponent(keyword)}&page=${pagination.page}&pageSize=${pagination.pageSize}`
    );
    return response.data.data as PaginationData<BTResource>;
    
    
  } catch (error) {
    console.error('搜索BT资源失败:', error);
    return {
      list: [],
      total: 0,
      page: pagination.page,
      pageSize: pagination.pageSize,
      totalPages: 0
    };
  }
};