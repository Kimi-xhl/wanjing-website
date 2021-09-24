<template>
<div id="about">
    <article>
        <p class="titlt">{{article.title}}</p>
        <p class="grayTips">{{article.grayTips}}</p>
        <p class="text" style="margin-top:76px">{{article.text1}}</p>
        <p class="imgTitle">{{article.imgTitle}}</p>
        <div class="img_group">
            <img src="#" alt="">
            <img src="#" alt="">
            <img src="#" alt="">
            <div class="more_img">+ 13 more</div>
        </div>
    
        
        <p class="text" v-for="(item,index) in article.textList" :key="index">
            {{item}} 
            <br>
            <br>
            <br>
            <br>
        </p>
    </article>
    <div class="other">
        <div class="other_art">
            <router-link to="#" class="chinese">其他文章</router-link>
            <router-link to="#" class="gray">How I survived the eastern heat</router-link>
            <router-link to="#" class="gray">Meditative places to go to in Nepal</router-link>
            <router-link to="#" class="more">See more</router-link>
            <router-link to="#" class="chinese">最新资讯</router-link>
            <router-link to="#" class="gray">Raza Shah</router-link>
            <router-link to="#" class="gray">Adam Smithee</router-link>
            <router-link to="#" class="gray">Jim Morris</router-link>
            <router-link to="#" class="more">See more</router-link>
        </div>
        <div class="other_ad">
            <template  v-for="(item,index) in adList">
                  <div class="ad_item" :key="index"></div>
                  <p class="text" >{{item.title}}</p>
            </template> 
          
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            adList:[{title:'广告'},{title:'广告'},{title:'广告'}],
            article: {
                title: '公司环境介绍',
                grayTips: '你从未去过的地方发现。',
                text1:'深圳北航大厦写字楼招商简介 深圳北航大厦 交捷 潜力巨大 深圳北航大厦坐落在深圳市高新区南区科技园**地带，紧邻深圳大学校园二期。东侧紧邻科苑南路以及地铁口，北面为科园路，西侧为学府路，南侧相邻滨海大道，周边交通条件、工作环境非常优越。',
                imgTitle:'我旅行的照片',
                textList:[`深圳北航新兴产业技术研究院（又名北京航空航天大学深圳研究院），成立于2010年11月，是由深圳市政府与北京航空航天大学合作共建直属于北京航空航天大学的二级事业单位。研究院依托北航独特的学术地位、科技资源和师资力量，紧紧围绕国家粤港澳大湾区和中国特色社会主义先行示范区“双区驱动”的重大战略机遇，立足区域产业规划重点方向，以“以促进科技创新及成果转化、培养高级管理人才、培育新型创新载体、延揽国际高端创新人才、孵化科技创业企业”为五大着力点，以服务区域经济建设和学科建设为使命，努力成为服务北航“双一流”建设和区域经济发展的重要力量。`,
                `7月26日，北航与深圳市人民政府共同组建“深圳北航新兴产业技术研究院” 框架合作协议签字仪式在深圳举行。深圳市市委书记王荣和北航党委书记杜玉波分别致辞，深圳市市长许勤和怀进鹏校长分别代表深圳市人民政府和北京航空航天大学签署协议。签约仪式由深圳市人民政府袁宝成副市长主持，深圳市政府秘书长李平以及科工贸信委、发改委、财政委、规划国土委和编办等部门负责同志出席，副校长王建中，校长助理、党政办主任程基伟以及深圳新兴产业技术研究院筹备工作组成员，深圳校友代表出席了签约仪式`,
                `深圳市市委书记王荣在致辞中表示，北航是国际国内知名学府之一，具有鲜明的航空航天特色和突出的工程技术优势，为我国航空航天事业发展和国民经济建设培养了大批人才，取得了大批具有重大影响的科技成果。深圳在新一轮发展中将着力加强核心技术自主创新，十分欢迎像北航这样有较强科研实力的高校参与到深圳的经济和科技发展中来，不断加强合作，实现互利双赢、携手并进。双方此次合作，不仅有利于发挥北航在信息网络、航空航天、电子、医疗器械等领域优势，促进相关学科做大做强，也将积极推动深圳加快转变经济发展方式、构建具有国际竞争力的现代产业体系。深圳市委市政府将切实履行协议内容，为北航在深圳发展提供优质服务。`,
                `北航党委书记杜玉波在致辞中指出，北航历来重视和深圳的合作，此次将以协议签署为起点，抓住深圳大特区时代新一轮发展机遇，紧密结合深圳经济发展和战略性新兴产业，推进科技研发、成果转化、人才培养三位一体的深度合作，把北航取得重大科研成果的优势转化为有效带动深圳区域产业创新的现实生产力，为深圳发展作出实质性贡献。`,
                `为全面落实学校第十五次党代会提出的实施产学研结合战略，更好地服务区域经济发展， 2010年1月，北航研究决定筹建先进工业技术研究院，并在深圳、广州等地筹建设立新兴产业技术研究院，成立了筹备工作领导小组和筹备工作组。半年多来，学校多次召开研究院筹备工作研讨会，积极推进筹备论证和实施工作。期间，杜玉波书记、怀进鹏校长以及王建中副校长等先后率队五次前往深圳，与深圳市领导及科工贸信委、发改委、规划委领导进行会谈沟通，并实地考察了深圳虚拟大学园、高新开发区、大学城以及部分合作企业。深圳市许勤市长及科工贸信委领导、合作企业负责人也多次来校考察，双方就建院事宜及落地实施项目进行了多次沟通交流，确定了深圳北航新兴产业技术研究院的建设思路与方案。`,
                `深圳北航新兴产业技术研究院将瞄准国家新兴产业重点发展方向，面向深圳区域产业共性技术，着眼企业重大技术需求，聚焦北航国家级成果的集成转化，引领重点领域技术创新研究，培养企业高端工程技术人才，孵化高新技术企业，培育具有战略优势的新兴产业，打造面向新兴产业的国际水准的高技术创新和高端人才培养基地。合作协议的签署，必将加快推进学校与深圳市的战略合作，为创新型国家建设做出积极的贡献。`]

            }
        }
    },
}
</script>

<style lang="less" scoped>
#about {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
}

article {
    width: 1400px;
    height: 1960px;
    background-color: #fff;
    box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.5);
    margin-left: 80px;
    box-sizing: border-box;
    padding-top: 61px;
    padding-left: 120px;
    padding-right: 86.3px;
    .titlt{
        font-size: 50px;
        margin-bottom: 162.3px;
    }
    .grayTips{
        font-size: 22px;
        color: #A4A4A4;
        letter-spacing: 1px;
        max-width: 187px;
        font-weight: 550;
    }
    .text{
        font-size: 16px;
        letter-spacing: 1px;
        color: #231F20;
    }
    .imgTitle{
        margin-top: 58px;
        font-size: 27px;
        
    }
    .img_group{
        margin-top: 82px;
        display: flex;
        margin-bottom: 74.6px;
        img{
            width: 255px;
            height: 251px;
            box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.3);
            margin-right: 61px;
        }
        //?
        .more_img{
            width: 255px;
            height: 251px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
            letter-spacing: -1px;
            font-size: 27px;
            color: #BEBEBE;
            background-color: #F0F0F0;
        }
    }
}
.other{
    box-sizing: border-box;
    width: 360px;
    height: 2241px;
    box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.5);
    padding-right: 52px;
    padding-left: 53px;
    padding-top: 298px;
    .other_art{
        display: flex;
        flex-direction: column;
        position: relative;
        a{
            font-size: 22px;
            margin-bottom: 41px;
            text-align: right;
        }
        .gray{
            color: #A4A4A4;
        }
        .more{
            color: #CB0202;
            font-size: 20px;
            margin-bottom: 93px;
        }
        .chinese{
            font-size: 20px;
        }
    }
    .other_ad{
        display: flex;
        flex-direction: column;
        .ad_item{
            width: 255px;
            height: 251px;
            box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.3);
            background-color: #fff;
        }
        .text{
            margin-top: 25px;
            margin-bottom: 46px;
            text-align: center;
        }
    }
}

</style>
