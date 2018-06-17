const fs = require("fs");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

var db = {};
