<script setup>
import { ref, onMounted } from 'vue'

const line1Left = 'UI/UX '
const line1Right = 'Designer'
const line2Left = 'Front-end '
const line2Right = 'Developer'

const line1LeftDisplay = ref('')
const line1RightDisplay = ref('')
const line2LeftDisplay = ref('')
const line2RightDisplay = ref('')

onMounted(async () => {
  await delay(1000)
  await typeText(line1Left, line1LeftDisplay)
  await typeText(line1Right, line1RightDisplay)
  await delay(300)
  await typeText(line2Left, line2LeftDisplay)
  await typeText(line2Right, line2RightDisplay)
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
      class="absolute bottom-5 left-5 z-20 text-[34px] leading-tight font-light md:bottom-10 md:left-10 md:text-[100px]"
    >
      <div>
        {{ line1LeftDisplay }}
        <span class="text-[#ffd818]">{{ line1RightDisplay }}</span>
      </div>

      <div class="relative">
        <!-- 占位符：預留正確空間 -->
        <div class="invisible"><span class="text-[#82ddcf]">Front-end</span> Developer</div>
        <!-- 實際文字 -->
        <div class="absolute top-0 left-0">
          <span class="text-[#82ddcf]">{{ line2LeftDisplay }}</span
          ><span class="text-gray-900">{{ line2RightDisplay }}</span>
        </div>
      </div>
    </h1>

    <div
      class="absolute top-0 right-0 flex h-full w-full max-w-3xl items-start md:right-12 md:items-center"
    >
      <img
        src="/imgs/me_2.jpg"
        alt="Kabir Masud"
        class="animate-in fade-in absolute top-[76px] left-[20px] h-[440px] w-[220px] object-cover object-bottom shadow-[20px_10px_0_rgba(205,204,203,0.5)] duration-1000 md:static md:h-[600px] md:w-[300px]"
      />

      <div
        class="animate-in slide-in-from-top absolute top-37 right-0 flex h-[90px] w-[200px] flex-col items-start justify-center bg-[#ddf0ed] p-6 duration-1800 md:top-0 md:h-[600px] md:w-[400px]"
      >
        <p class="text-lg text-gray-500">Hello, I'm</p>
        <h2 class="text-[28px] leading-tight font-bold md:text-5xl">
          Wen Yi <span class="text-[#ffd818]">Hsu</span>
        </h2>
      </div>
    </div>
  </section>
</template>
