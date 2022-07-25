import ForceGraph from 'force-graph'

export function blockJsonTrees() {
  fetch('../datasets/blocks.json').then(res => res.json()).then(data => {
    const elem = document.getElementById('graph');

    const Graph = ForceGraph()(elem)
      .backgroundColor('#101020')
      .nodeRelSize(6)
      .nodeAutoColorBy('user')
      .nodeLabel(node => `${node.user}: ${node.description}`)
      .linkColor(() => 'rgba(255,255,255,0.2)')
      .linkDirectionalParticles(1)
      .onNodeClick(node => window.open(`https://bl.ocks.org/${node.user}/${node.id}`, '_blank'))
      .graphData(data);
    });
}
