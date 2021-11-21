const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successgful");
});
router.post('userpost', (req,res)=>{
    const username = req.body.username
    
})
module.exports = router;
