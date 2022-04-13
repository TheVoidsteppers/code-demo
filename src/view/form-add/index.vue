<template>
  <div>
    <div class="form-item">
      <label for="name">Name:</label><br/>
      <input v-model="form.name" id="name" name="name">
    </div>
    <div class="form-item">
      <label for="birthday">Birthday:</label><br/>
      <input v-model="form.birthday" id="birthday" type="date" name="birthday">
      <span class="mg-l5">You are {{ age }} years old</span>
    </div>
    <div class="form-item">
      <label>Hobby </label>
      <button v-show="form.hobby.length < 5" @click="handleAdd">Add</button><br/>
      <ul>
        <li v-for="(item,index) in form.hobby" :key="index">
          <span>{{ index + 1 }} </span>
          <input v-model="form.hobby[index]" class="mg-l5">
          <button v-show="form.hobby.length > 1" class="mg-l5" @click="handleDelete(index)">Delete</button>
        </li>
      </ul>
    </div>

    <input type="submit" value="Submit" class="btn" @click="handleSubmit">
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        birthday: '2022-01-01',
        hobby: ['']
      }
    }
  },
  computed: {
    age () {
      const nowYear = new Date().getFullYear()
      const date = new Date(this.form.birthday).getFullYear()
      return nowYear - date
    }
  },
  methods: {
    handleAdd () {
      this.form.hobby.push('')
    },
    handleDelete (index) {
      this.form.hobby.splice(index, 1)
    },
    handleSubmit () {
      window.alert(JSON.stringify(this.form, null, 2))
    }
  }
}
</script>

<style scoped>
.form-item {
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.btn {
  margin-top: 20px;
}
.mg-l5 {
  margin-left: 5px;
}
ul,li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
