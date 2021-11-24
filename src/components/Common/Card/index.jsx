import React, { Fragment } from 'react'
import { Card, Image } from 'antd';
const { Meta } = Card;
const Template = () => {
	return (
		<Fragment>
			<Card
				loading={true}
				hoverable
				style={{ width: 500 }}
				cover={
					<Image
						width={200}
						src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?1`}
						placeholder={
							<Image
								preview={false}
								src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
								width={200}
							/>
						}
					/>
				}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
			</Card>
		</Fragment>
	)
}

export default Template;