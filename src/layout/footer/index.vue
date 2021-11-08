<template>
    <div class="footer" >
        <div class="content">
            <img src="../../assets/img/footer_Logo.png" alt="">
            <p>全国统一服务热线：400-822-9969</p>
            <p>邮箱：jingdan@wonwhale.com</p>
            <p>公司地址：深圳市福田区滨河大道5020号同心大厦23层</p>
        </div>
        <p class="footer_text">
          Copyright © 2019 - 2020 深圳市万鲸科技有限公司 |<svg-icon icon-class="police"></svg-icon> <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备20008713号</a>  | <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402003757" target="_blank">粤公网安备 44030402003757号</a>
        </p>
    </div>
</template>

<script>
    export default {
        mounted () {
            new  this.$wow.WOW().init() ;
        },
    }
</script>

<style lang="less" scoped>
.footer{
    height: 513px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C0C2B7;
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            text-align: center;
            margin-bottom: 10px;
            color: #fff;
        }
        p:nth-of-type(1){
            margin-top: 22px;
        }
    }
}
.footer_text{
    position: absolute;
    bottom: 10px;
    text-align: center;
    color: #fff;
    a{
      color: #fff;
    }
}
</style>
