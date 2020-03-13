module.exports = function KVRAuth() {
  return async (ctx, next) => {
    await Promise((resolve, reject) => {
      resolve(ctx)
    })

    await next()
  }
}