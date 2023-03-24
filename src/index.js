const init = () => {
    const inputForm = document.querySelector('form')
    
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputFormText = document.querySelector("input#searchByID").value;

        fetch(`http://localhost:3000/movies/${inputFormText}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // console.log('all done')
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
             })  
    })
}

document.addEventListener('DOMContentLoaded', init);

