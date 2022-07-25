import ForceGraph from 'force-graph'

export function generateAutoColorNodes() {
  const NODES = 300
    const GROUPS = 12
    const gData = {
      nodes: [...Array(NODES).keys()].map(i => ({
        id: i,
        group: Math.ceil(Math.random() * GROUPS)
      })),
      links: [...Array(NODES).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id-1))
        }))
    }

    const Graph = ForceGraph()
      (document.getElementById('graph'))
        .nodeAutoColorBy('group')
        .linkAutoColorBy(d => gData.nodes[d.source].group)
        .graphData(gData)
}
