const Tag = require('../model/tag')
const Op = require('sequelize').Op
const {
  responseError, 
  responseSuccess, 
  responseParamsError
} = require('../utils/response')

const list = async ctx => {
  const {page = 1, pageSize = 10, name} = ctx.query
  const where = {}
  if (name) {
    where.name = {
      [Op.like]: `%${name}%`
    }
  }
  const {rows: data, count: total} = await Tag.findAndCountAll({
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
  if (!params.name || params.name === '') {
    ctx.body = responseParamsError(null, '标签名不能为空')
    return 
  }
  try {
    const tag = await Tag.create(params)
    ctx.body = responseSuccess(tag, '创建成功')
  } catch (err){
    ctx.body = responseError(null, err.errors)
  }
}

const destroy = async ctx => {
  await Tag.destroy({where: ctx.request.body})
  ctx.body = responseSuccess(null, '删除成功')
}

module.exports = {
  create,
  list,
  destroy
}