let fortune = [
'You might get divorced in the future.',
 'I see a lot of pain in the future for you.', 
 'You will be happy', 
 'You will die', 
 'You will never be happy'
]

let pokeArr = []
let pokeId = 0




module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);




    },


    postPoke: (req,res) => {
        const {name, level} = req.body

        const copy = {
            name,
            level,
            id: pokeId
        }
        pokeArr.push(copy)
        pokeId++

        
        res.status(200).send(pokeArr)


    },

    updatePoke: (req,res) => {
        const {name} = req.query


        for(let i = 0; i < pokeArr.length; i++){
            let currentName = pokeArr[i].name

            if (currentName === name){
                pokeArr[i].level += 5

                res.status(200).send(pokeArr)
            }
        }
    },

    deletePoke: (req,res) => {
        const {name} = req.query

        for(let i = 0; i < pokeArr.length; i++){
            let currentName = pokeArr[i].name

            if(currentName === name){
                pokeArr.splice(i,1)
                res.status(200).send(pokeArr)
            }
        }
    }

}