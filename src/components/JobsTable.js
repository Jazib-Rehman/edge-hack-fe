import React from 'react';
import { Space, Table, Tag } from 'antd';
import moment from 'moment';
import { Switch } from 'antd';
import { updateJobAPI } from "../services/api"

const JobsTable = ({ jobsList, isActive = true, modalOpen }) => {

    const onChange = async (checked, id) => {
        try {
            const { data } = await updateJobAPI({ isActive: checked }, id)
        } catch (error) {
            console.log('error', error)
        }
    };

    const onClick = async (id) => {
        try {
            modalOpen(id)
        } catch (error) {
            console.log('error', error)
        }
    };

    const columns = isActive ? [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Open date',
            dataIndex: 'open_date',
            key: 'open_date',
            render: (text) => <a>{moment(text).format("DD-MM-YYYY")}</a>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Dead line',
            dataIndex: 'dead_line',
            key: 'dead_line',
            render: (text) => <a>{moment(text).format("DD-MM-YYYY")}</a>,
        },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },

        {
            title: 'Active',
            key: 'isActive',
            render: (_, record) => (
                <Space size="middle">
                    {record.isActive}
                    <Switch defaultChecked={record?.isActive} onChange={(e) => onChange(e, record.id)} />
                </Space>
            ),
        },
    ] : [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (_, record) => (
                <Space size="middle">
                    {record.isActive}
                    <p onClick={(e) => onClick(record.id)}>{record.title} </p>
                </Space>
            ),
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Open date',
            dataIndex: 'open_date',
            key: 'open_date',
            render: (text) => <a>{moment(text).format("DD-MM-YYYY")}</a>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Dead line',
            dataIndex: 'dead_line',
            key: 'dead_line',
            render: (text) => <a>{moment(text).format("DD-MM-YYYY")}</a>,
        },
    ];
    return <Table columns={columns} dataSource={jobsList} />;
}

export default JobsTable;