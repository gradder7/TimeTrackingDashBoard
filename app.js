// const dailyBtn = document.querySelector(".daily-btn");
// const weeklyBtn = document.querySelector(".weekly-btn");
// const monthlyBtn = document.querySelector(".monthly-btn");

// //theme toggler
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("light-mode");
//   toggle.classList.toggle("active");
// });

// //switch active class
// const btns = document.querySelectorAll(".btn");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     document.querySelector(".btn.active").classList.remove("active");
//     e.target.classList.add("active");
//   });
// });

// //fetch data
// // fetch("./data.json")
// //   .then((res) => res.json())
// //   .then((data) => {
// //     const globalData = data;
// //     handle_all(globalData);
// //   });

// const fetchData = async () => {
//   const response = await fetch("./data.json");
//   console.log(response);
//   const newResponse = await response.json();
//   console.log(newResponse);
//   handle_all(newResponse);
// };
// fetchData();

// let handle_all = (data) => {
//   const main = document.querySelector("main");
//   dailyBtn.addEventListener("click", getDaily);
//   weeklyBtn.addEventListener("click", getWeekly);
//   monthlyBtn.addEventListener("click", getMonthly);

//   function getDaily() {
//     main.textContent = "";
//     for (let i = 0; i < data.length; i++) {
//       main.innerHTML += `
//                     <div class="card">
//                         <a href="#" class="details">
//                             <section class="details__title">
//                                 <h2>${data[i].title}</h2>
//                                 <i class="fa-solid fa-ellipsis"></i>
//                             </section>
//                             <section class="details__time">
//                                 <h3 data-num="${data[i].timeframes.daily.current}">${data[i].timeframes.daily.current}hrs</h3>
//                                 <p>Yesterday - ${data[i].timeframes.daily.previous}hrs</p>
//                             </section>
//                         </a>
//                     </div>`;
//     }
//   }
//   function getWeekly() {
//     main.textContent = "";
//     for (let i = 0; i < data.length; i++) {
//       main.innerHTML += `
//                     <div class="card">
//                         <a href="#" class="details">
//                             <section class="details__title">
//                                 <h2>${data[i].title}</h2>
//                                 <i class="fa-solid fa-ellipsis"></i>
//                             </section>
//                             <section class="details__time">
//                                 <h3 data-num="${data[i].timeframes.weekly.current}">${data[i].timeframes.weekly.current}hrs</h3>
//                                 <p>Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
//                             </section>
//                         </a>
//                     </div>`;
//     }
//   }
//   function getMonthly() {
//     main.textContent = "";
//     for (let i = 0; i < data.length; i++) {
//       main.innerHTML += `
//                     <div class="card">
//                         <a href="#" class="details">
//                             <section class="details__title">
//                                 <h2>${data[i].title}</h2>
//                                 <i class="fa-solid fa-ellipsis"></i>
//                             </section>
//                             <section class="details__time">
//                                 <h3 data-num="${data[i].timeframes.monthly.current}">${data[i].timeframes.monthly.current}hrs</h3>
//                                 <p>Last Month - ${data[i].timeframes.monthly.previous}hrs</p>
//                             </section>
//                         </a>
//                     </div>`;
//     }
//   }

//   window.addEventListener("load", getWeekly()); //load weekly data by default

//   //   counter animation
//   let numbers = document.querySelectorAll("h3");
//   let interval = 1000;

//   numbers.forEach((num) => {
//     let startValue = 0;
//     let endValue = parseInt(num.getAttribute("data-num"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(() => {
//       startValue++;
//       num.textContent = `${startValue}hrs`;
//       if (startValue === endValue) {
//         clearInterval(counter);
//       }
//     }, duration);
//   });
// };

const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");

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
  }
  //on window load the data should show be weekly
  window.addEventListener("load", getWeekly());
  //buttons event Listeners
  dailyBtn.addEventListener("click", getDaily);
  weeklyBtn.addEventListener("click", getWeekly);
  monthlyBtn.addEventListener("click", getMonthly);
}
