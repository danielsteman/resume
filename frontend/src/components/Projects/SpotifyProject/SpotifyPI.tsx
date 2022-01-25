import Plot from 'react-plotly.js';
import './SpotifyPI.scss';
import { useCallback, useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { SpotifyPIProps } from '../../../types';

// interface IPlotData {
//   data: Array<IPlotDataRow>;
// }

// interface IPlotDataRow {
//   fields: IPlotDataFields
// }

// interface IPlotDataFields {
//   cluster: number,
//   xDim: number,
//   yDim: number,
//   zDim: number,
//   trackName: string,
//   artist: string
// }

const SpotifyPI = ({ setLoading }: SpotifyPIProps) => {
  const [height, setHeight] = useState(undefined);
  const [width, setWidth] = useState(undefined);
  const [plotData, setPlotData] = useState<any>();
  const plotDiv = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const { data, loading, error } = useFetch('mlresults');
  useEffect(() => setLoading(loading), [loading]);
  useEffect(() => {
    console.log(data);
    setPlotData(data);
  }, [data]);

  const axesStyle = {
    tick0: 0,
    tickcolor: '#D3D3D3',
    tickwidth: 2,
    gridcolor: '#D3D3D3',
    gridwidth: 2,
    zerolinecolor: '#D3D3D3',
    zerolinewidth: 2,
  };

  const colorMap: any = {
    // 1: 'rgb:(66, 135, 245)',
    // 2: 'rgb:(156, 66, 245)',
    // 3: 'rgb:(0, 245, 57)',
    // 4: 'rgb:(208, 245, 0)',
    // 5: 'rgb:(245, 0, 0)',
    1: 'aliceblue',
    2: 256,
    3: 128,
    4: 64,
    5: 192,
  };

  const layout = {
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

  return (
    <div className="spotifyProjectGraphComponent">
      {plotData && plotData.data && (
        <div className="plotDiv" ref={plotDiv}>
          <Plot
            config={{ displayModeBar: false }}
            data={[
              {
                x: plotData.data.map((obj: any) => obj.fields.xDim),
                y: plotData.data.map((obj: any) => obj.fields.yDim),
                z: plotData.data.map((obj: any) => obj.fields.zDim),
                type: 'scatter3d',
                mode: 'markers',
                marker: {
                  color: plotData.data.map((obj: any) => colorMap[obj.fields.cluster]),
                  symbol: 'circle',
                  opacity: 0.8,
                },
                hoverlabel: { bgcolor: 'grey' },
                hoverinfo: 'text',
                text: plotData.data.map((obj: any) => obj.fields.trackName),
              },
            ]}
            layout={layout}
          />
        </div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default SpotifyPI;

// check example: https://stackoverflow.com/questions/39084438/how-to-import-plotly-js-into-typescript
