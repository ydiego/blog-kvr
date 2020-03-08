const {
  API_SUCCESS,
  API_FAILED,
  API_NODATA,
  API_PARAMS_ERROR
}  = require('../utils/api_enums')

function responseSuccess(data, msg = '') {
  return {
    code: API_SUCCESS,
    data,
    msg
  }
}

function responseError(data, msg = '') {
  return {
    code: API_FAILED,
    data,
    msg
  }
}

function responseParamsError(data, msg = '') {
  return {
    code: API_PARAMS_ERROR,
    data,
    msg
  }
}

module.exports = {
  responseError,
  responseSuccess,
  responseParamsError
}