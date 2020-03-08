const Article = require('../model/article')
const Op = require('sequelize').Op
const {
  responseError, 
  responseSuccess, 
  responseParamsError
} = require('../utils/response')

const list = async ctx => {
  const {page = 1, pageSize = 10, title, tag} = ctx.query
  const where = {}
  if (title) {
    where.title = {
      [Op.like]: `%${title}%`
    }
  }
  if (tag) {
    where.tag = {
      [Op.like]: `%${tag}%`
    }
  }
  const {rows: data, count: total} = await Article.findAndCountAll({
    where,
    offset: (page - 1) * pageSize,
    limit: +pageSize,
    order: [
      ['createdAt', 'DESC']
    ]
  })
  const res = {
    data,
    total,
    totalPage: Math.ceil(total / pageSize)
  }
  ctx.body = responseSuccess(res)
}

const create = async ctx => {
  const params = ctx.request.body
  if (!params.title) {
    ctx.body = responseParamsError(null, '标题不能为空')
    return false
  }
  try {
    await Article.create(params)
    ctx.body = responseSuccess(null, '添加成功!')
  } catch (err) {
    ctx.body = responseError(null, err.errors)
  }
}

const detail = async ctx => {
  const {id} = ctx.query
  const where = {id}
  const article = await Article.findOne({where})
  const visitCount = article.visitCount + 1
  Article.update({visitCount}, {where})
  article.visitCount = visitCount
  article.tag = article.tag && article.tag.split(',')
  ctx.body = responseSuccess(article)
}

const update = async ctx => {
  const {id, title, author = 'ydiego', summary, tag, content, content_md} = ctx.request.body
  const res = await Article.update(
    {id,title, author, summary, tag, content, content_md},
    {where:{id}}
  )
  ctx.body = responseSuccess(null, '修改成功')
}

const destroy = async ctx => {
  const {id} = ctx.request.body
  if (!id) {
    ctx.body = responseParamsError(null, '文章id不能为空')
    return false
  }
  await Article.destroy({where: {id}})
  ctx.body = responseSuccess(null, '删除成功')
}

module.exports = {
  list,
  detail,
  create,
  update,
  destroy
}