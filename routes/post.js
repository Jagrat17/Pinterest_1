const mongoose = require('mongoose');

//har post ek pass ek unique id hogi id save karne ka ye type hota hi line number 6.
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"  
  },
  title: String,
  description: String,
  image: String,
});



module.exports = mongoose.model("post", postSchema);