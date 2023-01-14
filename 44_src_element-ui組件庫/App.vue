<template>
  <div>
    <button>原生的按鈕</button>
    <input type="text" />
    <atguigu-row>
      <atguigu-button>默認按鈕</atguigu-button>
      <atguigu-button type="primary">主要按鈕</atguigu-button>
      <atguigu-button type="success">成功按鈕</atguigu-button>
      <atguigu-button type="info">信息按鈕</atguigu-button>
      <atguigu-button type="warning">警告按鈕</atguigu-button>
      <atguigu-button type="danger">危險按鈕</atguigu-button>
    </atguigu-row>
    <atguigu-date-picker type="date" placeholder="選擇日期">
    </atguigu-date-picker>
    <atguigu-row>
      <atguigu-button icon="el-icon-search" circle></atguigu-button>
      <atguigu-button
        type="primary"
        icon="el-icon-s-check"
        circle
      ></atguigu-button>
      <atguigu-button
        type="success"
        icon="el-icon-check"
        circle
      ></atguigu-button>
      <atguigu-button
        type="info"
        icon="el-icon-message"
        circle
      ></atguigu-button>
      <atguigu-button
        type="warning"
        icon="el-icon-star-off"
        circle
      ></atguigu-button>
      <atguigu-button
        type="danger"
        icon="el-icon-delete"
        circle
      ></atguigu-button>
    </atguigu-row>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>