import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import './carts.css';
import { Breadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { List, Button, Space } from 'antd';
import { DeleteOutlined, StarOutlined, DollarCircleOutlined } from '@ant-design/icons';
const listData = [];
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
	const navigate = useNavigate()
	useDocumentTitle("Cart")
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	const buy = () => {
		navigate('/payment')
	}
	return (
		<div className="CartPage">
			<Breadcrumb>
				<Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
				<Breadcrumb.Item>
					Cart
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className="wrap-carts card-container">
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => {
							console.log(page);
						},
						pageSize: 3,
					}}
					dataSource={listData}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
								<IconText icon={DollarCircleOutlined} text="1000$" key="list-vertical-like-o" />,
								<IconText icon={DeleteOutlined} key="list-vertical-message" />,
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>
							}
						>
							<List.Item.Meta
								title={<Link to={item.href}>{item.title}</Link>}
								description={item.description}
							/>
							{item.content}
						</List.Item>
					)}
				/>
				<Button type="primary" onClick={buy}>Buy All</Button>
			</div>
		</div>
	)
}

export default Template;