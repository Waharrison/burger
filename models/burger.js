var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(name, callback) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], callback);
    },

    updateOne: function(id, callback) {
        var condition = "id=" + id;
        orm.updateOne("burgers", { devoured: true}, condition, callback);
       
    },
};

module.exports = burger;
