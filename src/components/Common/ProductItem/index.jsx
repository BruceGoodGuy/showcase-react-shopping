import React from 'react'
import { Card, Badge, Tag } from 'antd';
import { HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import './index.css';
const { Meta } = Card;

const Template = (props) => {
	let navigate = useNavigate();
	const { badge } = props;

	const viewDetail = () => {
		navigate('/product/1')
	}

	const getTemplate = (options) => {
		const template = (
			<Card
				className="product-item"
				hoverable
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				actions={[
					<EyeOutlined onClick={() =>viewDetail()} key="view" />,
					<HeartOutlined key="love" />
				]}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
				<h2>18$</h2>
				<div className="wrap-categories">
					<Tag color="magenta">magenta</Tag>
					<Tag color="red">red</Tag>
					<Tag color="volcano">volcano</Tag>
				</div>
			</Card>
		);
		if (!options) {
			return template;
		}
		return (
			<Badge.Ribbon {...options}>
				{template}
			</Badge.Ribbon>
		)
	}

	return getTemplate(badge)
}

export default Template;