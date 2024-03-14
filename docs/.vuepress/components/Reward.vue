<template>
    <div>
        <details class="custom-block details">
            <summary>打赏一下</summary>
            <br>
            <p align="center" style="max-width: 200px; margin: 0 auto;">
                <img :src="rewardImg" style="border: 1px solid #DDDDDD;" class="medium-zoom-image" />
            </p>
            <p align="center">「真诚赞赏，手留余香」</p>
            <h3 id="打赏记录"><a href="#打赏记录" class="header-anchor">#</a> 充电记录</h3>
            <table>
                <thead>
                <tr>
                    <th style="text-align: center;">充电者</th>
                    <th style="text-align: center;">充电金额 (元)</th>
                    <th style="text-align: center;"> 支付方式</th>
                    <th style="text-align: center;">时间</th>
                    <th style="text-align: center;">备注</th>
                </tr>
                </thead>
                <tbody v-for="(item, index) in rewarder" :key="index">
                <tr>
                    <td style="text-align: center;"> {{item[0]}}</td>
                    <td style="text-align: center;"> {{item[1]}}</td>
                    <td style="text-align: center;"> {{item[2]}}</td>
                    <td style="text-align: center;"> {{item[3]}}</td>
                    <td style="text-align: center;"> {{item[4]}}</td>
                </tr>
                </tbody>
            </table>
        </details>
    </div>
</template>

<script>
    let rewarder = [
        // ['充电者','打助金额','支付方式','时间','备注'],
        ['Jaki', '10', '微信', '2023-06-09', '感谢充电'],
        ['yygh536', '10', '微信', '2023-07-11', '感谢充电'],
        ['Leo', '10', '微信', '2023-09-21', '感谢充电'],
    ]
    export default {
        name: "Reward",
        data() {
            return {
                rewarder,
                rewardImg: "/vuepress/zanshang01.png"
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .details {
        margin: 5% auto 0 auto;
        width: 100%;
    }

    summary {
        background-color: #faebd7;
        text-align: center;
        margin: 0 auto;
        width: 150px;
        cursor: pointer; 
    }

    table th:nth-of-type(1), th:nth-of-type(4), th:nth-of-type(5) {
        width: 22.5%;
    }
</style>
