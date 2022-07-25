import ForceGraph from 'force-graph'

export function generateDynamicNodes() {
  const initData = {
    nodes: [ {id: 0 } ],
    links: []
  }

  const elem = document.getElementById("graph")

  const Graph = ForceGraph()(elem)
    .onNodeClick(removeNode)
    .graphData(initData)

  setInterval(() => {
    const { nodes, links } = Graph.graphData()
    const id = nodes.length
    Graph.graphData({
      nodes: [...nodes, { id }],
      links: [...links, { source: id, target: Math.round(Math.random() * (id - 1)) }]
    })
  }, 1000)

  // 移除节点
  function removeNode(node) {
    let { nodes, links } = Graph.graphData()
    links = links.filter(l => l.source !== node && l.target !== node) // 移除节点的关联对象
    nodes.splice(node.id, 1) // Remove node
    nodes.forEach((n, idx) => { n.id = idx }) // 重置节点的ID
    Graph.graphData({ nodes, links })
  }
}
