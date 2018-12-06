<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <!-- <common-icon :type="parentItem.icon || ''"/>
      <span>{{ parentItem.title }}</span> -->
      <slot name="title"></slot>
    </template>
    <template v-for="item in children" v-if="item.checked">
      <!-- <template v-if="item.children && item.children.length === 1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
      </template> -->
      <side-menu-item v-if="item.isGroup" :key="`menu-${item.title}`" :parent-item="item">
        <template slot="title">
          <common-icon :type="parentItem.icon || ''"/>
          <span>{{ item.title }}</span>
        </template>
      </side-menu-item>
      <menu-item v-else :to="item.path" :name="item.access" :key="`menu-${item.title}`">
        <common-icon :type="parentItem.icon || ''"/>
        <span>{{ item.title }}</span>
      </menu-item>
    </template>
  </Submenu>
</template>
<script>
import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
  name: 'SideMenuItem',
  mixins: [ mixin, itemMixin ]
}
</script>
