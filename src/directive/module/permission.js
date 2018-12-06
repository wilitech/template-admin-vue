import store from '@/store'
export default {
  bind (el, binding, vnode) {
    if (store.state.app.permissionBlackList.includes(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
}
