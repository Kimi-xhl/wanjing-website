<template>
  <div>
     <div class="main">
            <div class="card"></div>
     </div>

    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
    <div class="controls">
      <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
      <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
    </div>
  </div>
</template>
<script>
import stack from '../components/stack'
export default {

  data () {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    }
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: '<img src="'+require('../assets/static/1.png') +'" @click="test(0)" alt="01">'
        },
        {
          html: '<img src="'+require('../assets/static/2.png') +'" alt="01">'
        }
      ]
    }, 100)
  },
  components: {
    stack
  },
  methods: {
    test(val){
        console.log(val);
    },
    prev () {
      this.$refs.stack.$emit('prev')
    },
    next () {
      this.$refs.stack.$emit('next')
    }
  }
}
</script>
<style>
  .stack-wrapper{
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 1310.49px;
    height: 706.11px;
    padding: 0;
    list-style: none;
    pointer-events: none;
  }
  .controls{
    position: relative;
    width: 200px;
    text-align: center;
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    justify-content:space-around;
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    border-radius: 50%;
    background: #fff;
  }
  .button .next{
    display: inline-block;
    width: 10px;
    height:5px;
    background: rgb(129,212,125);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
  }
  .button .next:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(129,212,125);
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
  }
  .button .prev{
    display: inline-block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
  }
  .button .prev:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
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
