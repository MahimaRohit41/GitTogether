const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MahimaRohit:nldpwo55yctTYR5n@cluster1.zmrw7q4.mongodb.net/GitTogether');
};

module.exports = connectDB;