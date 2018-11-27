import React,{Component} from 'react';
import {Card,Button,Radio} from 'antd';
import './ui.less';
class Buttons extends Component{
  constructor(props){
      super(props);
      this.state={
          loading:true,
          size:'default'
      }
  }
  handleCloseLoading=()=>{
    this.setState({
        loading:false
    });
}
handleChange=(e)=>{
    this.setState({
        size:e.target.value
    });
}
  render(){
      return(
          <div>
              <Card title="基础按钮" className="card-wrap">
                  {/*主按钮*/}
                  <Button type="primary">Imooc</Button>
                  <Button>Imooc</Button>
                  {/* 虚线按钮 */}
                  <Button type="dashed">Imooc</Button>
                  {/* 危险按钮 */}
                  <Button type="danger">Imooc</Button>
                  {/* 禁用按钮 */}
                  <Button disabled>Imooc</Button>
              </Card>
              <Card title="图形按钮" className="card-wrap">
                  {/*通过icon设定图标,shape设置形状*/}
                  <Button icon="plus">创建</Button>
                  <Button icon="edit">编辑</Button>
                  <Button icon="delete">删除</Button>
                  <Button icon="search" shape="circle"></Button>
                  <Button type="primary" icon="search">搜索</Button>
                  <Button type="primary" icon="download">下载</Button>
              </Card>
              <Card title="Loading按钮" className="card-wrap">
                  {/*通过loading属性为{true}表示加载中图标(此时按钮不能点)*/}
                  <Button type="primary" loading={this.state.loading}>确定</Button>
                  <Button type="primary" shape="circle" loading={this.state.loading} ></Button>
                  <Button loading={this.state.loading} >点击加载</Button>
                  <Button shape="circle" loading={this.state.loading} ></Button>
                  <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
              </Card>
              <Card title="按钮组">
                  <Button.Group>
                      <Button type="primary" icon="left">返回</Button>
                      <Button type="primary" icon="right">前进</Button>
                  </Button.Group>
              </Card>
              <Card title="按钮尺寸" className="card-wrap">
                  <Radio.Group value={this.state.size} onChange={this.handleChange}>
                      <Radio value="small">小</Radio>
                      <Radio value="default">中</Radio>
                      <Radio value="large">大</Radio>
                  </Radio.Group>
                  <Button type="primary" size={this.state.size}>Imooc</Button>
                  <Button size={this.state.size}>Imooc</Button>
                  <Button type="dashed" size={this.state.size}>Imooc</Button>
                  <Button type="danger" size={this.state.size}>imooc</Button>
              </Card>
          </div>
      )
  }

}
export default Buttons;
