// function deleteRecord() {
//     debugger;
//     var accountId = Xrm.Page.data.entity.getId(); 
//     var id = accountId.replace(/[{}]/g, '');
//     Xrm.WebApi.deleteRecord("cr5b1_name", id).then(
//         function success(result) {
//             console.log("Account deleted successfully");
//             // Perform operations after record deletion if needed
//         },
//         function (error) {
//             console.log("Error deleting account: " + error.message);
//             // Handle error conditions
//         }
//     );
// }

// // Example usage
function deleteRecord(accountId) {
    debugger;
    try {
        var accountId = Xrm.Page.data.entity.getId(); 
        if (!accountId) {
            throw new Error("Account ID is not available.");
        }
        
        var id = accountId.replace(/[{}]/g, '');

        Xrm.WebApi.deleteRecord("cr5b1_employ", id).then(
            function success(result) {
                console.log("Account deleted successfully");
                // Perform operations after record deletion if needed
            },
            function (error) {
                console.log("Error deleting account: " + error.message);
                // Handle error conditions
            }
        );
    } catch (e) {
        console.error("An error occurred: " + e.message);
        // Additional error handling if needed
    }
}














