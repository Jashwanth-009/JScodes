function createApiname1() {
    debugger;
        var data = {
            "cr5b1_Name": "Api account",
        };
    
        Xrm.WebApi.createRecord("cr5b1_apicall", data).then(
            function success(result) {
                console.log("Account created with ID: " + result.id);
                // perform operations on record creation
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }
    