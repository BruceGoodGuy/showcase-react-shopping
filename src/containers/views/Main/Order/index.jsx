import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import { Breadcrumb, Form, Input, Button } from 'antd';
import { Descriptions, Divider, Badge, Timeline } from 'antd';
import OrderDetail from '../../../../components/Common/OrderDetail'
import { Link } from 'react-router-dom';
import './order.css'

const Template = () => {
	useDocumentTitle("Checking Order")
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="OrderPage">
			<Breadcrumb>
				<Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
				<Breadcrumb.Item>
					Order checking
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className="wrap-order">
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Order number"
						name="username"
						rules={[{ required: true, message: 'Please input order number!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Search
						</Button>
					</Form.Item>
				</Form>
				<div className="wrap-result">
					<Divider orientation="left">Order Detail</Divider>
					<OrderDetail />
					<Divider orientation="left">Order Process</Divider>
					<Timeline mode="left">
						<Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
						<Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
						<Timeline.Item>Technical testing</Timeline.Item>
						<Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
					</Timeline>
				</div>
			</div>
		</div>
	)
}

export default Template