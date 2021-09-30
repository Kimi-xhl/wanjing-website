<template>
<div class="home">
    <!-- 轮播图 -->
    <div class="recommendPage">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../assets/img/banner/banner1.png" /></swiper-slide>
            <swiper-slide><img src="../assets/img/banner/banner2.png" /></swiper-slide>
            <swiper-slide><img src="../assets/img/banner/banner3.png" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    <!-- 内容 -->
    <div class="content">
        <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 85px">
            软件适配，轻松启程
        </p>
        <!--  -->
        <div class="box" style="margin-top: 59px">
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s">
                <p class="title">网站自建 精准查询</p>
                <div class="line"></div>
                <p class="text">
                    自建站、直播、购物商城、ERP、CRM 服务引流、<br />分流，大数据分析，轻松出单
                </p>
            </div>
            <img src="../assets/img/img1.png" class="wow fadeInUp" data-wow-delay="0.3s" />
        </div>
        <!--  -->
        <div class="box" style="margin-top: 167px">
            <img src="../assets/img/img2.png" class="wow fadeInUp" data-wow-delay="0.3s" />
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s" style="margin-left: 141px">
                <p class="title">客服查询 问题详解</p>
                <div class="line"></div>
                <p class="text">
                    本着诚，信，便，捷的宗旨满足您的需求，给您带<br />来最贴心的客服查询服务。
                </p>
            </div>
        </div>
        <!--  -->
        <div class="box" style="margin-top: 352px">
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s">
                <p class="title">企业孵化</p>
                <div class="line"></div>
                <p class="text">
                    扶持帮助投资企业成功走向市场，真正实现产业<br />化。
                </p>
            </div>
            <img src="../assets/img/img3.png" class="wow fadeInUp" data-wow-delay="0.3s" style="margin-left: 231px" />
        </div>
        <!--  -->
        <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 329px">
            硬件调配，加速流量转化
        </p>
        <!--  -->
        <div class="box" style="margin-top: 167px">
            <img src="../assets/img/img4.png" class="wow fadeInUp" data-wow-delay="0.3s" />
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s" style="margin-left: 141px">
                <p class="title">全球货品服务供应链</p>
                <div class="line"></div>
                <p class="text">全球性货品商品供应链，仓储完善，货品充足。</p>
            </div>
        </div>
        <!--  -->
        <div class="box" style="margin-top: 275.4px">
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s" style="margin-right: 30px">
                <p class="title">跨国物流 境内物流</p>
                <div class="line"></div>
                <p class="text">
                    聚全球资源，联通数百国家，畅行无阻，高效出<br />库，快速运输。
                </p>
            </div>
            <img src="../assets/img/img5.png" class="wow fadeInUp" data-wow-delay="0.3s" style="position: relative; left: 200px" />
        </div>
        <!--  -->
        <div class="box" style="margin-top: 321px">
            <img src="../assets/img/img6.png" class="wow fadeInUp" data-wow-delay="0.3s" />
            <div class="content_text wow fadeInUp" data-wow-delay="0.3s" style="margin-left: 400px">
                <p class="title">企业帮扶</p>
                <div class="line"></div>
                <p class="text">企业融资，垫资，跨境支付，回款</p>
            </div>
        </div>
        <!--  -->
        <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 314px">
            全面便捷，科学标准
        </p>
        <div class="box" style="margin-top: 254px">
            <div class="steamBox wow fadeInLeft" data-wow-delay="0.3s">
                <img src="../assets/img/img7.png" alt="" />
                <p>全流程</p>
                <p>
                    提供订单、物流、商品、客服、采<br />购等服务，帮助跨境卖家实现一站<br />式、跨平台、多店铺的管理。
                </p>
            </div>
            <div class="steamBox wow fadeInLeft" data-wow-delay="0.3s">
                <img src="../assets/img/img8.png" alt="" />
                <p>覆盖面广</p>
                <p>
                    覆盖用户达17万＋，联通60多个主<br />流平台，对接1000多家高速物流。<br />全方位满足卖家需求。
                </p>
            </div>
            <div class="steamBox wow fadeInRight" data-wow-delay="0.3s">
                <img src="../assets/img/img9.png" alt="" />
                <p>精准化运营</p>
                <p>
                    大数据多维度分析产品热卖程度：<br />爆款、平款;votobo爆款工<br />具，1688厂家直销采购。
                </p>
            </div>
            <div class="steamBox wow fadeInRight" data-wow-delay="0.3s">
                <img src="../assets/img/img10.png" alt="" />
                <p>科学管理</p>
                <p>
                    智能仓储系统，周到客服服务，最<br />优物流匹配，致力于打造更高效的<br />管理方法和解决方案。
                </p>
            </div>
        </div>
    </div>
    <div class="recommendPage2">
        <swiper :options="Option" ref="mySwiper">
            <swiper-slide>
                <div class="content">
                    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 314px">
                        管理UPUP
                    </p>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.1s">
                            <img src="../assets/img/icons/icon1.png" alt="" />
                            <p>在线租决</p>
                            <p>
                                监控租赁状况、出租速度、未来到期等数据，结合收入目标精细测算不同方案的预计结果，完成科学租赁决策。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.15s">
                            <img src="../assets/img/icons/icon2.png" alt="" />
                            <p>合同模板</p>
                            <p>
                                自定义可配置的合同标准模板，实现合同条款自动填充、在线修改条款内容和展示修改记录，一键打印含水印的合同文本等。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.2s">
                            <img src="../assets/img/icons/icon3.png" alt="" />
                            <p>线索跟踪</p>
                            <p>
                                录入所有带看客户及渠道信息，实现录入所有带看客户及渠道信息，实现数据沉淀可用于分析和二次营销。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.25s">
                            <img src="../assets/img/icons/icon4.png" alt="" />
                            <p>智能租约</p>
                            <p>
                                账期时间、金额、应收日、滞纳金等自动计算，合同即将到期智能提醒,解决手工计算周期长、易出错等问题。
                            </p>
                        </div>
                    </div>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.3s">
                            <img src="../assets/img/icons/icon5.png" alt="" />
                            <p>渠道结佣</p>
                            <p>
                                根据佣金政策自动计算合同净价及结佣金额，支持阶梯佣金及分次结佣,自动生成账单，确保佣金准确计算和支付节奏。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.35s">
                            <img src="../assets/img/icons/icon6.png" alt="" />
                            <p>智能提醒</p>
                            <p>
                                合同到期、账单应收、账单逾期、物业报修、工单派单、仓库告警等丰富的事项，达到预警线即时触发提醒。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.40s">
                            <img src="../assets/img/icons/icon7.png" alt="" />
                            <p>剖面图</p>
                            <p>
                                替代传统销控图，实时查看每个房间选、搜索、拖动时间轴查看未来销选、搜索、拖动时间轴查看未来销控。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.45s">
                            <img src="../assets/img/icons/icon8.png" alt="" />
                            <p>平面图</p>
                            <p>
                                按照园区、楼栋、楼层配套直观的平面图，通过平面图查看空铺、带看、合同到期、欠款等经营状况的位置分布。
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 314px">
                        工具UPUP
                    </p>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.1s">
                            <img src="../assets/img/icons/icon2.png" alt="" />
                            <p>电子签章</p>
                            <p>
                                结合电子签章系统，可使系统出具的催缴函、收据等文件自带具有法律效应的印章，高效省时省力。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.15s">
                            <img src="../assets/img/icons/icon9.png" alt="" />
                            <p>短信/邮件平台</p>
                            <p>
                                系统的待办、待阅消息可通过短信、电子邮箱、PC端、软件移动端、微信小程序等多种渠道下发。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.2s">
                            <img src="../assets/img/icons/icon10.png" alt="" />
                            <p>电子发票</p>
                            <p>
                                打通第三方电子发票平台，一键出具电子发票并发送至客户邮箱，降低财务工作负责，提高财务工作效率。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.25s">
                            <img src="../assets/img/icons/icon11.png" alt="" />
                            <p>loT平台</p>
                            <p>
                                接入门禁、道闸、停车、监控、消防等各类设备，打造万物互联的楼宇及园区，在线监控、分析及优化调密
                            </p>
                        </div>
                    </div>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.3s">
                            <img src="../assets/img/icons/icon12.png" alt="" />
                            <p>支付平台</p>
                            <p>
                                根据实际需求，对接第四方聚合支付方案，让各类楼宇收费缴费无感灵活，小类目杂费数据直连系统提高效率。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.35s">
                            <img src="../assets/img/icons/icon13.png" alt="" />
                            <p>企业信息平台</p>
                            <p>
                                通过租户的统一社会信用代码，自动获取工商信息、经营及融资等信息数据，企业经营风险实时提醒，租户背景调查快速准确。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.40s">
                            <img src="../assets/img/icons/icon14.png" alt="" />
                            <p>业财一体化</p>
                            <p>
                                业务数据自动对接到财务系统，直接生成财务凭证可以联查业务数据，业务数据也可以联查财务凭证。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.45s">
                            <img src="../assets/img/icons/icon15.png" alt="" />
                            <p>控税一体化</p>
                            <p>
                                基于企业经营过程中的真实支付交易信息,结合系统开票方案实现“交易即开票”。消费小票和电子发票同步完成
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 314px">
                        服务UPUP
                    </p>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.1s">
                            <img src="../assets/img/icons/icon16.png" alt="" />
                            <p>访客预约</p>
                            <p>
                                支持邀请访客和拜访公司两种模式,预约模板支持按项目自定义预约内预约模板支持按项目自定义预约内能。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.15s">
                            <img src="../assets/img/icons/icon17.png" alt="" />
                            <p>物业报修</p>
                            <p>
                                物业报修过程公开透明，评价机制监控服务质量，物业报修和投诉建议线上化处理，提高服务效率，保障服务品质。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.2s">
                            <img src="../assets/img/icons/icon18.png" alt="" />
                            <p>智慧停车</p>
                            <p>
                                支持公司车、个人车在线缴费，并自助开具电子发票，多种停车套餐可供配置、灵活的电子停车券申请和使用，临停车辆实现无感出库。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.25s">
                            <img src="../assets/img/icons/icon19.png" alt="" />
                            <p>园区活动</p>
                            <p>
                                支持运营团队为入驻企业员工提供各种活动，创造舒心的办公环境。
                            </p>
                        </div>
                    </div>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.3s">
                            <img src="../assets/img/icons/icon20.png" alt="" />
                            <p>智慧通行</p>
                            <p>
                                智慧班车解决方案支持多种模式，免费模式下租户员工打开园区微信公众号，扫码核实身份，反之收费模式自动扣除车费。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.35s">
                            <img src="../assets/img/icons/icon21.png" alt="" />
                            <p>企业信息平台</p>
                            <p>
                                会议室线上预订，任务状态与会议室门禁实时同步，会议室水牌实时更新预订信息，会议开始提醒、会议到期提醒。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.40s">
                            <img src="../assets/img/icons/icon22.png" alt="" />
                            <p>政策服务</p>
                            <p>
                                让企业发展更容易，严选人力、法律、财税等服务商，解决中小企业的发展问题，政企对接，帮助企业申请补贴。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.45s">
                            <img src="../assets/img/icons/icon23.png" alt="" />
                            <p>水电充值</p>
                            <p>
                                支持租户在线自助充值水电费并开具电子发票，支持租户在线查询能耗健用状况，系统主动预警租户水电账广余额。
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 314px">
                        安全UPUP
                    </p>
                    <div class="panelBox">
                        <div class="item wow fadeInUpBig" data-wow-delay="0.1s">
                            <img src="../assets/img/icons/icon24.png" alt="" />
                            <p>数据加密</p>
                            <p>
                                为用户可选提供加密存储服务,虚拟机服务则建议用户对重要数据信息在上传,存储前进行加密处理。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.15s">
                            <img src="../assets/img/icons/icon25.png" alt="" />
                            <p>访问鉴权</p>
                            <p>
                                设置虚拟机环境下的逻辑编辑安全访问控制策略,实现虚拟机-虚拟机组间的数据访问控制。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.2s">
                            <img src="../assets/img/icons/icon18.png" alt="" />
                            <p>操作留痕</p>
                            <p>
                                建立安全审计系统，进行统一、完善的审计分析，对操作、维护等各类日志的安全审计，提高对违规溯源的事后审查能力。
                            </p>
                        </div>
                        <div class="item wow fadeInUpBig" data-wow-delay="0.25s">
                            <img src="../assets/img/icons/icon19.png" alt="" />
                            <p>智能监控</p>
                            <p>
                                使用了Kubernetes进行了服务的部署动扩容及重启、灰度发布等微服务状动扩容及重启、灰度发布等微服务状态相关的管理。
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="content">
            <p class="title wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 202.5px">
                官方合作伙伴
            </p>
            <vue-seamless-scroll :data="brand" :class-option="defaultOption" :key="123" class="scroll_brand">
                <ul>
                    <li class="steam_brand" v-for="(item,index) in brand" :key="index">
                        <div class="title">
                            <span>{{item.title}}<br /></span>
                            <span>合作</span>
                            <div class="line" style="height: 7px"></div>
                        </div>
                        <div class="imgbox">
                            <img :src="item.src" alt="" />
                        </div>
                    </li>
                </ul>
            </vue-seamless-scroll>
        </div>
    </div>
</div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import {
    swiper,
    swiperSlide
} from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    components: {
        swiper,
        swiperSlide,
        vueSeamlessScroll,
    },
    data() {
        return {
            brand: [{
                title: '业务',
                src: require('../assets/img/brand1.png')

            }, {
                title: '流量',
                 src: require('../assets/img/brand2.png')


            }, {
                title: '支付',
                src: require('../assets/img/brand3.png')

            }, {
                title: 'ERP',
                src: require('../assets/img/brand4.png')
            }, {
                title: '物流',
                src: require('../assets/img/brand5.png')

            }, {
                title: '媒体',
                src: require('../assets/img/brand6.png')
            }],
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 显示分页
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                },
                // 设置点击箭头
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            Option: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
        defaultOption() {
            return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
                autoPlay: true,
                openTouch:true,
            };
        },
    },
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log("this is current swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, false);
        new this.$wow.WOW().init();
    },
};
</script>

<style lang="less" scoped>
.home {
    background-color: #f9f9f9;
}

.line {
    background-color: #ab904e;
    width: 130px;
    height: 4px;
}

.recommendPage2 {
    position: relative;
    width: 100%;
}

.recommendPage .swiper-container {
    position: relative;
    width: 100%;
    height: 878px;
}

.recommendPage .swiper-container .swiper-slide {
    width: 100%;
    line-height: 200px;
    color: #000;
    font-size: 16px;
    text-align: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .box {
        display: flex;
        justify-content: center;

        .content_text {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;

            .title {
                margin-bottom: 50px;
            }

            .line {
                margin-bottom: 39px;
            }

            .text {
                color: rgb(128, 131, 119);
                font-size: 22px;
            }
        }

        .steamBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 67px;

            p:nth-of-type(1) {
                text-align: center;
                margin-top: 51.8px;
                font-size: 32px;
                color: #626657;
            }

            p:nth-of-type(2) {
                color: #626657;
                font-size: 16px;
                margin-top: 63px;
                text-align: center;
            }
        }
    }

    .title {
        font-size: 42px;
    }
}

.content {
    .panelBox:nth-of-type(1) {
        margin-top: 135px;
    }

    .panelBox:nth-of-type(2) {
        margin-top: 85px;
    }
}

.panelBox {
    display: flex;
    position: relative;

    .item {
        box-shadow: 0 5px 15px -5px rgba(0  , 0, 0, 0.2);
        background-color: #fff;
        width: 280px;
        height: 290px;
        margin: 0 47px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        img {
            position: absolute;
            top: -16px;
        }

        p:nth-of-type(1) {
            font-size: 28px;
            color: #626657;
            position: relative;
            top: 127px;
        }

        p:nth-of-type(2) {
            top: 154px;
            font-size: 14px;
            color: #818478;
            position: relative;
            margin-bottom: 10px;
            line-height: 22px;
            width: 210px;
            height: 80px;
        }
    }
}

.steam_brand {
    display: flex;
    margin-bottom: 81px;

    >.title {
        margin-right: 170px;
    }
}

.scroll_brand {
    height: 656px;
    overflow: hidden;
    margin: 142px 0px
}
</style>
