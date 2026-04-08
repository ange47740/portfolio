<script setup>
import { ref, onMounted } from 'vue'

const line1Left = 'Front-end '
const line1Right = 'Developer'
const line2Left = '& UI/UX '
const line2Right = 'Designer'
const line3 = 'Specializing in Vue.js and Responsive Web Design.'

const line1LeftDisplay = ref('')
const line1RightDisplay = ref('')
const line2LeftDisplay = ref('')
const line2RightDisplay = ref('')
const line3Display = ref('')

onMounted(async () => {
  await delay(1000)
  await typeText(line1Left, line1LeftDisplay)
  await typeText(line1Right, line1RightDisplay)
  await delay(300)
  await typeText(line2Left, line2LeftDisplay)
  await typeText(line2Right, line2RightDisplay)
  await delay(300)
  await typeText(line3, line3Display)
})

// 工具函式
function typeText(text, targetRef) {
  return new Promise((resolve) => {
    let index = 0
    const interval = setInterval(() => {
      targetRef.value += text[index]
      index++
      if (index >= text.length) {
        clearInterval(interval)
        resolve()
      }
    }, 60)
  })
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
</script>

<template>
  <section
    class="relative flex min-h-screen flex-col items-center justify-center bg-white px-4 text-gray-900 md:px-20"
  >
    <h1
      class="absolute bottom-5 left-5 z-20 text-[34px] leading-tight font-medium md:bottom-10 md:left-10 md:text-[94px]"
    >
      <div>
        {{ line1LeftDisplay }}
        <span class="text-[#ffd818]">{{ line1RightDisplay }}</span>
      </div>

      <div class="relative">
        <!-- 占位符：預留正確空間 -->
        <div class="invisible"><span class="text-[#82ddcf]">& UI/UX </span> Designer</div>
        <!-- 實際文字 -->
        <div class="absolute top-0 left-0">
          <span class="text-[#82ddcf]">{{ line2LeftDisplay }}</span
          ><span class="text-gray-900">{{ line2RightDisplay }}</span>
        </div>
      </div>

      <div class="relative mt-2.5 font-sans text-[18px] md:text-[40px]">
        <!-- 占位符：預留正確空間 -->
        <div class="invisible">
          <span class="text-[#82ddcf]">Specializing in Vue.js and Responsive Web Design.</span>
        </div>
        <!-- 實際文字 -->
        <div class="absolute top-0 left-0">
          <span>{{ line3Display }}</span>
        </div>
      </div>
    </h1>

    <div
      class="absolute top-0 right-0 flex h-full w-full max-w-3xl items-start md:right-12 md:items-center"
    >
      <img
        src="/imgs/me.jpg"
        alt=""
        class="animate-in fade-in absolute top-[76px] left-[20px] h-[440px] w-[220px] object-cover object-bottom shadow-[20px_10px_0_rgba(205,204,203,0.5)] duration-1000 md:static md:h-[600px] md:w-[300px]"
      />

      <div
        class="animate-in slide-in-from-top absolute top-37 right-0 flex h-[90px] w-[200px] flex-col items-start justify-center bg-[#ddf0ed] p-6 duration-1800 md:top-0 md:h-[600px] md:w-[400px]"
      >
        <p class="text-lg text-gray-500">Hello, I'm</p>
        <h2 class="text-[28px] leading-tight font-bold md:text-5xl">
          Wen Yi <span class="text-[#ffd818]">Hsu</span>
        </h2>
        <button>
          <a
            href="/files/WenYi_Hsu_Resume.pdf"
            target="_blank"
            class="mt-4 inline-block rounded bg-[#82ddcf] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#5ac1b8]"
          >
            View Resume
          </a>
        </button>
      </div>
    </div>
  </section>
</template>
