import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (50-2) + 2));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (50-2) + 2)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const RadarChart = () => {
    let data = [
        {
          "type": "Sun",
          "conditionn": Randomizer(),
        },
        {
          "type": "Rain",
          "conditionn": Randomizer(),

        },
        {
          "type": "Wind",
          "conditionn": Randomizer(),

        },
        {
          "type": "Cloud",
          "conditionn": Randomizer(),

        },
      ]
      return(
        <div style ={{height:'88vh', width:'100%'}}>
    <ResponsiveRadar
        data={data}
        keys={[ 'conditionn' ]}
        isInteractive={false}
        indexBy="type"
        valueFormat=">-.2f"
        margin={{ top: 15, right: 35, bottom: 15, left: 37}}
        borderColor={'#E2E8F0'} 
        gridLabelOffset={9}
        dotSize={8}
        dotBorderWidth={1}
        colors={'#E9D5FF'}
        blendMode="multiply"
        motionConfig="wobbly"

    />
    </div>
      )
    }
export default RadarChart;