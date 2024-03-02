import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({ allScore }) => {


    console.log('allScore', allScore)
    const array = Object.entries(allScore).map(([key, value]) => ({
        type: parseInt(key), // Ensuring the type is a number
        value: value,
    }));

    const config = {
        data: array,
        width: 300,
        height: 300,
        angleField: 'value',
        colorField: 'type',
        label: {
            text: 'value',
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
    };
    return <Pie {...config} />;
};
export default PieChart;