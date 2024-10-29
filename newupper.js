function newupper(executionContext) {
    debugger; // Pause execution for debugging
    var formContext = executionContext.getFormContext(); // Get the form context
    var fieldName = "cr5b1_name"; // Replace with your field name
    var attribute = formContext.getAttribute(fieldName); // Get the attribute

    if (attribute) {
        var inputValue = attribute.getValue(); // Get the current value

        if (inputValue) {
            // Check if inputValue is a string
            if (typeof inputValue === 'string') {
                // Convert to uppercase
                var upperCaseValue = inputValue.toUpperCase();

                // Validate against allowed characters (letters, numbers)
                var specialCharacters = upperCaseValue.match(/[^A-Z0-9]/g);

                if (specialCharacters) {
                    // Show an error message to the user
                    Xrm.Utility.alertDialog("Special characters are not allowed. Please correct the input.");

                    // Prevent form saving
                    executionContext.getEventArgs().preventDefault();

                    // Optionally reset the field value or remove invalid characters
                    var validValue = upperCaseValue.replace(/[^A-Z0-9]/g, '');
                    attribute.setValue(validValue); // Update with valid value
                } else {
                    // If there are no special characters, set the validated input
                    attribute.setValue(upperCaseValue);
                }
            } else {
                console.error("Input value is not a string.");
            }
        }
    } else {
        console.error("Field not found: " + fieldName);
    }
}

// Attach this function to the field's OnChange event and the form's OnSave event in the form editor.
