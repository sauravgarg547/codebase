import app from './app.js';
import connectDB from './config/db.js';
import { PORT } from './config/utils.js';
import { connectToRedis } from './services/redis.js';

const port = PORT || 8080;

// Connect to redis
connectToRedis();

//Connect to Mongodb
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error);
  });

  // hello everyone this is tesing//
good job
