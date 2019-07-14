const getResouce = async(url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResouce('https://swapi.co/api/people/1')
    .then((body)=>console.log(body))