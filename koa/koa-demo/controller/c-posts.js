exports.getPosts = async (ctx) => {
      // console.log(ctx.session,'//////');
      // ctx.response.body = '文章'
      await ctx.render('[posts]', {
            session: ctx.session
      })
}