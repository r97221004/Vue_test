<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <button @click="sendStudentName">把學生名給 School 組件</button>
  </div>
</template>

<script>
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
      this.$bus.$emit("hello", this.name);
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
