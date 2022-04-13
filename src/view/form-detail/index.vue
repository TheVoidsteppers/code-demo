<template>
  <div>
    <pre>{
      name: 'Tom',
      birthday: '2022-01-01',
      hobby: ['code', 'basketball'],
      status: true,
      msg: '&lt;span style="font-size: 10px; font-weight: bold;"&gt;Audit Success&lt;/span&gt;'
   }</pre>

    <div class="form-item">
      <label for="name">Name: </label>
      <span>{{ form.name }}</span>
    </div>
    <div class="form-item">
      <label for="birthday">Birthday: </label>
      <span>{{ form.birthday }}</span>
    </div>
    <div class="form-item">
      <label>Hobby: </label>
      <span>
        <span v-for="(item, index) in form.hobby" :key="index">
          {{ index + 1 }}-{{ item }}
          <span v-show="index !== form.hobby.length - 1">,</span>
        </span>
      </span>
    </div>
    <div class="form-item">
      <label for="status">Status: </label>
      <span :class="{ 'success' : form.status , 'fail': !form.status }">{{ form.status ? 'Success' : 'Fail' }}</span>
      <!-- <span :style="{ 'color' : form.status ? 'green' : 'red' }">{{ form.status ? 'Success' : 'Fail' }}</span> -->
    </div>
    <div class="form-item">
      <label for="message">Message: </label>
      <span v-html="form.msg"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: 'Tom',
        birthday: '2022-01-01',
        hobby: ['code', 'basketball'],
        status: true,
        msg: '<span style="font-size: 10px; font-weight: bold;">Audit Success</span>'
      }
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.form-item {
  margin-bottom: 10px;
}
.btn {
  margin-top: 20px;
}
.success {
  color: green;
}
.gray {
  color: red;
}
pre {
  padding: 5px;
  border: 1px dashed #999;
}
ul,li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
