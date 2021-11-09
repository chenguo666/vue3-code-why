// import { mapGetters, useStore } from 'vuex'
// import { computed } from 'vue'
// export function useGetters(mapper) {
//   const storeState = mapGetters(mapper)
//   const store = useStore()
//   const storeStates = {}
//   Object.keys(storeState).forEach((key) => {
//     const fn = storeState[key].bind({
//       $store: store
//     })
//     storeStates[key] = computed(fn)
//   })
//   return storeStates
// }
import { mapGetters } from 'vuex'
import { useMapper } from './useMapper'
export function useGetters(mapper) {
  return useMapper(mapper, mapGetters)
}