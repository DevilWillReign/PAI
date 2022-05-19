const sqlite3 = require("sqlite3").verbose();
const path = require("path")
const db = new sqlite3.Database(path.resolve("test.db"), (err) => {
    if (err) {
      console.log(`Error Occured - ${err.message}`);
    } else {
      console.log('DataBase Connected');
    }
  });

function query(sql, params, callback) {
    db.prepare(sql).all(params, function(err, rows) {
        if (err) {
            console.log(`Error Occured - ${err.message}`);
        } else {
            callback(rows)
        }
    });
}

function run(sql) {
    db.run(sql, (err) => {
        if (err) {
            console.log(`Error Occured - ${err.message}`);
        } else {
            console.log('Sql query run');
        }
    })
}
  
module.exports = {
    query,
    run
}