<template>
  <div>
    <h2>Home組件內容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  /* beforeDestroy() {
			console.log('Home 組件即將被銷毀了')
		}, */
  /* mounted() {
			console.log('Home 組件掛載完畢了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
};
</script>