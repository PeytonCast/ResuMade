const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI || 'mongodb://localhost/resumade', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => { console.log('Database connected successfully!');
})
.catch(e => console.log('could not connect to mongodb', e));

module.exports = mongoose.connection;
