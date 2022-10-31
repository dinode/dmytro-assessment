import app from './server'
import config from '../config'

// start the server
app.listen(config.PORT, () => {
  console.log('Express server started on port: ' + config.PORT)
})
