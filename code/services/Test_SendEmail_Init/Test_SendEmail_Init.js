function Test_SendEmail_Init(req, resp){
    SendGridEmail.sendEmailToList(null,null,null,function(err, data){
        if( ! err){
            resp.error("We should have failed becuase we did not init")
        }
        resp.success("Successfully detected failure to init")
    })
}