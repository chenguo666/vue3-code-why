import { ref } from 'vue'
export default function() {
  const scrollX = ref(0)
  const scrollY = ref(0)
  window.addEventListener('mousemove', e => {
    scrollX.value = e.pageX
    scrollY.value = e.pageY
  })
  return {
    scrollX,
    scrollY
  }
}