<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    TV 프로그램 
                </p>
            </div>
        </section>

        <div class="box">
            <p class="orderby_title">정렬</p>
            <p class="orderby_subtitle">Sort Results By</p>
            <div class="select">
                <select v-model="option" @change="orderBy">
                    <option value="평점 내림차순">평점 내림차순</option>
                    <option value="평점 오름차순">평점 오름차순</option>
                    <option value="인기도 내림차순">인기도 내림차순</option>
                    <option value="인기도 오름차순">인기도 오름차순</option>
                    <option value="상영일 내림차순">상영일 내림차순</option>
                    <option value="상영일 오름차순">상영일 오름차순</option>
                </select>
            </div>
        </div>

        <section class="columns is-multiline">
            <div class="column is-one-fifth" v-for="(item, index) in TVInfo" :key="index" @click="movieDetailsPage(item.id)">
                <img :src="`https://image.tmdb.org/t/p/w500` + item.poster_path"/>
                <div class="movie_title">
                    {{item.original_name}}
                </div>
                <div>
                    {{item.first_air_date}}
                </div>
            </div>
        </section>

       
       

    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        async asyncData(){
                const TVInfo = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=f19d3890180da322a305b1e1a80791d2");
                console.log(TVInfo.data.results)
            return {
                TVInfo : TVInfo.data.results,
                option : "평점 내림차순"
            };
        },
        methods:{
            movieDetailsPage(movieId){
                this.$router.push({ path: `/movieDetails/${movieId}`})
            },
            // 내림차순
            orderBy(){
                if(this.option == "평점 내림차순"){
                    this.TVInfo.sort((a, b) => {
                        return b.vote_average - a.vote_average
                    })
                }
                if(this.option == "평점 오름차순"){
                    this.TVInfo.sort((a, b) => {
                        return a.vote_average - b.vote_average
                    })
                }
                if(this.option == "인기도 내림차순"){
                    this.TVInfo.sort((a, b) => {
                        return b.popularity - a.popularity
                    })
                }
                if(this.option == "인기도 오름차순"){
                    this.TVInfo.sort((a, b) => {
                        return a.popularity - b.popularity
                    })
                }
                if(this.option == "상영일 내림차순"){
                    this.TVInfo.sort((a, b) => {
                        const dateA = new Date(a['first_air_date']).getTime();
                        const dateB = new Date(b['first_air_date']).getTime();
                        return dateB - dateA
                    })
                }
                if(this.option == "상영일 오름차순"){
                    this.TVInfo.sort((a, b) => {
                        const dateA = new Date(a['first_air_date']).getTime();
                        const dateB = new Date(b['first_air_date']).getTime();
                        return dateA - dateB
                    })
                }


            },
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
</style>