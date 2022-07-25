import ForceGraph from 'force-graph'

export function generateFocusNodes() {
  fetch('../datasets/miserables.json').then(res => res.json()).then(data => {
    const elem = document.getElementById('graph');

    const Graph = ForceGraph()(elem)
      .graphData(data)
      .nodeLabel('id')
      .nodeAutoColorBy('group')
      .linkDirectionalParticles(2)
      .linkDirectionalParticleWidth(1.4)
      .onNodeClick(node => {
        // Center/zoom on node
        Graph.centerAt(node.x, node.y, 1000);
        Graph.zoom(8, 2000);
      })
  })
}
