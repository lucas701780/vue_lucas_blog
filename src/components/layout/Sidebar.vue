<template lang="">
  <div class="card d-lg-flex">
    <div class="card-header">
      <img class="user-avatar img-circle rounded-circle" src="https://media.cakeresume.com/image/upload/s--s4xclpCM--/c_fill,g_face,h_120,w_120/v1621142822/ojmrll8mzipiizicbnzx.jpg" alt="張光明" />
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">張光明</h5>
      <ul class="list-group list-group-flush d-flex flex-row flex-sm-row flex-md-row flex-lg-column justify-content-center">
        <li class="list-group-item">
          <a href="javascript:void(0)" @click="goResumePostion('about-me')" class="d-block"> <i class="fa fa-user pe-3" aria-hidden="true"></i>關於我</a>
        </li>
        <li class="list-group-item">
          <a href="javascript:void(0)" @click="goResumePostion('skill')" class="d-block"> <i class="fa fa-file-text pe-2" aria-hidden="true"></i> 我的技能</a>
        </li>
        <li class="list-group-item">
          <a href="javascript:void(0)" class="d-block" @click="goResumePostion('work')"> <i class="fa fa-rocket pe-2" aria-hidden="true"></i> 工作經歷</a>
        </li>
        <li class="list-group-item">
          <a href="javascript:void(0)" class="d-block" @click="goResumePostion('web')"> <i class="fa fa-thumbs-up pe-2" aria-hidden="true"></i> 我的作品</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    goResumePostion(classname) {
      console.log('classname', classname);
      const el = document.querySelector('.' + classname);
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
};
</script>

<style scoped lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/_mixins';

a {
  color: #90a8aa;
}
li {
  border: 0px;
}
i {
}
h5 {
  @include media-breakpoint-down(lg) {
    color: white;
  }
}
.card {
  @include media-breakpoint-down(lg) {
    // position:inherit;
    border: 0px;
    background-color: #90a8aa;
  }
}
.card-header {
  position: relative;
  padding-bottom: 33%;
  margin-bottom: 75px;
  background-color: #90a8aa;
  @include media-breakpoint-down(lg) {
    background-color: white;
    border: 0px;
    padding: 0%;
    margin-top: 16px;
  }
}
.user-avatar {
  position: absolute;
  width: 90px;
  height: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  @include media-breakpoint-down(lg) {
    width: 75px;
    height: 75px;
  }
}
.card-body {
  @include media-breakpoint-down(lg) {
    padding: 8px;
  }
}
.list-group-item {
  @include media-breakpoint-down(lg) {
    width: 44px;
    height: 44px;
  }
}
.card-title,
.list-group-item {
  padding-bottom: 8px;
  @include media-breakpoint-down(lg) {
    padding: 0px;
    margin-bottom: 8px;
    margin: 0px 0.5px 8px 0.5px;
    text-align: center;
    i {
      display: none;
    }
  }
}
</style>
