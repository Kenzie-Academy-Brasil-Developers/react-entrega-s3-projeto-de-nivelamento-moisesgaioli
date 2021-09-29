

const ListProducts = ({ product, addCart, inCart, removeToCart }) => {

    return (
        <>
            <h2> Código: {product.code} </h2>
            <p> Nome: {product.name} </p>
            <p> Descrição: {product.description} </p>
            <p> Preço: {product.price} </p>
            <p> Desconto: {product.discount} </p>

            {
                !inCart ?
                    <button onClick={() => addCart(product.code)}> Adicionar ao carrinho </button> 
                        :
                        <button onClick={() => removeToCart(product.code)}> Remover carrinho </button>
            }   
            
        </>
    )
}

export default ListProducts;