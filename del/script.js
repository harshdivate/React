const button   = document.getElementById('getData');

function getData() {
    let data={};
    const url = `https://api.github.com/users/harshdivate`;
        fetch(url).then(response=>response.json()).then((response)=>{
            data = response;
            console.log(data);
        })
}

button.addEventListener('click',getData);