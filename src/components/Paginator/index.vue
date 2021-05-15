<template>
     <div class="text-center mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button class="page-link" href="#" v-if="page != 1" @click="goToPreviousPage">Previous</button>
          </li>
          <li class="page-item" :class="[page === pageNumber ? 'active' : null]" v-for="(pageNumber,i) in pages.slice(page-1, page+3)"  :key="i" @click="setPageNumber(`${pageNumber}`)">
            <button type="button" class="page-link" > {{pageNumber}} </button>
          </li>
          <li class="page-item"><button class="page-link"  @click="goToNextPage" v-if="page < pages.length">Next</button>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
export default {
  name: 'StoreList',
   data() {
    return {
      
    }
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Array,
      default:  () => ([])
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
 
  methods: {
    goToPreviousPage() {
      this.$emit('_goToPreviousPage')
    },
    goToNextPage(){
      this.$emit('_goToNextPage')
    },
    setPageNumber(currentPage) {
      this.$emit('_setPageNumber', currentPage)
    }
  }
}
</script>