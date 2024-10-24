function createAc() {
    var data = {
        "name": "Sample Account",
        
    };

    Xrm.WebApi.createRecord("account", data).then(
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
