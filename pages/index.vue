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
          this.$router.push({ path: `/${movieId}`})
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