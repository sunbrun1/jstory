<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title"> 다운로드 별 영화 순위 </p>
            </div>
        </section>
        <hr>
        <section class="columns">
            <div class="column"></div>
                <table class="table">
                    <thead>
                        <th>순위</th>
                        <th>제목</th>
                        <th>평점</th>
                        <th>상영시간</th>

                    </thead>
                    <tbody>
                        <template v-for="pos in moviesByDownload.length">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{moviesByDownload[pos-1].title}}</td>
                                <td>{{moviesByDownload[pos-1].rating}}</td>
                                <td>{{moviesByDownload[pos-1].runtime}} 분</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            <div class="column"></div>
        </section>

    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        async asyncData(){
            const movies = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=download_count');
            console.log(Object.keys(movies))
            console.log(movies.data.data.movies)
        
            return {
                moviesByDownload : movies.data.data.movies
            };
        }
    }
</script>
