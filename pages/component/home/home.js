// pages/component/home/home.js.js
var app = getApp();

Component({

    /* 开启全局样式设置 */
    options: {
        addGlobalClass: true,
    },

    /**
     * 组件的属性列表
     */
    properties: {
        name:{
            type:String,
            value:'首页'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        click1:function(){
            console.log("click1");
            wx.navigateTo({
              url: '/pages/everyday_exercise/everyday_exercise',
            })
        },
        click2:function(){
            console.log("click2")
            wx.navigateTo({
              url: '/pages/everyday_project/everyday_project',
            })
        }

    },
    
})