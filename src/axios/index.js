import JsonP from 'jsonp'
import axios from 'axios';
import Utils from '../utils/utils'
import {Modal} from "antd"

export default class Axios{
    //表格数据的封装
    static requestList(_this,url,params,isMock){
        var data = {
            params:params,
            isMock
        }
        this.ajax({
            url,
            data
        }).then((data)=>{
            if(data){
                let list = data.result.item_list.map((item, index) => {
                    item.key = index;
                    return item;
                });
                _this.setState({
                    list,
                    pagination: Utils.pagination(data, (current) => {
                        _this.params.page = current;
                        _this.requestList();
                    })
                })
            }
        })
    }
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                // if (response.status == 'success') {
                //     resolve(response);
                // } else {
                //     reject(response.messsage);
                // }
            })
        })
    }
    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi='';
        if(options.isMock){
            baseApi = 'https://www.easy-mock.com/mock/5be0273fa23fd93f0f65783c/mockapi';  
        }else{
            baseApi = 'https://www.easy-mock.com/mock/5be0273fa23fd93f0f65783c/mockapi';  
        }
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                // 控制加载动画
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status == '200'){
                    let res = response.data;
                    console.log(res.code);
                    if (res.code == '0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        })
    }
}