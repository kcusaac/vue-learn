<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas> <!-- Global nested component -->
    <ninjas2></ninjas2> <!--local nested component -->
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
import Ninjas2 from './Ninjas2.vue' //local nested component
export default {
  components:{
    'ninjas2':Ninjas2 //local
  },
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

<style scoped>
h1{
  color:purple;
}

</style>
