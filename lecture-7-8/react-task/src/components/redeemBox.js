export const RedeemBox = () => {
    return (
        <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo Code"/>
              <div class="input-group-append">
                <button type="submit" class="btn btn-warning">Redeem</button>
              </div>
            </div>
        </form>
    )
}