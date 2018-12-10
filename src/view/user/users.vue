<template>
  <div class="m-user-users">
    <Card>
      <CTable :total="total" :columns="columns" :tableData="tableData" @on-search="search" :loading="loading">
        <template slot="search-form-items">
          <FormItem label="输入搜索：" label-position="left" :label-width="80">
            <Input v-model="searchObj.email" placeholder="请输入邮箱号"/>
          </FormItem>
          <FormItem label="启用/禁用：" label-position="left" :label-width="80">
            <Select v-model="searchObj.status" placeholder="不限">
              <Option :value="-1">不限</Option>
              <Option :value="1">启用</Option>
              <Option :value="0">禁用</Option>
            </Select>
          </FormItem>
          <FormItem label="用户身份：" label-position="left" :label-width="80">
            <Select v-model="searchObj.identity" placeholder="不限">
              <Option :value="-1">不限</Option>
              <Option :value="1">启用</Option>
              <Option :value="0">禁用</Option>
            </Select>
          </FormItem>
        </template>
        <template slot="search-appends">
          <Button @click="exportExcel" v-permission="'sys.role.add'" type="primary">导出为Csv文件</Button>
        </template>
      </CTable>
    </Card>
    <Modal v-model="updateDialog" class="dialog-user-update" width=500>
      <Form :label-width="100" label-position="left">
        <FormItem label="姓名:" prop="name">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="头像:" prop="projectName">
          <CUpload/>
        </FormItem>
        <FormItem label="邮箱:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="境内手机号:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="证件类型:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="证件号:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="性别:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="所在地区:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="中国长居地:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="用户身份:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
        <FormItem label="状态:" prop="projectName">
          <Input v-model.trim="selectItem.name"/>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="updateDialog = false">取消</Button>
        <Button type="primary" @click="update">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import CTable from '_c/c-table'
import CUpload from '_c/c-upload'
import { getTableData } from '@/api/data'
export default {
  components: {
    CTable,
    CUpload
  },
  data () {
    return {
      updateDialog: false,
      selectItem: {},
      loading: false,
      total: 0,
      searchObj: {
        email: '',
        status: -1,
        identity: -1
      },
      columns: [
        {type: 'index', width: 60, align: 'center'},
        {title: '姓名', key: 'name', minWidth: 100},
        {title: '头像', key: 'avatar', minWidth: 100, render: (h, params, vm) => {
          return h('img',
            {
              attrs: {
                // src: row.imgUrl,
                src: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
                width: 60
              }
            })
        }},
        {title: '境内手机号', key: 'name', minWidth: 100},
        {title: '邮箱', key: 'name', minWidth: 100},
        {title: '中国常居地', key: 'name', minWidth: 100},
        {title: '所在地区', key: 'name', minWidth: 100},
        {title: '性别', key: 'name', minWidth: 100},
        {
          title: '操作',
          align: 'center',
          key: '$index',
          minWidth: 100,
          render: (h, { row }) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                style: {
                  marginRight: '0'
                },
                on: {
                  click: () => {
                    this.updateDialog = true
                    this.selectItem = row
                  }
                }
              },
              '编辑')
            ])
          }
        }
        // {
        //   title: '操作',
        //   align: 'center',
        //   key: 'operation',
        //   render: (h, params, vm) => {
        //     return h('div', [
        //       h('Poptip', {
        //         props: {
        //           confirm: true,
        //           title: '你确定要删除吗?'
        //         },
        //         on: {
        //           'on-ok': () => {
        //             vm.$emit('on-delete', params)
        //           }
        //         }}, [
        //         h('Button', {directives: [{name: 'permission', value: 'sys.role.add'}]}, '自定义删除')
        //       ])
        //     ])
        //   },
        //   width: 140
        // }
      ],
      tableData: []
    }
  },
  methods: {
    async search(pagation) {
      this.loading = true
      const {status, data} = await getTableData({...this.searchObj, ...pagation})
      this.loading = false
      if (status === 200) {
        this.tableData = data
      }
    },
    exportExcel() {},
    update() {}
  },
  mounted () {}
}
</script>

<style lang="less">
.dialog-user-update {
  .ivu-modal-body {
    padding: 40px;
  }
}
</style>
