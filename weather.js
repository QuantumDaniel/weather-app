const weather = async () => {
  try {
    
    const cit = document.getElementById('cityInput');
    const response = await axios.get(
      https://api.openweathermap.org/data/2.5/weather?q=${cit.value}&appid=2bf16272cbbba5a92d8b525b30a378d7&units=metric
    );
    
  let details2 = JSON.stringify(response.data, null, 2);
  let details = (response.data);
    
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temperature');
    let des = document.querySelector('.condition');
    let pressure = document.querySelector('.pressure');
    let wind = document.querySelector('.wind');
    let long = document.querySelector('.longitude');
    let lat = document.querySelector('.latitude');
    let humidity = document.querySelector('.humidity');
    
    city.innerHTML = details.name;
    temp.innerHTML = details.main.temp + '⁰C';
    pressure.innerHTML = details.main.pressure +'hpa';
  wind.innerHTML = details.wind.speed +'km/h';
  humidity.innerHTML = details.main.humidity + '%';
  lat.innerHTML = details.coord.lat + '⁰';
  long.innerHTML = details.coord.lon + '⁰';
   
    details.weather.forEach((detail)=>{
      des.innerHTML = detail.description;
    })
  } catch (error) {
    console.error('Incorrect request:', error);
    alert('City name not found please enter again')
  }
};
weather();
document.querySelector('.searchbtn').addEventListener('click',()=>{
weather();
});