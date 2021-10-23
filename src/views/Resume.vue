<template lang="">
  <div class="row">
    <div
      class="col-12 col-lg-10 d-flex flex-column mt-4 mt-lg-0 about-me"
      ref="about-me-ref"
    >
      <h3 class="pb-3 text-center text-lg-start">About me 關於我</h3>
      <p class="lh-lg">
        資訊系背景，主要專攻網頁切版和IOS手機應用程式開發。目前著重於研究前端領域，曾參與品牌形象官網、網站後台建置等的專案開發與頁面設計。
        <br />
        <br />
        主要使用 Angular 開發，負責 API
        串接、畫面動態效果、主題色彩配置、設計稿切版...等。
        <!-- <br /> -->
        CSS 框架主要使用 Bootstrap 內的 Components 和 utilites 進行開發。
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
            <li class="py-1">HTML / CSS / SASS</li>
            <li class="py-1">BootStrap 5</li>
            <li class="py-1">REST API / AJAX</li>
            <li class="py-1">Vue / Angular</li>
          </ul>
        </li>
        <li class="py-2 point point-flicker col-6 col-sm-6 col-md-6 col-lg-3">
          <h5>網頁後端</h5>
          <hr />
          <ul>
            <li class="py-1">Node.js / Express.js</li>
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
            <li class="py-1">Friebase</li>
            <li class="py-1">Google Cloud</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="col-12 col-lg-10 d-flex flex-column mt-4 work" ref="work_ref">
      <h3 class="py-3">Work Experience 工作經歷</h3>
      <ul class="d-flex flex-column">
        <li class="work-point work-line work-point-border-active">
          <h5>新加坡商合眾科技顧問有限公司</h5>
          <h6>Sep, 2021 ~ Present</h6>
          <ul class="work-list">
            <li>根據公司客戶需求開發商業應用App</li>
          </ul>
        </li>
        <li class="work-point work-line">
          <h5>爆料公社股份有限公司</h5>
          <h6>Sep, 2018 ~ Sep,2021</h6>
          <ul class="work-list">
            <li>根據推廣的活動或是新功能進行行銷與推廣頁面切版</li>
            <li>
              新功能發想與提案，與團隊規劃完整流程圖。如月老廟交友配對、一對一聊天等。
            </li>
            <li>
              與後端討論資料庫設計，撰寫 RESTful API 文件 ( Swagger
              )，以進行串接。
            </li>
            <li>
              IOS手機應用使用 xib、nib 根據Zeplin上的設計圖進行自定義畫面制作。
            </li>
            <li>
              IOS手機應用使用 RxSwift 進行流程控制， Sourcetree
              進行版本控制外加使用 CocoaPods 安裝第三方套件進行開發。
            </li>
          </ul>
        </li>

        <li class="work-point work-line">
          <h5>Gate5車體鍍膜股份有限公司 - 軟體工程師</h5>
          <h6>Sep, 2017 - Sep, 2018</h6>
          <ul class="work-list">
            <li>
              根據洗車場需求，進行心智圖與流程圖與資料庫設計，來開發應用程式，增進洗車場與客戶的黏著度。
            </li>
            <li>
              開發 Gate5 形象網頁，與後台訂單管理系統，使用Bootstrap
              框架進行刻板。
            </li>
            <li>開發 Gate5 客戶預約APP與 Gate5洗車廠師傅訂單管理App。</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="col-12 col-lg-10 d-flex flex-column mt-4 web" ref="web_ref">
    <h3 id="web-title" class="py-3">Web 網頁作品</h3>
    <ul class="work-body d-flex flex-column">
      <li class="mb-5">
        <a
          class="web-sub d-flex"
          href="https://apps.apple.com/tw/app/%E7%88%86%E6%96%99%E5%85%AC%E7%A4%BE/id1387765782"
        >
          <div class="web-sub-img me-4">
            <img class="shadow-md" :src="imageBoomHome" />
          </div>
          <div class="web-sub-body d-flex flex-column">
            <h5 class="mb-3">爆料公社App</h5>
            <ul class="web-sub-body-list">
              <li>根據設計稿使用xib、nib進行介面撰寫、刻板。</li>
              <li>使用 Rxswift 進行流程控制。</li>
              <li>使用 CocoaPods 安裝第三方套件進行開發。</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-5">
        <a class="web-sub d-flex" href="https://poaich.org/">
          <div class="web-sub-img me-4">
            <img class="shadow-md" :src="imagePoaichHome" />
          </div>
          <div class="web-sub-body d-flex flex-column">
            <h5 class="mb-3">嘉義博愛教會網站</h5>
            <ul class="web-sub-body-list">
              <li>
                本專案使用 Angular 框架進行開發，搭配SSR (Server-Side-Rendering)
                強化SEO搜尋。
              </li>
              <li>
                網頁使用 Google Cloud Platform 的 Google Cloud Run 進行部署
              </li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-5">
        <a class="web-sub d-flex" href="#" @click.prevent="preventDefault">
          <div class="web-sub-img me-4">
            <img class="shadow-md" :src="imagePoaichBackstage" />
          </div>
          <div class="web-sub-body d-flex flex-column">
            <h5 class="mb-3">嘉義博愛教會後台</h5>
            <ul class="web-sub-body-list">
              <li>後台包含新增、修改、刪除文章等功能。</li>
              <li>API 撰寫使用 Node.js 下 Express 框架進行開發。</li>
              <li>伺服器使用 Google Cloud Run 進行部署</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-5">
        <a
          class="web-sub d-flex"
          href="https://lucas701780.github.io/gulp_glasses_design/"
        >
          <div class="web-sub-img me-4">
            <img class="shadow-md" :src="imageGulpGlassesDesign" />
          </div>
          <div class="web-sub-body d-flex flex-column">
            <h5 class="mb-3">眼鏡形象網站(切版練習)</h5>
            <ul class="web-sub-body-list">
              <li>練習使用 OOCSS 的設計模式</li>
              <li>練習使用 Sass + Mixin + Utilities</li>
            </ul>
          </div>
        </a>
      </li>

      <li class="mb-5">
        <a
          class="web-sub d-flex"
          href="https://lucas701780.github.io/gate5_home/"
        >
          <div class="web-sub-img me-4">
            <img class="shadow-md" :src="imageGate5Home" />
          </div>
          <div class="web-sub-body d-flex flex-column">
            <h5 class="mb-3">Gate5 形象網站</h5>
            <ul class="web-sub-body-list">
              <li>初入社會第一版網站設計</li>
              <li>使用Bootstrap 4 切版</li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import imagePoaichHome from "@/assets/img/poaich-home.png";
import imagePoaichBackstage from "@/assets/img/poaich-backstage.png";
import imageGulpGlassesDesign from "@/assets/img/gulp-glasses-design.png";
import imageGate5Home from "@/assets/img/gate5-home.png";
import imageBoomHome from "@/assets/img/boom.png";
export default {
  name: "Resume",
  data() {
    return {
      currentKey: "ref1",
      itemOffsetTop: [],
      firstOffsetTop: 0,
      imagePoaichHome: imagePoaichHome,
      imagePoaichBackstage: imagePoaichBackstage,
      imageGulpGlassesDesign: imageGulpGlassesDesign,
      imageGate5Home: imageGate5Home,
      imageBoomHome: imageBoomHome,
    };
  },

  methods: {},
  mounted() {},
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
img {
  width: 100%;
  height: auto;
  display: block;
}

// 技能 Start
.point {
  position: relative;
  padding-left: 32px;
}

// 設定原點
.point:before {
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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

.work-body h5 {
  color: black;
}
.work-body p {
  color: #555555;
  line-height: 1.5;
}

.web-sub-img {
  // border: 1px #555555 solid;
  width: 40%;
}
.web-sub-body {
  width: 60%;
  display: flex;
}
.web-sub-body-list {
  list-style-type: disc;
  padding-left: 16px;
  li {
    padding: 0.5rem 0;
    color: #555555;
  }
}

/*如果螢幕寬度為 768px 以下，就套用 css 設定*/
@media screen and (max-width: 768px) {
  // .web-sub {
  //   display: flex;
  //   flex-direction: column;
  //   padding-left: 56px;
  // }
  .work-body p {
    color: #555555;
    line-height: 1.2;
  }
}
// 工作經歷 End
</style>
