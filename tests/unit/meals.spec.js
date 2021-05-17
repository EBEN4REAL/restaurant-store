
import { mount } from '@vue/test-utils'
import Meals from '@/views/Meals.vue'


describe('Meal  component', () => {
  it('renders the meals component', () => {
    const wrapper = mount(Meals)
    expect(wrapper.contains('.page__carbonara')).toBe(true)
  })
})

