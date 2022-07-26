import ForceGraph from 'force-graph'

export function generateMoveViewportNodes() {
  const N = 300;
  const gData = {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
      }))
  };

  const Graph = ForceGraph()
    (document.getElementById('graph'))
      .graphData(gData);

  let k = 0, angle = 0, radius = 300;
  setInterval(() => {
    // zoom in
    Graph.zoom(k);
    k += 0.001;

    // pan around
    Graph.centerAt(
      radius * Math.cos(angle),
      radius * Math.sin(angle)
    );
    angle += Math.PI / 300;
  }, 10);
}
