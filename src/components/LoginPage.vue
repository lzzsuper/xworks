<template>
  <div class="login-container">
    <h2 class="login-title">登录</h2>
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">用户名</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          class="form-input"
          placeholder="请输入用户名"
        />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">密码</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="form-input"
          placeholder="请输入密码"
        />
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.username === 'admin' && this.password === '123456') {
        alert('登录成功！');
        this.$router.push('/home');
      } else {
        alert('用户名或密码错误！');
      }
    },
  },
};
</script>

<style scoped>
/* 全局样式 */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 登录容器 */
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 标题 */
.login-title {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
}

/* 表单 */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 输入框容器 */
.form-group {
  text-align: left;
}

/* 输入框标签 */
.form-label {
  font-size: 14px;
  color: #555555;
  margin-bottom: 8px;
  display: block;
}

/* 输入框 */
.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 14px;
  color: #333333;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #007bff;
}

/* 登录按钮 */
.login-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: linear-gradient(135deg, #0056b3, #003d80);
}
</style>