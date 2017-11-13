<template>
    <div class="correct">
        <div class="hd-correct">
            <img src="http://g.public.midasjoy.com/Public/discuss/v2/images/pgcard-ttt.png?v=20170805" alt="">
            <a href="/thread/255" target="_blank" class="correct-btn">批改规则&gt;</a>
        </div>
        <!-- 批改列表-->
        <m-listview/>
    </div>
</template>
<script>
import mListview from "~/components/common/listview"
export default {
  head: {
    title: "步知公考社区 - 最具品质的公务员考试综合论坛"
  },
  components: {
      mListview
  }
}
</script>
<style lang="less" scoped>
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
</style>