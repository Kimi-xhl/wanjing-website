<template>
  <div>
      <div class="list-srocll" @mouseover="mouseover($event)">
      <div
        v-for="(item, index) in some_stepList"
        :key="'t' + index"
        class="list-item"
      >
        <img :src="item" alt="">
      </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      some_stepList: [

      ],
    };
  },
  mounted () {
    this.some_stepList = [
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
      ]

  },
  methods: {
    mouseover(e) {
      console.log(e);
    }
  },
};
</script>

<style lang="less" scoped>
.list-style{
  display: flex;
}
.list-srocll{
  display: flex;
  overflow-x: scroll;
}
/deep/ .list-body{
  display: flex !important;
}
</style>