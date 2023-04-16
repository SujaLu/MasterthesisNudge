let menuChoice = '';
let drinkChoice = '';
let paymentChoice = '';

function showInitialPage() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Welcome to the Canteen of the University of Berne</h1>
    <p>Are you tired of standing in the line? Or planning your lunchtime around peak hours? You are in luck! From today on, we are offering an online order service where you can place your order,
    even pay online. At the end of your order you will receive a number and it will be displayed on the monitor at the canteen, if your food is ready. Please, move forward and choose your menu. </p>
    <button onclick="showMenu()">Show me all the menus</button>
  `;
  document.body.style.backgroundImage = "url('Images/mensa.jpeg')";
}

function showMenu() {
  const container = document.querySelector('.container');
  container.innerHTML = `
  <h1>Menu Options</h1>
  <form onsubmit="submitForm(event)">
    <label>
      <input type="radio" name="menu" value="Menu 1" required>
      <div class="food-info">
        <img class="menu1" src="Images/vegan.png" alt="Menu1">
        <p> Gerösteter Blumenkohl mit Curry Dip</p>
        <b> Beilage: Salzkartoffeln & grüne Bohnen</b>
        <p> CHF 5.80 </p>
        <table>
          <tr>
            <th>Nutritional values</th>
          </tr>
          <tr>
            <td>Energie:</td>
            <td>2700kj(645kcal)</td>
          </tr>
          <tr>
            <td>Fat:</td>
            <td>44.2g</td>
          </tr>
          <tr>
            <td>Protein:</td>
            <td>12.2g</td>
          </tr>
          <tr>
            <td>Carbohydrates:</td>
            <td>52.8g</td>
          </tr>
          <tr>
            <td>Salt:</td>
            <td>4.8g</td>
          </tr>
          <tr>
          <td>Allergies:</td>
          <td>soy</td>
        </tr>
        </table>
        <img class= "score3" src="Images/scorevegetarian.png" alt="Score3">
      </div>
      </label>
      <label>
        <input type="radio" name="menu" value="Menu 2">
        <div class="food-info">
        <img class= "menu2" src="Images/meat.jpeg" alt="Menu2">
        <p> Paniertes Schweinsschnitzel</p>
        <b> Beilage: Pommes frittes </b>
        <p> CHF 9.50</p>
        <table>
          <tr>
            <th>Nutritional values</th>
          </tr>
          <tr>
            <td>Energie:</td>
            <td>2463kj(589kcal)</td>
          </tr>
          <tr>
            <td>Fat:</td>
            <td>30.3g</td>
          </tr>
          <tr>
            <td>Protein:</td>
            <td>19.1g</td>
          </tr>
          <tr>
            <td>Carbohydrates:</td>
            <td>57.3g</td>
          </tr>
          <tr>
            <td>Salt:</td>
            <td>3.1g</td>
          </tr>
          <tr>
          <td>Allergies:</td>
          <td>gluten,eggs, milk</td>
        </tr>
        </table>
        <img class= "score2" src="Images/scoremeat.png" alt="Score2">
      </div>
      </label>
      <label>
        <input type="radio" name="menu" value="Menu 3">
        <div class="food-info">
        <img class= "menu3" src="Images/vegetarian.jpeg" alt="Menu3">
        <p> Pilzrisotto mit Spinat & Birnen </p>
        <b> keine Beilage </b>
        <p> CHF 5.80 </p>
        <table>
          <tr>
            <th>Nutritional values</th>
          </tr>
          <tr>
            <td>Energie:</td>
            <td>2887kj(690kcal)</td>
          </tr>
          <tr>
            <td>Fat:</td>
            <td>19.4g</td>
          </tr>
          <tr>
            <td>Protein:</td>
            <td>15.0g</td>
          </tr>
          <tr>
            <td>Carbohydrates:</td>
            <td>106.9g</td>
          </tr>
          <tr>
            <td>Salt:</td>
            <td>5.4g</td>
          </tr>
          <tr>
          <td>Allergies:</td>
          <td>soy,milk,sellerie,sulfite</td>
        </tr>
        </table>
        <img class= "score3" src="Images/scorevegetarian.png" alt="Score3">
      </div>
      </label>
      <br>
      <button type="submit">Submit</button>
    </form>
  `;
  document.body.style.backgroundImage = "url('Images/foodchoice.jpeg')";
}

function submitForm(event) {
  event.preventDefault();
  menuChoice = document.querySelector('input[name="menu"]:checked').value;
  showDrink();
}

function showDrink() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Drink Options</h1>
    <form onsubmit="submitDrink(event)">
      <label>
        <input type="radio" name="drink" value="Water" required>
        <img class= "water" src="Images/water.jpeg" alt="Water">
      </label>
      <label>
        <input type="radio" name="drink" value="Soda">
        <img class= "soda" src="Images/soda.jpeg" alt="Soda">
      </label>
      <br>
      <button type="submit">Submit</button>
    </form>
  `;
  document.body.style.backgroundImage = "url('Images/drink.jpeg')";
}

function submitDrink(event) {
  event.preventDefault();
  drinkChoice = document.querySelector('input[name="drink"]:checked').value;
  showPayment();
}

function showPayment() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Payment Options</h1>
    <p> You can pay with card or with cash. If you pay with cash, then you will asked to pay when you pick up your menu.</p>
    <form onsubmit="submitPayment(event)">
      <label>
      <label style="margin-right: 10px;">
        <input type="radio" name="payment" value="Cash" required>
        <img class= "cash" src="Images/cash.jpeg" alt="Cash">
      </label>
      <label>
      <label style="margin-right: 10px;">
        <input type="radio" name="payment" value="Card">
        <img class= "card" src="Images/card.jpeg" alt="Creditcards">
      </label>
      <br>
      <button type="submit">Submit</button>
    </form>
  `;
  document.body.style.backgroundImage = "url('Images/cashier.jpeg')";
}

function submitPayment(event) {
  event.preventDefault();
  paymentChoice = document.querySelector('input[name="payment"]:checked').value;
  saveData();
  showThankYou();
}

function saveData() {
  // Code to save user's choices to a database or file goes here
}

function showThankYou() {
  const container = document.querySelector('.container');
  container.innerHTML = `<h1>Thank you for your order!</h1><p> Your ordernummer is 98. </p>`;
  document.body.style.backgroundImage = "url('Images/university_of_bern.webp')";
}

// Call showInitialPage to display the initial page when the page loads
showInitialPage();

