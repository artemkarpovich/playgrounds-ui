export default function(error) {
  if (error.response && error.response.data) {
    return error.response.data.payload;
  }

  return new Error('unknown error');
}
