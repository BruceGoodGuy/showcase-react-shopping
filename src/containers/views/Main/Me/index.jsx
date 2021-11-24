import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'

const Template = () => {
    useDocumentTitle("Me")
    return (
        <div>
            <h3>Me</h3>
        </div>
    )
}

export default Template;