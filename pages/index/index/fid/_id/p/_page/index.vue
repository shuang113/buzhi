<template>
    <div class="container clearfix">
        <div class="ask-content">
            <!--社区首页内容 板块选择-->
            <bz-forum></bz-forum>
            <!-- 广告 -->
            <bz-forum-ad/>
            <!--社区首页内容 帖子列表-->
            <bz-listview :datalist="datalist" :isTabMenu="isTabMenu" @goto="gotoIndex"></bz-listview>
        </div>
        <!-- 右侧栏 -->
        <bz-rightside></bz-rightside>
    </div>
</template>
<script>
import axios from "axios"
import BzForum from "~/components/common/forum"
import BzForumAd from "~/components/common/forum/ad"
import BzListview from "~/components/common/listview"
import BzRightside from "~/components/common/right-side"
import {STATUS_OK, getForumList, getUserInfo} from "~/plugins/api"
export default {
  head() {
    return {
      title: `${this.headTitle} - 步知公考社区 - 最具品质的公务员考试论坛`
    }
  },
  async asyncData({ params, error }) {
    return axios
      .all([ getForumList({ fid: params.id || "0", p: params.page || 1 })])
      .then(
        axios.spread(function(applist) {
          return {
            datalist: applist.data,
            fid: params.id || "0"
          };
        })
      )
      .catch(error => console.log(error))
  },
  data() {
    return {
      userinfo: {},      //用户信息
      datalist:{},      //全部帖子列表数据
      isTabMenu:true,    //listview是否有tab菜单
      headTitle:""
    }
  },
  components: {
    BzForum,
    BzForumAd,
    BzListview,
    BzRightside
  },
  methods: {
    _getUserInfo() {
      // 获取userinfo信息
      getUserInfo().then(res=>{
        this.userinfo = res.data
      })
    },
    gotoIndex(index){
      this.$router.push({path:'/index/index/fid/'+this.fid+'/p/'+index})
    }
  },
  created() {
    this.$nextTick(() => {
      this._getUserInfo()
    })
  },
  // mounted () {
  //   if(this.$refs.forumItem){
  //       this.headTitle = String(this.$refs.forumItem.querySelector('.active').innerText) 
  //   }
  // }
};
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
@import 'https://at.alicdn.com/t/font_447799_2v7ocrx22pytlnmi.css';
.ask-wrapper{
  background: #edf0f5;
  padding-bottom: 40px;
  margin-top:20px;
}
.ask-content {
  float: left;
  width: 730px;
  min-height: 200px;
  .hd-block {
    margin-bottom: 20px;
    border: @border-w solid @color-gray-bd;
    border-radius: @border-w*2;
    background: @color-white;
  }
  .adv-bar {
    max-height: 80px;
    margin-bottom: 20px;
    text-align: center;
    img {
      height: 100%;
    }
  }
}
.content-hd {
  position: relative;
  height: 96px;
  padding-left: 108px;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
    border-right: @border-w solid @color-gray-bd;
    height: 100%;
    line-height: 96px;
    font-size: 18px;
    font-weight: bold;
    color: @color-gray;
    text-align: center;
  }
  .module-row {
    padding-left: 30px;
    li {
      float: left;
      width: 110px;
      margin-top: 12px;
      margin-right: 24px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 14px;
      span {
        display: block;
        height: 100%;
        color: @color-gray;
        border: @border-w solid #c1d6e8;
        background: #e9f4fd;
        border-radius: @border-w*2;
        cursor: pointer;
      }
      &.active span,
      &:hover span {
        color: @color-white;
        border-color: @color-blue;
        background: @color-blue-l;
      }
    }
  }
}
.ask-side {
  float: right;
  width: 250px;
}

</style>