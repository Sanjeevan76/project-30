let cityName=document.querySelector(".city-name");
let searchBtn=document.querySelector(".search");
let tempNum=document.querySelector(".temp");
let cityInput=document.querySelector("#city-input");
let weatherImg1=document.querySelector(".weather-img");
let msgShow=document.querySelector(".msg-show");

let apiCityName;


let apiKey="af9359f13197c5aad202cdf141e82b8f";
  
   let api="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
  
async function getdata(city){
   
    const response=await fetch(api+city +`&appid=${apiKey}`);
        
    
    const data= await response.json();
   console.log(data);
   console.log(data.cod);
   if(data.cod ==='404')
    {
        msgShow.innerHTML="invalid-search";
        document.querySelector(".show").style.display="none";

    }
    else{
        document.querySelector(".show").style.display="block";
        msgShow.innerHTML=" ";
    }

    // apiCityName=console.log(data.name);

    cityName.innerHTML=data.name;
    tempNum.innerHTML=Math.round(data.main.temp) +" °C";
    document.querySelector(".humidity1").innerHTML=data.main.humidity+"%";
    document.querySelector(".speed").innerHTML=data.wind.speed+" km/h";
    console.log(data.cod);


   

    let weatherImg=data.weather[0].main;
    console.log(weatherImg);
    

    if(weatherImg =="Rain")
    {
        weatherImg1.src="rain.png";
    }
    else if(weatherImg =="Mist")
    {
        weatherImg1.src="mist.png";
    }
    else if(weatherImg =="Clear")
        {
            weatherImg1.src="clear.png";
        }

        else if(weatherImg =="Snow")
            {
                weatherImg1.src="snow.png";
            }

            else if(weatherImg =="Drizzle")
                {
                    weatherImg1.src="Drizzle.png";
                }

                else if(weatherImg =="Clouds")
                    {
                        weatherImg1.src="clouds.png";
                    }
}

searchBtn.addEventListener("click",()=>{
    getdata(cityInput.value);
    
})
