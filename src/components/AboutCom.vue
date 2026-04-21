<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.about-img', {
    scrollTrigger: { trigger: '#about', start: 'top 80%' },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
  gsap.from('.about-content', {
    scrollTrigger: { trigger: '#about', start: 'top 80%' },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section
    id="about"
    class="mx-auto grid max-w-full gap-10 px-6 py-20 md:max-w-7xl md:grid-cols-12"
  >
    <img
      src="/imgs/me_2.jpg"
      alt=""
      class="about-img mx-auto mb-8 h-[200px] w-[200px] rounded-2xl object-cover object-[50%_90%] duration-1000 md:col-span-5 md:mb-0 md:h-[360px] md:w-[360px]"
    />
    <div class="about-content mx-auto mb-8 md:col-span-7">
      <h2 class="mb-6 text-3xl text-gray-700">
        許玟羿 <span class="text-lg text-gray-400">Wen Yi Hsu</span>
      </h2>
      <p class="text-justify text-lg font-medium tracking-wider text-gray-800">
        「橫跨設計與開發，獨立完成從概念到上線的全流程。」
      </p>
      <p class="mt-6 text-justify text-gray-700">
        擁有 6 年前端開發與 UI/UX 設計經驗，現職科技公司，主導 Web 介面設計及前端開發，並參與
        App／AR／VR 專案的介面設計。熟悉 Vue.js（Pinia、Vue
        Router、Vite），以元件化思維建構可維護的介面架構；善用 AI 輔助工具加速開發與設計流程。
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <!-- 前端開發 -->
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Vue 3</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Pinia</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Vite</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">JavaScript</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">TypeScript</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Tailwind CSS</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">SCSS</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Axios</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">Node.js</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">RESTful API</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">RWD</span>
        <span class="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">SEO</span>
        <!-- 設計工具 -->
        <span class="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">Figma</span>
        <span class="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">Photoshop</span>
        <span class="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">Illustrator</span>
        <!-- 其他工具 -->
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-600">Git</span>
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-600">GTM</span>
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-600"
          >Looker Studio</span
        >
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-600">Pano2VR</span>
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-600">3D Vista</span>
      </div>
    </div>
  </section>
</template>
