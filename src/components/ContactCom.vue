<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('#contact .contact-content', {
    scrollTrigger: { trigger: '#contact', start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section id="contact" class="flex flex-col items-center justify-center px-6 py-20 text-center">
    <div class="contact-content flex flex-col items-center">
      <h2 class="mb-6 text-3xl font-semibold">Get in Touch</h2>
      <p class="mb-6 text-gray-500">有合作提案、工作機會或任何問題，歡迎直接來信。</p>
      <a
        href="mailto:angel47740@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="email w-64 rounded bg-[#F4F4F4] px-4 py-5 text-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white dark:bg-[#E2E2E2] dark:hover:bg-[#FFFFFF] dark:hover:text-[#2E2E2E]"
      >
        <p class="text-sm font-bold">angel47740@gmail.com</p>
      </a>
    </div>
  </section>
</template>
