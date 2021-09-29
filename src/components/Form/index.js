import { useState } from "react";

 
const Form = ({ products, setProducts }) => {

    const [code, setCode] = useState(0)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    

      const newProduct = () => {

        const product = {
            code: Number(code),
            name: name,
            description: description,
            price: Number(price),
            discount: Number(discount),
        }

        setProducts([...products, product])
      }

    return (

        <div>
            <input type="number" placeholder="Código" onChange={e => setCode(e.target.value)} />
            <input placeholder="Nome" onChange={e => setName(e.target.value)} />
            <input placeholder="Descrição" onChange={e => setDescription(e.target.value)} />
            <input type="number" placeholder="Preço" onChange={e => setPrice(e.target.value)} />
            <input type="number" placeholder="Desconto" onChange={e => setDiscount(e.target.value)} />
            <button onClick={newProduct}> Cadastrar </button>
        </div>
    )
}

export default Form;