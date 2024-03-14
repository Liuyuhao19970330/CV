<template>
  <div class="footer-wrapper">
    <span>
      <i class="iconfont reco-theme"></i>
      <RouterLink to="/other/cv" target="blank" style="color:white">
        Designed by lyh 
      </RouterLink>
    </span>
    <span v-if="$themeConfig.record">
      <i class="iconfont reco-beian"></i>
      <a href="https://wap.miit.gov.cn/" style="color:white">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <i class="iconfont reco-copyright"></i>
      <a style="color:white">
        <span v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear">{{ $themeConfig.startYear }} - </span>
        {{ year }}
      </a>
    </span>
    <!-- <span v-show="$themeConfig.valineConfig !== undefined">
      <i class="iconfont reco-eye"></i>
      <AccessNumber  idVal="/" />
    </span> -->
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    bottom :0px;
    z-index:100px;
    position:fixed;
    left:35%;
    padding: 1.5rem 2.5rem;
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
