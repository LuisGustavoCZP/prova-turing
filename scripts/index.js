import AscII from "./ascii.js";

const inputSend = document.getElementById("fullname");
const buttonSend = document.getElementById("send-fullname");
const result = document.getElementById("result");
const link = document.getElementById("link");

async function sendFullname ()
{
    const fullname = inputSend.value;
    const ascii = new AscII(fullname);
    const code = ascii.getCode();
    const resp = await fetch(`http://ubuntu.alphaedtech.org.br:8080/?string=${fullname}&code=${code}`)
    .then(res => res.json())
    .catch(err => {console.log(err); return null;});
    console.log(resp);
    if(resp)
    {
        result.innerText = resp.question;
        link.removeAttribute("hidden");
    }
    else result.innerText = "Ops, deu erro na requisição!"
}

buttonSend.addEventListener("click", sendFullname);