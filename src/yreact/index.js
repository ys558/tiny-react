//! node -- dom节点
//! vnode -- 虚拟dom节点

// 接收type,props,children, 返回一个vnode
const createElement = (type, props, ...children) => {
  // 把__source和__self属性删去，方便阅读
  delete props.__source
  delete props.__self

  return {
    type, 
    // 返回新的props：
    props: {
      ...props,
      // 把children放到新的props上：
      // 假如为文本节点，则将其创建为一个对象，利用creatTextNode()函数：
      children: children.map( child => typeof child ==='object'? child : creatTextNode(child) )
    }
  }
}

const creatTextNode = text => {
  return { type: 'TEXT',
    props: { children: [], nodeValue: text }
  }
}

export default {
  createElement
}