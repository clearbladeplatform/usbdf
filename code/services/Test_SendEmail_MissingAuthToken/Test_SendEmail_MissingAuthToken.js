function Test_SendEmail_MissingAuthToken(req, resp){
    SendGridEmail.init(null, "originEmail@gmail.com") // Missing auth token
    SendGridEmail.sendEmailToList("","","",function(err, data){
        if( ! err){
            resp.error("We should have failed becuase we did not include auth token")
        }
        resp.success("Successfully detected failure to provide auth token")
    })
}