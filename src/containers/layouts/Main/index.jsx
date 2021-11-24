import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../../components/Common/Header';
import { Layout } from 'antd';
import { Row, Col, Dropdown, Button } from 'antd';
const { Footer, Content } = Layout;


const template = () => {
	return (
		<Layout>
			<Header />
			<Layout>
				<Content>
					<Row justify="center">
						<Col span="24" lg={{span: 18}}>
						{<Outlet />}
						</Col>
					</Row>
				</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	)
}

export default template;