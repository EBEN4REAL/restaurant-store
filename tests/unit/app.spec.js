
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App component', () => {
  it('renders the app component', () => {
    const wrapper = mount(App)
    expect(wrapper.contains('#app')).toBe(true)
  })
})
