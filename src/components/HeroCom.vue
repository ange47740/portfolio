<script setup>
import { ref, onMounted } from 'vue'

const line1Left = 'Front-end '
const line1Right = 'Developer'
const line2Left = '& UI/UX '
const line2Right = 'Designer'
const line3 = 'Specializing in Vue.js, RWD & Multi-Platform UI/UX Design.'

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
    class="relative flex min-h-screen flex-col items-center justify-center bg-white px-4 text-gray-900 sm:px-10 md:px-20"
  >
    <h1
      class="absolute bottom-5 left-5 z-20 text-[34px] leading-tight font-medium md:bottom-8 md:left-8 md:text-[58px] lg:bottom-10 lg:left-10 lg:text-[94px]"
    >
      <div>
        {{ line1LeftDisplay }}
        <span class="text-[#ffd818]">{{ line1RightDisplay }}</span>
      </div>

      <div class="relative">
        <div class="invisible"><span class="text-[#82ddcf]">& UI/UX </span> Designer</div>
        <div class="absolute top-0 left-0">
          <span class="text-[#82ddcf]">{{ line2LeftDisplay }}</span
          ><span class="text-gray-900">{{ line2RightDisplay }}</span>
        </div>
      </div>

      <div class="relative mt-2.5 font-sans text-[18px] md:text-[22px] lg:text-[32px]">
        <div class="invisible">
          <span class="text-[#82ddcf]">Specializing in Vue.js and Responsive Web Design.</span>
        </div>
        <div class="absolute top-0 left-0">
          <span>{{ line3Display }}</span>
        </div>
      </div>
    </h1>

    <div
      class="absolute top-0 right-0 flex h-full w-full max-w-3xl items-start md:items-center lg:right-12"
    >
      <img
        src="/imgs/me.jpg"
        alt=""
        class="animate-in fade-in absolute top-[76px] left-[20px] h-[440px] w-[220px] object-cover object-bottom shadow-[20px_10px_0_rgba(205,204,203,0.5)] duration-1000 md:static md:h-[480px] md:w-[250px] lg:h-[600px] lg:w-[300px]"
      />

      <div
        class="animate-in slide-in-from-top absolute top-37 right-0 flex h-[90px] w-[200px] flex-col items-start justify-center bg-[#ddf0ed] p-6 duration-1800 md:top-0 md:h-[480px] md:w-[280px] lg:h-[600px] lg:w-[400px]"
      >
        <p class="text-lg text-gray-500">Hello, I'm</p>
        <h2 class="text-[28px] leading-tight font-bold md:text-[36px] lg:text-5xl">
          Wen Yi <span class="text-[#ffd818]">Hsu</span>
        </h2>
        <button>
          <a
            href="/files/Wen_Yi_Hsu_Resume(web).pdf"
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
