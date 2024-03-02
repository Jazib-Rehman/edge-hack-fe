import React, { useState } from 'react';
import { Button, Card, Checkbox, DatePicker, Form, Input, Modal } from 'antd';
import { createJob } from '../../services/api';
const JobsModal = ({ isModalOpen, setIsModalOpen }) => {
    const [form] = Form.useForm()

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = async (values) => {
        try {
            const { data, status } = await createJob();
            setIsModalOpen(false);
            form.setFieldsValue({
                title: "",
                department: "",
                open_date: "",
                dead_line: "",
                location: "",
                required_experience: "",
            });
        } catch (error) {
            console.log({ error })
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>

            <Modal footer={false} title="Create Job" open={isModalOpen} onCancel={handleCancel}>
                <Card className='w-full'>
                    <Form
                        form={form}
                        name="basic"
                        className='w-full'
                        labelCol={{
                            span: 8,
                        }}
                        // wrapperCol={{
                        //     span: 16,
                        // }}
                        // style={{
                        //     maxWidth: 600,
                        // }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your title!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Department"
                            name="department"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your department!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Open date"
                            name="open_date"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your open date!',
                                },
                            ]}
                        >
                            <DatePicker className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Dead line"
                            name="dead_line"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your dead line!',
                                },
                            ]}
                        >
                            <DatePicker className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Location"
                            name="location"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your location!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>
                        <Form.Item
                            label="Required experience"
                            name="required_experience"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your required_experience!',
                                },
                            ]}
                        >
                            <Input className='w-full' />
                        </Form.Item>

                        <Form.Item
                            name="isRemote"
                            valuePropName="checked"
                        // wrapperCol={{
                        //     offset: 8,
                        //     span: 16,
                        // }}
                        >
                            <Checkbox>Remote</Checkbox>
                        </Form.Item>
                        <Form.Item
                        // wrapperCol={{
                        //     offset: 8,
                        //     span: 16,
                        // }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </>
    );
};
export default JobsModal;