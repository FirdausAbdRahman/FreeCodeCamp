//Data Visualization with D3: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset


const positionData = [
        [1, 7, -4],
        [6, 3, 8],
        [2, 8, 3]
    ]
    // Add your code below this line

const output = d3.max(positionData, (d) => d[2]); // Change this line

// Add your code above this line

d3.select("body")
    .append("h2")
    .text(output)