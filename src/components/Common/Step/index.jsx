import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;


const Template = (props) => {
	const { step } = props ?? 0;
	return (
		<Steps current={step}>
			<Step title="Check" />
			<Step title="Confirm" />
			<Step title="Complete" />
		</Steps>
	)
}

export default Template;