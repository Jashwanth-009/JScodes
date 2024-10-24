function retrieve(recordId) {
    // Check if the recordId is valid (not empty or null)
    if (recordId && recordId.length > 0) {
        // Remove braces from the GUID
        var id = recordId.replace(/[{}]/g, '');

        Xrm.WebApi.retrieveRecord("cr5b1_apicall", id, "?$select=cr5b1_name").then(
            function success(result) {
                console.log("Retrieved values: Name: " + result.cr5b1_name);
                // perform operations on record retrieval
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    } else {
        console.log("No valid record ID provided. Please ensure you are working with an existing record.");
    }
}

// Example usage
var recordId = Xrm.Page.data.entity.getId(); // Get the current record's ID
retrieve(recordId);
// Get the value of a specific attribute
var nameValue = Xrm.Page.getAttribute("cr5b1_name").getValue();
console.log("Current Name on Form: " + nameValue);
 