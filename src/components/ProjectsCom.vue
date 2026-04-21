<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

onMounted(() => {
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%' },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i % 2 === 1 ? 0.15 : 0,
      ease: 'power3.out',
    })
  })
})

const modalOpen = ref(false)
const selectedProject = ref(null)
const thumbsSwiper = ref(null)

function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}

function openModal(project) {
  selectedProject.value = project
  thumbsSwiper.value = null
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

const projects = [
  {
    title: '盈米科技',
    tag: ['Web Development', 'UI/UX Design', 'Vue3', 'Tailwind CSS', 'PHP', 'Figma'],
    summary:
      '盈米科技官網改版重塑，重新規劃品牌視覺與資訊架構，以未來感與冷靜簡約風格強化專業與科技形象。',
    cover: '/imgs/projects/1/0.jpg',
    link: 'https://twyingmi.com/',
  },
  {
    title: '待產活力站',
    tag: ['Web Development', 'UI/UX Design', 'Vue3', 'Bootstrap', 'SCSS', 'Figma'],
    summary:
      '為待產婦女設計的互動式網站，透過互動小遊戲與示範影片，協助使用者理解孕期運動的重要性並探索合適的運動項目。',
    cover: '/imgs/projects/5/0.jpg',
    link: 'https://www.readysetbaby.com.tw/',
  },
  {
    title: '松華選材系統',
    tag: [
      'Front-end Development',
      'UI/UX Design',
      'jQuery',
      'Bootstrap',
      'RESTful API',
      'Looker Studio',
      'Google Analytics',
    ],
    summary:
      '提供材質即時置換與場景模擬功能，協助使用者在實裝前預覽整體效果，降低選材誤差並提升決策效率。',
    cover: '/imgs/projects/3/0.jpg',
    link: 'https://www.sunflowerspace.com.tw/',
  },
  {
    title: 'TCP環景地板置換展示',
    tag: ['Web Development', 'UI/UX Design', 'jQuery', 'Bootstrap', 'Pano2VR', 'Figma'],
    summary:
      '以環景導覽結合地板材質展示，讓使用者沉浸式體驗不同空間與材質搭配，強化品牌印象並提升選購體驗。',
    cover: '/imgs/projects/4/0.jpg',
    link: 'https://tcpfilm360.com/',
  },
  {
    title: '寶豐簽呈系統',
    tag: [
      'Front-end Development',
      'UI/UX Design',
      'Vue3',
      ' Bootstrap',
      'SCSS',
      'RESTful API',
      'Figma',
    ],
    summary:
      '為寶豐集團客製化設計的簽呈系統，整合多公司流程與權限邏輯，透過清楚的操作流程設計，加速簽核效率並降低使用門檻。',
    cover: '/imgs/projects/2/0.jpg',
    images: [
      { src: '/imgs/projects/2/0.png', title: '登入' },
      { src: '/imgs/projects/2/1.png', title: '待簽核列表' },
      { src: '/imgs/projects/2/3.png', title: '待簽核簽呈' },
      { src: '/imgs/projects/2/2.png', title: '全部簽呈列表' },
      { src: '/imgs/projects/2/4.png', title: '瀏覽簽呈' },
      { src: '/imgs/projects/2/5.png', title: '申請簽呈' },
    ],
  },
  {
    title: '桌遊協會管理系統',
    tag: ['UI/UX Design', 'Figma'],
    summary:
      '為桌遊協會設計的會員與桌遊管理系統，包含會員資料管理、桌遊借還管理、開桌計時與分潤設定等功能，提升協會運營效率。',
    cover: '/imgs/projects/6/0.jpg',
    images: [
      { src: '/imgs/projects/6/1.jpg', title: '登入' },
      { src: '/imgs/projects/6/2.jpg', title: '註冊' },
      { src: '/imgs/projects/6/3.jpg', title: '忘記密碼' },
      { src: '/imgs/projects/6/4.png', title: '會員列表' },
      { src: '/imgs/projects/6/5.png', title: '新增會員' },
      { src: '/imgs/projects/6/6.png', title: '編輯會員資料' },
      { src: '/imgs/projects/6/7.png', title: '綁定的會員' },
      { src: '/imgs/projects/6/8.png', title: '開桌列表' },
      { src: '/imgs/projects/6/9.png', title: '設定桌子' },
      { src: '/imgs/projects/6/10.png', title: '開桌計時' },
      { src: '/imgs/projects/6/11.png', title: '停止計時' },
      { src: '/imgs/projects/6/12.png', title: '分潤設定' },
      { src: '/imgs/projects/6/13.png', title: '手機-登入' },
      { src: '/imgs/projects/6/14.png', title: '手機 - 會員條碼' },
      { src: '/imgs/projects/6/15.png', title: '手機 - 綁定的會員' },
      { src: '/imgs/projects/6/16.png', title: '手機 - 編輯個人資料' },
    ],
  },
  {
    title: '3D 家具建材互動展示',
    tag: ['Web Development', 'UI/UX Design', '3D Vista', 'Illustrator'],
    summary:
      '透過3D互動展示，讓使用者在虛擬空間中切換家具與建材配置，即時體驗不同設計風格與搭配效果。',
    cover: '/imgs/projects/11/0.jpg',
    link: 'https://storage.googleapis.com/yingmigcs/3D/Demo_3/index.htm',
  },
  {
    title: '3D 汽車互動展示',
    tag: ['Web Development', 'UI/UX Design', '3D Vista'],
    summary: '以3D互動方式呈現汽車內外裝設計，讓使用者能 360 度檢視車輛細節與設計特色。',
    cover: '/imgs/projects/12/0.jpg',
    link: 'https://storage.googleapis.com/yingmigcs/3D/Demo_4_car/index.htm',
  },
  {
    title: 'VR 蝙蝠車攔查訓練',
    tag: ['UI/UX Design', 'Figma'],
    summary:
      '透過VR模擬真實攔查情境，讓使用者在安全環境中練習攔查流程與應對策略，提升實務操作熟練度與信心。',
    cover: '/imgs/projects/7/0.jpg',
    images: [
      { src: '/imgs/projects/7/1.jpg', title: '控制器操作教學' },
      { src: '/imgs/projects/7/2.jpg', title: '主選單' },
      { src: '/imgs/projects/7/3.jpg', title: '選擇情境 - 剩餘土石方' },
      { src: '/imgs/projects/7/4.jpg', title: '選擇情境 - 廢棄物' },
      { src: '/imgs/projects/7/5.jpg', title: '問答' },
      { src: '/imgs/projects/7/6.jpg', title: '問答' },
      { src: '/imgs/projects/7/7.jpg', title: '問答' },
      { src: '/imgs/projects/7/8.jpg', title: '完成選單' },
      { src: '/imgs/projects/7/9.jpg', title: '輸入員工編號' },
      { src: '/imgs/projects/7/10.jpg', title: '測驗結果' },
      { src: '/imgs/projects/7/11.jpg', title: '作答記錄' },
      { src: '/imgs/projects/7/12.jpg', title: '作答記錄' },
      { src: '/imgs/projects/7/13.jpg', title: '歷史紀錄' },
    ],
  },
  {
    title: 'VR 防衛性駕駛訓練',
    tag: ['UI/UX Design', 'Figma'],
    summary:
      '結合VR與實體駕駛模擬控制器，導入防衛性駕駛概念，提供沉浸式訓練體驗以提升駕駛安全意識與臨場反應能力。',
    cover: '/imgs/projects/8/0.jpg',
    images: [
      { src: '/imgs/projects/8/1.jpg', title: '主選單' },
      { src: '/imgs/projects/8/2.jpg', title: '選擇主題' },
      { src: '/imgs/projects/8/3.jpg', title: '選擇模式' },
      { src: '/imgs/projects/8/4.jpg', title: '駕駛操作教學' },
      { src: '/imgs/projects/8/5.jpg', title: '車內按鈕' },
      { src: '/imgs/projects/8/7.jpg', title: '完成顯示' },
      { src: '/imgs/projects/8/8.jpg', title: '主題說明' },
      { src: '/imgs/projects/8/11.jpg', title: '注意警告' },
      { src: '/imgs/projects/8/9.jpg', title: '訓練完成' },
      { src: '/imgs/projects/8/12.jpg', title: '防禦性駕駛介紹' },
      { src: '/imgs/projects/8/10.jpg', title: 'Loading' },
      { src: '/imgs/projects/8/6.jpg', title: '控制器操作教學' },
    ],
  },
  {
    title: 'VR 焊接訓練',
    tag: ['UI/UX Design', 'Figma'],
    summary:
      '以VR模擬焊接訓練流程，讓使用者在安全環境中反覆練習操作技巧與檢定流程，提升實作熟練度與作業安全性。',
    cover: '/imgs/projects/9/0.jpg',
    images: [
      { src: '/imgs/projects/9/1.jpg', title: '操作教學' },
      { src: '/imgs/projects/9/2.jpg', title: '操作教學' },
      { src: '/imgs/projects/9/3.jpg', title: '操作教學' },
      { src: '/imgs/projects/9/4.jpg', title: '操作教學' },
      { src: '/imgs/projects/9/5.jpg', title: '完成操作教學' },
      { src: '/imgs/projects/9/6.jpg', title: '主選單' },
      { src: '/imgs/projects/9/7.jpg', title: '選擇檢定位置' },
      { src: '/imgs/projects/9/8.jpg', title: '測驗指示' },
      { src: '/imgs/projects/9/9.jpg', title: '測驗中UI' },
      { src: '/imgs/projects/9/10.jpg', title: '測驗結果' },
      { src: '/imgs/projects/9/11.jpg', title: '測驗結果' },
    ],
    youtube: 'https://youtu.be/QNpk82-VvKk?si=n5J8PiCZgBV9ae4K',
  },
  {
    title: 'VR 互動招生',
    tag: ['UI/UX Design', 'Illustrator'],
    summary:
      '以遊戲化VR互動體驗結合系所特色，讓潛在學生在沉浸式情境中探索學習內容，提升招生體驗與記憶點。',
    cover: '/imgs/projects/10/0.jpg',
    images: [
      { src: '/imgs/projects/10/1.jpg', title: '主選單' },
      { src: '/imgs/projects/10/2.jpg', title: '設備說明' },
      { src: '/imgs/projects/10/3.jpg', title: '開始遊戲' },
      { src: '/imgs/projects/10/4.jpg', title: '遊戲說明' },
      { src: '/imgs/projects/10/5.jpg', title: '玩家血條' },
      { src: '/imgs/projects/10/6.jpg', title: '怪物血條' },
      { src: '/imgs/projects/10/7.jpg', title: '下一階段遊戲說明' },
      { src: '/imgs/projects/10/8.jpg', title: '遊戲結果' },
    ],
    youtube: 'https://youtu.be/KkACXC97mBE?si=xaGX3jQQ81g2ObnV',
  },
]
</script>

<template>
  <section id="projects" class="bg-white px-6 py-20">
    <div class="container mx-auto">
      <h2 class="mb-12 text-center text-3xl font-semibold">Projects</h2>

      <!-- ⭐ 兩欄式專案列表 -->
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div v-for="(project, idx) in projects" :key="idx" class="project-card mt-5 flex flex-col">
          <!-- 作品封面 -->
          <div class="w-full overflow-hidden rounded-xl bg-gray-100">
            <img :src="project.cover" :alt="project.title" loading="lazy" class="w-full rounded-xl object-cover" />
          </div>

          <!-- 文字內容 -->
          <div class="mt-6">
            <div class="mb-4 flex items-center gap-2">
              <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
              <a
                v-if="project.youtube"
                :href="project.youtube"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-red-600 transition-opacity hover:text-red-700 hover:opacity-80"
                aria-label="YouTube"
              >
                <font-awesome-icon :icon="['fab', 'youtube']" class="text-2xl" />
              </a>
            </div>
            <div class="mb-4 flex flex-wrap gap-3">
              <span
                v-for="tag in project.tag"
                :key="tag"
                class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {{ tag }}
              </span>
            </div>

            <p class="mb-4 leading-relaxed text-gray-700">
              {{ project.summary }}
            </p>
            <div>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="text-lg font-bold underline"
              >
                前往網站
              </a>
              <button
                v-else
                @click="openModal(project)"
                class="cursor-pointer text-lg font-bold underline"
              >
                查看專案
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalOpen"
      class="animate-fadeIn fixed inset-0 z-50 flex flex-col bg-black/90 text-white backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div class="flex h-full w-full flex-col overflow-hidden">
        <!-- Header -->
        <div class="flex flex-shrink-0 items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-semibold">{{ selectedProject?.title }}</h3>
            <a
              v-if="selectedProject?.youtube"
              :href="selectedProject.youtube"
              target="_blank"
              rel="noopener noreferrer"
              class="text-red-400 hover:text-red-500"
              aria-label="YouTube"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </div>
          <button @click="closeModal" class="cursor-pointer text-white/50 hover:text-white/100">
            ✕
          </button>
        </div>

        <!-- 主 Swiper -->
        <Swiper
          :modules="[Navigation, Thumbs, Keyboard]"
          :navigation="true"
          :keyboard="{ enabled: true }"
          :thumbs="{ swiper: thumbsSwiper }"
          :space-between="10"
          class="main-swiper min-h-0 w-full flex-1"
        >
          <SwiperSlide
            v-for="img in selectedProject?.images"
            :key="img.src"
          >
            <div class="flex h-full flex-col items-center justify-center px-12">
              <img :src="img.src" :alt="img.title" loading="lazy" class="max-h-[65vh] max-w-full object-contain" />
              <p class="mt-2 text-center text-sm text-white/70">{{ img.title }}</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- 縮圖 Swiper -->
        <Swiper
          :modules="[Thumbs]"
          watch-slides-progress
          :slides-per-view="'auto'"
          :space-between="8"
          class="thumbs-swiper w-full flex-shrink-0 overflow-visible px-4 py-3"
          @swiper="setThumbsSwiper"
        >
          <SwiperSlide
            v-for="img in selectedProject?.images"
            :key="img.src"
            style="width: 112px"
            class="cursor-pointer"
          >
            <img
              :src="img.src"
              :alt="img.title"
              loading="lazy"
              class="h-20 w-28 rounded-md border-2 border-transparent object-cover opacity-60 transition-all duration-200"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-swiper :deep(.swiper-wrapper) {
  height: 100%;
}
.main-swiper :deep(.swiper-slide) {
  height: 100%;
}
.main-swiper :deep(.swiper-button-prev),
.main-swiper :deep(.swiper-button-next) {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-swiper :deep(.swiper-button-prev svg),
.main-swiper :deep(.swiper-button-next svg) {
  width: 20px !important;
  height: 20px !important;
}
/* 縮圖列允許上下溢出，讓 scale 不被裁切 */
.thumbs-swiper :deep(.swiper-wrapper) {
  overflow: visible;
  padding: 6px 0;
}
.thumbs-swiper :deep(.swiper-slide-thumb-active img) {
  border-color: #00e3e7;
  opacity: 1;
  transform: scale(1.05);
}
</style>
