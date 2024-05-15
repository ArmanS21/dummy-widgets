import React from 'react';

import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ data }) => {
    const getColor = bar => {
        const colors = {
          'Retail Area': '#E2E8F0',
          'Security': '#FECACA',
          'Departures': '#BBF7D0',
          'Arrivals':'#E9D5FF',
        };
        return colors[bar.id] || 'gray'; 
      };
    return(

        <div style={{width:'100%', height:'28vh'}}>

            <h3>Passenger Concentration</h3>
    <ResponsivePie
      data={data}
      
      margin={{top:30, right: 30, left: 30, bottom: 30}}
      
      innerRadius={0.5}
      padAngle={1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      colors={getColor}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}

    />
    
    </div>


    )
};
export default PieChart;