
import { mount } from '@vue/test-utils'
import MealsComponent from '@/views/Meals.vue'


describe('Meal  component', () => {
  it('renders the meals component', () => {
    const wrapper = mount(MealsComponent)
    expect(wrapper.contains('.page__carbonara')).toBe(true)
  })
})


