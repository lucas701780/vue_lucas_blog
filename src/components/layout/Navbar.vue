<template lang="">
  <nav class="backdrop-blur shadow-md">
    <div class="container container-custom-width d-flex flex-row justify-content-between">
      <router-link to="/home/resume"> <h1 class="p-3"><a href="">Lucas Resume</a></h1></router-link>
      <ul class="d-flex flex-row p-0 navList">
        <li class="p-3 navItem"> <router-link to="/home/resume">個人頁</router-link></li>
        <!-- <li class="p-3 navItem"><a href="">程式筆記</a></li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped lang="scss">
ol,
ul {
  list-style: none;
}

h1 {
  margin: 0px;
  line-height: 46px;
}
h1:hover {
  background-color: #f4f4f5;
}

a {
  text-decoration: none;
  font-weight: bold;
}

.navList > .navItem:hover {
  background-color: #f4f4f5;
}

.navItem {
  a {
    height: 100%;
    line-height: 44px;
  }
}
</style>
