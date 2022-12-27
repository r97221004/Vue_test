<template>
  <div>
    <h2>學校名稱：{{ name | mySlice }}</h2>
    <h2>學校地址：{{ address }}</h2>
    <button @click="test">點我測試一個 hello 方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>