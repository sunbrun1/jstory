<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    Ranking 
                    <select v-model="option" @change="orderBy">
                        <option value="평점 내림차순">평점 내림차순</option>
                        <option value="평점 오름차순">평점 오름차순</option>
                        <option value="인기도 내림차순">인기도 내림차순</option>
                        <option value="인기도 오름차순">인기도 오름차순</option>
                        <option value="상영일 내림차순">상영일 내림차순</option>
                        <option value="상영일 오름차순">상영일 오름차순</option>
                    </select>
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>title</th>
                            <th>popularity</th>
                            <th>release_date</th>
                            <th>vote_average</th>
                            <th>vote_count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(item,index) in movieRankInfo">
                            <tr :key="index" @click="movieDetailsPage(item.id)">
                                <td>
                                    {{index+1}}
                                </td>
                                <td>
                                    {{item.title}}
                                </td>
                                <td>
                                    {{item.popularity}}
                                </td>
                                <td>
                                    {{item.release_date}}
                                </td>
                                <td>
                                    {{item.vote_average}}
                                </td>
                                <td>
                                    {{item.vote_count}}
                                </td>
                            </tr>
                        </template>

                    </tbody>
                </table>
                <div class="content">
                    <span class="tag is-wraning">출처</span>
                    <nuxt-link to="@/assets/movieNames.jon">역대 인기영화 JSON</nuxt-link>

                </div>
                <div class="content">
                    <span class="tag is-danger">출처</span>
                    <a href="https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%98%81%ED%99%94_%ED%9D%A5%ED%96%89_%EA%B8%B0%EB%A1%9D">위키백과</a>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        async asyncData(){
                const movieRankInfo = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=f19d3890180da322a305b1e1a80791d2");
  
            return {
                movieRankInfo : movieRankInfo.data.results,
                option : "평점 내림차순"
            };
        },
        methods:{
            movieDetailsPage(movieId){
                this.$router.push({ path: `/movieDetails/${movieId}`})
            },
            orderBy(){
                if(this.option == "평점 내림차순"){
                    this.movieRankInfo.sort((a, b) => {
                        return b.vote_average - a.vote_average
                    })
                }
                if(this.option == "평점 오름차순"){
                    this.movieRankInfo.sort((a, b) => {
                        return a.vote_average - b.vote_average
                    })
                }
                if(this.option == "인기도 내림차순"){
                    this.movieRankInfo.sort((a, b) => {
                        return b.popularity - a.popularity
                    })
                }
                if(this.option == "인기도 오름차순"){
                    this.movieRankInfo.sort((a, b) => {
                        return a.popularity - b.popularity
                    })
                }
                if(this.option == "상영일 내림차순"){
                    this.movieRankInfo.sort((a, b) => {
                        const dateA = new Date(a['release_date']).getTime();
                        const dateB = new Date(b['release_date']).getTime();
                        return dateB - dateA
                    })
                }
                if(this.option == "상영일 오름차순"){
                    this.movieRankInfo.sort((a, b) => {
                        const dateA = new Date(a['release_date']).getTime();
                        const dateB = new Date(b['release_date']).getTime();
                        return dateA - dateB
                    })
                }


            },
        }
    }
</script>

<style scoped>
tr{
    cursor: pointer;
}
</style>