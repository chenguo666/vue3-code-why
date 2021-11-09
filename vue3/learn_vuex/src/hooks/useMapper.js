import { mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
export function useMapper(mapper, mapFn) {
  const store = useStore()

  const storeState = mapFn(mapper)

  const storeStates = {}

  Object.keys(storeState).forEach((key) => {
    const fn = storeState[key].bind({
      $store: store
    })
    storeStates[key] = computed(fn)
  })
  return storeStates
}