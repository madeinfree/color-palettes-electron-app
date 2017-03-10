<template>
  <nav class='nav'>
    <div
      class='color'
      v-for="(color, index) in colors"
      v-bind:style="{ background: getColor(color) }"
      v-on:click="changeColor(index)"
    ></div>
  </nav>
</template>

<script>
  import colors from '../colors/material.json'
  export default {
    name: 'nav-color',
    data() {
      return {
        colors: colors
      }
    },
    methods: {
      getColor: function(index) {
        return '#' + index[5]
      },
      changeColor: function(color) {
        this.$emit('onChangeColor', color)
      }
    }
  }
</script>

<style>
  .nav {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    width: 4rem;
    padding: 4px 4px;
    flex-direction: column;
  }
  .color {
    min-height: 2rem;
    border-radius: 4px;
    margin-bottom: 4px;
  }
</style>
