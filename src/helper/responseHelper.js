/**
 *
 * @param {object} properties
 */
function SuccessResponse(properties = { data, message }) {
  this.status = "success";
  this.data = data;
  this.message = message;
}

/**
 *
 * @param {object} properties
 */
function FailResponse(properties) {
  const { message } = properties;
  this.status = "failed";
  this.message = message;
}

module.exports = {
  SuccessResponse,
  FailResponse,
};
