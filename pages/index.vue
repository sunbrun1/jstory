<template>
  <div>
    <!-- Popular -->
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">What's Popular</p>
      </div>
    </section>
    <div class="columns">
      <div class="column" v-for="(item, index) in popularMovies" :key="index" @click="movieDetailsPage(item.id)">
        <img :src="`https://image.tmdb.org/t/p/w500` + item.poster_path"/>
        <div class="movie_title">
          {{item.title}}
        </div>
        <div>
         {{item.release_date}}
        </div>
      </div>
    </div>
    <!-- Now Playing -->
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">Now Playing</p>
      </div>
    </section>
    <div class="columns">
      <div class="column" v-for="(item, index) in nowPlayingMovies" :key="index" @click="movieDetailsPage(item.id)">
        <img :src="`https://image.tmdb.org/t/p/w500` + item.poster_path"/>
        <div class="movie_title">
          {{item.title}}
        </div>
        <div>
         {{item.release_date}}
        </div>
      </div>
    </div>
    <!-- UpComing -->
    <section class="hero is-warning">
      <div class="hero-body">
        <p class="title">Up Coming</p>
      </div>
    </section>
    <div class="columns" >
      <div class="column" v-for="(item, index) in upComingMovies" :key="index" @click="movieDetailsPage(item.id)">
        <img :src="`https://image.tmdb.org/t/p/w500` + item.poster_path"/>
        <div class="movie_title">
          {{item.title}}
        </div>
        <div>
         {{item.release_date}}
        </div>
      </div>
    </div>
    <section class="hero is-danger">
      <div class="hero-body">
        <p class="title">예매 순위</p>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <article class="notification">
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th> 순위 </th>
                <th> 영화이름 </th>
                <th> 평점 </th>
                <th> 예매율 </th>
                <th> 개봉일 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> 클루엘라 </td>
                <td> 8.7 </td>
                <td> 27.3% </td>
                <td> 21.05.26 </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td> 분노의질주:더 얼티메이트 </td>
                <td> 7.4 </td>
                <td> 17.0% </td>
                <td> 21.05.19 </td>
              </tr>
              <tr>
                <td> 3 </td>
                <td> 컨저링 </td>
                <td> 7.1 </td>
                <td> 16.2% </td>
                <td> 21.06.03 </td>
              </tr>
              <tr>
                <td> 4 </td>
                <td> 프로페서 앤 매드맨 </td>
                <td> 7.6 </td>
                <td> 7.2% </td>
                <td> 21.06.02 </td>
              </tr>
              <tr>
                <td> 5 </td>
                <td> 낫아웃 </td>
                <td> 10.0 </td>
                <td> 3.5% </td>
                <td> 21.06.03 </td>
              </tr>
              <tr>
                <td> 6 </td>
                <td> 파이프라인 </td>
                <td> 8.6 </td>
                <td> 3.2% </td>
                <td> 21.05.26 </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default{
      async asyncData(){
          const popularMovies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f19d3890180da322a305b1e1a80791d2');
          const nowPlayingMovies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f19d3890180da322a305b1e1a80791d2');
          const upComingMovies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f19d3890180da322a305b1e1a80791d2');
          console.log(popularMovies.data)

          return {
                popularMovies : popularMovies.data.results.slice(9,19),
                nowPlayingMovies : nowPlayingMovies.data.results.slice(9,19),
                upComingMovies : upComingMovies.data.results.slice(9,19)
          };
      },
      methods:{
          movieDetailsPage(movieId){
          this.$router.push({ path: `/movieDetails/${movieId}`})
        }
      }
    }
</script>

<style scoped>
  .movie_title{
    width: 135px;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
  }
  .column{
    cursor: pointer;
  }
</style>