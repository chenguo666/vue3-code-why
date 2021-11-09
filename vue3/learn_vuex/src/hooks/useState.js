import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export function useState(mapper) {
  const storeState = mapState(mapper)
  const store = useStore()
  const storeStates = {}
  Object.keys(storeState).forEach((key) => {
    const fn = storeState[key].bind({
      $store: store
    })
    storeStates[key] = computed(fn)
  })
  return storeStates
}