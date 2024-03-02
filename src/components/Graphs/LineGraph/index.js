import React from 'react'
import { Line } from '@ant-design/charts';

export default function LineGraph(data) {

    return (
        <div>
            <Line {...data} />
        </div>
    )
}
