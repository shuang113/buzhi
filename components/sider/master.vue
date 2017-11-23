<template>
    <div class="sider-master" >
        <div class="title"><img src="~assets/images/crown.png">批改达人</div>
        <ul class="content">
            <li v-for="(item,index) in masterList" :key="index" v-if="index < 8">
                <nuxt-link :to="`/user/${item.uid}`">{{item.name}}<i> {{item.clickNum}}点评量</i></nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
import {STATUS_OK, getCorrectMaster} from "~/plugins/api"
export default {
    data () {
        return {
            masterList:[]
        }
    },
    methods: {
        _getCorrectMaster(){
            // 获取考试倒计时信息
            getCorrectMaster().then(res=>{
                this.masterList = res.data
            })
        }
    },
    created () {
      this._getCorrectMaster()
    }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
@import "~assets/style/mixin.less";
.sider-master {
    .sider-item;
    .title{
        padding: 5px 0 20px 0;
    }
    img {
      vertical-align: middle;
      position: relative;
      top: -3px;
      margin-right: 3px;
    }
  .content {
    padding-left: 12px;
    padding-right: 12px;
    li {
        position: relative;
        margin-bottom: 14px;
        font-size: 14px;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        a{
            display: block;
            color: @color-blue-l;            
            &:hover{
                font-weight:bold;
                i{
                    font-weight: bold;
                }
            }
            i{
                position: absolute;
                right: 10px;
                top: 0;
                color: @color-gray;
            }
        }
    }
  }
}
</style>