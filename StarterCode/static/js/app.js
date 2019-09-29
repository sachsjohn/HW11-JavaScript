// from data.js
var tableData = data;

// YOUR CODE HERE!

// Level 1: Automatic Table and Date Search

// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

// The provided html file defines tbody for the table to be housed in
var tbody = d3.select('tbody');


// Create a function that can be called both when the page is loaded initially and when it is called by the filter
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
function populateTable(data) { 

    // remove any children from the list
    tbody.html('');

    // Don't name your row variable and your row data the same thing
    data.forEach(function(datum) {
        var row = tbody.append("tr");
        
        // Loop through each value in your row
        Object.entries(datum).forEach(function([key, value]) {
            // Append a cell to the row for each value
            // in the row
            var cell = row.append("td");
            cell.text(value)
        });
      });

    // Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
    // data are being imported correctly this time
}

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// the provided filter form is '#filter-btn'
var button = d3.selectAll('#filter-btn');

button.on('click', function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');

    // Get the value property of the input elemen
    var inputValue = inputElement.property('value');

    // Filter the data based on 
    var filteredData = tableData.filter(datum => datum.datetime === inputValue);

    // Call the populate function using the filtered data set
    populateTable(filteredData);
})

populateTable(tableData);