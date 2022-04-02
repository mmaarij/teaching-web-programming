export const ShoppingCart = () => {

    const cartList = [
        {"productName": "Jewels From India", "description": "'Gift' From The Mughals", "amount": "$12"},
        {"productName": "Egyptian Mummies", "description": "Perfect For Our Museums", "amount": "$8"},
        {"productName": "Promo Code", "description": "COLONIALISM", "amount": "-$500"},
    ]
    return (
        <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">2</span>
            </h4>
            <ul class="list-group mb-3">
                {cartList.map(cartE => (<CartElement cart={cartE} /> ))}
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$FREE</strong>
                </li>
            </ul>
        </div>
    )
}


const CartElement = (props) => {
    return (
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">{props.cart.productName}</h6>
                <small class="text-muted">{props.cart.description}</small>
            </div>
            <span class="text-muted">{props.cart.amount}</span>
        </li>
    )
}