<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把學生名给 School 组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "張三",
      sex: "男",
    };
  },
  mounted() {
    // console.log('Student',this.x)
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hello',this.name)
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
