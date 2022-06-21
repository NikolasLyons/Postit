<template>
 <div class="col-12 rounded shadow m-3 album" @click="seeAlbum">
  <img :src="album.coverImg" alt="">
   {{album.name}}
  </div>
</template>


<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'

export default {
  props:{ album:{type: Object, required: false}},
  setup(props){
    const router = useRouter()
    return {
      albums: computed(()=> AppState.albums),

   seeAlbum(){
    router.push({name:'AlbumDetails',params:{id: props.album.id}})
        
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.album{
  cursor: pointer;
}

.album:hover{
  transform: scale(1.01);
  transition: 1s;
}

</style>