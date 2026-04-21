<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/NavbarCom.vue'
import Hero from './components/HeroCom.vue'
import About from './components/AboutCom.vue'
import Projects from './components/ProjectsCom.vue'
import Contact from './components/ContactCom.vue'
import Footer from './components/FooterCom.vue'

gsap.registerPlugin(ScrollTrigger)

let lenis

onMounted(() => {
  lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  lenis?.destroy()
})
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Footer />
</template>
