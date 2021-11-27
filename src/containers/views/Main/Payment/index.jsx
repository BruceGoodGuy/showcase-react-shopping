import React, { useState } from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import './payment.css';
import { Breadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { List, Button, Divider, Form, Input, Result, Row, Col } from 'antd';
import Step from './../../../../components/Common/Step'
import OrderDetail from '../../../../components/Common/OrderDetail'
const listData = [];
const { TextArea } = Input;
for (let i = 0; i < 23; i++) {
	listData.push({
		href: '/product/1',
		title: `ant design part ${i}`,
		avatar: 'https://joeschmoe.io/api/v1/random',
		description:
			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}
const Template = () => {
	useDocumentTitle("Payment")
	let [step, setStep] = useState(0)
	const data = [
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
	];

	const navigate = useNavigate()


	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const handle = (type) => {
		let stepnew = step;
		switch (type) {
			case "next":
				++stepnew; break;
			case "prev": --stepnew; break;
			default: break;
		}
		if (stepnew >= 0 && stepnew <= 2) {
			setStep(stepnew)
		}
	}

	const generateTemplate = (s) => {
		switch (s) {
			case 0: return (
				<div className="wrap-step-1">
					<List
						header={<div>Items</div>}
						footer={<div>Total: 100$</div>}
						bordered
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<p><Link to="/product/1">{item}</Link> x3</p>
								<p>100$</p>
							</List.Item>
						)}
					/>
					<Row className="wrap-info">
						<Col span={24} lg={{ span: 10 }} md={{ span: 12 }}>
							<Form
								name="basic"
								labelCol={{ span: 6 }}
								wrapperCol={{ span: 18 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
							>
								<Form.Item
									label="name"
									name="name"
									rules={[{ required: true, message: 'Please input your name!' }]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="email"
									name="email"
									rules={[{ required: true, message: 'Please input your email!' }]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="phone number"
									name="phone"
									rules={[{ required: true, message: 'Please input your phone number!' }]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="address"
									name="address"
									rules={[{ required: true, message: 'Please input your address!' }]}
								>
									<TextArea rows={4} />
								</Form.Item>

								<Form.Item
									label="addition info"
									name="more"
									rules={[{ required: false, message: 'Please input your addition info' }]}
								>
									<TextArea rows={4} />
								</Form.Item>

							</Form>
						</Col>
					</Row>
				</div>
			);
			case 1: return (
				<div className="wrap-step-2">
					<OrderDetail />
				</div>
			);
			case 2: return (
				<Result
					status="success"
					title="Successfully Purchased Cloud Server ECS!"
					subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
					extra={[
						<Button onClick={() => navigate('/products')} type="primary" key="console">
							Continue Shopping
						</Button>,
						<Button onClick={() => navigate('/order')} key="order">
							Checking Order
						</Button>
					]}
				/>
			)
			default: return "";
		}
	}
	return (
		<div className="PaymentPage">
			<Breadcrumb>
				<Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
				<Breadcrumb.Item>
					Payment
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className="wrap-payment card-container">
				<Step step={step} />
				<Divider orientation="left">Order detail</Divider>
				{generateTemplate(step)}
				<Button className="back-step" onClick={() => handle("prev")}>Back</Button>&nbsp;
				<Button className="next-step" type="primary" onClick={() => handle("next")}>Next</Button>
			</div>
		</div>
	)
}

export default Template;