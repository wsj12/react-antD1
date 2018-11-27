import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import './style/common.less'
export default class Common extends React.Component {

    render() {
        return (
            <div>
                <Row className="simple-page">
                {/* //因为头部不一样,所以定义 menuType变量,选择来加载什么header */}
                    <Header menuType="second" />
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}