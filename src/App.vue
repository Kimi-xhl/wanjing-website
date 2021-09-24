<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
}
body,
html {
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  // min-width: 1080px;
  // min-height: 1000px;
}
* {
  margin: 0;
  padding: 0;
}

a {
	color:#575757;
	text-decoration:none;
	cursor:pointer;
}
a:hover {
	text-decoration:none;
}
</style>
