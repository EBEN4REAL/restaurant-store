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
      <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in filteredStores" :key="store.id" />
    </div>
    <div class="text-center mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#" v-if="page != 1" @click="page--">Previous</a>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" v-for="(pageNumber,i) in pages.slice(page-1, page+5)"  :key="i" @click="page = pageNumber"> {{pageNumber}} </button>
          </li>
          <li class="page-item"><button class="page-link"  @click="page++" v-if="page < pages.length">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Store from '@/components/Store/Store';
import _ from 'lodash';

export default {
  name: 'StoreList',
  components: {
    Store
  },
  data(){
    return {
      searchText: '',
      posts : [''],
			page: 1,
			perPage: 10,
			pages: [],
    }
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  watch:{
    filteredStores() {
      this.setPages();
    }
  }, 
  computed: {
    filteredStores() {
      const storesCopy = [...this.storesWithImages]
      const stores =  storesCopy.filter(store => store.name.toLowerCase().includes(this.searchText))
      return this.paginate(stores)
    },
    storesWithImages () {
      return _.map(this.stores, function (store) {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name;

        return store;
      });
    },
    storesCount () {
      return _.size(this.stores);
    },
  },
  mounted() {
    this.setPages()
  },
  methods: {
		setPages () {
			let numberOfPages = Math.ceil(this.filteredStores.length / this.perPage);
      console.log(numberOfPages)
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
      console.log(this.pages)
		},
		paginate (stores) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  stores.slice(from, to);
		}
  }
}
</script>
