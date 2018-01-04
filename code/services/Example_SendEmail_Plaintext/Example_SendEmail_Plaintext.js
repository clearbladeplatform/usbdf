// TODO Drop in your SendGrid API Key. See SendGridEmail Library notes.
var SEND_GRID_TOKEN = "<YOUR_SENDGRID_API_KEY>" // Example: "SG.Cf8LiKHeSQymCqMFL8sxxxxxxxxxx7_nsqd8clLfHGQPPDZologFWY73i4"
// TODO Drop in your origin email
var ORIGIN_EMAIL = "example@sendgrid.com"
// TODO Drop in recipient email
var EMAIL_RECIPIENTS = ["<RECIPIENT_EMAIL>"] // ex ["email1@email.com"]

function Example_SendEmail_Plaintext(req, resp){
    
    // Hint: `req` object contains useful information, check the logs to see its contents
    log(req)
    
    SendGridEmail.init(SEND_GRID_TOKEN, ORIGIN_EMAIL)    
    SendGridEmail.sendEmailToList("This is an example of a plaintext email sent with ClearBlade Platform's Send Grid Email Integration. It gets even better! Check out the other examples here: github.com/rreinold/IoT-Package-SendGrid-Email-Integration", "Howdy from Cooper at ClearBlade!", EMAIL_RECIPIENTS, function(err, data){
        if(err){
            log(JSON.stringify(err))
            resp.error(err)
        }
        var message = "Successful email sent!"
        log(message); 
        resp.success(message);
    })
}