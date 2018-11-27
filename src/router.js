import React from 'react'
import {HashRouter ,Route,LinK} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Models from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Nomatch from './pages/nomatch';
import Notice from './pages/ui/notice';
import Message from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common.js'
import OrderDetail from './pages/order/detail'
import User from './pages/user/index'
import { Switch } from '../node_modules/antd';

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            {/* <Switch> */}
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Models}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/city" component={City}></Route>
                                <Route path="/admin/order" component={Order}></Route>
                                <Route path="/admin/user" component={User}></Route>
                               
                                <Route component={Nomatch}/>
                            {/* </Switch> */}
                        </Admin>
                       
                    }/>
                    <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>
                        }
                    />
                </App>
            </HashRouter>   
        )
    }
}