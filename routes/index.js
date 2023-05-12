const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {

    res.status(404).send('ERROR: 404');
},);



module.exports = router;
