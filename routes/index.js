module.exports = {
    getHomePage: (req, res) => {
    let query = "SELECT * FROM `booking` ORDER BY id ASC";

     db.query(query, (err, result) => {
    if (err) {
   res.redirect('/');
          }
         res.render('index.ejs', {
    title: "Welcome to Flight booking system | View booking",
    booking: result
            });
        });
    },
};