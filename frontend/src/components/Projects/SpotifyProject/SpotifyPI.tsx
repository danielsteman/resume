import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';
import './SpotifyPI.scss';
import { useCallback, useState } from 'react';

const SpotifyPI = () => {
  const [height, setHeight] = useState(undefined);
  const [width, setWidth] = useState(undefined);
  const plotDiv = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const axesStyle = {
    tick0: 0,
    tickcolor: '#D3D3D3',
    tickwidth: 2,
    gridcolor: '#D3D3D3',
    gridwidth: 2,
    zerolinecolor: '#D3D3D3',
    zerolinewidth: 2,
  };

  const Xdim = [1, 2, 3];
  const Ydim = [1, 2, 3];
  const Zdim = [1, 2, 3];
  const labelColors = [1, 2, 3];
  const dataPointLabels = ['1', '2', '3'];

  const layout: Partial<Plotly.Layout> = {
    width,
    height,
    paper_bgcolor: 'black',
    margin: {
      pad: 0,
      t: 0,
      b: 0,
      l: 0,
      r: 0,
    },
    scene: {
      yaxis: axesStyle,
      xaxis: axesStyle,
      zaxis: axesStyle,
      camera: { eye: { x: 1.5, y: 1.5, z: 1.5 } },
    },
  };

  // TODO:
  // three series of mock data for dimensions
  // one series for label colors
  // one series for data point labels

  return (
    <div className="spotifyProjectGraphComponent">
      <div className="plotDiv" ref={plotDiv}>
        <Plot
          config={{ displayModeBar: false }}
          data={[
            {
              x: Xdim,
              y: Ydim,
              z: Zdim,
              type: 'scatter3d',
              mode: 'markers',
              marker: { color: labelColors, symbol: 'circle' },
              hoverlabel: { bgcolor: 'grey' },
              hoverinfo: 'text',
              text: dataPointLabels,
            },
          ]}
          layout={layout}
        />
      </div>
    </div>
  );
};

export default SpotifyPI;

// check example: https://stackoverflow.com/questions/39084438/how-to-import-plotly-js-into-typescript
