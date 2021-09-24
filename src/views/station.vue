<template>
<div id="news">
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
    <div class="main">
        
        <p class="title" style="margin-top: 119px; margin-bottom: 70px">
            园区介绍
        </p>
        <div class="news"> 
            <div class="news_item"  v-for="(item,index) in newsList" :key="index">
                <div class="news_main">
                    <img :src="item.img" alt="newsImg">
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                    <span class="look">{{item.look}}</span>
                </div>
                <div class="news_sub" >
                    <img :src="item.subNews.img" alt="newsImg">
                    <p class="title">{{item.subNews.title}}</p>
                    <p class="text">{{item.subNews.text}}</p>
                </div>
            </div>
        </div>
        <p class="title" style="margin-top: 119px; margin-bottom: 70px">
            园区优势
        </p>
        <div class="news"> 
            <div class="news_item"  v-for="(item,index) in newsList" :key="index">
                <div class="news_main">
                    <img :src="item.img" alt="newsImg">
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                    <span class="look">{{item.look}}</span>
                </div>
                <div class="news_sub" >
                    <img :src="item.subNews.img" alt="newsImg">
                    <p class="title">{{item.subNews.title}}</p>
                    <p class="text">{{item.subNews.text}}</p>
                </div>
            </div>
        </div>
        <p class="title" style="margin-top: 119px; margin-bottom: 70px">
            优惠政策
        </p>
        <div class="news"> 
            <div class="news_item"  v-for="(item,index) in newsList" :key="index">
                <div class="news_main">
                    <img :src="item.img" alt="newsImg">
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                    <span class="look">{{item.look}}</span>
                </div>
                <div class="news_sub" >
                    <img :src="item.subNews.img" alt="newsImg">
                    <p class="title">{{item.subNews.title}}</p>
                    <p class="text">{{item.subNews.text}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    swiper,
    swiperSlide
} from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
    components: {
        swiper,
        swiperSlide,
    },
    data() {
        return {
            newsList: [{
                    img: require("../assets/img/news/new1.png"),
                    title: "文章标题",
                    text: "把数据库的部分卡巴工具包括技术不断改进山东河北古巴哈苏的干部撒比德好的飞机还的规划局势的话剧规范化北京时代科技干部和艰苦撒旦发表格哈吧不是的空间嘎",
                    look: "214213",
                    subNews: {
                        img: require("../assets/img/news/new_sub_1.png"),
                        title: "文章标题",
                        text: "把数据库的部分卡巴工具包括技术不断改进山",
                    },
                },
            ],
            newsList2: [{
                    img: require("../assets/img/news/new1.png"),
                    title: "文章标题",
                    text: "把数据库的部分卡巴工具包括技术不断改进山东河北古巴哈苏的干部撒比德好的飞机还的规划局势的话剧规范化北京时代科技干部和艰苦撒旦发表格哈吧不是的空间嘎",
                    look: "214213",
                    subNews: {
                        img: require("../assets/img/news/new_sub_1.png"),
                        title: "文章标题",
                        text: "把数据库的部分卡巴工具包括技术不断改进山",
                    },
                },
            ],
            newsList3: [{
                    img: require("../assets/img/news/new1.png"),
                    title: "文章标题",
                    text: "把数据库的部分卡巴工具包括技术不断改进山东河北古巴哈苏的干部撒比德好的飞机还的规划局势的话剧规范化北京时代科技干部和艰苦撒旦发表格哈吧不是的空间嘎",
                    look: "214213",
                    subNews: {
                        img: require("../assets/img/news/new_sub_1.png"),
                        title: "文章标题",
                        text: "把数据库的部分卡巴工具包括技术不断改进山",
                    },
                },
            ],
      
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
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
    },
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log("this is current swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, false);
        new this.$wow.WOW().init();
    },
    methods: {},
};
</script>

<style lang="less" scoped>

.news {
    display: flex;
    flex-direction: column;
    .news_item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;
        .news_main{
            width: 1123px;
            height: 532px;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
            position: relative;

            img{
                width: 1095px;
                height: 294px;
                margin: 18px 14px 44px 14px;
            }
            .title{
                font-size: 22px;
                margin-bottom: 34px;
                margin-left:54px ;
                font-weight: 600;
                letter-spacing: 1px;
            }
            .text{
                max-width: 814px;
                max-height: 95px;
                font-size: 16px;
                margin-left:54px ;
                letter-spacing: 2px;
                color: #626657;
            }
            .look{
                font-size: 16px;
                position: absolute;
                bottom: 10px;
                right: 25px;
                color: #E48A8A;
                opacity: 0.5;
                letter-spacing: 1px;
            }
        }
        .news_sub{
            width: 571px;
            height: 532px;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);

            img{
                width: 553px;
                height: 383px;
                margin: 18px 9px 29px 9px;
            }
            .title{
                font-size: 22px;
                margin-bottom: 29px;
                margin-left:21px ;
                font-weight: 600;
                letter-spacing: 1px;
            }
            .text{
                max-width: 368px;
                max-height: 26px;
                font-size: 16px;
                margin-left:21px ;
                letter-spacing: 2px;
                color: #626657;
            }
        }
    }
}

.platform {
    display: flex;
    justify-content: space-between;

    .platform_item {
        img {
            width: 847px;
            height: 532px;
            box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
            border-radius: 15px;
        }
    }
}

//轮播

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

#news{
    background-color: #f9f9f9;
}

.main {
    padding-left: 106px;
    padding-right: 88px;

    .title {
        font-size: 42px;
    }
}
</style>
