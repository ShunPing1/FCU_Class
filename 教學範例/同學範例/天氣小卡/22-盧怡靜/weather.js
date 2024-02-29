//--- 地區資料
let allData = { north: [], west: [], south: [], east: [], outlying: [] };

//--- 當前時間
let date = document.querySelector(".date");
updateDate();
setInterval(updateDate, 1000);

//--- 地區標籤
let tabs = document.querySelectorAll(".tab");
let path = document.querySelectorAll("path");
let pathArea = {
  north: document.querySelectorAll(".north"),
  west: document.querySelectorAll(".west"),
  south: document.querySelectorAll(".south"),
  east: document.querySelectorAll(".east"),
  outlying: document.querySelectorAll(".out"),
};

//--- 天氣資料
fetch(
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-B1757DEA-5972-4A72-A3D8-A3F087256F75"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //--- 分類資料的根據
    let wastArea = ["苗栗縣", "臺中市", "南投縣", "彰化縣", "雲林縣"];
    let southArea = [
      "嘉義縣",
      "嘉義市",
      "臺南市",
      "高雄市",
      "屏東縣",
      "澎湖縣",
    ];
    let eastArea = ["花蓮縣", "臺東縣"];
    let outArea = ["金門縣", "連江縣"];
    //--- 整理成我要的資料形狀
    data.records.location.forEach((city) => {
      let cityName = city.locationName;
      let cityBox = {
        locationName: cityName,
        icon: [],
        rain: [],
        minTemperature: [],
        maxTemperature: [],
        discription: [],
      };

      for (let i = 0; i < 3; i++) {
        cityBox.icon.push(
          city.weatherElement[0].time[i].parameter.parameterValue
        );
        cityBox.rain.push(
          city.weatherElement[1].time[i].parameter.parameterName
        );
        cityBox.minTemperature.push(
          city.weatherElement[2].time[i].parameter.parameterName
        );
        cityBox.maxTemperature.push(
          city.weatherElement[4].time[i].parameter.parameterName
        );
        cityBox.discription.push(
          city.weatherElement[3].time[i].parameter.parameterName
        );
      }
      //--- 比對資料並分類
      if (wastArea.indexOf(cityName) >= 0) {
        allData.west.push(cityBox);
      } else if (southArea.indexOf(cityName) >= 0) {
        allData.south.push(cityBox);
      } else if (eastArea.indexOf(cityName) >= 0) {
        allData.east.push(cityBox);
      } else if (outArea.indexOf(cityName) >= 0) {
        allData.outlying.push(cityBox);
      } else {
        allData.north.push(cityBox);
      }
    });
    changeArea("north"); //顯示初始地區posaapo
  });
//--- 點擊後切換標籤.地圖.卡片樣式
tabs.forEach((tab, index) => {
  let obj = Object.keys(allData); //物件轉成陣列，以keys為資料
  tab.addEventListener("click", () => {
    // tabs.forEach((tabEl) => {
    //   tabEl.classList.remove("active");
    // });
    // tab.classList.add("active");
    path.forEach((path) => {
      path.classList.remove("active");
    });
    pathArea[obj[index]].forEach((area) => {
      area.classList.add("active");
    });
    changeArea(obj[index]);
  });
});

//--- 當前時間
function updateDate() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let days = newDate.getDate();
  let hour = newDate.getHours();
  let mins = newDate.getMinutes();
  let sec = newDate.getSeconds();
  let Time = (time) => (String(time).length < 2 ? `0${time}` : time);

  date.innerHTML = `${year}/${Time(month)}/${Time(days)} ${Time(hour)}:${Time(
    mins
  )}:${Time(sec)}`;
}

//--- 切換地區
function changeArea(area) {
  // let weather = document.querySelector(".weather");
  let weatherContext = document.querySelector(`#${area}`).childNodes[1];
  weatherContext.innerHTML = "";
  allData[area].forEach((item) => {
    weatherContext.innerHTML += `
    <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2 col-xxl mb-1">
     <div class="card text-center">
        <div class="card card-header text-nowrap">${item.locationName}</div>
        <div class="card-body px-0">
            <p class="mb-0">今晚明晨</p>
            <p class="card-title">18:00 - 06:00</p>
            <img src="./IMG/icon/${item.icon[0]}.svg" alt="" class="card-img-top">
            <p class="mb-0 mt-2">${item.minTemperature[0]}° - ${item.maxTemperature[0]}°</p>
            <p class="mb-0 text-nowrap">${item.discription[0]}</p>
            <p class="mb-0"><i class='bx bx-cloud-light-rain'></i>${item.rain[0]}%</p>
        </div>

        <div class="card-body px-0">
            <p class="mb-0">明日早上</p>
            <p class="card-title">18:00 - 06:00</p>
            <img src="./IMG/icon/${item.icon[1]}.svg" alt="" class="card-img-top">
            <p class="mb-0 mt-2">${item.minTemperature[1]}° - ${item.maxTemperature[1]}°</p>
            <p class="mb-0 text-nowrap">${item.discription[1]}</p>
            <p class="mb-0"><i class='bx bx-cloud-light-rain'></i>${item.rain[1]}%</p>
        </div>

        <div class="card-body px-0">
            <p class="mb-0">明日晚上</p>
            <p class="card-title">18:00 - 06:00</p>
            <img src="./IMG/icon/${item.icon[2]}.svg" alt="" class="card-img-top">
            <p class="mb-0 mt-2">${item.minTemperature[2]}° - ${item.maxTemperature[2]}°</p>
            <p class="mb-0 text-nowrap">${item.discription[2]}</p>
            <p class="mb-0"><i class='bx bx-cloud-light-rain'></i>${item.rain[2]}%</p>
        </div>
    </div>
</div>
  `;
  });
}
