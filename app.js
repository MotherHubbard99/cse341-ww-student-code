const express = require('express');
const path = require('path');
const app = express();

//serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

//route to serve index.html on the rrot path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
