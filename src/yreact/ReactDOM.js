const render = (vnode, container) => {
  // console.log('vnode', vnode)
  // vnode -> node
  const node = createNode(vnode)
  // 把node放入container
  container.appendChild(node)
}

// 根据vnode, 创建一个node
const createNode = vnode => {
  const {type, props} = vnode
  let node;
  if (type === 'TEXT') {
    node = document.createTextNode('')
  }else{
    node = document.createElement(type)
  }
  // 递归循环children的元素：
  reconcilerChildren(props.children, node)
  updateNode(node, props)
  return node
}

const reconcilerChildren = (children, node) => {
  for (let i = 0; i < children.length; i ++ ) {
    render( children[i], node )
  }
}

// 更新节点上的属性， 如className,  nodeValue等
const updateNode = (node, nextVal) => {
  Object.keys(nextVal)
  .filter( k => k !== 'children' )
  .forEach( k => node[k] = nextVal[k] )
}

export default {
  render
}