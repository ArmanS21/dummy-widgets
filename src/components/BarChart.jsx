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
    <div style={{ height: '300px'}}>
        <h4>Beverages shipped to Qantas Lounge</h4>
      <ResponsiveBar
        data={data}
        colors={getColor}
        keys={[
            'Beer',
            'Wine',
            'Vodka',
            'Cola',

        ]}
        indexBy="Beverage Type"
        margin={{ top: 5, right: 5, bottom: 50, left: 50 }}
        padding={0.2}
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
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Beverage Type',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Boxes Shipped',
            
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
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