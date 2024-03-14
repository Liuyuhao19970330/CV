<template>
  <div class="home" id="home">
      <RouterLink to="/about/" target="blank" class="btn" >
        welcome
      </RouterLink> 
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
    mounted() {
  if (typeof window !== 'undefined') {
    import('../../../sky-1').then(({ renderer }) => {
      document.getElementById("home").appendChild(renderer.domElement);
    }).catch(error => {
      console.error('Failed to import sky-1.js', error);
    });
  }
  },
  mixins: [moduleTransitonMixin],
  components: { NavLink, ModuleTransition },
  computed: {

    actionLink () {
      return {
        link: this.$frontmatter.actionLink,
        text: this.$frontmatter.actionText
      }
    },

    heroImageStyle () {
      return this.$frontmatter.heroImageStyle || {
        maxHeight: '200px',
        margin: '6rem auto 1.5rem'
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/mode.styl'

.home {
  height: 100vh;
  width: 100vw;
  margin: 0px ;
  padding: 0px;
  // background-color: red;
  overflow: hidden;
  .btn {
    position: fixed;
    left: 48%;
    top: 60%;
    background-color: transparent; /* 设置背景透明 */
    border: 2px solid #00ff00; /* 设置边框为绿色，可以根据需要调整边框的宽度和样式 */
    padding: 10px 20px; /* 设置按钮内边距，根据需要调整 */
    font-size: 16px; /* 设置文字大小，根据需要调整 */
    cursor: pointer; /* 设置鼠标悬停时的光标样式为手型 */
    border-radius: 10px; /* 设置圆角边框，可以根据需要调整圆角的大小 */
    font-family: Comic Sans MS;
    color:white
  }
  .hero {
    text-align: center;
    h1 {
      font-size: 2.5rem;
      color: var(--text-color);
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.3;
      color: var(--text-color);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.6rem 1.2rem;
      border-radius: $borderRadius
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      load-start()

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid var(--border-color);;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    transition: all .5s
    color: var(--text-color);
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }

    &:hover {
      transform scale(1.05)
    }
  }

//   &.reco-hide {
//   .hero {
//     img {
//       load-start()
//     }
//     .h1 {
//       load-start()
//     }
//     .description {
//       load-start()
//     }
//     .huawei {
//       load-start()
//     }
//     .action-button {
//       load-start()
//     }
//   }
//   .features {
//     load-start()
//   }
//   .home-center {
//     load-start()
//     padding 0
//   }
// }

//   &.reco-show {
//     .hero {
//       img {
//         load-end(0.08s)
//       }
//       .h1 {
//         load-end(0.16s)
//       }
//       .description {
//         load-end(0.24s)
//       }
//       .huawei {
//         load-end(0.32s)
//       }
//       .action-button {
//         load-end(0.4s)
//       }
//     }
//     .features {
//       load-end(0.40s)
//     }
//     .home-center {
//       load-end(0.48s)
//     }
//   }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
