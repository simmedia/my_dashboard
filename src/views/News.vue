<template>
  <div class="news">
    <ul class="news-nav">
      <li class="nav-link active" @click="getTechnology">Technology</li>
      <li class="nav-link" @click="getScience">Science</li>
      <li class="nav-link" @click="getBusiness">Buisiness</li>
      <li class="nav-link" @click="getSport">Sport</li>
    </ul>






    <!-- <div id="title" class="title">
      <a class="title-link" @click="getTechnology">Technology</a>
      <a class="title-link" @click="getScience">Science</a>
      <a class="title-link" @click="getBusiness">Buisiness</a>
      <a class="title-link" @click="getSport">Sport</a>
    </div> -->
    <div class="news-cont">
      <div class="post" v-for="(post,i) in news" :key="i">
        <h3>{{post.title}}</h3>
        <p class="post-cont">{{post.description}}</p>
        <img :src="post.urlToImage" alt>
        <p class="post-desc">{{post.content}}</p>
        <a :href="post.url" target="_blank">Link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    news: []
  }),
  created() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=5358b68903b04c18b85ebae3ff717b48"
    )
      .then(respong => respong.json())
      .then(data => {
        this.news = data.articles;
      });
  },
  methods: {
    getTechnology() {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=5358b68903b04c18b85ebae3ff717b48"
      )
        .then(respong => respong.json())
        .then(data => {
          this.news = data.articles;
        });
    },
    getBusiness() {
      this.news = [];
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5358b68903b04c18b85ebae3ff717b48"
      )
        .then(respong => respong.json())
        .then(data => {
          this.news = data.articles;
        });
    },
    getSport() {
      this.news = [];
      fetch(
        "https://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=5358b68903b04c18b85ebae3ff717b48"
      )
        .then(respong => respong.json())
        .then(data => {
          this.news = data.articles;
        });
    },
    getScience() {
      this.news = [];
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=5358b68903b04c18b85ebae3ff717b48"
      )
        .then(respong => respong.json())
        .then(data => {
          this.news = data.articles;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.news-cont {
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .post {
    width: 30%;
    margin-bottom: 50px;
    position: relative;
    padding: 20px;
    min-width: 300px;
    box-shadow: 0.3rem 0.3rem 0.5rem grey;
    text-align: center;

    h3 {
      margin-bottom: 20px;
      color: rgb(77, 77, 77);
    }

    .post-cont {
      margin-bottom: 50px;
      font-size: 1.2rem;
    }

    img {
      margin-bottom: 20px;
      width: 100%;
    }

    .post-desc {
      margin-bottom: 20px;
      font-size: 1rem;
    }

    a {
      position: absolute;
      bottom: 15px;
      left: 20px;
      color: orange;
      text-decoration: none;
      font-size: 1.2rem;
      transition: 0.3s ease;

      &:hover {
        color: grey;
      }
    }
  }
}

.news-nav {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
  padding: 5px;
  list-style: none;

  .active {
    color: #2a8bd4;
  }

  li {
    color: #4b4b4b;
    font-size: 20px;
    transition: 0.3s ease;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      color: #2a8bd4;
    }
  }
}
</style>

