<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <form class="store-list__form">
      <input type="text" class="store-list__textbox" placeholder="Search">
      <button title="Search" value="" type="submit" class="store-list__button">
        <i class="fa fa-search" aria-hidden="true" ></i>
      </button>
    </form>
    <div class="store-list__container">
      <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in filteredStores" :key="store.id" />
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
      searchText: ''
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
      return this.storesWithImages.filter(store => store.name.toLowerCase().includes(this.searchText))
    },
    storesWithImages () {
      return _.map(this.stores, function (store) {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name;

        return store;
      });
    },
    storesCount () {
      return _.size(this.stores);
    }
  }
}
</script>
