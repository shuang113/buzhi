<template>
    <div class="hd-block content-bd">
        <!-- 社区首页内容 板块选择 -->
        <div class="bd-menu clearfix" v-if="isForum">
            <div class="menu-content">
                <span class="item" 
                :class="{active:currentIndex === index}"
                v-for="(item,index) in tabIndex"
                :key="index" 
                @click="selectItem(index,item.orderby)">{{item.title}}</span>
            </div>
            <div class="bd-submit">
                <a href="/user/send" class="button">发布新贴</a>
            </div>
        </div>
        <!-- 社区首页内容 帖子列表 -->
        <div class="bd-content">
          <div v-for="(item,index) in datalist">
            {{item.title}}
          </div>
            <div class="post-item">
                <div class="post-avatar">
                  <div class="avatar-img">
                      <img src="~static/images/default-avatar.png">
                      <div class="avatar-detail-loading" v-if="isLoading">
                        <img src="~assets/images/loading.gif">
                      </div>
                      <div class="avatar-detail" v-show="isShowUser" v-else="!isLoading">
                        <div class="avatar-detail-info clearfix">
                            <div class="big-avatar">
                            <a href="#"><img src="~static/images/default-avatar.png"></a>
                            <span class="score"><i class="detail-icon star-icon"></i>97</span>
                            </div>
                            <div class="info-desc">
                            <h3 class="name">天亮了黎明<img src="~assets/images/label-hmj.png" class="label"></h3>
                            <p class="desc">一生之中弯弯曲曲总会有靓丽的风景让我们学会珍惜</p>
                            <ul class="label-list clearfix" style="position: relative">
                                <li class="label-item">
                                <a href="#"><i class="medal medal-7day"></i></a>
                                </li>
                                <li class="label-item"><a href="#"><i class="medal medal-30day"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-60day"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-120day"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-100question"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-200question"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-300question"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-fan1"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-fan3"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-fan5"></i></a></li>
                                <li class="label-item"><a href="#"><i class="medal medal-sword"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        <div class="avatar-links">
                            <a href="#" class="link-item">
                            <h3 class="num">108</h3>
                            <p class="txt">发帖</p>
                            </a>
                            <i class="divider"></i>
                            <a href="#" class="link-item">
                            <h3 class="num">108</h3>
                            <p class="txt">回帖</p>
                            </a>
                            <i class="divider"></i>
                            <a href="#" class="link-item">
                            <h3 class="num">108</h3>
                            <p class="txt">赞同</p>
                            </a>
                        </div>
                      </div>
                  </div>

                </div>
                <div class="post-info">
                    <a class="title" href="#"><span class="post-tag post-tag-red">置顶</span><span class="post-tag post-tag-yellow">精华</span><span class="txt">连载·更新3月21日30天冲刺，你的申论必须这样学</span></a>
                    <p class="desc">1111111112017省考，申论多少分，进面的机会比较大?从往年的数据、省考上岸的情况看70分+比较靠谱—换个角度来讲只有申论70+，才有希望和可能上岸</p>
                    <p class="detail"><span class="author">申论·花木君<img src="~assets/images/label-teacher.png" class="label"></span><span class="time">24人赞同 · 78个回复 · 5152次浏览 · 53秒前</span></p>
                </div>
            </div>
            <div class="post-item">
                <div class="post-avatar">
                <div class="avatar-img">
                    <img src="~static/images/default-avatar.png">

                </div>
                </div>
                <div class="post-info">
                    <a class="title" href="#"><span class="post-tag post-tag-red">置顶</span><span class="post-tag post-tag-yellow">精华</span><span class="txt">连载·更新3月21日30天冲刺，你的申论必须这样学</span></a>
                    <p class="desc">2017省考，申论多少分，进面的机会比较大?从往年的数据、省考上岸的情况看70分+比较靠谱—换个角度来讲只有申论70+，才有希望和可能上岸</p>
                    <p class="detail"><span class="author">申论·花木君<img src="~assets/images/label-teacher.png" class="label"></span><span class="time">24人赞同 · 78个回复 · 5152次浏览 · 53秒前</span></p>
                </div>

            </div>
            <div class="post-item">
                <div class="post-avatar">
                <div class="avatar-img">
                    <img src="~static/images/default-avatar.png">
                </div>
                </div>
                <div class="post-info">
                    <a class="title" href="#"><span class="post-tag post-tag-yellow">精华</span><span class="txt">连载·更新3月21日30天冲刺，你的申论必须这样学</span></a>
                    <p class="desc">2017省考，申论多少分，进面的机会比较大?从往年的数据、省考上岸的情况看70分+比较靠谱—换个角度来讲只有申论70+，才有希望和可能上岸</p>
                    <p class="detail"><span class="author">申论·花木君<img src="~assets/images/label-officer.png" class="label"></span><span class="time">24人赞同 · 78个回复 · 5152次浏览 · 53秒前</span></p>
                </div>
            </div>
            <div class="post-item">
                <div class="post-avatar">
                <div class="avatar-img">
                    <img src="~static/images/default-avatar.png">
                    
                </div>
                </div>
                <div class="post-info">
                    <a class="title" href="#"><span class="txt">连载·更新3月21日30天冲刺，你的申论必须这样学</span></a>
                    <p class="desc">2017省考，申论多少分，进面的机会比较大?从往年的数据、省考上岸的情况看70分+比较靠谱—换个角度来讲只有申论70+，才有希望和可能上岸</p>
                    <p class="detail"><span class="author">申论·花木君<img src="~assets/images/label-hmj.png" class="label"><img src="~assets/images/label-ly.png" class="label"><img src="~assets/images/label-bc.png" class="label"><img src="~assets/images/label-pass.png" class="label"></span><span class="time">24人赞同 · 78个回复 · 5152次浏览 · 53秒前</span></p>
                </div>
            </div>
            <div class="post-item">
                <div class="post-avatar">
                <div class="avatar-img">
                    <img src="~static/images/default-avatar.png">
                </div>
                </div>
                <div class="post-info">
                    <a class="title" href="#"><span class="txt">连载·更新3月21日30天冲刺，你的申论必须这样学</span></a>
                    <p class="desc">2017省考，申论多少分，进面的机会比较大?从往年的数据、省考上岸的情况看70分+比较靠谱—换个角度来讲只有申论70+，才有希望和可能上岸</p>
                    <p class="detail"><span class="author">申论·花木君</span><span class="time">24人赞同 · 78个回复 · 5152次浏览 · 53秒前</span></p>
                </div>
            </div>
        </div>
        <!-- 社区首页内容 列表分页 -->
        <div class="pagelist">
            <div class="pagelist-center clearfix">
                <a href="#" class="pageitem" v-if="currentPage > 1">&lt;&lt;</a>
                <a href="#" class="pageitem" v-if="currentPage > 1">&lt;</a>
                <a href="#" class="pageitem" 
                  :class="{active:currentPage === index}"
                  v-for="(item,index) in pageSize" :key="index"
                  v-if="pageSize > 0 && index < pageSize-1">{{index+1}}</a>
                <a href="#" class="pageitem" v-if="currentPage < pageSize">&gt;</a>
                <a href="#" class="pageitem" v-if="pageSize > 0">{{pageSize}}</a>
            </div>
        </div>
    </div>

</template>
<script>
import {getForumList} from "~/plugins/api"
export default {
  data() {
    return {
        isLoading: true,
        isForum: true,
        tabIndex:[
            {"title":"全部","orderby":"all"},
            {"title":"精华","orderby":"top"},
            {"title":"最新","orderby":"time"},
            {"title":"我感兴趣的","orderby":"my"}
        ],
        currentIndex:0,
        currentPage:0,
        pageSize:0,
        datalist:[]
    }
  },
  methods: {
    selectItem(index,orderby){
      this.currentIndex=index
      // 根据orderby 加载数据
      this._getForumList(orderby)
    },
    _getForumList(orderby){
      getForumList({
        "fid":"5",
        "p":"1"
      }).then(res=>{
        debugger
        this.datalist = res.data.list
        this.pageSize = res.data.totalPage
        this.currentPage = res.data.page -1
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.content-bd {
  .bd-menu {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid @color-gray-bd;
    .menu-content {
      float: left;
      font-size: 0;
      height: 48px;
      line-height: 48px;
      .item {
        padding: 0 20px;
        font-size: 14px;
        color: @color-gray;
        position: relative;
        &.active,
        &:hover {
          color: @color-blue-ll;
        }
        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 17px;
          width: 1px;
          background-color: @color-gray-bd;
          font-size: 13px;
        }
        &:last-child:after {
          width: 0;
        }
      }
    }
    .bd-submit {
      float: right;
      .button {
        display: block;
        margin-right: 24px;
        margin-top: 7px;
        width: 106px;
        height: 30px;
        border: 2px solid @color-red;
        background: @color-red-l;
        text-align: center;
        line-height: 30px;
        color: @color-white;
        font-size: 14px;
        border-radius: 4px;
        &:hover {
          background-color: @color-red;
        }
      }
    }
  }
  .bd-content {
    padding: 0 20px 0;
    .post-item {
      padding-top: 20px !important;
      position: relative;
      padding-top: 11px;
      border-bottom: 1px solid @color-gray-bd;
      .post-avatar {
        position: absolute;
        top: 10px;
        left: 0;
        width: 50px;
      }
      .avatar-img {
        width: 38px;
        height: 38px;
        border: 1px solid @color-gray-bd;
        border-radius: 50%;
        overflow: hidden;
        > img {
          width: 38px;
          height: 38px;
          overflow: hidden;
        }
      }
    }
  }
  .post-info {
    padding-left: 50px;
    .title {
      margin-bottom: 5px;
      line-height: 18px;
      font-size: 15px;
      font-weight: bold;
      color: @color-theme;
      &:hover {
        color: @color-blue-l;
      }
      .post-tag {
        display: inline-block;
        margin-right: 10px;
        width: 28px;
        height: 14px;
        line-height: 14px;
        border: 1px solid transparent;
        border-radius: 4px;
        color: @color-white;
        font-size: 12px;
        text-align: center;
      }
      .post-tag-red {
        border-color: @color-red;
        background: @color-red-l;
      }
      .post-tag-yellow {
        border-color: @color-yellow;
        background: @color-yellow-l;
      }
    }
    .detail {
      margin-bottom: 20px !important;
      font-size: 14px;
      line-height: 18px;
      color: @color-gray-l;
      margin-bottom: 12px;
      .author {
        margin-right: 30px;
        img {
          vertical-align: sub;
          margin-left: 3px;
        }
      }
    }
    .desc {
      margin-bottom: 12px;
      font-size: 14px;
      color: @color-gray;
      line-height: 24px;
      margin-top: 5px;
    }
  }
}
.avatar-detail-loading {
  position: absolute;
  left: 0;
  top: 38px;
  padding: 40px 70px;
  border: 2px solid @color-gray-bd;
  border-radius: 4px;
  background: @color-white;
  z-index: 9;
}
.avatar-detail {
  position: absolute;
  width: 376px;
  height: 196px;
  border: 1px solid @color-gray-bd;
  border-radius: 4px;
  background: @color-white;
  z-index: 9;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  .avatar-detail-info {
    height: 130px;
    padding-top: 16px;
    .big-avatar {
      position: relative;
      float: left;
      width: 100px;
      margin: 0 28px;
      img {
        width: 96px;
        height: 96px;
        border: 2px solid @color-gray-bd;
        border-radius: 50%;
      }
      .score {
        bottom: -3px;
        position: absolute;
        left: 50%;
        margin-left: -23px;
        bottom: -10px;
        width: 42px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        border: 2px solid @color-red;
        background: @color-red-l;
        font-size: 10px;
        color: @color-white;
        border-radius: 7px;
      }
      .score-blue {
        background: @color-blue-l;
        border-color: @color-blue;
      }
      .detail-icon {
        display: inline-block;
        background: url(~assets/images/detail-icon.png) no-repeat;
      }
      .star-icon {
        width: 12px;
        height: 12px;
        background-position: 0 -90px;
        position: relative;
        top: 1px;
      }
    }
    .info-desc {
      float: left;
      width: 218px;
      .label-list {
        position: relative;
        .label-item {
          float: left;
          margin-bottom: 5px;
          height: 26px;
          width: 34px;
          line-height: 26px;
          text-align: center;
        }
      }
      .name {
        margin-bottom: 5px;
        line-height: 20px;
        height: 20px;
        color: @color-blue-l;
        font-size: 14px;
        font-weight: bold;
        img {
          width: 12px;
          height: 12px;
          vertical-align: middle;
          position: relative;
          top: -1px;
        }
      }
      .desc {
        margin-bottom: 8px;
        line-height: 16px;
        font-size: 12px;
        color: @color-gray-l;
      }
    }
  }
  .avatar-links {
    padding: 4px 0;
    height: 42px;
    line-height: 42px;
    .link-item {
      float: left;
      width: 78px;
      text-align: center;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 42px;
        background-color: @color-gray-bd;
        width: 2px;
      }
      &:last-child:after {
        width: 0;
      }
      .num {
        margin-top: 3px;
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 16px;
        color: @color-theme;
        font-weight: bold;
      }
      .txt {
        font-size: 14px;
        line-height: 14px;
        color: @color-gray-l;
      }
    }
  }
}
/*图标*/
.medal {
  display: block;
  background: url(~assets/images/icon.png) no-repeat;
}
.medal-7day {
  width: 24px;
  height: 26px;
}
.medal-30day {
  width: 24px;
  height: 26px;
  background-position: 0 -32px;
}
.medal-60day {
  width: 24px;
  height: 26px;
  background-position: 0 -64px;
}
.medal-120day {
  width: 24px;
  height: 26px;
  background-position: 0 -96px;
}
.medal-100question {
  width: 24px;
  height: 24px;
  background-position: -49px 0px;
}
.medal-200question {
  width: 24px;
  height: 24px;
  background-position: -49px -32px;
}
.medal-300question {
  width: 24px;
  height: 24px;
  background-position: -49px -64px;
}
.medal-fan1 {
  width: 24px;
  height: 22px;
  background-position: -98px 0px;
}
.medal-fan3 {
  width: 24px;
  height: 22px;
  background-position: -98px -32px;
}
.medal-fan5 {
  width: 24px;
  height: 22px;
  background-position: -98px -64px;
}
.medal-sword {
  width: 21px;
  height: 23px;
  background-position: -147px 0px;
}
.medal-eye {
  width: 21px;
  height: 23px;
  background-position: -147px -32px;
}
.medal-bulb {
  width: 21px;
  height: 23px;
  background-position: -147px -64px;
}
.medal-ship {
  width: 22px;
  height: 22px;
  background-position: -147px -96px;
}

/*社区首页内容 列表分页*/
.pagelist {
  padding: 35px 20px;
  width: 482px;
  margin: 0 auto;
  .pagelist-center {
    position: relative;
    left: -5px;
    font-size: 0;
    text-align: center;
  }
  .pageitem {
    display: inline-block;
    margin-left: 5px;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border: 2px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: @color-gray;
    &:hover,
    &.active {
      border-color: @color-blue-l;
      background: @color-blue-ll;
      color: @color-white;
    }
  }
}
</style>