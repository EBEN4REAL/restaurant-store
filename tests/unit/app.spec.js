
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Meals from '@/views/Meals.vue'
import Restaurant from '@/views/Restaurants.vue'

describe('App component', () => {
  it('renders the app component', () => {
    const wrapper = mount(App)
    expect(wrapper.contains('#app')).toBe(true)
  })
})
describe('Meal  component', () => {
  it('renders the meals component', () => {
    const wrapper = mount(Meals)
    expect(wrapper.contains('.page__carbonara')).toBe(true)
  })
})

describe('Restaurant component', () => {
  it('renders the Restaurant component', () => {
    const wrapper = mount(Restaurant)
    expect(wrapper.contains('.page__stores')).toBe(true)
  })
})
