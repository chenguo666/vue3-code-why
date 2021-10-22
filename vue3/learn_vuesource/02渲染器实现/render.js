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
const patch = (n1, n2) => {
  console.log(123)
    // diff算法
  if (n1.tag !== n2.tag) {
    const n1Elparent = n1.el.parentElement
    n1Elparent.removeChild(n1.el)
    mount(n2, n1Elparent)
  } else {
    //   取出el对象 保存在n2
    const el = (n2.el = n1.el)
      //   处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
      // 获取所有的newprops添加到el
    for (const key in newProps) {
      const oldValue = oldValue[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }
    // 删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith('on')) {
          const value = oldProps[key]
          el.removeEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.removeAttribute(key)
        }
      }
    }
    // 处理 children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []
    if (typeof newChildren === 'string') {
      // 边界判断edge case
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
    } else {
      // 不是string 是数组
      if (typeof oldChildren === 'string') {
        el.innerHTML = ''
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else {
        // 前面有相同的节点的原生进行patch 操作
        const commonLength = Math.min(oldChildren.length, newChildren.length)
        for (let i = 0; i < commonLength.length; i++) {
          patch(oldChildren[i], newChildren[i])
        }
        // newChildren>oldChildren
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el)
          })
        }
        //  newChildren<oldChildren
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach(item => {
            //    unmount(item, el)
            el.removeChild(item.el)
          })
        }
      }
    }
  }
}