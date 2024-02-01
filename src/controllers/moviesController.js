const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movie.findAll()
      .thend((movies) => {
        return (
          res.render("moviesList"),
          {
            movies,
          })
      })
      .catch((error) => console.log(error));
  },
  new: (req, res) => {
db.Movie.findAll({
order:[
    [
        'relaease_date','DESC'
    ]
], 
limit:5
})
.thend((movies) => {
    return (
      res.render("newestMovies"),
      {
        movies,
      })
  })
  
.catch((error) => console.log(error));
  },
  recommended: (req, res) => {
    db.Movie.findAll({
        order:[
            [
                'relaease_date','DESC'
            ]
        ], 
        limit:5
        })
        .thend((movies) => {
            return (
              res.render("newestMovies"),
              {
                movies,
              })
          })
          
        .catch((error) => console.log(error));
          
  },
  detail : (req,res)  => {
    const  {id} = req.params;
    db.Movie.findByPk(id)
            .then((movie) => {
                return res.render('moviesDetail', {
                    movie
                })
            })
            .catch(error => console.log(error))
   
}
};
