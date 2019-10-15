const router = require('express').Router();
let Exercise = require('../models/Exercise');


router.get('/', (req,res,next)=>{
    Exercise.find()
    .then(exercises=> res.json(exercises))
    .catch(err => err.status(400).json('Error: ' + err));
});


router.post('/add',(req,res,next)=>{
    const username = req.body.username;
    const description= req.body.description;
    const duration =  Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(()=> res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

router.get('/:id',(req,res,next)=>{
    console.log('this is req', req)
    console.log('this is (this)>>>', this)
    console.log('this is params>>>', req.params)
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err))
});

router.delete('/:id',(req,res,next)=>{
    let id = req.params.id
    Exercise.findByIdAndDelete(id)
    .then(()=> res.json("Exercise Deleted"))
    .catch(err=> res.status(400).json('Error: ' + err))
});


router.post('/update/:id', (req,res,next)=>{
    let id = req.params.id
    Exercise.findByIdAndUpdate(id)
    .then(exercise=>{
        console.log('this is exercise>>>', exercise)
        console.log('this is the id param>>>', req.params.id)
        console.log("This is Exercise._id>>>",Exercise._id )
        exercise.username = req.body.username
        exercise.description = req.body.description
        exercise.duration = req.body.duration
        exercise.date = req.body.date
    
        exercise.save()
            .then(()=> res.json('Exercise update'))
            .catch(error=> res.status(400).json('Error: ' + error ))
    })
    .catch(error=> res.status(400).json('Error: ' + error))
})







module.exports = router;