<template>
  <div class='wrapper'>
    <nav-color v-on:onChangeColor="changeColor"></nav-color>
    <nav-ground :color="color"></nav-ground>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return  {
        color: 'red'
      }
    },
    methods: {
      changeColor: function(color) {
        this.color = color
      }
    }
  }
</script>

<style>
  .wrapper {
    align-items: center;
    background-color: #f5f5f5;
    top: 0.2em;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
  }
</style>
