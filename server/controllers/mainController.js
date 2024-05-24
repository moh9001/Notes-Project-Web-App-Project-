// Home page

exports.homePage = async(req, res) =>{
    const locals = {
        title: 'Web project',
        description: 'Web devolpment Notes project'
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

// about page

exports.about = async(req, res) =>{
    const locals = {
        title: 'About Web project',
        description: 'Web devolpment Notes project'
    }

    res.render('about', locals);
}