import React from 'react';
import { Pie } from '@ant-design/plots';

const DonutGraph = ({ active, inActive }) => {

    const config = {
        data: [
            { type: 'Active', value: active },
            { type: 'Non-Active', value: inActive },
        ],
        width: 300,
        height: 300,
        angleField: 'value',
        colorField: 'type',
        // paddingRight: 100,
        innerRadius: 0.6,
        label: {
            formatter: (value, item) => {
                return item.type === 'Active' ? `${active}` : `${inActive}`;
            },
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'top',
                rowPadding: 5,
            },
        },
        tooltip: {
            formatter: (datum) => {
                return { name: datum.type, value: datum.value };
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: 'Total Jobs',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'bold',
                },
            },
        ],
    };
    return <Pie {...config} />;
};
export default DonutGraph;