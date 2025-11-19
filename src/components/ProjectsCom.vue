<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const selectedProject = ref(null)
const currentIndex = ref(0)

function openModal(project) {
  selectedProject.value = project
  currentIndex.value = 0
  modalOpen.value = true
}

function openCover(project) {
  if (project && project.link) {
    window.open(project.link, '_blank')
  } else {
    openModal(project)
  }
}

function closeModal() {
  modalOpen.value = false
}

function nextImage() {
  if (!selectedProject.value) return
  currentIndex.value = (currentIndex.value + 1) % selectedProject.value.images.length
}

function prevImage() {
  if (!selectedProject.value) return
  currentIndex.value =
    (currentIndex.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length
}

const projects = [
  {
    title: '企業官網',
    client: '盈米科技',
    tag: ['Vue3', 'Tailwind CSS', 'PHP'],
    summary:
      '為公司設計並開發的官方網站，主要目的是展示公司形象、服務項目與聯絡方式。整體風格偏向未來感與冷靜簡約，強調專業與科技形象。',
    fun: '- 公司介紹 / 服務項目 / 案例展示 / 聯絡表單',
    cover: '/imgs/projects/1/0.JPG',
    link: 'https://twyingmi.com/',
  },
  {
    title: '簽呈系統',
    client: '寶豐集團',
    tag: ['Vue3', ' Bootstrap', 'SCSS', '串接API'],
    summary:
      '此為專為寶豐集團客製化之簽呈系統，包含了旗下各公司的需求且操作直覺、簡單易用，使簽呈流程更流暢。',
    fun: '- 會員系統 / 申請簽呈 / 申請列表 / 簽核 / 簽核進度 / 篩選與搜尋 / 圖片上傳與瀏覽 / 列印',
    cover: '/imgs/projects/2/0.JPG',
    images: [
      { src: '/imgs/projects/2/1.JPG', title: '首頁設計' },
      { src: '/imgs/projects/2/2.JPG', title: '產品頁' },
      { src: '/imgs/projects/2/3.JPG', title: '行動版設計' },
    ],
  },
  {
    title: '選材系統',
    client: '松華實業',
    tag: ['jQuery', 'Bootstrap', '串接API', 'Looker Studio', 'Google Analytics'],
    summary:
      '松華實業為室內裝飾材供應商，目標為製作一個可選擇場景、置換不同部位材質的選材系統，讓顧客可以預先模擬、自由搭配並立即看到整體效果。',
    fun: '- 多語系 / 使用教學 / 場景切換 / 部位切換 / 材質切換 / 簡易篩選 / 完整篩選 / 搜尋 / 下載完成圖 / 數據分析',
    cover: '/imgs/projects/1/0.JPG',
    link: 'https://www.sunflowerspace.com.tw/',
  },
  {
    title: 'XR作品展示平台',
    client: '國立臺灣師範大學',
    tag: ['Vue3', 'Bootstrap', 'SCSS', '串接API'],
    summary: '學生能將XR作品上傳至此平台進行分享。',
    fun: '- 會員系統 / 作品分類 / 作品列表 / 上傳作品',
    cover: '/imgs/projects/2/0.JPG',
    images: [
      { src: '/imgs/projects/2/1.JPG', title: '首頁設計' },
      { src: '/imgs/projects/2/2.JPG', title: '產品頁' },
      { src: '/imgs/projects/2/3.JPG', title: '行動版設計' },
    ],
  },
  {
    title: '環景地板置換展示',
    client: '台昌彩藝',
    tag: ['jQuery', 'Bootstrap', 'Pano2VR'],
    summary:
      '台昌彩藝為地板材質製造商，希望利用環景導覽身歷其境的特點，提升品牌形象與客戶瀏覽體驗。',
    fun: '- 場景列表 / 材質列表 / 材質分類與篩選 / 環景導覽 / 環景材質切換 / 地板拼接方式切換 / 場景切換 / 搜尋',
    cover: '/imgs/projects/1/0.JPG',
    link: 'https://tcpfilm360.com/',
  },
  {
    title: '待產活力站',
    client: '國立臺北護理健康大學',
    tag: ['Vue3', 'Bootstrap', 'SCSS'],
    summary:
      '此網站為專為待產婦女所設計，產婦能藉由此網站認知到運動對於產婦的重要性，並透過翻翻樂的方式取得不同的運動項目。',
    fun: '- 待產活動分類 / 翻翻樂模式 / localStorage記錄翻過之卡片 / 活動簡介 / 其他網站資源',
    cover: '/imgs/projects/2/0.JPG',
    link: 'https://www.readysetbaby.com.tw/',
  },
]
</script>

<template>
  <section id="projects" class="bg-white px-6 py-20">
    <div class="mx-auto md:max-w-7xl">
      <h2 class="mb-12 text-center text-3xl font-semibold">Projects</h2>
      <div class="mx-auto space-y-16">
        <!-- :class="{ 'md:flex-row-reverse': idx % 2 === 0 }" -->
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="flex flex-col items-center gap-8 md:flex-row"
        >
          <!-- 文字內容 -->
          <div class="md:w-1/2">
            <p class="mb-2 text-sm text-gray-500">{{ project.client }}</p>
            <h3 class="mb-2 text-2xl font-semibold">{{ project.title }}</h3>
            <div class="mb-2 flex flex-wrap gap-3">
              <span
                v-for="tag in project.tag"
                :key="tag"
                class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {{ tag }}
              </span>
            </div>
            <p class="mb-3 leading-relaxed text-gray-700">{{ project.summary }}</p>
            <p class="mb-3 leading-relaxed text-gray-700">{{ project.fun }}</p>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="inline-block rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              前往網站
            </a>
            <button
              v-else
              @click="openModal(project)"
              class="inline-block cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              查看專案
            </button>
          </div>
          <!-- 封面圖 -->
          <img
            :src="project.cover"
            :alt="project.title"
            class="w-full cursor-pointer rounded-lg object-cover shadow-lg md:w-1/2"
            @click="openCover(project)"
          />
        </div>
      </div>
    </div>

    <div
      v-if="modalOpen"
      class="animate-fadeIn fixed inset-0 z-50 items-center justify-center bg-black/70 text-white backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="animate-zoomIn animate-duration-500 flex h-full w-full flex-col overflow-hidden shadow-lg"
      >
        <!-- 標題列 -->
        <div class="flex items-center justify-between p-4">
          <h3 class="text-lg font-semibold">{{ selectedProject?.title }}</h3>
          <button @click="closeModal" class="cursor-pointer text-white/50 hover:text-white/100">
            ✕
          </button>
        </div>

        <!-- 主圖區 -->
        <div class="relative flex flex-1 flex-col items-center justify-center p-4">
          <img
            :key="selectedProject?.images[currentIndex].src"
            :src="selectedProject?.images[currentIndex].src"
            class="animate-fadeIn max-h-[70vh] max-w-full rounded-lg object-contain"
          />
          <p class="py-2 text-center text-sm text-white">
            {{ selectedProject?.images[currentIndex].title }}
          </p>

          <!-- 左右切換按鈕 -->
          <button
            @click="prevImage"
            class="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white hover:bg-black"
          ></button>
          <button
            @click="nextImage"
            class="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white hover:bg-black"
          ></button>
        </div>

        <!-- 縮圖列 -->
        <div class="flex gap-2 overflow-x-auto px-4 py-3">
          <div
            v-for="(img, i) in selectedProject?.images"
            :key="i"
            class="flex-shrink-0 cursor-pointer"
            @click="currentIndex = i"
          >
            <img
              :src="img.src"
              :alt="img.title"
              class="h-20 w-28 rounded-md border-2 object-cover transition-all duration-200"
              :class="
                i === currentIndex
                  ? 'scale-105 border-orange-500'
                  : 'border-transparent opacity-70 hover:opacity-100'
              "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
