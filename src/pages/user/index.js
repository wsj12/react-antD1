import React from 'react'
import { Card, Button, Table, Form, Input, Checkbox,Select,Radio, Icon, message, Modal, DatePicker } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'
import BaseForm from './../../components/Baseform'
import ETable from './../../components/ETable'
// const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioGroup = Radio.Group;
export default class User extends React.Component{
    params={
        page:1
    }
    state={}
   
    formList = [
        {
            type:'INPUT',
            label:'用户名',
            field:'user_name',
            placeholder:'请输入用户名',
            width:80,
        },
        {
            type:'INPUT',
            label:'手机号',
            field:'user_mobile',
            placeholder:'请输入用户手机号',
            width:80,
        },

        {
            type:'DATE',
            label:'请输入入职时间',
            field:'user_date',
            placeholder:'请输入日期',
           
        }
    ]
    componentDidMount(){
        this.requestList();
    }
    handleFilter = (params)=>{
        this.params = params;
        this.requestList();
    }
    requestList = ()=>{
        axios.requestList(this,'/user/list',this.params)
    }
    
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '婚姻状态',
                dataIndex: 'isMarried',
            },
            {
                title: '生日',
                dataIndex: 'birthday',
            },
            {
                title: '联系地址',
                dataIndex: 'address',
            },
            {
                title: '早起时间',
                dataIndex: 'time',
            }
        ]
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                <ETable
                    updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                    columns={columns}
                    dataSource={this.state.selectedRowKeys}
                    selectedItem={this.state.selectedItem}
                    pagination={this.state.pagination}
                />
                </div>

                {/* <Card style={{marginTop:10}}>
                    <Button type="primary" icon="plus" onClick={()=>this.handleOperator('create')}>创建员工</Button>
                    <Button icon="edit" onClick={()=>this.handleOperator('edit')}>编辑员工</Button>
                    <Button onClick={()=>this.handleOperator('detail')}>员工详情</Button>
                    <Button type="danger" icon="delete" onClick={()=>this.handleOperator('delete')}>删除员工</Button>
                </Card> */}
                    
                
            </div>
        ) 
    }
}
// UserForm = Form.create({})(UserForm);