<template>
  <div class="hello">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 1App'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log(process.env);
    });
  },
}
</script>
