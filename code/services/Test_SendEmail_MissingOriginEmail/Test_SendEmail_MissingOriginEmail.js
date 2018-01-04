function Test_SendEmail_MissingOriginEmail(req, resp){
    SendGridEmail.init("dummyAPIKey") // Missing origin email as second parameter
    SendGridEmail.sendEmailToList("","","",function(err, data){
        if( ! err){
            resp.error("We should have failed becuase we did not include origin email")
        }
        resp.success("Successfully detected failure to provide origin email")
    })
}