const {
  API_SUCCESS,
  API_FAILED,
  API_NODATA,
  API_PARAMS_ERROR,
  API_NOT_PERMISSION
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

function responsePermissionError(msg = 'login needed') {
  return {
    code: API_NOT_PERMISSION,
    data: null,
    msg
  }
}

module.exports = {
  responseError,
  responseSuccess,
  responseParamsError,
  responseNoData,
  responsePermissionError
}