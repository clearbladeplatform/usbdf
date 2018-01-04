/**
 * This example sends an email to an email list, with an HTML body
 * 
 * Parameters:
 *  emailList: array of strings
 *  ex. ["email1@gmail.com","email2@gmail.com","email3@gmail.com"]
 * 
*/

// TODO Drop in your SendGrid API Key. See SendGridEmail Library notes.
var SEND_GRID_TOKEN = "<YOUR_SENDGRID_API_KEY>" // Example: "SG.Cf8LiKHeSQymCqMFL8sxxxxxxxxxx7_nsqd8clLfHGQPPDZologFWY73i4"
var ORIGIN_EMAIL = "example@sendgrid.com"

function Example_SendEmail_Advanced(req, resp){
    
    // `req` object contains useful information, check the logs to see its contents
    log(req)
    
    // `req` object contains any parameters you may pass into your service
    // so send this email to a list you will pass in as parameter
    var emailRecipientList = req.params.emailList
    
    var timestamp = new Date();
    var message = 
        "Hello!<br><br>We're sending this friendly reminder about your tags in your <b>Connected Job Site</b>." +
        "<br><br>" +
        "Our records show the time duration since the last tag position update has <b>exceeded</b> the allowed threshold.<br><br>" +
        "Time Since Last Update:<br><b>a few seconds ago</b><br>Tag ID:<br><b>E4956EFFFEA50869</b><br>Timestamp (UTC): <br><b>" + timestamp + "</b><br><br>" +
        "<i> Tip: If you build a Data Visualization Portal, you can put a link here to view a dashboard of your IoT Solution!</i><br><br>" + 
        "Thank you!<br>ClearBlade"
    
    var subject = "ClearBlade IoT Platform - Connected Job Site - Inactivity Alert"
    SendGridEmail.init(SEND_GRID_TOKEN, ORIGIN_EMAIL)    
    SendGridEmail.sendEmailToList(message, subject, emailRecipientList, function(err, data){
        if(err){
            log(JSON.stringify(err))
            resp.error(err)
        }
        var message = "Successful email sent!"
        log(message); 
        resp.success(message);
    })
}