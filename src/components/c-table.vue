<template>
  <div class="c-table">
    <div class="search" v-if="showSearch">
      <Form inline>
        <slot name="search-form-items">
          <FormItem label="标题：" label-position="left" :label-width="50">
            <Input placeholder="请输入查询内容"/>
          </FormItem>
        </slot>
        <div class="appends">
          <Button @click="search" type="primary">搜索</Button>
          <slot name="search-appends"></slot>
        </div>
      </Form>
    </div>

    <div class="table">
      <Table border :columns="columns" :data="tableData"></Table>
      <Spin size="large" fix v-if="loading"></Spin>
    </div>

    <div class="page">
      <Page @on-change="changePage" @on-page-size-change="changeCount" :total="total" :current.sync="searchObj.page" size="small" show-elevator show-sizer show-total></Page>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSearch: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: '',
  data() {
    return {
      searchObj: {
        page: 1,
        count: 10
      }
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      this.$emit('on-search', {page: this.searchObj.page, count: this.searchObj.count})
    },
    changePage(val) {
      this.searchObj.page = val
      this.search()
    },
    changeCount(val) {
      this.searchObj.page = 1
      this.searchObj.count = val
      this.search()
    }
  }
}
</script>

<style lang="less">
.c-table {
  .search {
    .ivu-form {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border: 1px solid #d8d8d8;
    }
    .ivu-form-item {
      margin-right: 15px;
      margin-bottom: 0;
      float: left;
    }
    .ivu-btn {
      margin-right: 15px;
    }
  }

  .table {
    margin-top: 10px;
    position: relative;
  }
  .page {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
