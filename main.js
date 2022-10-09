function digitalTile() {
    dateTime = new Date();
    const hr = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session = document.getElementById("session");

    if( hr >= 12 ) {
        session.innerHTML = "AM"
    }else {
        session.innerHTML = "PM"
    }

    
    

    document.getElementById('hr').innerHTML = hr +":";
    document.getElementById('min').innerHTML = min + ":";
    document.getElementById('sec').innerHTML = sec;
}
setInterval(digitalTile, 10);