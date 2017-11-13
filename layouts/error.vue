<template>
	<div>
		<bz-header/>
		<div class="notfound">
			<div class="notfound-link">
				<p class="notfound-num">404</p>
				<p class="notfound-desc">呜呜~您访问的页面被外星人吃掉了</p>
				<a href="/" class="notfound-link-btn">返回地球</a>
			</div>
			<div class="notfound-img">
				<img src="http://imgcdn.buzhi.com/Public/common/v2/images/404.png">
			</div>
		</div>
	</div>
</template>
<script>
import BzHeader from '~/components/common/header'
export default {
	head: {
    title: "步知公考社区 - 最具品质的公务员考试论坛"
  },
  props: ["error"],
	components:{
		BzHeader
	}
};
</script>
<style lang="less">
html,body,div,p,a,img,ul,li,span,em,i{
	margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
ul{list-style:none;}
img{
  border:0 none;
  outline:none;
}
a{
  color: #666;
  text-decoration: none;
  transition: all 0.18s ease-out 0s;
}
a:hover {
  text-decoration: none;
  color: #1879c5;
}
.notfound {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
	min-height: 800px;
	.notfound-link {
		width: 480px;
		.notfound-num {
			color: #2e9ff7;
			font-size: 100px;
			font-weight: bold;
			line-height: 1.6;
		}
		.notfound-desc {
			color: #666666;
			font-size: 18px;
			margin-bottom: 30px;
		}	
		.notfound-link-btn {
			display: block;
			width: 116px;
			height: 36px;
			text-align: center;
			line-height: 36px;
			border-radius: 18px;
			border: 2px solid #52b0f8;
			font-size: 18px;
			color: #2e9ff7;
			&:hover {
				background: #52b0f8;
				color: #fff;
			}
		}		
	}
	.notfound-img {
		flex: 1;
		text-align: center;
		vertical-align: middle;
		img {
			width: 580px;
			padding-top: 70px;
		}		
	}
}
</style>