import React from 'react';
import { ResponsiveBar } from '@nivo/bar';


const BarChart = ({ data }) => {
    const getColor = bar => {
        
        const colors = {
          'Beer': '#FED7AA',
          'Wine': '#FECACA',
          'Vodka': '#BBF7D0',
          'Cola':'#E9D5FF',
        };
        return colors[bar.id] || 'gray';
      };
  return (


    <div style={{width:'100%', height:'88vh'}}>
        <p style={{fontSize:"3vh", fontWeight:"bold"}}>Beverages shipped to Qantas Lounge</p>
      <ResponsiveBar
        style={{fontSize:'10%'}}
        data={data}
        colors={getColor}
        keys={[
            'Beer',
            'Wine',
            'Vodka',
            'Cola',

        ]}
        indexBy="Beverage Type"
        margin={{ top: 2, right: 5, bottom: 27, left: 28 }}
        padding={0.1}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}

        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 6,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 20
            }
        ]}

        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 2,
            tickPadding: 1,
            tickRotation: 0,
            legend: 'Beverage Type',
            legendPosition: 'middle',
            legendOffset: 20,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 2,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Boxes Shipped',
            size: '10',
            fontSize:14,
            legendPosition: 'middle',
            legendOffset: -23,
            truncateTickAt: 0
        }}
        
        labelSkipWidth={8}
        labelSkipHeight={8}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    1.6
                ]
            ]
        }}


        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in Beverage Type: "+e.indexValue}
      />

    </div>

  );
};

export default BarChart;