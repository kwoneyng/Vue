Vue.component('todo-list', {
  template: `
  <div class="todo-list">
    <h2>{{ category }}</h2>
    <input type="text" v-model="newTodo">
    <button v-on:click="addTodo">+</button>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <span>{{ todo.content }}</span>
        <button v-on:click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
  `,
  props: {
    'category': {
      type: String,
      required: true,
    },
    // 'propA': Number, 숫자 타입만 허용 (null 은 어떤 타입이든 허용)
    // 'propB': [String, Number], String Number 타입만 허용
    // 'propC': {
    //   type: String,
    //   required: true,
    // }, 문자열이며 반드시 필요합니다.
    // 'propD': {
    //   type: Number,
    //   default: 100,
    // }, 숫자이며 기본 값을 가집니다.
    // 'propE': {
    //   type: Object,
    //   default: function() {
    //     return { message: 'hello' }
    //   },
    // }, 객체/배열의 기본값은 함수 반환형으로 작성합니다.
    // 'propF': {
    //   validator: function(value) {
    //     return value > 10
    //   }
    // }
  },

  // https://kr.vuejs.org/v2/guide/components.html#data-는-반드시-함수여야합니다
  // 요약: 일반 object 로 작성하면 모든 component 가 하나의 데이터를 공유할 수 있기 때문
  data: function () {
    return {
      todos: [],
      newTodo: '',
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        id: new Date().getTime(),
        content: this.newTodo,
      })
      this.newTodo = ''
    },
    removeTodo: function (target_id) {
      const newTodos = this.todos.filter(todo => {
        return todo.id !== target_id
      })
      this.todos = newTodos
    }
  },
})