const div = document.querySelector('.container');

        // Function to prompt the user for marks and validate them to be <= 100
        function getValidMarks(subject) {
            let marks;
            do {
                marks = parseInt(prompt(`Enter your ${subject} Marks (between 0 and 100)`));
                if (isNaN(marks) || marks < 0 || marks > 100) {
                    alert("Please enter a valid number between 0 and 100.");
                }
            } while (isNaN(marks) || marks < 0 || marks > 100);
            return marks;
        }

        // Get marks for each subject with validation
        var Math = getValidMarks("Math");
        var Physics = getValidMarks("Physics");
        var Chemistry = getValidMarks("Chemistry");
        var English = getValidMarks("English");
        var Urdu = getValidMarks("Urdu");

        // Calculate the total obtained marks
        var ObMarks = Math + Physics + Chemistry + English + Urdu;

        // Define the total marks possible
        var total = 500; // Now each subject is out of 100, so total is 500.

        // Calculate the percentage
        var percentage = (ObMarks / total) * 100;

        // Display the result in the HTML element
        div.innerHTML = `
        <h3>Marks in Each Subject:</h3>
          <ul>
            <li><span>Math:</span> ${Math}</li>
            <li><span>Physics:</span> ${Physics}</li>
            <li><span>Chemistry:</span> ${Chemistry}</li>
            <li><span>English:</span> ${English}</li>
            <li><span>Urdu:</span> ${Urdu}</li>
          </ul>
          <h1>Total Marks Obtained: ${ObMarks} / ${total}</h1>
          <div class="total">
            <h2>Your percentage is: <span class="percentage">${percentage.toFixed(2)}%</span></h2>
          </div>
          
        
        `;
