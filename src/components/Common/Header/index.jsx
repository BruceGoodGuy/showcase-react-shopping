import React, { useState, useEffect, useMemo } from 'react'
import { Layout, Menu } from 'antd';
import './header.css';
import { Row, Col, Dropdown, Button } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation, Link  } from "react-router-dom";

const { Header } = Layout;
function Template() {
	const [selectedPage, setPage] = useState('1');
	let navigate = useNavigate();
	const location = useLocation();
	const mainItems = useMemo( () => [
		{ id: 1, uri: '/', title: 'HOME' },
		{ id: 2, uri: '/products', title: 'PRODUCTS' },
		{ id: 3, uri: '/me', title: 'ME' },
	], []);

	useEffect(() => {
		const path = location.pathname;
		console.log(path)
		const id = mainItems.find(o => (o.uri === path))?.id ?? "/"; 
		setPage(String(id))
	}, [location.pathname, mainItems])

	const menu = (<Menu>
		<Menu.Item key="carts">
			<Link rel="noopener noreferrer" to="carts">
				Carts
			</Link>
		</Menu.Item>
	</Menu>
	);

	function handleChange(event) {
		const { key } = event;
		const uri = mainItems.find(o => o.id === parseInt(key))?.uri ?? "/";
		navigate(uri);
	}
	return (
		<Header>
			<Row justify="space-between">
				<Col lg={6} md={12} className="wrap-logo">
					<div className="logo" />
				</Col>
				<Col lg={{ span: 12, order: 1 }} span="24" order="2">
					<div className="wrap-tools">
						<Menu onClick={handleChange} theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[selectedPage]}>
							{mainItems.map(m => <Menu.Item key={m.id}>{m.title}</Menu.Item>
							)}
						</Menu>
					</div>
				</Col>
				<Col lg={{ span: 6, order: 2 }} span="12" order="1" className="wrap-avatar">
					<Avatar gap="3" icon={<UserOutlined />} />
					<Dropdown overlay={menu} placement="bottomLeft">
						<Button>Đăng Khoa</Button>
					</Dropdown>
				</Col>
			</Row>
		</Header>
	);
}

export default Template;