<template>
  <div>
    <h1>當前求和為：{{ sum }}</h1>
    <h3>當前求和放大10倍為：{{ bigSum }}</h3>
    <h3>我在{{ school }}，學習{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">當前求和為奇數再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用戶選擇的數字
    };
  },
  computed: {
    //借助 mapState 生成計算屬性，從 state 中讀取數據。（對象寫法）
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //借助 mapState 生成計算屬性，從 state 中讀取數據。（數組寫法）
    ...mapState(["sum", "school", "subject"]),

    /* ******************************************************************** */

    //借助 mapGetters 生成計算屬性，從 getters 中讀取數據。（對象寫法）
    // ...mapGetters({bigSum:'bigSum'})

    //借助mapGetters生成計算屬性，從getters中讀取數據。（數組寫法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    //程序員親自寫方法
    /* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */

    //借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯系 mutations (對象寫法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    //借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯系 mutations (數組寫法)
    // ...mapMutations(['JIA','JIAN']),

    /* ************************************************* */

    //程序員親自寫方法
    /* incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}, */

    //借助 mapActions 生成對應的方法，方法中會調用 dispatch 去聯系 actions (對象寫法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),

    //借助 mapActions 生成對應的方法，方法中會調用 dispatch 去聯系 actions (數組寫法)
    // ...mapActions(['jiaOdd','jiaWait'])
  },
  mounted() {
    const x = mapState({ he: "sum", xuexiao: "school", xueke: "subject" });
    console.log(x);
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
