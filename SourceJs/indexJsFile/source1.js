// Thêm sự kiện "DOMContentLoaded" để gọi hàm fetchWeather với giá trị mặc định ("ho chi minh")
document.addEventListener('DOMContentLoaded', function () {
    fetchWeather('ho chi minh');
});


// Thêm sự kiện "click" cho nút "Tìm kiếm" như bạn đã làm trước đó
document.getElementById('searchButton').addEventListener('click', function () {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput.trim() === '') {
        alert('Vui lòng nhập tên thành phố.');
        return;
    }
    fetchWeather(cityInput);
});

document.getElementById('searchButton').addEventListener('click', function () {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput.trim() === '') {
        alert('Vui lòng nhập tên thành phố.');
        return;
    }
    fetchWeather(cityInput);
});

// Hàm lấy ra thành phố người dùng nhập và gán hiển thị ra 
function showInput() {
    // Lấy giá trị người dùng nhập vào ô input
    var userInput = document.getElementById("cityInput").value;
    // Hiển thị giá trị trong thẻ p có id="output"
    document.getElementById("output").innerHTML = "Thành phố : " + userInput;
}


// Lấy phần tử HTML có id là "time"
var timeElement = document.getElementById("time");

// Hàm cập nhật thời gian
function updateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Định dạng thời gian: ngày/tháng/năm giờ:phút
    var formattedTime = day + "/" + month + "/" + year + " " + hours + ":" + (minutes < 10 ? "0" : "") + minutes;

    timeElement.textContent = formattedTime; // Gán giá trị vào phần tử HTML
}

// Gọi hàm updateTime để cập nhật thời gian ban đầu
updateTime();

// Cập nhật thời gian mỗi phút
setInterval(updateTime, 60000); // 60000 milliseconds = 1 phút



function fetchWeather(city) {
    const apiKey = '49cc8c821cd2aff9af04c9f98c36eb74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureElement = document.getElementById('temperature');
            temperatureElement.textContent = `${data.main.temp}°C`;

            const weatherDescriptionElement = document.getElementById('weatherDescription');
            weatherDescriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            alert('Không có tên thành phố này! Hoặc kiểm tra kết nối Internet để có thể xem dự báo trực tiếp!');
            console.error(error);
        });
}


const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

// *** SetInterval method allows us to refresh the function every second
setInterval(() => {
    // Getting the time from the Date module
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});