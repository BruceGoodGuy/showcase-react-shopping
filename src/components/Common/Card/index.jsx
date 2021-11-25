import React, { Fragment } from 'react'
import { Card, Typography, Row, Col, Pagination } from 'antd';
import ProductItem from '../ProductItem';

const { Title } = Typography;
const Template = (props) => {
	return (
		<Fragment>
			<Card title={props.title} extra={<a href="#">More</a>} >
				<Typography>
					<Title level={2} className="title"></Title>
				</Typography>
				<Row gutter={16}>
					<Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
						<ProductItem badge={{ text: "asdasdd", color: "red", status: 'error', title: 'xxxxxxxx', dot: true }} />
					</Col>
					<Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
						<ProductItem />
					</Col>
					<Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
						<ProductItem />
					</Col>
					<Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
						<ProductItem />
					</Col>
				</Row>
				{
					props.pagination ?
						<Row justify="center" gutter={16}>
							<Pagination defaultCurrent={1} total={50} />
						</Row> : ""
				}
			</Card>
		</Fragment>
	)
}

export default Template;