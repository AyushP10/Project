// Importing Express
const express = require('express');
const Model = require('../Models/userModel');
const jwt = require('jsonwebtoken');

const router = express.Router();
// consrt jwt = require('jsonwebtoken');
// const verifyToken = require('../middlewares/verifyToken');
// require('dotenv').config();

router.post('/add', (req,res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

});

// Get All 
router.get('/getall', (req,res) => {

    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

// : denotes URL Parameter
// router.get('/getbycity/:city', (req, res) => {
//     console.log(req.params.city);
    
//     Model.find({ city: req.params.city })

//     .then((result) => {
//         res.status(200).json(result);
//     }).catch((err) => {
//         res.status(500).json(err);
//     });
// });


// Get by Email
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    
    Model.findOne({ email: req.params.email })

    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


//GetByID
router.get('/getbyid/:id', (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }). catch((err) => {
        res.status(500).json(err);
    });
});


//UPDATE
router.put('/update/:id', (req,res) => {
    
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    })

});


// DELETE
router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            //generate token

            const { _id, name, email } = result;
            const payload = { _id, name, email };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '1d' },
                (err, token) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json(err);
                    }else {
                        res.status(200).json({ token });
                    }
                }
            )


        }else {
            res.status(401).json({message: "Invalid Credentials"});

        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})


// Exporting Router
module.exports = router;


