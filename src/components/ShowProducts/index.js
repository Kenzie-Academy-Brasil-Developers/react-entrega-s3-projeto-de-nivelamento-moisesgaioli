import ListProducts from "../ListProducts"

const ShowProducts = ({ products, addCart, inCart, removeToCart }) => {

    return (
        <div>
            {
                products.map((product, code) => <ListProducts key={code} product={product} addCart={addCart} inCart={inCart} removeToCart={removeToCart} />)
            }
        </div>
    )
}

export default ShowProducts;