This is a quiz app built in React.

## Question Types
There are 3 different types of multiple choice question components.

# SingleSelect
Allows you to select one answer from the available options. If you select a second answer, the previous answer is deselected.

# MultiSelect
Allows you to select one or more answers from the available options.

# OrderSelect
Requires you to select all answers before you can submit. As you select each answer, the selection order is desplayed to the left-side of the answer component. Deselecting any answer will also deselect all answers with an order number higher than the deselected one.

## Other information

Data is loaded into the app on initalisation via a mock api which provides a JSON file.

When the quiz is completed, the results of the quiz are displayed. If the user fails, then they are asked to try again. Otherwise a transcript of each answer is provided with a details about what answers were selected correctly or incorrectly.
