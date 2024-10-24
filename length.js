window.count = 0;
function Length(ExecutionContextObj) {
    debugger;
    try {
        
        if (window.count >=1) {
            return;
        }
        
        ExecutionContextObj.getEventArgs().preventDefault();
        console.log("Execution Context Object: ", ExecutionContextObj);
        
        // Check if ExecutionContextObj is provided
        if (!ExecutionContextObj) {
            console.error("Execution context is undefined.");
            return;
        }

        // Get the form context
        var formContext = ExecutionContextObj.getFormContext();
        
        // Check if formContext is retrieved successfully
        if (!formContext) {
            console.error("Form context is undefined.");
            return;
        }

        // Get the field value
        var fieldValue = formContext.getAttribute("cr5b1_name") ? 
                         formContext.getAttribute("cr5b1_name").getValue() : null;

        // Validate the length of the field value
        if (fieldValue && fieldValue.length > 40) {
            var alertStrings = {
                confirmButtonLabel: "OK",
                text: "The field value exceeds 40 characters.",
                title: "Validation Error"
            };

            var alertOptions = { height: 200, width: 400 };

            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
                function () {
                
                    console.log("Alert displayed successfully.");
                },
                function (error) {
                    console.log("Error displaying alert: ", error);
                }
            );
        }
        else{
            setTimeout(() => {
                window.count += 1;
                formContext.data.refresh(true);
                formContext.data.entity.addOnPostSave(function(){
                    var entityFormOptions = {};
entityFormOptions["entityName"] = "cr5b1_length";
entityFormOptions["entityId"] = formContext.data.entity.getId().slice(1,-1);

// Open the form.
Xrm.Navigation.openForm(entityFormOptions).then(
    function (success) {
        console.log(success);
    },
    function (error) {
        console.log(error);
    });
                })
            }, 2000);
            
        }
    } catch (error) {
        var alertStrings = {
            confirmButtonLabel: "OK",
            text: "An unexpected error occurred. Please try again.",
            title: "Error"
        };

        var alertOptions = { height: 200, width: 400 };

        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function () {
                console.log("Error alert displayed successfully.");
            },
            function (error) {
                console.log("Error displaying error alert: ", error);
            }
        );
    }
}
