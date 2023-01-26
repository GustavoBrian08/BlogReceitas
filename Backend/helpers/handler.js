const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')


const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),

    helpers:{
        ifCond: function(value1, value2){
            if (value1 == value2){
                console
                return true
            }else{
                return false
            }
        }
    }
}) 

