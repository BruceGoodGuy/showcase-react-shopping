import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import Carousel from '../../../../components/Common/Carousel'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Radio, Tag, InputNumber } from 'antd';
import { Typography, Divider } from 'antd';
import './product.css';
import Card from '../../../../components/Common/Card';
const { Title, Paragraph, Text } = Typography;

const Template = () => {
	useDocumentTitle("ProductDetail")
	return (
		<div className="ProductPage">
			<Row>
				<Col span="24">
					<Breadcrumb>
						<Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
						<Breadcrumb.Item><Link to="/products">Products</Link></Breadcrumb.Item>
						<Breadcrumb.Item>Product Name</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>
			<Row gutter={[12, 12]} className="wrap-product-detail">
				<Col lg={{ span: 8 }} md={{ span: 12 }} span="24">
					<Carousel />
				</Col>
				<Col lg={{ span: 12 }} md={{ span: 12 }} span="24">
					<Typography>
						<Title>Product Name</Title>
						<Text level={5}>
							In the process of internal desktop applications development, many different design specs and
							implementations would be involved, which might cause designers and developers difficulties and
							duplication and reduce the efficiency of development.
						</Text >
						<Title level={3}>100$</Title>
					</Typography>
					<div className="wrap-categories">
						<Tag color="magenta">magenta</Tag>
						<Tag color="red">red</Tag>
						<Tag color="volcano">volcano</Tag>
					</div>
					<Form className="form-buy">
						<Form.Item label="Size" name="layout">
							<Radio.Group value={{ wrapperCol: { span: 14, offset: 4 } }}>
								<Radio.Button value="horizontal">S</Radio.Button>
								<Radio.Button value="vertical">M</Radio.Button>
								<Radio.Button value="inline">XL</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item label="QTY">
							<InputNumber min={1} max={10} defaultValue={3} />
						</Form.Item>
						<Form.Item >
							<Button className="btn-buy" type="primary" size="large">Buy</Button>
							<Button type="danger" size="large">Love</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Row>
				<Card title="Relate Product" />
			</Row>
		</div>
	)
}

export default Template;