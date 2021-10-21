import dayjs from 'dayjs'
export default function(app) {
  app.directive('time', {
    mounted(el) {
      const textContent = el.textContent
      console.log(textContent)
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
  })
}