<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Your first Vue file'
    }
  },
  methods:{
    greeting:function(){
      return "hey"
    }
  }
}
</script>

<style>

</style>
