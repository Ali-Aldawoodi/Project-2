const withAuth = (req, res, next) => {
    // Checks if the user is logged in by inspecting the 'logged_in' property in the session.
    if (!req.session.logged_in) {
        // If the user is not logged in, redirects them to the login page.
        res.redirect('/login');
    } else {
        // If the user is logged in, proceeds to the next middleware or route handler.
        next();
    }
};

module.exports = withAuth;
