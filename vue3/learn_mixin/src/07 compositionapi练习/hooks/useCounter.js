import { ref } from 'vue'
export default function() {
  const name = ref('chan')
  const age = ref(18)
  const inr = () => {
    return age.value++
  }
  const der = () => {
    return age.value--
  }
  return {
    name,
    age,
    inr,
    der
  }
}