const complimentBtn = document.getElementById("complimentButton")

//get fortune
const fortuneBtn = document.getElementById('fortuneButton')
//post
const postForm = document.getElementById('post-form')
const pokeName = document.getElementById('post-FavPokemon')
const pokeLvl = document.getElementById('post-level')

//put
const putForm = document.getElementById('put-form')
const putName = document.getElementById('levelUp')

//delete
const deleteForm = document.getElementById('delete-form')
const deleteName = document.getElementById('deletePoke')






const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data
        alert(data)
    })
})

postForm.addEventListener('submit', (e) => {
e.preventDefault()


const pokeBod = {
   
    
    name: pokeName.value,
    level: +pokeLvl.value,
  
}

axios.post('http://localhost:4000/api/pokemon/',pokeBod)
.then((res) => {
    console.log(res.data)
    alert('Pokemon added to team')
})

})

putForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = putName.value

    axios.put('http://localhost:4000/api/pokemon?name=' + name)
    .then((res) => {
        alert(name + ' leveled up by 5!')
        console.log(res.data)
    })
})

deleteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = deleteName.value
    axios.delete('http://localhost:4000/api/pokemon?name=' + name)
    .then((res) => {
        alert(name + ' has been taken off of your team!')
        console.log(res.data)
    })
})