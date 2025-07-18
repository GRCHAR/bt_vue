<template>
  <div class="bt-search-container">
    <h1>BT资源搜索</h1>
    
    <!-- 搜索区域 -->
    <div class="search-area">
      <el-input
        v-model="keyword"
        placeholder="请输入搜索关键词"
        class="search-input"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <el-button :icon="Search" @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>
    
    <!-- 搜索结果 -->
    <div class="search-results" v-loading="loading">
      <el-empty v-if="!loading && resources.length === 0" description="暂无搜索结果" />
      
      <el-table
        v-else
        :data="resources"
        style="width: 100%"
        border
        stripe
      >
        <el-table-column prop="name" label="资源名称" min-width="250" show-overflow-tooltip />
        <el-table-column prop="fileList" label="文件列表" min-width="300" show-overflow-tooltip />
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="操作" width="120" fixed="right">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="copyMagnet(scope.row.hash)"
            >
              复制链接
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { searchBT } from '../api';
import type { BTResource } from '../types';

// 状态
const keyword = ref('');
const resources = ref<BTResource[]>([]);
const loading = ref(false);

// 搜索方法
const handleSearch = async () => {
  loading.value = true;
  try {
    resources.value = await searchBT(keyword.value);
  } catch (error) {
    console.error('搜索失败:', error);
    ElMessage.error('搜索失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};

// 复制磁力链接
const copyMagnet = (hash: string) => {
  navigator.clipboard.writeText(hash)
    .then(() => {
      ElMessage.success('磁力链接已复制到剪贴板');
    })
    .catch(() => {
      ElMessage.error('复制失败，请手动复制');
    });
};

// 组件挂载时加载初始数据
onMounted(() => {
  handleSearch();
});
</script>

<style scoped>
.bt-search-container {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #409EFF;
}

.search-area {
  margin-bottom: 20px;
}

.search-input {
  width: 50%;
}

.search-results {
  min-height: 300px;
}
</style>