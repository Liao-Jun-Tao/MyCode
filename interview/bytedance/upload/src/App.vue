<template>
  <div>
    <!-- 选择文件 -->
    <input type="file" @change="handleFileChange" multiple="multiple" />
    <!-- 上传按钮 -->
    <el-button @click="handlUpload">upload</el-button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// 定义文件大小常量
const SIZE = 10 * 1024 * 1024; //10MB

// 定义响应式数据
const state = reactive({
  file: null,
  data: [],
});

// 选择文件
const handleFileChange = (e) => {
  const [file] = e.target.files; // 第一个文件
  if (!file) return;
  state.file = file;
};

// ajax 上传文件负责
const request = ({
  url,
  method = "post",
  data,
  headers = {},
  // 进度条
  onProgress = (e) => e,
  // 切片
  requestList,
}) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = onProgress;
    xhr.open(method, url);
    Object.keys(headers).forEach((key) =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(data);
    xhr.onload = (e) => {
      resolve({
        data: e.target.response,
      });
    };
  });
};

// 切片文件
const createFileChunk = (file, size = SIZE) => {
  console.log(file);
  const fileChunkList = [];
  let cur = 0;
  while (cur < file.size) {
    fileChunkList.push({ file: slice(cur, cur + size) });
    cur += size
  }
  console.log(fileChunkList)
  return fileChunkList;
};

const uploadChunks =async ()=>{
  // [[file]] -> [{chunk:file,hash}]-> formData ->  [{requst()}] -> Promise.All 
  const requestList = state.data
  .map(({chunk,hash}) => {
    // post 请求 js 方式组织表单数据
    const formData = new FormData()
    formData.append('chunk',chunk)
    formData.append('hash',hash)
    return(formData)
  })
  .map(({formData})=>request({
    url:"http://localhost:8888",
    data: formData
  }))
  await Promise.all(requestList)
  
}

// 上传文件
const handleUpload = async () => {
  if (!state.file) return;
  const fileChunkList = createFileChunk(state.file);
  state.data = fileChunkList.map(({file},index)=>({
    Chunk:file,
    hash:state.file.name + '-' + index
  }))
  console.log(state.data)
  await uploadChunks()
};

// request();
</script>

<style lang="scss" scoped></style>
