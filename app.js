//selecting buttons
const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");

//ignore for now 5-12 line
//toogle the theme 
const toggle = document.getElementsByClassName("toggle");
// console.log(toggle);
toggle[0].addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle[0].classList.toggle("active");
});

//switch active state of button
const button = document.querySelectorAll(".btn");
// console.log(button);
button.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (event) => {
    let activeBtn = document.querySelector(".btn.active");
    // console.log(activeBtn);
    activeBtn.classList.remove("active");
    // console.log(event.target);
    event.target.classList.add("active");
  });
});

//fetch data using then
// let fetchData = () => {
//   let apiFetch = fetch("./data.json");
//   apiFetch
//     .then((response) => {
//       // console.log(response);
//       return response.json();
//     })
//     .then((newResponse) => {
//       // console.log(newResponse);
//       UpdateData(newResponse);
//     });
// };
// fetchData();

//fetch using async/await
//IIFE
(async () => {
  const response = await fetch("./data.json");
  console.log(response);
  const newResponse = await response.json();
  console.log(newResponse);
  UpdateData(newResponse);
})();

//this function will populate the data int the page
function UpdateData(data) {
  // console.log(data)
  const main = document.querySelector("main");
  //   console.log(main);

  //Get Daily
  function getDaily() {
    main.textContent = "";
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i].title);
      main.innerHTML += `
      <div class="card">
      <a href="#" class="details">
      <section class="details__title">
      <h2>${data[i].title}</h2>
      <i class="fa-solid fa-ellipsis"></i>
      </section>
      <section class="details__time">
      <h3 data-num="${data[i].timeframes.daily.current}">
      ${data[i].timeframes.daily.current}hrs
      </h3>
      <p>Yesterday - ${data[i].timeframes.daily.previous}hrs</p>
      </section>
      </a>
      </div>
      `;
    }
    //ignore that function
    counterAnimation();
  }

  //get Weekly
  function getWeekly() {
    main.textContent = "";
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i].title);
      main.innerHTML += `
    <div class="card">
          <a href="#" class="details">
            <section class="details__title">
              <h2>${data[i].title}</h2>
              <i class="fa-solid fa-ellipsis"></i>
            </section>
            <section class="details__time">
              <h3 data-num="${data[i].timeframes.weekly.current}">
                ${data[i].timeframes.weekly.current}hrs
              </h3>
              <p>Yesterday - ${data[i].timeframes.weekly.previous}hrs</p>
            </section>
          </a>
        </div>
      `;
    }
    //ignore that function
    counterAnimation();
  }

  //monthly
  function getMonthly() {
    main.textContent = "";
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i].title);
      main.innerHTML += `
    <div class="card">
          <a href="#" class="details">
            <section class="details__title">
              <h2>${data[i].title}</h2>
              <i class="fa-solid fa-ellipsis"></i>
            </section>
            <section class="details__time">
              <h3 data-num="${data[i].timeframes.monthly.current}">
                ${data[i].timeframes.monthly.current}hrs
              </h3>
              <p>Yesterday - ${data[i].timeframes.monthly.previous}hrs</p>
            </section>
          </a>
        </div>
      `;
    }
    //ignore that function
    counterAnimation();
  }
  //on window load the data should show be weekly
  window.addEventListener("load", getWeekly());
  //buttons event Listeners
  dailyBtn.addEventListener("click", getDaily);
  weeklyBtn.addEventListener("click", getWeekly);
  monthlyBtn.addEventListener("click", getMonthly);
}


//ignore for now 145 to 163
//   counter animation
let counterAnimation = () => {
  let counterNumber = document.querySelectorAll("h3");
  let speed = 1000;
  counterNumber.forEach((counter) => {
    console.log(counter);
    let startValue = 0;
    let targetValue = +counter.getAttribute("data-num");
    if (targetValue !== 0) {
      let duration = Math.floor(speed / targetValue);
      let nowCount = setInterval(() => {
        startValue++;
        counter.textContent = `${startValue}hrs`;
        if (startValue === targetValue) {
          clearInterval(nowCount);
        }
      }, duration);
    }
  });
};
