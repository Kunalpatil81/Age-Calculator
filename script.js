let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Set max date to today
let result = document.getElementById("result");

function calculateAge(){
    let brithDate = new Date(userInput.value);

    let d1 = brithDate.getDate();
    let m1 = brithDate.getMonth() + 1; // Months are zero-based
    let y1 = brithDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Months are zero-based
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2>=m1){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2>=d1){
        d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    if(y3,d3,m3 === null || y3 < 0 || m3 < 0 || d3 < 0){
        result.innerHTML = "Please enter a valid date.";
    } else { 
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
    }
}

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }