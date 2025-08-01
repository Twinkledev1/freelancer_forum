/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Question1- randomly generated name, occupation, and rate according to the provided constants.

function getFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { name, occupation, rate };
}

// Initialize a state variable to an array of NUM_FREELANCERS freelancer objects.

let freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(getFreelancer());
}

// Write a function that returns the average rate of all freelancers in state.

function calculateAvgRate(freelancers) {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  const avg = total / freelancers.length;
  return avg.toFixed(2);
}

// initialize a state variable which will store the average rate of all freelancers.

let avgRate = calculateAvgRate(freelancers);

// function to represent a single freelancer

function freelancerRow(freelancer) {
  const $tr = document.createElement("tr");

  const $name = document.createElement("td");
  $name.textContent = freelancer.name;

  const $occupation = document.createElement("td");
  $occupation.textContent = freelancer.occupation;

  const $rate = document.createElement("td");
  $rate.textContent = `$${freelancer.rate}`;

  $tr.append($name, $occupation, $rate);

  return $tr;
}

// function to represent an array of freelancers.

function freelancerRows() {
  const $tbody = document.createElement("tbody");
  $tbody.id = "freelancerRows";

  for (const freelancer of freelancers) {
    $tbody.append(freelancerRow(freelancer));
  }

  return $tbody;
}

// function to represent the average rate of all freelancers.

function AverageRate() {
  const $div = document.createElement("div");
  $div.id = "AverageRate";
  $div.textContent = "Average hourly rate : $" + avgRate;
  $div.style.fontWeight = "bold";
  $div.style.marginBottom = "1em";

  return $div;
}

// Call a render function that will mount the application onto the document.

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="AverageRate"></div>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="freelancerRows"></tbody>
    </table>
  `;

  //    Replace placeholders with actual generated elements

  $app.querySelector("#AverageRate").replaceWith(AverageRate());
  $app.querySelector("#freelancerRows").replaceWith(freelancerRows());
}
render();
