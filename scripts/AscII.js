export default class AscII 
{
    #string;
    #code;
    
    constructor (string)
    {
        this.string = string;
    }

    set string (string) 
    {
        this.#string = string;
        const array = [];
        for(let i = 0; i < string.length; i++){
            let code = string.charCodeAt(i);
            array.push(code);
        }
        this.#code = array;
    }

    getCode()
    {
        return this.#code.reduce((prev, curr) => 
        {
            prev += curr;
            return prev;
        });
    }
}