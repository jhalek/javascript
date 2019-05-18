// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each  object
tableData.forEach(function(alein) {
  console.log(alein);

// Step 2:  Use d3 to append one table row `tr` for each object
  var row = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each value  
  Object.entries(alein).forEach(function([key, value]) {
      console.log(key, value);

// Step 4: Use d3 to append 1 cell per value
      var cell = row.append("td");

// Step 5: Use d3 to update each cell's text with
      cell.text(value);
         });
       });

// Declare new variable
var filtered = data;      

// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Log the user input and the table data
  console.log(inputValue);
  console.log(filtered);

  // Filter the data based on user input
  var filteredData = filtered.filter(location => location.datetime === inputValue);
  
  // Loop through filtered data and print matching results
  tbody.html("");
  console.log(filteredData);
  var newtabledata = filteredData;
  newtabledata.forEach((alein) => {
  var row = tbody.append("tr");
  Object.entries(alein).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});


});