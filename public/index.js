async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        update()
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        update()
    }

    async function update(){
        let response = await fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "value": countValue
            })
        })
        console.log(response)
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()


// the url will change everytime u run a new page!!! (9000 changed to 9001)
// fetch('http://localhost:9000/counter', {
//     method:'PATCH', 
//     body: JSON.stringify({
//         value: 11
//     }), 
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })