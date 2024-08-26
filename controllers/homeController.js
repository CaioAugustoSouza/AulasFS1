class HomeController{
    homeView (req, res){
        res.render ('home.ejs');
    }
}

module.exports = HomeController;