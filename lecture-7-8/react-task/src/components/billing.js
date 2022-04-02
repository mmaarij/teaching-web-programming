const BillingForm = () => {
    return (
        <div>
            <h4 class="mb-3">Billing Address Enter Kijiye</h4>
            <form class="needs-validation" novalidate>
                <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Queen" value="" required/>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Elizabeth" value="" required/>
                </div>
                </div>

                <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required/>
                </div>
                </div>

                <div class="mb-3">
                <label for="email">Email <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="abc@example.com"/>
                </div>

                <div class="mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Buckingham Palace" required/>
                </div>

                <div class="mb-3">
                <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>

                <div class="row">
                <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                    <option>Pakistan</option>
                    <option>Kill Me Instead</option>
                    </select>
                    <div class="invalid-feedback">
                    Please select a valid country.
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>Idaho</option>
                    <option>Tennessee</option>
                    <option>New York</option>
                    </select>
                    <div class="invalid-feedback">
                    Please provide a valid state.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="zip">Zip Code</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required/>
                    <div class="invalid-feedback">
                    Zip code needed.
                    </div>
                </div>
                </div>
                <hr class="mb-4"/>
                <button class="btn btn-danger btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
        </div>
    )
}

export default BillingForm