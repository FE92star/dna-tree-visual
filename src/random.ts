import ForceGraph from 'force-graph'

export function generateRandomTrees () {
  const N = 300
  const gData = {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
      }))
  }
 
 // @ts-ignore
  const Graph = ForceGraph()
    (document.getElementById('graph'))
      .linkDirectionalParticles(2)
      .graphData(gData)
}
