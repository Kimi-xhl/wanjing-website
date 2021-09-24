<template>
<div>
    <div class="header">
        <svg-icon icon-class="logo" class-name="logo"></svg-icon>
        <div class="header_item" v-for="(item,index) in titleList" :key="index" @mouseover="ItemMouseover(index)" @mouseout="FlagIn = false">
            <p>{{item}}</p>
            <div class="header_subItem" :class="{'show':Flag == index&&FlagIn}">
                <p>{{subTitleTopList[index]}}</p>
                <p>{{item}}</p>
            </div>
        </div>
    </div>
    <div :class="{header_hover:true,show:FlagIn}" @mouseover="FlagIn = true" @mouseout="FlagIn = false">
        <div :class="{header_hover_item:true}" v-for="(item,index) in routerLink[Flag]" :key="index">
            <router-link :to="item.path">{{item.text}}</router-link>
        </div>
    </div>
</div>
</template>

<script>
import SvgIcon from "../../components/SvgIcon/index.vue";
export default {
    data() {
        return {
            Flag: 0,
            FlagIn: false,
            titleList: [
                "欢迎来访",
                "进军全国",
                "跨境服务",
                "自建站",
                "全球供应链",
                "智园中心",
            ],
            subTitleTopList: ['Welcome to visit',
                'Enter the world',
                'Cross-border Supply',
                'Self built station',
                'Global supply chain',
                'Zhiyuan Center'
            ],
            routerLink: [
                //1
                [{
                    text: '首页',
                    path: '/'
                }, {
                    text: '解决方案',
                    path: '#'
                }, {
                    text: '案例展示',
                    path: '#'
                }, {
                    text: '资源支持',
                    path: '#'
                }],
                //2
                [{
                    text: '首页',
                    path: '/world'
                }],
                //3
                [{
                    text: '首页',
                    path: '/form'
                }],
                //4
                [{
                    text: '首页',
                    path: '/station'
                }],
                //5
                [{
                    text: '首页',
                    path: '/news'
                }],
                //6
                [{
                    text: '首页',
                    path: '/about'
                }]
            ],

        };
    },
    methods: {
        ItemMouseover(index) {
            this.Flag = index
            this.FlagIn = true
        }
    },
};
</script>

<style lang="less" scoped>
.logo {
    width: 280px;
    height: 53.92px;
}

.header {
    height: 85px;
    width: 100%;
    display: flex;
    background-color: #C0C2B7;
    align-items: center;

}

.header_item {
    font-family: SourceHanSans;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 230px;
    height: 85px;
    font-size: 18px;
    position: relative;
}

.header_subItem {
    position: absolute;
    top: -85px;
    width: 230px;
    height: 85px;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s ease-in;

    p:nth-of-type(1) {
        font-size: 18px;
        color: #626657;
    }

    p:nth-of-type(2) {
        font-size: 14px;
        color: #626657;
    }
}

.header_subItem.show {
    top: 0;
}

.header_hover {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 999;
    position: absolute;
    display: none;
}
.header_hover.show{
    display: flex;
    animation: show 0.6s 1;
}
.header_hover_item a{
    margin: 0px 35.5px;
}


@-webkit-keyframes show 
{
0% {opacity:0;}
100% {opacity:1;}
}
@-webkit-keyframes hide 
{
0% {opacity:1;}
100% {opacity:0;}
}

@font-face {
    font-family: SourceHanSans; //自定义字体名称
    src: url('../../assets/font/SourceHanSansCN-Regular.otf'); //注意引入正确位置
}
</style>
