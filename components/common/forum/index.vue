<template>
<div class="hd-block content-hd">
    <div class="header">版块</div>
    <ul class="module-row clearfix">
        <li v-for="(item,index) in forumlist" 
        :key="index" 
        v-if="index < 8" 
        :class="{active:item.id == fid}">
        <span @click="selectForum(item.id,item.title)">{{item.title}}</span>
        </li>
    </ul>
</div>
</template>
<script>
import axios from "axios"
import {STATUS_OK, getForumCate} from "~/plugins/api"
import {mapGetters,mapState} from 'vuex'
export default {
    data () {
        return {
            forumlist:{},
            fid:this.$route.params.id || "0"
        }
    },
    methods: {
        _getForumCate(){
            getForumCate().then(res=>{
                this.forumlist = res.data
            })
        },
        // 点击版块
        selectForum(id,title) {
            if(id === "0" || id === 0){
                this.$router.push({path:'/'})
            }else{
                this.$router.push({path: `/forum/${id}`})        
            }
            //state 更新title
        }
    },
    created () {
      this._getForumCate()
    }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
@import "~assets/style/mixin.less";
.content-hd {
    .sider-item;
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
</style>