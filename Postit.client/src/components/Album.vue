<template>
 <div class="col-12">
   {{albums}}
  </div>
</template>


<script>
export default {
  props:{ album:{type: Object, required: false}},
  setup(props){
    
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>

</style>