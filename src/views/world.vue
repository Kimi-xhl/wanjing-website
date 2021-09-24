<template>
<div id="test">
    <img style="width:192 0px" src="../assets/img/banner/banner7.png" alt="" @click="clickBanner">
    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top:267px;margin-bottom:198px">开店注册，一对一协助入驻</p>
    <div class="stack-wrapper">
        <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
    <!-- <div class="controls">
      <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
      <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
    </div> -->
</div>
</template>

<script>
import stack from '../components/stack'
export default {

    data() {
        return {
            someList: [],
            stackinit: {
                visible: 3
            }
        }
    },
    mounted() {
        this.someList = [{
                img: require('../assets/static/2.png'),
                title: 'JOOM',
                text: `Joom平台是俄罗斯知名的电商平台，成立于2016年6月份。成立之后即爆发式发展，成为全球发展速度最快的电商平台，平台定位为移动端购物平台。目标市场主要针对俄罗斯境内。成立当年11月份，joom平台对中国卖家开放，之后更是进入高速发展阶段，成为中国跨境卖家热衷的平台之一。`,
                color: '#3D3F56'
            },
            {
                img: require('../assets/static/1.png'),
                title: 'LAZADA',
                text: 'Lazada于2012年3月推出，是东南亚首屈一指的网上购物平台，中文名为来赞达 平台用户超过 3 亿个SKU，主要经营3C电子、家居用品、玩具、时尚服饰、运动器材等产品Lazada主要目标市场是东南亚6国，成立不到7年的时间就一跃成为东南亚最大的电子商务平台',
                color: 'linear-gradient(135deg, #f48400 0%,#fe09ec 100%);'

            },
            {
                img: require('../assets/static/1.png'),
                title: 'JOOM',
                text: `Joom平台是俄罗斯知名的电商平台，成立于2016年6月份。成立之后即爆发式发展，成为全球发展速度最快的电商平台，平台定位为移动端购物平台。目标市场主要针对俄罗斯境内。成立当年11月份，joom平台对中国卖家开放，之后更是进入高速发展阶段，成为中国跨境卖家热衷的平台之一。`,
                color: '#3D3F56'
            },
        ]
        new this.$wow.WOW().init();

    },
    components: {
        stack
    },
    methods: {
        clickBanner(){
            this.$router.push('./form')
        },
        test(val) {
            console.log(val);
        },
        prev() {
            this.$refs.stack.$emit('prev')
        },
        next() {
            this.$refs.stack.$emit('next')
        }
    }
}
</script>

<style>
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
    margin-top: 50px
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
    content: '/';
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
    content: '/';
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
