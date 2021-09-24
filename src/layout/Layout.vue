<template>
    <div class="layout">
        <header>
            <Header></Header>
        </header>
        <main><router-view /></main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script>
    import Header from './header'
    import Footer from './footer'
    export default {
        components:{
            Header,
            Footer
        }
    }
</script>

<style lang="less" scoped>
header{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    z-index: 9999;
}

</style>