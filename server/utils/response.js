const {
  API_SUCCESS,
  API_FAILED,
  API_NODATA,
  API_PARAMS_ERROR
}  = require('../utils/api_enums')

const defaultErrorMsg = 'something went wrong!'

function responseSuccess(data, msg = '') {
  return {
    code: API_SUCCESS,
    data,
    msg
  }
}

function responseError(data, msg = defaultErrorMsg) {
  return {
    code: API_FAILED,
    data,
    msg
  }
}

function responseParamsError(data, msg = defaultErrorMsg) {
  return {
    code: API_PARAMS_ERROR,
    data,
    msg
  }
}

function responseNoData(msg = 'data not found') {
  return {
    code: API_NODATA,
    data: null,
    msg
  }
}

module.exports = {
  responseError,
  responseSuccess,
  responseParamsError,
  responseNoData
}