// ------------------Biểu đồ bar-------------------
var barData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Nhiệt độ (độ C)',
    data: [34, 33, 35, 35, 32, 33, 28],
    backgroundColor: 'rgb(247, 163, 92)',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    fill: true,
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderColor: 'rgb(247, 163, 92)'
  }]
};

// Tùy chọn hiển thị biểu đồ bar
var barOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};

// Vẽ biểu đồ bar
var barCtx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(barCtx, {
  type: 'bar',
  data: barData,
  options: barOptions
});






// ------------------Line char 1-------------------------
var lineData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Lượng mưa (in)',
    data: [15, 5, 6, 3, 4, 12, 13],
    fill: true,
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderColor: 'rgb(247, 163, 92)',
    borderWidth: 1,
    tension: 0.1,
    // backgroundColor: 'rgb(255, 255, 255)'
  }]
};

// Tùy chọn hiển thị biểu đồ line
var lineOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};

// Vẽ biểu đồ line
var lineCtx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(lineCtx, {
  type: 'line',
  data: lineData,
  options: lineOptions
});


//--------------- Line char 2-----------------------------

var lineData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Lượng mưa (in)',
    data: [600, 500, 1003.96, 800.65, 992.54, 1100, 1003.95],
    fill: true,
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderColor: 'rgb(247, 163, 92)',
    borderWidth: 1,
    tension: 0.1,
    // backgroundColor: 'rgb(255, 255, 255)'
  }]
};

// Tùy chọn hiển thị biểu đồ line
var lineOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};
var lineCtx = document.getElementById('myLineChart2').getContext('2d');
var myLineChart2 = new Chart(lineCtx, {
  type: 'line',
  data: lineData,
  options: lineOptions
});





// ------------------ROW 2 - CHAR 1-------------------
var barData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Tốc độ gió (km/h)',
    data: [32, 30, 35, 38, 31, 33, 35],
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderRadius: 5,
    borderWidth: 1
  }]
};

// Tùy chọn hiển thị biểu đồ bar
var barOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};

// Vẽ biểu đồ bar
var barCtx = document.getElementById('myBarChartS').getContext('2d');
var myBarChartS = new Chart(barCtx, {
  type: 'bar',
  data: barData,
  options: barOptions
});






// ------------------Line char 1 ROW 2-------------------------
var lineData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Độ ẩm không khí (%)',
    data: [77, 65, 90, 87, 60, 86, 74],
    fill: true,
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderColor: 'rgb(247, 163, 92)',
    borderWidth: 1,
    tension: 0.1,
    // backgroundColor: 'rgb(255, 255, 255)'
  }]
};

// Tùy chọn hiển thị biểu đồ line
var lineOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};

// Vẽ biểu đồ line
var lineCtx = document.getElementById('myLineChartS').getContext('2d');
var myLineChartS = new Chart(lineCtx, {
  type: 'line',
  data: lineData,
  options: lineOptions
});


//--------------- Line char 2-----------------------------

var lineData = {
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [{
    label: 'Điểm sương (Độ C)',
    data: [29, 24.5, 25.2, 19, 25.9, 10, 25],
    fill: true,
    backgroundColor: 'rgba(247, 163, 92, 0.6)',
    borderColor: 'rgb(247, 163, 92)',
    borderWidth: 1,
    tension: 0.1,
    // backgroundColor: 'rgb(255, 255, 255)'
  }]
};

// Tùy chọn hiển thị biểu đồ line
var lineOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'white' // Đặt màu chữ cho trục x là màu trắng
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white' // Đặt màu chữ cho trục y là màu trắng
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white' // Đặt màu chữ cho nhãn là màu trắng
      }
    }
  }
};
var lineCtx = document.getElementById('myLineChart2S').getContext('2d');
var myLineChart2S = new Chart(lineCtx, {
  type: 'line',
  data: lineData,
  options: lineOptions
});