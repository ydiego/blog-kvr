const Article = require('../model/article')
const {articleAuthor} = require('../../config/index')
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
    pageSize: +pageSize,
    currentPage: page,
    totalPage: Math.ceil(total / pageSize)
  }
  ctx.body = responseSuccess(res)
}

const create = async ctx => {
  const params = ctx.request.body
  if (!params.title) {
    ctx.body = responseParamsError(null, 'title must be required!')
    return false
  }
  try {
    await Article.create(params)
    ctx.body = responseSuccess(null, 'success!')
  } catch (err) {
    ctx.body = responseError(null, err.errors)
  }
}

const detail = async ctx => {
  const {id} = ctx.query
  if (!id) {
    ctx.body = responseParamsError(null, 'invalid article id!')
    return false
  }
  const where = {id}
  const article = await Article.findOne({where})

  const prev = await getArticleBetweenId(id, 'lt', 'DESC')
  const next = await getArticleBetweenId(id, 'gt', 'ASC')
  
  const visitCount = article.visitCount + 1
  Article.update({visitCount}, {where})
  article.visitCount = visitCount
  article.tag = article.tag && article.tag.split(',')

  article.setDataValue('prev', prev)
  article.setDataValue('next', next)
  ctx.body = responseSuccess(article)
}

async function getArticleBetweenId(id, direct, desc) {
  const r = await Article.findOne({
    attributes: ['id', 'title'],
    where: {
      'id' : {
        [Op[direct]]: id
      },
    },
    order: [
      ['id', desc]
    ]
  })
  return r
}

const update = async ctx => {
  const {id, title, author = articleAuthor, summary, tag, content, content_md} = ctx.request.body
  if (!id) {
    ctx.body = responseParamsError(null, 'invalid article id')
    return 
  }
  try {
    await Article.update(
      {id,title, author, summary, tag, content, content_md},
      {where:{id}}
    )
    ctx.body = responseSuccess(null, 'updated')
  } catch (err) {
    ctx.body = responseError(null, 'something went wrong')
  }
}

const destroy = async ctx => {
  const {id} = ctx.request.body
  if (!id) {
    ctx.body = responseParamsError(null, 'article id required')
    return false
  }
  await Article.destroy({where: {id}})
  ctx.body = responseSuccess(null, 'deleted')
}

module.exports = {
  list,
  detail,
  create,
  update,
  destroy
}