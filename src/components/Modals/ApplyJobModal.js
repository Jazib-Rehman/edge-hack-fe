import React, { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Dropdown, DatePicker, Form, Input, Modal, Space, message } from 'antd';
import { getAllUniversities, calScore, createCandidate } from "../../services/api"


const JobModal = ({ isModalOpen, setIsModalOpen, id }) => {
    const [form] = Form.useForm()
    const [university, setUniversity] = useState("Select University")

    const [unis, setunis] = useState([])
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = async (values) => {
        try {
            values.institute = university
            values.job_id = id
            values.rel_experience = true
            const resp = await createCandidate(values);
            if (resp.data.id) {
                await calScore({ candidate_id: resp.data.id })
            }
            setIsModalOpen(false);
            form.resetFields()
            message.success("Application added successfully");
        } catch (error) {
            console.log({ error })
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const getJobsList = async () => {
        try {
            const { data } = await getAllUniversities()
            setunis(data)
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getJobsList()
    }, [])

    return (
        <>
            <Modal footer={false} title="Apply Job" open={isModalOpen} onCancel={handleCancel}>
                <Card className='w-full'>
                    <Form
                        form={form}
                        name="basic"
                        className='w-full'
                        labelCol={{
                            span: 8,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first_name!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last_name!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>

                        <Form.Item
                            label="phone"
                            name="phone"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>

                        <Form.Item
                            label="linkedin"
                            name="linkedin"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your linkedin!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="education"
                            name="education"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your education!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="referal"
                            name="referal"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your referal!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="about"
                            name="about"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your about!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="experience"
                            name="experience"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your experience!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="institute"
                            name="institute"
                            className='w-full'
                        >
                            {/* <Input className='w-full' /> */}
                            <Dropdown menu={{
                                items: unis.map(item => {
                                    return {
                                        key: item,
                                        label: item,
                                        onClick: () => setUniversity(item),
                                    }
                                })
                            }} placement="bottom">
                                <Button className='w-full'>{university}</Button>
                            </Dropdown>
                        </Form.Item>

                        <Form.Item
                            label="city"
                            name="city"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your city!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </>
    );
};
export default JobModal;