<template>
  <div class="manage-user-page">
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="userName" label="昵称"></el-table-column>
      <el-table-column prop="loginName" label="账号"></el-table-column>
      <el-table-column prop="avataUrl" label="头像"></el-table-column>
      <el-table-column prop="gender" label="性别">
        <template v-slot:default="{row}">
          <span>{{ {1: '男', 2: '女'}[row.gender] }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <!-- v-slot:default="{row, column, $index} -->
        <template v-slot:default="{row}">
          <div>
            <el-button @click="openEditDialog(row)">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="editDialogVisible"
      title="用户编辑"
      width="500px"
      class="edit-user"
      @close="editDialogVisible = false"
    >
      <div class="main">
        <el-form :model="currentEditUser">
          <el-form-item prop="id" label="用户id" label-width="100px">
            <el-input v-model="currentEditUser.id" readonly size="mini"></el-input>
          </el-form-item>
          <el-form-item prop="userName" label="昵称" label-width="100px" required>
            <el-input v-model="currentEditUser.userName" size="mini"></el-input>
          </el-form-item>
          <el-form-item></el-form-item>
        </el-form>
      </div>

      <div class="footer">
        <el-button type="primary">确定</el-button>
        <el-button>取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import userApi from '@/api/user.js';

export default {
  data() {
    return {
      tableData: [],
      editDialogVisible: false,
      currentEditUser: {},
    };
  },
  methods: {
    // 打开编辑对话框
    openEditDialog(row) {
      this.currentEditUser = row;
      this.editDialogVisible = true;
    },
  },
  async mounted() {
    let users = await userApi.queryAllUser();
    this.tableData = users;
  },
};
</script>


<style lang="scss" scoped>
.manage-user-page {
  padding: 10px;
  .edit-user {
    .main {
      ::v-deep .el-input {
        width: 200px;
      }
    }
    .footer {
      text-align: center;
    }
  }
}
</style>
