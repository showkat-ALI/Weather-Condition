const key = `821e189ceb3ac163e5e583f47601c465`;
document.getElementById('search-btn').addEventListener('click',async ()=>{
    const userValue= document.getElementById('user-input').value;
    // Error Handling for null search
    if(userValue === ''){
        console.log('empty');
        document.getElementById('weather-container').classList.add('d-none')
    }
    else if(userValue !== ''){
        document.getElementById('weather-container').classList.remove('d-none')
}
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${userValue}&appid=${key}&units=metric`;
    
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
    
})
const setInnertext = (id,vlaue)=>{
    document.getElementById(id).innerText= vlaue;
}
const clearValue = (id,value)=>{
    document.getElementById(id).value= value;

}
const showData = (alldata)=>{
    
    const conditionUrl = `http://openweathermap.org/img/wn/${alldata.weather[0].icon}@2x.png`
    document.getElementById('weather-image').setAttribute('src',conditionUrl)
    clearValue('user-input','');
    console.log(alldata);
    setInnertext('city-Name',alldata.name)
    setInnertext('degree',alldata.main.temp)
    setInnertext('condition',alldata.weather[0].main)

    
    


}