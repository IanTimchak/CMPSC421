const public = 'src/public/html';

module.exports = {
    //Index page
    index: (req, res) => {
        res.status(200);
        res.set('Content-Type', 'text/html');
        res.sendFile('index.html', { root: public });
    },
}