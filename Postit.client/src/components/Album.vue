<template>
 <div class="col-12 rounded shadow m-3">
  <img :src="album.coverImg" alt="">
   {{album.name}}
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  props:{ album:{type: Object, required: false}},
  setup(props){
    
    return {
      albums: computed(()=> AppState.albums)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>