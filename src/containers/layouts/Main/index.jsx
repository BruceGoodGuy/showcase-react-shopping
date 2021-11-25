import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
const { Content } = Layout;


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
			<Footer />
		</Layout>
	)
}

export default template;