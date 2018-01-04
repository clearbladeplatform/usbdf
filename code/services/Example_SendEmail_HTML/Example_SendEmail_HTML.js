// TODO Drop in your SendGrid API Key. See SendGridEmail Library notes.
var SEND_GRID_TOKEN = "<YOUR_SENDGRID_API_KEY>" // Example: "SG.Cf8LiKHeSQymCqMFL8sxxxxxxxxxx7_nsqd8clLfHGQPPDZologFWY73i4"
// TODO Drop in your origin email
var ORIGIN_EMAIL = "example@sendgrid.com"
// TODO Drop in recipient email
var EMAIL_RECIPIENTS = ["<RECIPIENT_EMAIL>"] // ex ["email1@email.com"]

function Example_SendEmail_HTML(req, resp){
        
    // Hint: `req` object contains useful information, check the logs to see its contents
    log(req)
    
    var timestamp = new Date();
    var message = 
        "Hello!<br><br>We're sending this friendly reminder about your tags in your <b>Connected Job Site</b>." +
        "<br><br>" +
        "Our records show the time duration since the last tag position update has <b>exceeded</b> the allowed threshold.<br><br>" +
        "Time Since Last Update:<br><b>a few seconds ago</b><br>Tag ID:<br><b>E4956EFFFEA50869</b><br>Timestamp (UTC): <br><b>" + timestamp + "</b><br><br>" +
        "Thank you!<br>ClearBlade"
    
    var subject = "ClearBlade IoT Platform - Connected Job Site - Inactivity Alert"
    SendGridEmail.init(SEND_GRID_TOKEN, ORIGIN_EMAIL)    
    SendGridEmail.sendEmailToList(message, subject, EMAIL_RECIPIENTS, function(err, data){
        if(err){
            log(JSON.stringify(err))
            resp.error(err)
        }
        var message = "Successful email sent!"
        log(message); 
        resp.success(message);
    })
}