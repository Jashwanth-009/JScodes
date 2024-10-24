function createAc1() {
    try {
        
    
    var data = {
        "cr5b1_name": "Sample Account",
        
    };

    Xrm.WebApi.createRecord("cr5b1_formtable", data).then(
        function success(result) {
            console.log("Account created with ID: " + result.id);
            // perform operations on record creation
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );
} catch (error) {
    var alertStrings = { confirmButtonLabel: "Yes", text:error.message };
    var alertOptions = { height: 120, width: 260 };
    Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
        function success(result) {
            console.log("Alert dialog closed");
        },
        function (error) {
            concole.log(error.message);
        }
    );
}
}
