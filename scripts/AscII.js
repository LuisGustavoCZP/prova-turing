export default class AscII 
{
    string;
    code;
    
    constructor (string)
    {
        this.string = string;
    }

    #getArray (string)
    {
        const array = [];
        for(let i = 0; i < string.length; i++){
            let code = string.charCodeAt(i);
            array.push(code);
        }
        return array;
    }

    getCode()
    {
        this.code = this.#getArray(this.string);
        return this.code.reduce((prev, curr) => 
        {
            prev += curr;
            return prev;
        });
    }
}