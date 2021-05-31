<template lang="">
  <div>
    <Navbar />
    <div class="container container-custom-width p-3 mt-4">
      <div class="row">
        <div class="col-md-12 col-lg-3 px-3 sidebar">
          
          <Sidebar />
        </div>
        <div class="col-md-12 col-lg-9 px-3">
          <main>
            <router-view> </router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';

export default {
  name: 'Dasboard',
  components: { Navbar, Sidebar },
  directives: {
    sticky: VueStickyDirective
  }
};
</script>

<style lang="scss">
.col-lg-3 .active {
  width: 22%;
}
</style>
