<template>
  <ul class="ul-list">
    <li
      class="color-list"
      v-for="(color, index) in colors"
      v-on:click="copyColor(color)"
      v-bind:style="{ background: getColors(color)}"
    >
      <div>#{{ color }}</div>
    </li>
  </ul>
</template>

<script>
  import colors from '../colors/material.json'
  export default {
    name: 'nav-ground',
    props: ['color'],
    data() {
      return {
        colors: colors[this.color]
      }
    },
    watch: {
      'color': {
        handler(newData, oldData) {
          this.colors = colors[newData]
        }
      }
    },
    methods: {
      getColors: function(color) {
        return '#' + color
      },
      copyColor: function(color) {
        var clip_area = document.createElement('textarea');
        clip_area.textContent = color;

        document.body.appendChild(clip_area);
        clip_area.select();

        document.execCommand('copy');
        clip_area.remove();
      }
    }
  }
</script>

<style>
  .ul-list {
    flex: 1;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    padding: 4px 4px 0;
  }
  .color-list {
    position: relative;
    min-height: 5em;
    width: 100%;
    display: block;
    border-radius: 4px;
    margin-bottom: 4px;
  }
</style>
