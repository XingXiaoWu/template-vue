import FreeTable from '@/components/FreeTable'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
    title: 'FreeTable',
    component: FreeTable,
};
export const basic = () => ({
    components: { FreeTable },
    render() {
      return <free-table border data={this.data} 
      column={this.complexColumn}
      columnsProps={this.columnsProps}
      selection-change={this.selectionChange}
      pagination
      auto-scroll={false}
      total="100"
      page={this.searchBean.page}
      limit={this.searchBean.limit}
      pagination={this.getList}
    />;
    },
    methods: {
      selectionChange: linkTo('clicked'),
      getList: linkTo('clicked'),
    },
    data: () => ({
      searchBean: {
        page: 2,
        limit: 20,
      },
      columnsProps: {
        width: 'auto',
      },
      data: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '赵四',
          province: '东北',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          children: [
            {
              id: 11,
              date: '2000-05-02',
              name: '我是嵌套',
              province: '南极',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
            },
            {
              id: 12,
              date: '1999-05-02',
              name: '我是嵌套000',
              province: '美国',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
            },
          ],
        },
        {
          id: 3,
          date: '2016-05-04',
          name: '张三疯',
          province: '武当山',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          id: 4,
          date: '2016-05-044',
          name: '李连杰',
          province: '新加坡',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 T',
          zip: 200333,
        },
      ],
      complexColumn: [
        {
          label: '更多',
          prop: 'expand',
          type: 'expand',
          render: (h, scope) => <span>--{scope.row.name}--</span>,
        },
        { label: '选择', prop: 'selection', type: 'selection' },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        {
          label: '省份',
          prop: 'province',
          formatter(row, col) {
            return `中国 -${row[col.property]}`;
          },
        },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' },
        {
          label: '操作',
          prop: 'cation',
          align: 'center',
          width: 200,
          render: (h, scope) => (
                <div>
                  <el-button
                    icon="el-icon-edit-outline"
                    type="primary"
                    size="small"
                    onClick={() => {
                      console.log(scope);
                    }}
                  >
                    编辑
                  </el-button>
                  <el-button
                    icon="el-icon-delete"
                    type="danger"
                    size="small"
                    onClick={() => {
                      alert('del');
                    }}
                  >
                    删除
                  </el-button>
                </div>
          ),
        },
      ],
    }),
  });