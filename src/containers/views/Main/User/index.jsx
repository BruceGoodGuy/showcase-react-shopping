import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import './user.css';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Typography, Row, Col, Form, Input, Button, Radio, Slider, Tabs, Image, Descriptions } from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;


const Template = () => {
	useDocumentTitle("User")

	function callback(key) {
		console.log(key);
	}

	return (
		<div className="UserPage">
			<Breadcrumb>
				<Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
				<Breadcrumb.Item>
					User
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className="wrap-tabs card-container">
				<Tabs onChange={callback} type="card">
					<TabPane tab="Overview" key="1">
						<Row>
							<Col span="24" lg={{ span: 6 }} md={{ span: 10 }}>
								<Image
									width={200}
									src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
								/>
							</Col>
							<Col span="24" lg={{ span: 18 }} md={{ span: 14 }}>
								<Descriptions title="User Info">
									<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
									<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
									<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
									<Descriptions.Item label="Remark">empty</Descriptions.Item>
									<Descriptions.Item label="Address">
										No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
									</Descriptions.Item>
								</Descriptions>
							</Col>
						</Row>
					</TabPane>
					<TabPane tab="Cart" key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="Order" key="3">
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
			</div>
		</div>
	)
}

export default Template;