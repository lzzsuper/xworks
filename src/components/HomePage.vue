<template>
    <div class="home-container">
      <h2>欢迎来到主页！</h2>
      <p>您已成功登录。</p>
      <button @click="logout">退出登录</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'HomePage',
    methods: {
      logout() {
        // 模拟退出登录
        alert('已退出登录！');
        this.$router.push('/login'); // 跳转到登录页
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c82333;
  }
  </style>