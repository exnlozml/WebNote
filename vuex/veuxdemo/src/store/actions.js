export default  {
  // context: 上下文
  // aupdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000);
  // },

  aupdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);
        resolve('111')
      }, 1000);
    })
  }

}