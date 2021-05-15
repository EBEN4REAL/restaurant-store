<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    
    <div class="store-list__form-conainer">
      <form class="store-list__form">
        <input type="text" class="store-list__textbox" placeholder="Search stores..." v-model="searchText">
        <i class="fa fa-search" aria-hidden="true" ></i>  
      </form>
    </div>

    <div class="store-list__container">
      <Store class="store-list__item" 
        v-for="store in filteredStores" 
        :key="store.id"
        :title="store.name" 
        :photo="store.image" 
        :location="store.location" 
      />
    </div>

    <Paginator 
      :page="page" 
      :perPage="perPage" 
      :pages="pages"
      @_goToNextPage="goToNextPage"
      @_goToPreviousPage="goToPreviousPage" 
      @_setPageNumber="setCurrentPage" 
    />
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
const Store = () => import("@/components/Store/Store");
const Paginator = () => import("@/components/Paginator");


export default {
  name: 'StoreList',
  components: {
    Store,
    Paginator
  },
  data(){
    return {
      searchText: '',
			page: 1,
			perPage: 20,
			pages: [],
    }
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  }, 
  computed: {
    filteredStores() {
      const storesCopy = [...this.storesWithImages]
      const stores =  storesCopy.filter(store => store.name.toLowerCase().includes(this.searchText))
      return this.paginate(stores)
    },
    storesWithImages () {
      return this.stores.map(store => {
          store.image = 'https://via.placeholder.com/300?text=' + store.name
          
          return store
        })
      
    },
    storesCount () {
      return this.stores.length
    },
  },
  mounted() {

  },
  methods: {
    setCurrentPage(currentPage) {
      this.page = parseInt(currentPage)
    },
    goToNextPage() {
      this.page++
    },
    goToPreviousPage() {
      this.page--
    },
		paginate (stores) {
      let numberOfPages = Math.ceil(stores.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  stores.slice(from, to);
		}
  }
}
</script>
