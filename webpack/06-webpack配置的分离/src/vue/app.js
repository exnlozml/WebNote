export default {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
  </div>
  `,
  data() {
    return {
      message: 'hello webpack',
      name: 'codewhy'
    }
  },
  methods: {
    btnClick() {
      console.log('我是Webpack');
    }
  },
}