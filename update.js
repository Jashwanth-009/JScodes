// function update(accountId, data) {
//     debugger;
//     // Remove curly braces from the account ID if necessary
//     var id = accountId.replace(/[{}]/g, '');

//     Xrm.WebApi.updateRecord("cr5b1_leavee", id, data).then(
//         function success(result) {
//             console.log("Account updated successfully");
//             // Perform operations on record update if needed
//         },
//         function (error) {
//             console.log("Error updating account: " + error.message);
//             // Handle error conditions
//         }
//     );
// }

// // Define the data to update a record
// var data = {
//     "cr5b1_name": "Updated Sample Account"
// };
// var accountId = Xrm.Page.data.entity.getId(); // Get the current record's ID
// update(accountId,data);
function update() {
    debugger;
    // Remove curly braces from the account ID if necessary
    var accountId = Xrm.Page.data.entity.getId(); 
    var id = accountId.replace(/[{}]/g, '');

    // Define the data to update a record
    var data = {
        "cr5b1_name": "Updated Sample Account" 
    };

    Xrm.WebApi.updateRecord("cr5b1_leavee", id, data).then(
        function success(result) {
            console.log("Account updated successfully");
            // Perform operations on record update if needed
        },
        function (error) {
            console.log("Error updating account: " + error.message);
            // Handle error conditions
        }
    );
}



// Get the current record's ID


// Ensure accountId is valid before calling update
// if (accountId) {
//     update(accountId, data);
// } else {
//     console.error("Account ID is not available.");
// }


