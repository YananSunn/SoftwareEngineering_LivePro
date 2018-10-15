<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <Header>
                <header-bar/>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        content
                    </div>
                </Card>

                <ThumbsGalleryLoop></ThumbsGalleryLoop>
            </Content>

            
            <Footer class="layout-footer-center">2018 &copy; Team4.0</Footer>
        </Layout>
    </div>
</template>
<script>

    import HeaderBar from '@/components/HeaderBar.vue'
    import ThumbsGalleryLoop from '@/components/thumbs-gallery-loop.vue'
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"


    export default {
        components: {
            HeaderBar,
            ThumbsGalleryLoop
        }
    }
</script>
