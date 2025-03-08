<template>
    <div>
      <h1>User List</h1>
      <div v-if="users.length">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.password }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else>Loading users...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: []  // 用来存储从接口获取的用户数据
      };
    },
    created() {
      // 组件创建时获取用户数据
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('/api/users');
          this.users = response.data;  // 将获取到的数据赋值给 users
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需要进行调整 */
  table {
    width: 100%;
    margin-top: 20px;
  }
  
  th, td {
    text-align: center;
    padding: 10px;
  }
  
  th {
    background-color: #f8f9fa;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  </style>
  