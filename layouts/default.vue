<template>
  <div>
      <m-header/>
      <m-search/>
      <div class="ask-wrapper">
        <div class="container clearfix">
          <nuxt/>
        </div>
      </div>
      <m-footer/>
      <m-side-bar/>
  </div>
</template>
<script>
import MHeader from '~/components/m-header'
import MSearch from '~/components/m-search'
import MFooter from '~/components/m-footer'
import MSideBar from '~/components/m-sider/bar'
export default {
  components:{
    MHeader,
    MSearch,
    MFooter,
    MSideBar
  }
}
</script>

<style lang="less">
@import '~assets/style/base.less';
@import 'https://at.alicdn.com/t/font_447799_2v7ocrx22pytlnmi.css';
.ask-wrapper{
  background: #edf0f5;
  padding-bottom: 40px;
  .container{
    margin-top:20px;
  }
}
</style>
