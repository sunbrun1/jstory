<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    역대 인기영화(국내)
                </p>
 
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>이름</th>
                            <th>감독</th>
                            <th>개봉일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="pos in MoviesNames.length">
                            <tr :key="pos">
                                <td>
                                    {{pos}}
                                </td>
                                <td>
                                    {{MoviesNames[pos-1]}}
                                </td>
                                <td>
                                    {{MoviesDirector[pos-1]}}
                                </td>
                                <td>
                                    {{MoviesOpeningDate[pos-1]}}
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

        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    시대별 영화
                </p>
 
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>년대</th>
                            <th>제목</th>
                            <th>관객수</th>
                            <th>개봉일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="pos in MoviesHistoryNames.length">
                            <tr :key="pos">
                                <td>
                                    {{pos}}
                                </td>
                                <td>
                                    {{MoviesHistoryNames[pos-1]}}
                                </td>
                                <td>
                                    {{MoviesHistoryAudience[pos-1]}}
                                </td>
                                <td>
                                    {{MoviesHistoryOpeningDate[pos-1]}}
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
import bestMovies from '@/assets/movieNames.json';
import movieHistory from '@/assets/movieHistory.json';

export default {
    data(){
        return {
            MoviesNames: bestMovies.name,
            MoviesDirector: bestMovies.director,
            MoviesOpeningDate: bestMovies.openingDate,
            MoviesHistoryNames: movieHistory.name,
            MoviesHistoryAudience: movieHistory.audience,
            MoviesHistoryOpeningDate: movieHistory.openingDate
        }   
    }
}
</script>
