function Length(ExecutionContextObj) {
    debugger;
    var formContext = ExecutionContextObj.getFormContext();
    var fieldValue = formContext.getAttribute("cr5b1_name") ? 
    formContext.getAttribute("cr5b1_name").getValue() : null;
    if (fieldValue && fieldValue.length > 40) {
        Xrm.Utility.alertDialog("more than 40 characters");
 
    }
    else{
        console.log("Error displaying error alert");
    }

}
// function Length(ExecutionContextObj) {
//     try {
//         // Get the form context from the execution context
//         var formContext = ExecutionContextObj.getFormContext();
        
//         // Get the field value, checking if the attribute exists
//         var fieldValue = formContext.getAttribute("cr5b1_name") ? 
//                          formContext.getAttribute("cr5b1_name").getValue() : null;

//         // Check if the field value length is greater than 2
//         if (fieldValue && fieldValue.length > 10) {
//             // Show an alert dialog if the condition is met
//             var alertStrings = {
//                 confirmButtonLabel: "OK",
//                 text: "The field value exceeds 10 characters.",
//                 title: "Validation Alert"
//             };

//             var alertOptions = { height: 200, width: 400 };

//             Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
//                 function () {
//                     console.log("Alert displayed successfully.");
//                 },
//                 function (error) {
//                     console.log("Error displaying alert: ", error);
//                 }
//             );
//         } else {
//             console.log("Field value is within the acceptable length.");
//         }
//     } catch (error) {
//         console.error("An error occurred: ", error);
//     }
// }
