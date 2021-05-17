
import { mount } from '@vue/test-utils'
import Restaurant from '@/views/Restaurants.vue'


describe('Restaurant component', () => {
  it('renders the Restaurant component', () => {
    const wrapper = mount(Restaurant)
    expect(wrapper.contains('.page__stores')).toBe(true)
  })
})
