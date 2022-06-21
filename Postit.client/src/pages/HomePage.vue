<template>
  <div class="component">
<div class="row">
  <div class="col-12" v-for="a in albums" :key="a.id" :albums="a">
   <Album  />
  </div>
</div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { albumsService } from '../services/AlbumsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  setup(){
    onMounted(async ()=> {
      try {
        await albumsService.getAlbums()
      } catch (error) {
        logger.error(error)
        Pop.toast(error)
      }
      
    })
    return {
      albums: computed(()=> AppState.albums)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
