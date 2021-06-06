function testGS(){

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=3P5F1vZZxDPw7yUQXLQu4W15ynMAk-ElS_k0FTI6OyqWJvXHarytY_6-4BQ150xm0XWJWEz5u2V5DN07JTnzeP26EP_tzhjim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH6WEG_K6z4zDyQeO7XEx3fXRNm8C5SHRelyqx7l18YJDCQOiKrPV2e5AtE2ykcaIbGhckay89JCOeLmYWiEkaxORS1T6fc9TA&lib=Mf882gjDBFwAR6wrm0TAHSzwaezBb1gA8"

    fetch(url)
     .then(d => d.json())
     .then(d => {
        document.getElementById("app"),textContent = d[0].status
    } );

}

document.getElementById("btn").addEventListener("click",testGS);