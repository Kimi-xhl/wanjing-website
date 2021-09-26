<template>
<div id="test">
    <img style="width: 192 0px" src="../assets/img/banner/banner7.png" alt="" @click="clickBanner" />
    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 267px; margin-bottom: 198px">
        开店注册，一对一协助入驻
    </p>
    <div class="stack-wrapper" style="margin-bottom:96.4px">
        <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>

 

    <div ref="brand" class="userImage" @click="scrollClick($event)">
        <vue-seamless-scroll  ref="seamless" :data="some_stepList" :class-option="defaultOption">
            <ul class="userImageAllWrapper">
                <li v-for="(item, index) in some_stepList" :key="'a' + index">
                    <img :src="item" alt="" :data-index="index" />
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>

    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 228.5px; margin-bottom: 166px">
        跨境金融服务    
    </p>

    <div class="stack-wrapper" style="">
        <stack-rotate ref="stack2" :pages="financialList" :stackinit="stackinit"></stack-rotate>
    </div>
    <!-- <div class="controls">c
      <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
      <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
    </div> -->
</div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import stackRotate from "../components/stackRotate.vue";
import stack from "../components/stack";

export default {
    components: {
        stack,
        stackRotate,
        vueSeamlessScroll,
    },
    data() {
        return {
            someList: [],
            some_stepList: [
                require("../assets/img/step_logo/1.png"),
                require("../assets/img/step_logo/2.png"),
                require("../assets/img/step_logo/3.png"),
                require("../assets/img/step_logo/4.png"),
                require("../assets/img/step_logo/5.png"),
                require("../assets/img/step_logo/6.png"),
                require("../assets/img/step_logo/7.png"),
                require("../assets/img/step_logo/8.png"),
                require("../assets/img/step_logo/9.png"),
                require("../assets/img/step_logo/10.png"),
                require("../assets/img/step_logo/11.png"),
                require("../assets/img/step_logo/12.png"),
                require("../assets/img/step_logo/13.png"),
                require("../assets/img/step_logo/14.png"),
                require("../assets/img/step_logo/15.png"),

                require("../assets/img/step_logo/16.png"),

            ],
            stackinit: {
                visible: 3,
            },
            financialList: [],
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
        defaultOption() {
            return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 5, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 2, // 0向下 1向上 2向左 3向右
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
                autoPlay: true,
                openTouch: true,
            };
        },
    },
    created() {
        // for (let index = 0; index < 16; index++) {
        //     let imgUrl = require(`../assets/img/step_logo/${index+1}.png`)
        //     this.some_stepList.push(imgUrl)
        // }
    },
    mounted() {
        this.someList = [{
                img: require("../assets/static/1.png"),
                title: "LAZADA",
                text: "Lazada于2012年3月推出，是东南亚首屈一指的网上购物平台，中文名为来赞达 平台用户超过 3 亿个SKU，主要经营3C电子、家居用品、玩具、时尚服饰、运动器材等产品Lazada主要目标市场是东南亚6国，成立不到7年的时间就一跃成为东南亚最大的电子商务平台",
                color: "linear-gradient(135deg, #f48400 0%,#fe09ec 100%);",
            },
            {
                img: require("../assets/static/2.png"),
                title: "JOOM",
                text: `Joom平台是俄罗斯知名的电商平台，成立于2016年6月份。成立之后即爆发式发展，成为全球发展速度最快的电商平台，平台定位为移动端购物平台。目标市场主要针对俄罗斯境内。成立当年11月份，joom平台对中国卖家开放，之后更是进入高速发展阶段，成为中国跨境卖家热衷的平台之一。`,
                color: "#3D3F56",
            },
            {
                img: require("../assets/static/3.png"),
                title: "AliExpress",
                text: ``,
                color: "linear-gradient(135deg, #f7971d 0%,#e43225 100%) ",
            },
            {
                img: require("../assets/static/4.png"),
                title: "amazon",
                text: ``,
                color: "#FF9900 ",
            },
            {
                img: require("../assets/static/5.png"),
                title: "Cdiscount",
                text: ``,
                color: "#E23A05 ",
            },
            {
                img: require("../assets/static/6.png"),
                title: "ebay",
                text: ``,
                color: "#86B817",
            },
            {
                img: require("../assets/static/7.png"),
                title: "Magento",
                text: ``,
                color: "linear-gradient(135deg, #fab37c 0%,#f37b20 100%)",
            },
            {
                img: require("../assets/static/8.png"),
                title: "PRESTSHOP",
                text: ``,
                color: "#A5DBE8",
            },
            {
                img: require("../assets/static/9.png"),
                title: "Rakuten",
                text: ``,
                color: "#BF0000",
            },
            {
                img: require("../assets/static/10.png"),
                title: "shopify",
                text: ``,
                color: "linear-gradient(135deg, #8DB849 0%,#5A863E 100%)",
            },
            {
                img: require("../assets/static/11.png"),
                title: "wish",
                text: ``,
                color: "#2FB7EC",
            },
            {
                img: require("../assets/static/12.png"),
                title: "Woo",
                text: ``,
                color: "#9B5C8F",
            },
            {
                img: require("../assets/static/13.png"),
                title: "有赞",
                text: ``,
                color: "#EE0000",
            },
            {
                img: require("../assets/static/14.png"),
                title: "2Cshop",
                text: ``,
                color: "#065E9C",
            },
            {
                img: require("../assets/static/15.png"),
                title: "UEESHOP",
                text: ``,
                color: "#0EB085",
            },
            {
                img: require("../assets/static/16.png"),
                title: "SHOPPLAZZA",
                text: ``,
                color: "#101939",
            },
        ];
        this.financialList = [{
                img: require("../assets/img/financial_logo/1.png"),
                title: "pingpong",
                text: ` PingPong为中国跨境电商卖家提供更快、更便捷、更安全的跨境收款服务，支持亚马逊（北美站、日本站、欧洲站、澳洲站） 、Wish及Newegg等多平台一键跨境收款，极速到账。PingPong推出“光年”，支持出账收款，助力卖家转快一倍，赚多一倍。`,
                color: "#2995D4",
            },
            {
                img: require("../assets/img/financial_logo/2.png"),
                title: "cardpay",
                text: ``,
                color: "#00B700",
            },
            {
                img: require("../assets/img/financial_logo/3.png"),
                title: "Airwallex",
                text: ``,
                color: "linear-gradient(135deg, #E25A47 0%,#EA8645 100%);",
            },
            {
                img: require("../assets/img/financial_logo/4.png"),
                title: "首信易支付",
                text: ``,
                color: "linear-gradient(135deg, #E25A47 0%,#EA8645 100%);",
            },
            {
                img: require("../assets/img/financial_logo/5.png"),
                title: "checkout",
                text: ``,
                color: "#0D1045",
            },
            {
                img: require("../assets/img/financial_logo/6.png"),
                title: "光子易",
                text: ``,
                color: "linear-gradient(135deg, #F4B315 0%,#F6D35C 100%);",
            },
            {
                img: require("../assets/img/financial_logo/7.png"),
                title: "钱海",
                text: ``,
                color: "#02983B",
            },
            {
                img: require("../assets/img/financial_logo/8.png"),
                title: "GLCASH",
                text: ``,
                color: "linear-gradient(135deg, #1388C8 0%,#4EB681 100%);",
            },
            {
                img: require("../assets/img/financial_logo/9.png"),
                title: "affirm",
                text: ``,
                color: "#00A2F1",
            },
            {
                img: require("../assets/img/financial_logo/10.png"),
                title: "ingenico",
                text: ``,
                color: "#CD0005",
            },
            {
                img: require("../assets/img/financial_logo/11.png"),
                title: "stripe",
                text: ``,
                color: "#6772E5",
            },
        ];
        new this.$wow.WOW().init();
        this.$refs.seamless.reset()
    },

    methods: {
        clickBanner() {
            this.$router.push("./form");
        },
        test(val) {
            console.log(val);
        },
        prev() {
            this.$refs.stack.$emit("prev");
        },
        next() {
            this.$refs.stack.$emit("next");
        },
        scrollClick(e){
            console.log(e.target.dataset);
            console.log(this.$refs.stack.temporaryData.currentPage );
            this.$refs.stack.temporaryData.currentPage =  parseInt(e.target.dataset.index)
        }
    },
};
</script>

<style lang="less" scoped>
.userImage {
    overflow: hidden;
    height: 150px;

    .userImageAllWrapper {
        list-style: none;
        display: flex;
    }

    &:last-child {
        margin-left: -40px;
    }

    li {
        margin-left: 20px;
        margin-bottom: 20px;
        padding: 10px 30px;

        img {
            display: flex;
        }
    }
}

.title {
    font-size: 42px;
    text-align: center;
}

#test {
    background-color: #f9f9f9;
    display: flex;
    width: 100%;
    flex-direction: column;
}

.stack-wrapper {
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 1310.49px;
    height: 706.11px;
    padding: 0;
    list-style: none;
    pointer-events: none;
}

.controls {
    position: relative;
    width: 200px;
    text-align: center;
    display: flex;
    /*Flex布局*/
    display: -webkit-flex;
    /* Safari */
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 50px;
}

.controls .button {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 50px;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    background: #fff;
}

.button .next {
    display: inline-block;
    width: 10px;
    height: 5px;
    background: rgb(129, 212, 125);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
}

.button .next:after {
    content: "/";
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(129, 212, 125);
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}

.button .prev {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
}

.button .prev:after {
    content: "/";
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    -webkit-transform: rotate(-90deg);
}

.controls .text-hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
    display: block;
}
</style>
