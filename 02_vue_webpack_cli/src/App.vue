<template>
  <!-- 컴퍼넌드 최상위에는 반드시 1개의 요소만 존재해야 한다. -->
  <div>
    <TodoList category="취업 준비" />
    <TodoList category="SSAFY" />
    <TodoList category="기타" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
</style>