const h = (tag, props, children) => {
  // vnode就是一个javascript对象
  return {
    tag,
    props,
    children
  }
}
const mount = (vnode, container) => {
  console.log(container)
    // vnode => element
    //   1 创建出真实元素 保留el
  const el = (vnode.el = document.createElement(vnode.tag))
    //   2 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }
  //   3 子节点处理
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }
  // 4 container
  container.appendChild(el)
}