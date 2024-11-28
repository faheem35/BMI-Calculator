document.addEventListener("DOMContentLoaded", () => { //to run after DOM is fully loaded
          const weightInput = document.getElementById("weight");
          const heightInput = document.getElementById("height");
          const bmiDisplay = document.getElementById("bmi");
          const descDisplay = document.getElementById("desc");
          const resetButton = document.querySelector(".btn-danger");
          const submitButton = document.querySelector(".btn-success");
      
          // Function to calculate BMI
          const calculateBMI = () => {
              const weight = parseFloat(weightInput.value);
              const heightCm = parseFloat(heightInput.value);
      
              // Validation
              if (weight <= 0 || heightCm <= 0 || isNaN(weight) || isNaN(heightCm)) {
                  alert("Please enter valid positive values for weight and height.");
                  return;
              }
      
              const heightM = heightCm / 100; // Convert height from cm to meters
              const bmi = (weight / (heightM * heightM)).toFixed(2); // Calculate BMI
      
              // Display BMI and category
              bmiDisplay.textContent = bmi;
      
              if (bmi < 18.5) {
                  descDisplay.textContent = " You are Underweight, Please lift up your weight";
                  descDisplay.style.fontWeight = "bold";
                  descDisplay.style.color = "blue";
              } else if (bmi >= 18.5 && bmi <= 24.9) {
                  descDisplay.textContent = "Your weight is Normal";
                  descDisplay.style.fontWeight = "bold";
                  descDisplay.style.color = "green";
              } else if (bmi >= 25 && bmi <= 29.9) {
                  descDisplay.textContent = "You are Overweight, Please reduce your Body fat";
                  descDisplay.style.fontWeight = "bold";
                  descDisplay.style.color = "orange";
              } else {
                  descDisplay.textContent = "Hey!!! You are Obese, Please take care of your body";
                  descDisplay.style.fontWeight = "bold";
                  descDisplay.style.color = "red";
              }
          };
      
          // Function to reset fields
          const resetFields = () => {
              weightInput.value = 0;
              heightInput.value = 0;
              bmiDisplay.textContent = "0";
              descDisplay.textContent = "N/A";
              descDisplay.style.color = "black";
          };
      
          // Event listeners
          submitButton.addEventListener("click", calculateBMI);
          resetButton.addEventListener("click", resetFields);
      });
      