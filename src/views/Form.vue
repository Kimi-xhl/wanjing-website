<template>
<div class="Register">
    <!-- 轮播图 -->
    <div class="recommendPage">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../assets/img/banner/banner4.png"></swiper-slide>
            <swiper-slide><img src="../assets/img/banner/banner5.png"></swiper-slide>
            <swiper-slide><img src="../assets/img/banner/banner6.png"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    <div class="form">
        <el-form ref="form" :model="form" >
            <p class="title">智园开店注册表</p>
            <span class="text">按要求填写并提交此表格是成为智园跨境电商店家的第一步，请根据题目要求认真填写。我们将认真对待每一份报名资料，并组职专业</span>
            <span class="text">的团队进行评估，一旦入选，我们将第一时间与您联络。</span>
            <br>
            <span class="text">请务必按照真实情况填写入驻表，智园将帮助您进行初审及平台递交，初审无论是否通过我们都将告知您结果，符合平台入驻要求的入</span>
            <span class="text">驻表我们将转交至平台进行进一步审核与入驻。本表单仅供审核使用，请您放心填写。</span>
            <br>
            <span class="text">我们也将严格保密每一份报名资料，同时，我们承诺将秉承公平、公正、公开的原则，开展本次跨境商家入驻计划。</span>
            <p class="Cline">&nbsp;&nbsp;&nbsp;．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．． ．．．．．．．．．．．． ．．．．．．．．</p>
            <div class="Flag_bg">基本信息</div>

            <el-form-item label="姓名:" style="margin-top:58px">
                <el-input v-model="form.name" placeholder="请填写真实姓名" style="width:450px"></el-input>
            </el-form-item>
            <el-form-item label="注册电话:" >
                <el-input v-model="form.phone" placeholder="请填写可实际联系电话号码" style="width:450px"></el-input>
            </el-form-item>
            <el-form-item label="验证码:" >
                <el-input v-model="form.code" placeholder="请输入验证码" style="width:241px"></el-input>
            </el-form-item>
            <el-form-item label="微信号:" >
                <el-input v-model="form.wechat_number" placeholder="请输入微信号" style="width:450px"></el-input>
            </el-form-item>
            <el-form-item label="城市:" >
                <el-input v-model="form.city" placeholder="请填写地级市的中文名称" style="width:450px"></el-input>
            </el-form-item>
            <el-form-item label="注册站点:" >
                <el-select v-model="form.register_site_id" placeholder="请选择著注册站点" style="width:450px">
                    <el-option label="北美" value="0"></el-option>
                    <el-option label="欧洲" value="1"></el-option>
                    <el-option label="日本" value="2"></el-option>
                    <el-option label="其他" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="法人姓名:" >
                <el-input v-model="form.legal_person_name" placeholder="请填写真实姓名" style="width:450px"></el-input>
            </el-form-item>
            <el-form-item label="注册公司名称:" >
                <el-input v-model="form.company_name" placeholder="请填写与营业执照一致的公司注册名称" style="width:700px"></el-input>
            </el-form-item>
            <el-form-item label="主营类目:" >
              <el-select v-model="form.main_business_id" placeholder="请选择公司主营类目" style="width:450px">
                    <el-option label="电器" value="0"></el-option>
                    <el-option label="服装" value="1"></el-option>
                    <el-option label="箱包" value="2"></el-option>
                    <el-option label="手饰" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否有跨境经验：" >
              <el-checkbox label="是" v-model="form.experience" true-label="1" false-label="0"></el-checkbox>
              <el-checkbox label="否" v-model="form.experience" true-label="0" false-label="1"></el-checkbox>
            </el-form-item>
            <el-form-item label="发货方式:" >
              <el-select v-model="form.deilvery_method_id" placeholder="请选择发货方式  " style="width:450px">
                    <el-option label="FBI" value="0"></el-option>
                    <el-option label="自发货" value="1"></el-option>
                    <el-option label="FBI + 自发货" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公司类型:" >
              <el-select v-model="form.company_type" placeholder="请选择发货方式  " style="width:450px">
                    <el-option label="自有工厂" value="0"></el-option>
                    <el-option label="贸易商" value="1"></el-option>
                    <el-option label="贸易商 + 自有工厂" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌性质:" >
              <el-select v-model="form.brand_type" placeholder="请选择发货方式  " style="width:450px">
                    <el-option label="授权经销商" value="0"></el-option>
                    <el-option label="品牌所有者" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否有工厂（或合作工厂）认证：" >
              <el-checkbox label="是" v-model="form.hasFactoryCertification" true-label="1" false-label="0"></el-checkbox>
              <el-checkbox label="否" v-model="form.hasFactoryCertification" true-label="0" false-label="1"></el-checkbox>
            </el-form-item>
            <el-form-item label="是否有产品（或合作工厂产品）认证：" >
              <el-checkbox label="是" v-model="form.hasBrandCertification" true-label="1" false-label="0"></el-checkbox>
              <el-checkbox label="否" v-model="form.hasBrandCertification" true-label="0" false-label="1"></el-checkbox>
            </el-form-item>
            <el-form-item label="其他您希望入住的平台:" >
              <el-select v-model="form.otherPlatform"  style="width:450px">
                    <el-option label="Shopee" value="0"></el-option>
                    <el-option label="Lazada" value="1"></el-option>
                    <el-option label="Ebay" value="2"></el-option>
                    <el-option label="Wish" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">提交表单</el-button>
        </el-form>
    </div>
</div>
</template>

<script>

import Vue from 'vue';
import {
    Form,
    FormItem,
    Input,
    Checkbox,
    Select,
    Option,
    Button
} from 'element-ui'
import {
    swiper,
    swiperSlide
} from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)


export default {
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                code: '',
                wechat_number: '',
                city: '',
                register_site_id: '',
                legal_person_name:'',
                company_name:'',
                main_business_id:'',
                experience:'',
                deilvery_method_id:'',
                company_type:'',
                brand_type:'',
                hasFactoryCertification:'',
                hasBrandCertification:'',
                otherPlatform:'',

            },

            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                // 显示分页
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true //允许分页点击跳转
                },
                // 设置点击箭头
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log("this is current swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, false);
        new this.$wow.WOW().init()

    },
    methods: {
      onSubmit() {
        
      }
    },
};
</script>

<style lang="less" scoped>
.Cline {
    position: absolute;
    color: #707070;
    width: 1200px;
    left: 0;
    top: 420px;
}

.Register {
    background-color: #F9F9F9;
}

.recommendPage .swiper-container {
    position: relative;
    width: 100%;
    height: 878px;
    background-color: pink;
}

.recommendPage .swiper-container .swiper-slide {
    width: 100%;
    line-height: 200px;
    color: #000;
    font-size: 16px;
    text-align: center;
}

.form {
    display: flex;
    width: 100%;
    justify-content: center;
}

.el-form {
    padding-left: 68px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 2260px;
    position: relative;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .5);

    .title {
        font-size: 46px;
        color: #626657;
        margin-top: 89px;
        margin-bottom: 47px;
    }

    .text {
        font-size: 18px;
        color: #818A31;
        font-weight: 600;
        line-height: 28px;
    }

    .Flag_bg {
        margin-top: 102px;
        background-image: url("../assets/img/Flag.png");
        display: flex;
        padding-left: 57px;
        box-sizing: border-box;
        align-items: center;
        width: 221.77px;
        height: 53px;
        font-size: 18px;
        color: #fff;
    }

    /deep/.el-form-item__label {
        padding-left: 20px;
        text-align: left;
        font-size: 21px;
        letter-spacing: 2px;
        display: flex;
        min-width: 130px;
    }
    .el-button{
      background-color: #818A31;
      width: 290px;
      height: 79px;
      transform: translate(140%,120%);

    }
}
.el-form-item{
  margin-top: 25px;
  input{
    height: 50px !important;
  }
}
</style>
