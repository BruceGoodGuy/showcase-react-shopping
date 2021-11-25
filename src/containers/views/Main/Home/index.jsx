import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import Card from '../../../../components/Common/Card';
import Carousel from '../../../../components/Common/Carousel';
import { Divider } from 'antd';
import './home.css';

const Template = () => {
	useDocumentTitle("Home")
	return (
		<div className="HomePage">
			<Carousel />
			<Card title="Deals" />
			<Divider />
			<Card title="Featured Products" />
			<Divider />
			<Card title="All Products" pagination={{}} />
		</div>
	)
}

export default Template;