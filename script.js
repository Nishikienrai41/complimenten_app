// fetch compliments
async function  fetchCompliments() {
try {
    const response = await fetch('./data/complimenten.json');
    console.log(response);
    if (!response.ok) {
        throw new Error("ik kan de json file niet laden. Check spelling en pad");
    }
    const data = await response.json();
    console.log(data);
    return data.complimenten;
} catch (error) {
    console.error("ik kan de complimenten niet verkrijgen", error);
    return ["Je bent geweldig!", "Blijf stralen", "Code met passie"]
}  finally {
     console.log("ferchCompliments is klaar");
}  
};

//display compliments
function displayRandomCompliment(compliments) {
    const complimentElement = document.getElementById('staf');
    const randomCompliment = compliments[Math.floor(Math.random()* compliments.length)];
 complimentElement.textContent = randomCompliment;
};
// main function IIFE 
(async()=>{
const compliments = await fetchCompliments();
    const button = document.getElementById('mana');
    button.addEventListener('click', () => displayRandomCompliment(compliments));
})();