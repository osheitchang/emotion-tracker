let serverUrl = ''
if (process.env.NODE_ENV === 'production') {
  serverUrl = '' //This is the live version
} else {
  //serverUrl = 'http://localhost:5000'
}
module.exports = serverUrl