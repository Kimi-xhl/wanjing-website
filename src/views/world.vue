<template>
<div id="test">
    <img style="width: 192 0px" src="../assets/img/banner/banner7.png" alt="" @click="clickBanner" />
    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 267px; margin-bottom: 198px">
        开店注册，一对一协助入驻
    </p>
    <div class="stack-wrapper" style="margin-bottom:96.4px">
        <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>

 

    <div ref="brand" class="userImage" @click="scrollClick($event)" style="margin:0 155px">
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

    <div class="financial" style="margin-bottom:237.2px">
        <div class="financial_Logo" @click="financial_scrollClick($event)">
            <vue-seamless-scroll  ref="Finan_seamless" :data="financial_stepList" :class-option="financialOption">
                <ul class="financialAllWrapper">
                    <li v-for="(item,index) in financial_stepList" :key="'s'+index">
                        <img :src="item" alt="" :data-index="index" />
                    </li>
                </ul>
            </vue-seamless-scroll>
        </div>

        <div class="stack-wrapper" style="">
            <stack-rotate ref="stack2" :pages="financialList" :stackinit="stackinit"></stack-rotate>
        </div>
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
            financial_stepList:[],
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
        financialOption(){
             return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 5, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
                autoPlay: true,
                openTouch: true,
            };
        }
    },
    created() {
        // for (let index = 0; index < 16; index++) {
        //     let imgUrl = require(`../assets/img/step_logo/${index+1}.png`)
        //     this.some_stepList.push(imgUrl)
        // }
    },
    mounted() {
        for (let index = 0; index < 18; index++) {
            let imgUrl = require(`../assets/img/step_financial_logo/${index+1}.png`)
            this.financial_stepList.push(imgUrl)
        }
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
                title: "ALIEXPERSS",
                text: `全球速卖通 AliExpress 是中国最大的跨境出口B2C平台，同时也是在俄罗斯、西班牙排名第一的电商网站。全球速卖通是阿里巴巴集团旗下电商业务之一，致力于服务全球中小创业者出海，让天下没有难做的跨境生意，快速连接全球超过200个国家和地区的消费者，为全球消费者带去一种崭新生活方式。`    ,
                color: "linear-gradient(135deg, #f7971d 0%,#e43225 100%) ",
            },
            {
                img: require("../assets/static/4.png"),
                title: "AMAZON",
                text: `亚马逊坚持“以客户为中心”的理念,秉承“天天低价,正品行货”信念,销售图书、电脑、数码家电、母婴百货、服饰箱包等上千万种产品。`,
                color: "#FF9900 ",
            },
            {
                img: require("../assets/static/5.png"),
                title: "CDISCOUNT",
                text: `Cdiscount是法国本土排名第一的电商平台，成立于1998年，隶属于Casino集团，包含3C数码，家居，园艺，户外，娱乐等全品类商品的销售。支持自发货和平台自有海外仓，一站式管理您的欧洲物流，是抢占欧洲市场的不二之选。`,
                color: "#E23A05 ",
            },
            {
                img: require("../assets/static/6.png"),
                title: "EBAY",
                text: `eBay是全球商务的领军者，eBay连接全球数以亿计的买家与卖家，通过互联商务为他们创造更多的机会。eBay于1995年创立于加州硅谷，是全球最大、最具活力的交易平台之一，为用户提供高性价比的精选物品。`,
                color: "#86B817",
            },
            {
                img: require("../assets/static/7.png"),
                title: "MAGENTO",
                text: ` Magento易于与第三方应用系统无缝集成。其面向企业级应用，可处理各方面的需求，以及建设一个多种用途和适用面的电子商务网站。 包括购物、航运、产品评论等等，充分利用开源的特性，提供代码库的开发，非常规范的标准，易于与第三方应用系统无缝集成。`,
                color: "linear-gradient(135deg, #fab37c 0%,#f37b20 100%)",
            },
            {
                img: require("../assets/static/8.png"),
                title: "PRESTSHOP",
                text: `PrestaShop是免费的电子商务购物车软件。免费下载，免费使用，不用担心哪天有人跑过来告诉你们未经授权非法使用来索要赔偿，也可以抛弃那些昂贵的商业软件，使成本大大降低。`,
                color: "#A5DBE8",
            },
            {
                img: require("../assets/static/9.png"),
                title: "RAKUTEN",
                text: `乐天旗下欧洲最大电商平台。作为一个没有任何自营商品的平台，法国乐天给所有卖家100%的支持。`,
                color: "#BF0000",
            },
            {
                img: require("../assets/static/10.png"),
                title: "SHOPIFY",
                text: `全球著名的电商类SaaS平台，赋能于来自约175个国家的60多万家中小商户、大型零售贸易企业及全球知名品牌！`,
                color: "linear-gradient(135deg, #8DB849 0%,#5A863E 100%)",
            },
            {
                img: require("../assets/static/11.png"),
                title: "WISH",
                text: `规则易懂，放款不难，大卖亲身案例助你单量上升一个新台阶`,
                color: "#2FB7EC",
            },
            {
                img: require("../assets/static/12.png"),
                title: "WOO",
                text: `这是全球最受欢迎的 电子商务解决方案！所有数据由您完全掌控，今天就开始尝试吧！WooCommerce 电子商务系统已超过上亿次下载。优质免费及付费 WooCommerce 商店主题，让您做出任何想要的漂亮网站。`,
                color: "#9B5C8F",
            },
            {
                img: require("../assets/static/13.png"),
                title: "有赞",
                text: `有赞帮助每一位重视产品和服务的商家成功,目前旗下拥有：有赞微商城、有赞零售、有赞连锁、有赞教育、有赞小程序等SaaS产品,适用全行业多场景,帮商家网上开店、社交营销、直播卖货、管理会员。`,
                color: "#EE0000",
            },
            {
                img: require("../assets/static/14.png"),
                title: "2C SHOP",
                text: `2Cshop专注于为跨境商家提供B2C自建站服务，针对跨境电商遇到的网站运营难、企业获客难、管理操作难、买家体验差等难题，2Cshop全力突破。网站围绕转化高、客户粘性高、运费设置灵活三大方向，独具匠心的设置网站功能，让企业运营不再难。`,
                color: "#065E9C",
            },
            {
                img: require("../assets/static/15.png"),
                title: "UEESHOP",
                text: `Ueeshop为跨境电商零售卖家及外贸出口企业提供快速自主建站服务，Ueeshop通过多持续地升级，已累积丰富的产品插件，能满足不同用户对系统的需求。系统已链接上下游的合作伙伴，包括市场主流的营销平台、支付企业、ERP系统等，帮助用户快速建站并实现闭环运营`,
                color: "#0EB085",
            },
            {
                img: require("../assets/static/16.png"),
                title: "SHOPPLAZZA",
                text: `SHOPLINE 致力于帮助中国卖家搭建高转化跨境店铺,30分钟极速建站,多行业精美模板灵活选择,全程1对1指导,产品不断更新...`,
                color: "#101939",
            },
        ];
        this.financialList = [{
                img: require("../assets/img/financial_logo/1.png"),
                title: "PINGPONG",
                text: ` PingPong为中国跨境电商卖家提供更快、更便捷、更安全的跨境收款服务，支持亚马逊（北美站、日本站、欧洲站、澳洲站） 、Wish及Newegg等多平台一键跨境收款，极速到账。PingPong推出“光年”，支持出账收款，助力卖家转快一倍，赚多一倍。`,
                color: "#2995D4",
            },
            {
                img: require("../assets/img/financial_logo/2.png"),
                title: "CARDPAY",
                text: `现已在全球拥有14个办事处及300多名员工，并已协助全球成千上万的企业与数以百万的客户进行交易，增加收入并提高转化率。简易的统一渠道与本地支付生态系统接轨，简化企业迈向国际业务。其一体化插件为商家提供数以千计可供选择的支付方式，轻松整合到商家的网上商店或移动APP中。`,
                color: "#00B700",
            },
            {
                img: require("../assets/img/financial_logo/3.png"),
                title: "空中云汇",
                text: `Airwallex 是一家构建数字化的全球金融基础设施，提供智能、无缝的跨境支付解决方案的金融科技公司，业务范围包括跨境交易中的收款、付款和多货币换汇，服务包括跨境电商、在线旅游、物流、教育与留学、金融机构、数字营销、线上娱乐等领域客户。`,
                color: "linear-gradient(135deg, #E25A47 0%,#EA8645 100%);",
            },
            {
                img: require("../assets/img/financial_logo/4.png"),
                title: "首信易支付",
                text: `首信易支付自1999 年3月开始运行，是中国首家实现跨银行跨地域提供多种银行卡在线交易的网上支付服务平台，现支持全国范围23家银行及全球范围4种国际信用卡在线支付，拥有千余家大中型企事业单位、政府机关、社会团体组成的庞大客户群。`,
                color: "linear-gradient(135deg, #E25A47 0%,#EA8645 100%);",
            },
            {
                img: require("../assets/img/financial_logo/5.png"),
                title: "CHECKOUT.COM",
                text: `Checkout.com成立迄今8年，已为众多世界领先企业提供支付解决方案。。Checkout.com的专利技术能够为企业客户提供无缝、可靠的全球支付处理服务。让企业直接获取横跨多种支付方式和不同地域的本土收单能力，提供数据分析，欺诈管理工具以及综合报告功能，帮助企业客户高效交易和管控。`,
                color: "#0D1045",
            },
            {
                img: require("../assets/img/financial_logo/6.png"),
                title: "光子易",
                text: `光子易以客户为中心，以提升客户收款安全为己任，以服务降低客户交易成本和缩短收款周期为目标。光子易服务的卖家客户分布在亚马逊，eBay等各个平台至今累计服务超过2w名，客户好评率超过99%，累计安全结汇金额超10亿元。`,
                color: "linear-gradient(135deg, #F4B315 0%,#F6D35C 100%);",
            },
            {
                img: require("../assets/img/financial_logo/7.png"),
                title: "钱海",
                text: `Oceanpayment钱海2.0，让支付变得更加安全便捷 顺应全球支付数字化大潮，紧跟行业和产业链发展需求，Oceanpayment钱海品牌升级为“全球数字支付方案服务商”，致力于为跨境外贸、旅游航空、数字游戏、教育培训等互联网B2C(B)商业模式提供全球数字支付技术解决方案和服务。`,
                color: "#02983B",
            },
            {
                img: require("../assets/img/financial_logo/8.png"),
                title: "EBANX",
                text: `EBANX是一家拥有拉丁美洲DNA的全球金融科技公司。 该公司成立于2012年，在跨境电子商务交易流程中提供端到端支付解决方案，为渴望在全世界扩展的全球商家提供100多种拉丁美洲本地支付选项。 EBANX已帮助500多家商家扩展到拉丁美洲，超过4000万拉丁美洲人获得了全球服务和产品。`,
                color: "linear-gradient(135deg, #0EA1DB 0%,#0D4B86 100%);",
            },
            {
                img: require("../assets/img/financial_logo/9.png"),
                title: "GLCASH",
                text: `Glocash成立于2017年，Glocash致力于让海外支付更安全、让跨境收款更便捷、让出海贸易覆盖全球，立志打造安全、便捷、覆盖全球的创新型在线聚合支付服务商！`,
                color: "linear-gradient(135deg, #1388C8 0%,#4EB681 100%);",
            },
            {
                img: require("../assets/img/financial_logo/10.png"),
                title: "AFFIRM",
                text: `Affirm Holdings的解决方案建立在信任和透明的基础上，使消费者更容易以负责任的态度和自信地消费，使商人更容易转换销售和增长，并使商业更容易繁荣。传统的付款方式，，具有欺骗性和限制性的。 它们不适用于日益增长的数字和移动优先商务，Affirm Holdings就是为了帮助消费者和商家打破这些消费桎梏。`,
                color: "#00A2F1",
            },
            {
                img: require("../assets/img/financial_logo/11.png"),
                title: "INGENICO",
                text: `Ingenico集团30多年来一直引领着支付行业，成为全球无缝支付领域的领导者。我们提供智能、可信和安全的解决方案。
如今，有了我们的产品和服务，商家可以接受任何支付方式，从信用卡到其他支付方式，无论是在店内、在线还是移动，让消费者拥有无缝的支付体验。`,
                color: "#CD0005",
            },
            {
                img: require("../assets/img/financial_logo/12.png"),
                title: "stripe",
                text: `Stripe是由20多岁的两兄弟Patrick Collison和John Collison创办的Stripe为公司提供网上支付的解决方案。`,
                color: "#6772E5",
            },
            {
                img: require("../assets/img/financial_logo/13.png"),
                title: "POCCUPINE",
                text: `Poccupine
Poccupine是倍受亚洲跨境电商商户追捧的国际贸易无边界结算支付网关，即时支付，安全便捷，能通过中国的本地银行轻松提现，解决外贸收款难题。Poccupine适用于包括电子商务（跨境电商零售行业）在内的各个行业跨境支付场景，例如，国外旅游与服务业、跨境游戏产业等。`,
                color: "#183995",
            },
            {
                img: require("../assets/img/financial_logo/14.png"),
                title: "D·LOCAL",
                text: `dLocal是专业提供拉丁美洲和其他亚太、中东和非洲新兴市场国家的大规模在线支付的全方位平台。超过450家全球电子商务零售商，SaaS公司，在线旅游服务机构和电商平台都依赖dLocal接受300多种与本地相关的付款方式。`,
                color: "#53188B",
            },
            {
                img: require("../assets/img/financial_logo/15.png"),
                title: "ASIABILL",
                text: `中国跨境支付知名品牌，业务涵盖国际信用卡收款、海外本地收款。`,
                color: "#144EA3",
            },
            {
                img: require("../assets/img/financial_logo/16.png"),
                title: "USEEPAY",
                text: `UseePay独立站收单费率1.5%起，专注国际信用卡、当地借记卡及钱包等本地化收单，精专欧美、东南亚支付。`,
                color: "#FF620F",
            },
            {
                img: require("../assets/img/financial_logo/17.png"),
                title: "PACYPAY",
                text: `PacyPay以提供更为完善的在线服务体系为基础，以服务于整个电商产业生态链为目标。在满足各种业务需求的同时，始终坚持为用户提供最佳的服务体验，不断提升客户服务，立志于成为跨境综合服务的领导者。`,
                color: "#1756B2",
            },
            {
                img: require("../assets/img/financial_logo/18.png"),
                title: "WORLDPAY",
                text: `Worldpay是FIS旗下一家领先的全球支付技术公司，以其独特的优势赋能全渠道商务客户的全球整合。凭借行业领先的规模以及无与伦比的集成技术平台，Worldpay可以在全球范围内独立为客户提供全套综合的产品和服务体系。涵盖300多种付款类型，遍布全球146个国家，涉及126种交易货币。`,
                color: "#E8343D",
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
            if(e.target.dataset.index){
                this.$refs.stack.temporaryData.currentPage =  parseInt(e.target.dataset.index)

            }
        },
        financial_scrollClick(e){
            if(e.target.dataset.index){
                this.$refs.stack2.temporaryData.currentPage =  parseInt(e.target.dataset.index)
            }
        }
    },
};
</script>

<style lang="less" scoped>

.financial{
    display: flex;
    .financial_Logo{
        display: flex;
        height: 800px;
        overflow: hidden;
        margin-left: 136px;
    }
    .financialAllWrapper{
        display: flex;
        flex-direction: column;
        li{
            margin-top: 13.5px;
        }
    }
    img{
        width: 157.22px;
        height: 58.23px;
    }
}

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
