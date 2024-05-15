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

        <div style={{width:'100%', height:'95vh'}}>

<p style={{fontSize:"2vh", fontWeight:"bold"}}>Passenger Concentration</p>
    <ResponsivePie
      data={data}
      
      margin={{top:10, right: 25, left: 25, bottom: 15}}
      arcLabel={e=>e.id+" ("+e.value+")"}
      innerRadius={0.5}
      padAngle={1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      colors={getColor}
      enableArcLinkLabels={false}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}


    />
    
    </div>


    )
};
export default PieChart;