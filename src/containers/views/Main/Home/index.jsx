import React, { Fragment } from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import Card from '../../../../components/Common/Card';
const Template = () => {
    useDocumentTitle("Home")
    return (
        <Fragment>
            <Card />
        </Fragment>
    )
}

export default Template;