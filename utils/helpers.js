// const Handlebars = require('handlebars');

// Handlebars.registerHelper('format_date', (date) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(date).toLocaleDateString(undefined, options);
// });

module.exports = {
    format_date: date => {
        console.log(date)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
};