import React from 'react'
import useDocumentTitle from '../../../../tools/useDocumentTitle'
import './collection.css';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Typography, Row, Col, Form, Input, Button, Radio, Slider } from 'antd';
import ProductItem from '../../../../components/Common/ProductItem';

const { Title } = Typography;


const Template = () => {
    useDocumentTitle("Collections")
    const marks = {
        0: '10$',
        50: '50$',
        100: '100$',
    };
    return (
        <div className="CollectionPage">
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Collections
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="wrap-search">
                <Card>
                    <Form>
                        <Form.Item label="Categories" name="layout">
                            <Radio.Group value={{ wrapperCol: { span: 14, offset: 4 } }}>
                                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                                <Radio.Button value="vertical">Vertical</Radio.Button>
                                <Radio.Button value="inline">Inline</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Name">
                            <Input placeholder="Product name" />
                        </Form.Item>
                        <Form.Item label="Price">
                            <Slider range marks={marks} step={10} defaultValue={[10, 50]} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            <Card className="feature-collections" title="Collections">
                <Typography>
                    <Title level={2} className="title"></Title>
                </Typography>
                <Row gutter={16}>
                    <Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
                        <ProductItem badge={{ text: "asdasdd", color: "red", status: 'error', title: 'xxxxxxxx', dot: true }} />
                    </Col>
                    <Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
                        <ProductItem />
                    </Col>
                    <Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
                        <ProductItem />
                    </Col>
                    <Col span={24} className="product-item" lg={{ span: 6 }} md={{ span: 8 }}>
                        <ProductItem />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Template;