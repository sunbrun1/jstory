<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    영화 뉴스 
                </p>
            </div>
        </section>

        <section class="columns is-multiline">
            <div class="column is-half" v-for="(item, index) in movieNews" :key="index">
                <div class="content">
                    <span>네이버뉴스</span> <span>{{newsTime[index]}}</span>
                    <p class="news_title">
                        {{item.title}}
                    </p>
                    <p>
                        {{item.description}}
                    </p>
                </div>
            </div>
        </section>

       
       

    </div>
</template>

<script>
    import movieNews from '@/assets/movieNews.json';
    export default{
        data(){
            return {
                movieNews: movieNews,
                newsTime: []
            }
        },
        mounted() {
            for(let i=0; i<this.movieNews.length; i++){
                this.newsTime.push(this.timeForToday(this.movieNews[i].pubDate));
            }
        },
        methods:{
            /* 시간 계산 */
            timeForToday(value){
                const todayTime = new Date();
                const newsTime = new Date(value);
                const betweenTime = Math.floor((todayTime.getTime() - newsTime.getTime()) / 1000 / 60);
                if(betweenTime < 1) return '방금전';
                if(betweenTime < 60){
                    return betweenTime + '분전';
                }
                const betweenTimeHour = Math.floor((betweenTime / 60));
                if(betweenTimeHour < 24){
                    return betweenTimeHour + '시간전';
                } 
                const betweenTimeDay = Math.floor((betweenTime / 60 / 24));
                if(betweenTimeDay < 365){
                    return betweenTimeDay + '일전';
                } 
            }
        }
    }
</script>

<style scoped>
    .title{
        width: 1180px;
        margin: auto;
    }
    .orderby_title{
        font-size: 20px;
        border-bottom: solid 1px black;
        padding-bottom: 10px;
    }
    .orderby_subtitle{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .columns{
        width: 1180px;
        margin: auto;
        display: flex;
    }
    .orderby{
        height: 1000px;
    }
    .box{
        width: 1180px;
        height: auto;
        margin: auto;
        margin-top: 20px;
    }
    .news_title{
        font-size: 20px;
        color: #0c43B7;
    }
    span{
        padding-right: 10px;
    }
</style>