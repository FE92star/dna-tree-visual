import ForceGraph from 'force-graph'

export function fetchJsonTrees() {
  fetch('../datasets/miserables.json').then(res => res.json()).then(data => {
    const Graph = ForceGraph()
    (document.getElementById('graph'))
      .graphData(data)
      .nodeId('id')
      .nodeVal('val')
      .nodeLabel('id')
      .nodeAutoColorBy('group')
      .linkSource('source')
      .linkTarget('target')
  })
}
