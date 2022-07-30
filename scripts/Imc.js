class Imc 
{
    height;
    weigth;
    setHeight (height)
    {
        this.height = Number(height);
        console.log("setHeight", height);
    }
    setWeigth (weigth)
    {
        this.weigth = Number(weigth);
        console.log("setWeigth", weigth);
    }
    getImc ()
    {
        const r = this.weigth / (this.height*this.height);
        console.log(`result: ${this.weigth} / ${this.height}² = ${r}`);
        return r;
    }
}

const heightInput = document.getElementById("altura");
const weigthInput = document.getElementById("peso");
const result = document.getElementById("resultado");

const imc = new Imc();

heightInput.onchange = () => imc.setHeight(heightInput.value);
weigthInput.onchange = () => imc.setWeigth(weigthInput.value);

document.getElementById("calcular").onclick = () =>
{
    result.innerText = imc.getImc();
};