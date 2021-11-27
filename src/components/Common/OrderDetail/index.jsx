import React from 'react'
import { Descriptions, Badge } from 'antd';


const Template = () => {
    return (
        <Descriptions title="" bordered>
            <Descriptions.Item label="Name">Nguyen Dang Khoa</Descriptions.Item>
            <Descriptions.Item label="Payment method">COD</Descriptions.Item>
            <Descriptions.Item label="Allow check">YES</Descriptions.Item>
            <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
            <Descriptions.Item label="Delivery time (estimated)" span={2}>
                2019-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
                0329090148
            </Descriptions.Item>
            <Descriptions.Item label="Email">
                khoauth@gmail.com
            </Descriptions.Item>
            <Descriptions.Item label="Status">
                <Badge status="processing" text="Checking" />
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>
                ABC, VN
            </Descriptions.Item>
            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Transportation fee">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">$100.00</Descriptions.Item>
            <Descriptions.Item label="Products">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1<br />
            </Descriptions.Item>
        </Descriptions>
    )
}

export default Template;