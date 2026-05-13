<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed z-50 w-full bg-white/70 shadow-[0_10px_100px_rgba(0,0,0,0.1)] backdrop-blur-sm"
  >
    <div class="flex items-center justify-between px-6 py-3">
      <a href="#" @click="closeMenu"><img src="/imgs/logo.png" alt="Logo" class="h-8" /></a>

      <!-- Desktop menu -->
      <ul class="hidden gap-6 text-sm sm:flex">
        <li><a href="#about" class="font-bold text-[#24dbbf] hover:underline">About</a></li>
        <li><a href="#projects" class="font-bold text-[#24dbbf] hover:underline">Projects</a></li>
        <li><a href="#contact" class="font-bold text-[#24dbbf] hover:underline">Contact</a></li>
      </ul>

      <!-- Hamburger button -->
      <button
        class="flex flex-col gap-1.5 sm:hidden"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block h-0.5 w-6 bg-[#2E2E2E] transition-all duration-300"
          :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-[#2E2E2E] transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-[#2E2E2E] transition-all duration-300"
          :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <ul
      class="flex flex-col gap-4 overflow-hidden px-6 text-sm transition-all duration-300 sm:hidden"
      :class="menuOpen ? 'max-h-40 pb-5' : 'max-h-0'"
    >
      <li><a href="#about" class="font-bold text-[#24dbbf]" @click="closeMenu">About</a></li>
      <li><a href="#projects" class="font-bold text-[#24dbbf]" @click="closeMenu">Projects</a></li>
      <li><a href="#contact" class="font-bold text-[#24dbbf]" @click="closeMenu">Contact</a></li>
    </ul>
  </nav>
</template>
