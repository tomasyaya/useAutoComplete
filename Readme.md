useAutoComplete

useAutoComplete is a React hook that enables users to hook an input with a set of options to autocomplete the inputs value.

Usage:

useAutoComplete takes three arguments.

1. Options: Array of strings. For example an array of cities in a given country.
2. DebounceCallback: Boolean. If true the callback returned by the hook will be debounced.
3. Time: Number or String. The time in milliseconds you whant to debounce the function.

useAutoComplete returns an array with three values:
[
predictions: an array with the options values for the user to display,
element: a ref to hook the input,
callback: a callback for the user to use inside its handleChange.
]

Instructions:

1. Call the useAutoComplete in your React functional component with your arguments.
2. Destructure the predictions, element and callback.
3. Hook the element in the input ref prop.
4. Display the the predictions in the UI you wish. useAutoComplete does not provide UI or Toggle effect to display the predictions, this is up to the end user to decide.
5. Call the callback inside your event handler with the inputs value.

   Example:

   const hanndleChange = event => {
   //.... what ever you whant to do with the event ..//
   callback(event.target.value)
   }

Result:

The predictions are going to be filtered according to the inputs value. When the user clicks in one prediction the inputs value is going to be set to that option.

RUN THE REPO WITH YARN DEV
