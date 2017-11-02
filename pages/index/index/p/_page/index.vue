<template>
  <section>
    <div class="ask-content">
        <!--社区首页内容 板块选择-->
        <div class="hd-block content-hd">
            <div class="title">版块</div>
            <div class="hd-module">
              <div class="md-container">
                <div class="md-row">
                    <ul class="clearfix">
                        <li class="item active"><a href="#">全部帖子</a></li>
                        <li class="item"><a href="/forum">公考你问我答</a></li>
                        <li class="item"><a href="#">公考经验分享</a></li>
                        <li class="item"><a href="#">公考经验分享</a></li>
                    </ul>
                </div>
                <div class="md-row">
                    <ul class="clearfix">
                        <li class="item"><a href="#">风暴羚羊专区</a></li>
                        <li class="item"><a href="#">花木君专区</a></li>
                        <li class="item"><a href="#">北楚专区</a></li>
                        <li class="item"><a href="#">社长茶馆</a></li>
                    </ul>
                </div>
              </div>

            </div>
        </div>
        <!--社区首页内容 帖子列表-->
        <div class="hd-block content-bd">
            <!-- 社区首页内容 板块选择 -->
            <div class="bd-menu clearfix">
                <div class="menu-content">
                    <a href="#" class="item active">全部</a>
                    <i class="divider"></i>
                    <a href="#" class="item">精华</a>
                    <i class="divider"></i>
                    <a href="#" class="item">最新</a>
                    <i class="divider"></i>
                    <a href="#" class="item">我感兴趣的</a>
                </div>
                <div class="bd-submit">
                    <a href="#" class="button">发布新贴</a>
                </div>
            </div>
            <!-- 社区首页内容 帖子列表 -->
            <div class="post-area">
                <div class="post-item">
                    <div class="post-avatar">
                      <div class="avatar-img">
                        <img src="~static/images/default-avatar.png">
                        <div class="avatar-detail" v-show="isShow">
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
                                <!-- <li class="label-item"><a href="#"><span class="dots">...</span></a></li> -->
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
                        <div class="avatar-detail-loading" v-show="isShow">
                          <img src="~assets/images/loading.gif">
                        </div>
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
            <div class="post-paging">
                <div class="paging-con clearfix">
                    <a href="#" class="paging-item">&lt;&lt;</a>
                    <a href="#" class="paging-item paging-item-active">1</a>
                    <a href="/index/index/p" class="paging-item">2</a>
                    <a href="#" class="paging-item">3</a>
                    <a href="#" class="paging-item">4</a>
                    <a href="#" class="paging-item">5</a>
                    <a href="#" class="paging-item">6</a>
                    <a href="#" class="paging-item">7</a>
                    <a href="#" class="paging-item">8</a>
                    <a href="#" class="paging-item">9</a>
                    <a href="#" class="paging-item">···</a>
                    <a href="#" class="paging-item">15</a>
                    <a href="#" class="paging-item">&gt;&gt;</a>
                </div>
            </div>
        </div>
    </div>
    <!-- 右侧边栏 -->
    <m-sider/>     
    <!-- 推荐关注 弹窗 -->
    <m-alert/>
    
  </section>
</template>
<script>
import mAlert from "~/components/m-alert";
import mSider from "~/components/m-sider/sider";
export default {
  head: {
    title: '步知公考社区 - 最具品质的公务员考试论坛'
  },
  data() {
    return {
      isShow: false
    };
  },
  components: {
    mAlert,
    mSider
  },
  methods: {
    _tab(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
// @import 'assets/style/variable.less';
.ask-content {
  float: left;
  width: 730px;
  min-height: 620px;
  .hd-block {
    margin-bottom: 20px;
    border: 2px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
  }
}
.content-hd {
  position: relative;
  height: 96px;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
    border-right: 2px solid #d9d9d9;
    height: 96px;
    line-height: 96px;
    font-size: 19px;
    font-weight: bold;
    color: #666;
    text-align: center;
  }
  .hd-module{
    padding-left: 108px;
  }
  .md-container {
    padding: 11px 0 3px 30px;
  }
  .md-row {
    margin-bottom: 10px;
    a{
      color: #666;
      float: left;
      margin-right: 24px;
      width: 106px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border: 2px solid #c1d6e8;
      background: #e9f4fd;
      border-radius: 4px;
      font-size: 14px;
      color: #666;
    }
    .active a,a:hover {
      color: #fff;
      border-color: #1879c5;
      background: #2996eb;
      color: #fff;
    }
  }
}
.content-bd{
  .bd-menu {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #d9d9d9;
    .menu-content {
      float: left;
      font-size: 0;
      height: 48px;
      line-height: 48px;
      .item {
        padding: 0 20px;
        font-size: 14px;
        color: #666;
        position:relative;
        &.active,&:hover {
          color: #2996eb;
        }
        &:after{
          content:"";
          position: absolute;
          right:0;
          top:0;
          height: 17px;
          width: 1px;
          background-color:#d9d9d9;
          font-size: 13px;
        }
        &:last-child:after{
          width:0;
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
        border: 2px solid #c64446;
        background: #eb5255;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        &:hover {
          background-color: #c64446;
        }
      }


    }    


  }
}
.content-bd .post-area {
  padding: 0 20px 0;
}
.content-bd .post-area-pigai {
  padding-top: 14px !important;
}
.content-bd .post-area-pigai .post-item {
  padding-top: 20px !important;
}
.content-bd .post-area-pigai .post-avatar {
  top: 20px !important;
}
.content-bd .post-area-pigai .post-info .detail {
  margin-bottom: 20px !important;
}
.content-bd .post-area .post-item {
  position: relative;
  padding-top: 11px;
  border-bottom: 1px solid #d9d9d9;
}
.content-bd .post-area .post-item .post-info {
  padding-left: 50px;
}
.content-bd .post-area .post-item .post-info-topic {
  padding-left: 0;
}
.content-bd .post-area .post-item .post-avatar {
  position: absolute;
  top: 10px;
  left: 0;
  width: 50px;
}
.content-bd .post-area .post-avatar .avatar-img {
  width: 38px;
  height: 38px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
}
.content-bd .post-area .avatar-img img {
  width: 38px;
  height: 38px;
  overflow: hidden;
}
.content-bd .post-item .post-info .title {
  margin-bottom: 5px;
  line-height: 18px;
  font-size: 15px;
  font-weight: bold;
  color: #2d3e50;
}
.content-bd .post-item .post-info .title:hover {
  color: #1879c5;
}
.content-bd .post-item .post-info .title .review-babel {
  display: inline-block;
  margin-left: 4px;
  width: 70px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background: #eb5255;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
}
.content-bd .post-item .post-info .title .red-review-babel {
  background: #eb5255;
}
.content-bd .post-item .post-info .title .yellow-review-babel {
  background: #ffa650;
}
.content-bd .post-item .post-info .title .gray-review-babel {
  background: #cccccc;
}
.content-bd .post-item .post-info .desc {
  margin-bottom: 12px;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
  margin-top: 5px;
}
.content-bd .post-item .post-info .detail {
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-bottom: 12px;
}
.content-bd .post-item .title .post-tag {
  display: inline-block;
  margin-right: 10px;
  width: 28px;
  height: 14px;
  line-height: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
}
.content-bd .post-item .title .post-tag-red {
  border-color: #c4373a;
  background: #eb5255;
}
.content-bd .post-item .title .post-tag-yellow {
  border-color: #dda806;
  background: #fbbd00;
}
.content-bd .post-item .detail .author {
  margin-right: 30px;
}
.content-bd .post-item .detail .author img {
  vertical-align: sub;
  margin-left: 3px;
}

/*弹出层 头像设置*/
.avatar-detail-loading {
  position: absolute;
  left: 0;
  top: 38px;
  padding: 40px 70px;
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  z-index: 9999;
}
.avatar-detail {
  position: absolute; /*display: none;*/
  width: 376px;
  height: 196px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  z-index: 9999;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
}
.avatar-detail .avatar-detail-info {
  height: 130px;
  padding-top: 16px;
}
.avatar-detail-info .big-avatar {
  position: relative;
  float: left;
  width: 100px;
  margin: 0 28px;
}
.avatar-detail-info .big-avatar .score {
  bottom: -3px;
}
.avatar-detail-info .info-desc {
  float: left;
  width: 218px;
}
.avatar-detail-info .info-desc .label-list {
  position: relative;
}
.avatar-links {
  padding: 4px 0;
  height: 42px;
  line-height: 42px;
}
.avatar-links .link-item {
  float: left;
  width: 78px;
  text-align: center;
}
.avatar-links .divider {
  float: left;
  height: 42px;
  border-left: 2px solid #d9d9d9;
  width: 0;
}
.avatar-detail .avatar-detail-info .big-avatar img {
  width: 96px;
  height: 96px;
  border: 2px solid #d9d9d9;
  border-radius: 50%;
}
.avatar-detail-info .big-avatar .score {
  position: absolute;
  left: 50%;
  margin-left: -23px;
  bottom: -10px;
  width: 42px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  border: 2px solid #c64446;
  background: #eb5255;
  font-size: 10px;
  color: #fff;
  border-radius: 7px;
}
.avatar-detail-info .big-avatar .score-blue {
  background: #2e96e7;
  border-color: #387aad;
}
.avatar-detail-info .big-avatar .detail-icon {
  display: inline-block;
  background: url(~assets/images/detail-icon.png) no-repeat;
}
.avatar-detail-info .big-avatar .star-icon {
  width: 12px;
  height: 12px;
  background-position: 0 -90px;
  position: relative;
  top: 1px;
}
.avatar-links .link-item .num {
  margin-top: 3px;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 16px;
  color: #2d3e50;
  font-weight: bold;
}
.avatar-links .link-item .txt {
  font-size: 14px;
  line-height: 14px;
  color: #888888;
}
.avatar-detail-info .info-desc .name {
  margin-bottom: 5px;
  line-height: 20px;
  height: 20px;
  color: #1879c5;
  font-size: 14px;
  font-weight: bold;
}
.avatar-detail-info .info-desc .name img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
.avatar-detail-info .info-desc .desc {
  margin-bottom: 8px;
  line-height: 16px;
  font-size: 12px;
  color: #888888;
}
.avatar-detail-info .info-desc .label-item {
  float: left;
  margin-bottom: 5px;
  height: 26px;
  width: 34px;
  line-height: 26px;
  text-align: center;
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
.dots {
  display: block;
  width: 24px;
  height: 22px;
  line-height: 22px;
  font-weight: bold;
  position: relative;
  top: -4px;
}

/*社区首页内容 列表分页*/
.post-paging {
  padding: 35px 20px;
  width: 482px;
  margin: 0 auto;
}
.post-paging .paging-con {
  position: relative;
  left: -5px;
  font-size: 0;
  text-align: center;
}
.post-paging .paging-item {
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
  color: #666;
}
.post-paging .paging-item:hover,
.post-paging .paging-item-active {
  border-color: #1a82d3;
  background: #2996eb;
  color: #fff;
}
</style>