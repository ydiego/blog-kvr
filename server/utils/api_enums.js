const API_SUCCESS = '0000' // search success
const API_NODATA = '0001' // search success but without data
const API_FAILED = '0002' // search error
const API_NOT_EXISTS = '1000' // interface of request does not exist
const API_NOT_PERMISSION = '1001' // 
const API_PARAMS_ERROR = '1002'
const SYSTEM_ERROR = '9999'

module.exports = {
  API_SUCCESS,
  API_FAILED,
  API_NODATA,
  API_NOT_EXISTS,
  API_NOT_PERMISSION,
  API_PARAMS_ERROR,
  SYSTEM_ERROR
}