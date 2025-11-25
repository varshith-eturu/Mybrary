const express = require('express')
const router = express.Router();
const Book = require('../models/book')

router.get('/', async(req, res) =>{
    let recentBooks 
    try{
        recentBooks = await Book.find().sort({createdDate : 'desc'}).limit(10).exec()
        
    }catch{
        recentBooks = []
    }
    res.render('index',{books : recentBooks})
    
})

module.exports = router