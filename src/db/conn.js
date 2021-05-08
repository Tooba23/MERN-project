const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("sucessfull")
}).catch((err) => {
    console.log(err)
});