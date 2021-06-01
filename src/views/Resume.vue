<template lang="">
  <div class="row">
    <div class="col-12 col-lg-10 d-flex flex-column mt-4 mt-lg-0 about-me" ref="about-me-ref">
      <h3 class="pb-3 text-center text-lg-start">About me 關於我</h3>
      <p class="lh-lg">
        資訊系背景，主要專攻網頁切版和IOS手機應用程式開發。目前著重於研究前端領域，曾參與品牌形象官網、網站後台建置等的專案開發與頁面設計。
        <br />
        <br />
        主要使用 Vue.js 開發，負責 API 串接、畫面動態效果、主題色彩配置、設計稿切版...等。
        <!-- <br /> -->
        CSS 框架主要使用 Bootstrap 5 內的 Components 和 utilites 進行開發。
      </p>
      <ul class="d-flex flex-row">
        <li class="py-2">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail me-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#D79724"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            lucas701780@gmail.com
          </a>
        </li>
        <li class="py-2 ps-3">
          <a href="https://github.com/lucas701780">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github me-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#D79724"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              />
            </svg>
            @lucas701780
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-lg-10 d-flex flex-column mt-4 skill" ref="skill_ref">
      <h3 class="py-3">Skill 技能</h3>
      <ul class="d-flex justify-content-between row">
        <li class="py-2 point point-flicker col-6 col-sm-6 col-md-6 col-lg-3">
          <h5>網頁前端</h5>
          <hr />
          <ul>
            <li class="py-1">Vue / Vuex</li>
            <li class="py-1">HTML / CSS / SASS</li>
            <li class="py-1">BootStrap</li>
            <li class="py-1">REST API / AJAX</li>
          </ul>
        </li>
        <li class="py-2 point point-flicker col-6  col-sm-6 col-md-6 col-lg-3 ">
          <h5>網頁後端</h5>
          <hr />
          <ul>
            <li class="py-1">Node.js / Express.js</li>
            <li class="py-1">Friebase</li>
          </ul>
        </li>
        <li class="py-2 point point-flicker col-6 col-sm-6 col-md-6 col-lg-3">
          <h5>IOS</h5>
          <hr />
          <ul>
            <li class="py-1">Swift</li>
            <li class="py-1">RxSwift</li>
            <li class="py-1">API / JSON Parse</li>
          </ul>
        </li>
        <li class="py-2 point point-flicker col-6 col-md-6 col-lg-3">
          <h5>其他</h5>
          <hr />
          <ul>
            <li class="py-1">Cloudflare</li>
            <li class="py-1">Google Cloud Platform</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="col-12 col-lg-10 d-flex flex-column mt-4 work" ref="work_ref">
      <h3 id="Skill" class="py-3">Work Experience 工作經歷</h3>
      <ul class="d-flex flex-column">
        <li class="work-point work-line work-point-border-active">
          <h5>爆料公社股份有限公司</h5>
          <h6>Sep, 2018 ~ Present</h6>
          <ul class="work-list">
            <li>根據推廣的活動或是新功能進行行銷與推廣頁面切版</li>
            <li>新功能發想與提案，與團隊規劃完整流程圖。如月老廟交友配對、一對一聊天等。</li>
            <li>與後端討論資料庫設計，撰寫 RESTful API 文件 ( Swagger )，以進行串接。</li>
            <li>IOS手機應用使用 xib、nib 根據Zeplin上的設計圖進行自定義畫面制作。</li>
            <li>IOS手機應用使用 RxSwift 進行流程控制， Sourcetree 進行版本控制外加使用 CocoaPods 安裝第三方套件進行開發。</li>
          </ul>
        </li>

        <li class="work-point work-line">
          <h5>Gate5車體鍍膜股份有限公司 - 軟體工程師</h5>
          <h6>Sep, 2017 - Sep, 2018</h6>
          <ul class="work-list">
            <li>根據洗車場需求，進行心智圖與流程圖與資料庫設計，來開發應用程式，增進洗車場與客戶的黏著度。</li>
            <li>開發 Gate5 形象網頁，與後台訂單管理系統，使用Bootstrap 框架進行刻板。</li>
            <li>開發 Gate5 客戶預約APP與 Gate5洗車廠師傅訂單管理App。</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      currentKey: 'ref1',
      itemOffsetTop: [],
      firstOffsetTop: 0
    };
  },

  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
h6 {
  color: #9b9b9b;
}
a {
  color: #555555;
}
a:hover {
  color: #4e819d;
  svg {
    stroke: #4e819d;
  }
}

// 技能 Start
.point {
  position: relative;
  padding-left: 32px;
}

// 設定原點
.point:before {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  top: 16px;
  left: 32px;
  border-radius: 50%;
  background: red;
}

/* 設定動畫 */
.point-flicker:before,
.point-flicker:after {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  left: 0%;
  top: 0%;
  margin-left: 16px;
  margin-top: 16px;
  border-radius: 50%;
  animation: warn 1.5s ease-out 0s infinite;
}

/* 設定動畫前前颜色 */
.point-flicker:after {
  background-color: #2ea598;
}

@keyframes warn {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
// 技能 End

// 工作經歷 Start

.work-point {
  position: relative;
  padding-left: 56px;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
}

.work-point::before {
  content: '';
  width: 18px;
  height: 18px;
  position: absolute;
  top: 13px;
  left: 0px;
  border-radius: 50%;
  background: white;
  border: 4px #222222 solid;

  z-index: 2;
  opacity: 0.3;
}
.work-point-border-active::before {
  opacity: 1;
  border: 4px #d79724 solid;
  // animation: warn 1.5s ease-out 0s infinite;
}

.work-line::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2px;
  height: calc(100% - 1.2rem);
  margin-left: 8px;
  margin-top: 32px;
  background: #e4e4e7;
}

.work-line:last-child::after {
  height: 0%;
}

.work-list {
  list-style-type: disc;
  padding-left: 16px;
  li {
    // padding-left:16px;
    padding: 0.5rem 0;
    color: #555555;
  }
}

// 工作經歷 End
</style>
