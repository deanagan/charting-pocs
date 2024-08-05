import React from 'react';
import { ResponsiveBar, BarDatum, BarCustomLayerProps } from '@nivo/bar';
import './App.css'

const data = [
    { pokemon: 'Pikachu', value: 450 },
    { pokemon: 'Charizard', value: 780 },
    { pokemon: 'Arceus', value: 720 },
    { pokemon: 'Mewtwo', value: 900 },
    { pokemon: 'Rayquaza', value: 650 }
];


function CustomLayer(props: BarCustomLayerProps<BarDatum>) {
    const { bars } = props;

    // Calculate the line path and dots
    const linePath = bars.map((bar, index) => {
        const nextBar = bars[index + 1];
        if (nextBar) {
            return `M${bar.x + bar.width / 2},${bar.y} L${nextBar.x + nextBar.width / 2},${nextBar.y}`;
        }
        return null;
    }).filter(Boolean).join(' ');

    return (
        <g>
            {/* Draw the connecting line */}
            <path d={linePath} fill="none" stroke="black" strokeWidth={2} />

            {/* Draw the dots */}
            {bars.map(bar => (
                <circle
                    key={bar.key}
                    cx={bar.x + bar.width / 2}
                    cy={bar.y}
                    r={5}
                    fill="black" />
            ))}
        </g>
    );
}

const BarChart: React.FC = () => (
    <div style={{ height: 500 }}>
        <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="pokemon"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.6}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Pokemon',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 15,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Value',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionConfig="gentle"
            layers={[
                'grid',
                'axes',
                'bars',
                'markers',
                'legends',
                // @ts-expect-error disable false error
                CustomLayer
            ]}
        />
    </div>
);

export default BarChart;
