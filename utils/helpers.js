const Handlebars = require('handlebars');

Handlebars.registerHelper('format_date', (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
});
