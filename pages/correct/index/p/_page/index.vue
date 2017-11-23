<template>
    <div class="container clearfix">
        <div class="correct">
            <div class="hd-correct">
                <img src="http://g.public.midasjoy.com/Public/discuss/v2/images/pgcard-ttt.png?v=20170805" alt="">
                <a href="/thread/255" target="_blank" class="correct-btn">批改规则&gt;</a>
            </div>
            <!-- 批改列表-->
            <bz-listview :datalist="datalist" :isTabMenu="isTabMenu" @goto="gotoIndex"></bz-listview>
        </div>
        <!-- 右侧栏 -->
        <div class="ask-side">
            <bz-course></bz-course>
            <bz-master></bz-master>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import BzListview from "~/components/common/listview"
import BzCourse from "~/components/sider/course"
import BzMaster from "~/components/sider/master"
import {STATUS_OK, getForumList, getCorrectList,getCorrectMaster} from "~/plugins/api"
export default {
  head(){
      return{
        title: "申论批改场 - 步知公考社区 - 最具品质的公务员考试综合论坛"
      }
  },
  async asyncData({ params, error }) {
    return axios
      .all([ getCorrectMaster(), getForumList({ fid: "0", p: 1 })])
      .then(
        axios.spread(function(master, applist) {
          return {
            masterlist: master.data,
            datalist: applist.data
          };
        })
      )
      .catch(error => console.log(error))
  },
  data () {
      return {
            isTabMenu:false,
            datalist:{}, 
            masterlist:{},
      }
  },
  components: {
      BzListview,
      BzCourse,
      BzMaster
  },
  methods: {
    gotoIndex(index){
      this.$router.push({path:'/correct/index/p/'+index})
    }
  }
}
</script>
<style lang="less" scoped>
@import "~assets/style/mixin.less";
.correct{
    float: left;
    width: 730px;
    min-height: 620px;
}
.hd-correct {
    position: relative;
    top: 5px;
    left: 0px;
    margin-top: -20px;
    .correct-btn {
        position: absolute;
        bottom: 40px;
        right: 110px;
        width: 116px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        border: 2px solid #c64446;
        background: #eb5255;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
    }
}
.ask-side {
  float: right;
  width: 250px;
}
</style>