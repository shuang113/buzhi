<template>
  <section>
      <bz-header/>
      <bz-search/>
      <div class="ask-wrapper">
        <nuxt/>
      </div>
      <bz-footer/>
      <bz-side-bar/>
  </section>
</template>
<script>
import BzHeader from '~/components/common/header'
import BzSearch from '~/components/common/search'
import BzFooter from '~/components/common/footer'
import BzSideBar from '~/components/sider/bar'
export default {
  components:{
    BzHeader,
    BzSearch,
    BzFooter,
    BzSideBar
  }
}
</script>

<style lang="less">
@import '~assets/style/base.less';
@import 'https://at.alicdn.com/t/font_447799_2v7ocrx22pytlnmi.css';
.ask-wrapper{
  background: #edf0f5;
  padding-bottom: 40px;
  margin-top:20px;
}
</style>
