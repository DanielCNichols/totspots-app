import React from 'react'

export default function ReviewForm() {

  return (
    <section class="main">
      <header>
        <h2>Add A Review</h2>
      </header>

      <h3>Bull McCabe's</h3>
      <form action="">
        <fieldset>
          <legend>
            <label for="Price">Price
              <select name="Price" name="price" id="price">
                <option value="">Please select</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </label>
            <label for="Volume">Volume Level
              <select name="Volume" id="Volume">
                <option value="">Please select</option>
                <option value="1">Library</option>
                <option value="2">Coffee Shop</option>
                <option value="3">Restaurant</option>
                <option value="4">Bar/Brewery</option>
                <option value="5">Concert</option>
              </select>
            </label>
            <label for="Rating"
              >Overall Rating
              <select>
                <option value="">Please select</option>
                <option value="1">&#x2605;
                  </option>
                <option value="2">&#x2605;
                    &#x2605;
                  </option>
                <option value="3">&#x2605;
                    &#x2605;
                    &#x2605;
                  </option>
                <option value="4">&#x2605;
                    &#x2605;
                    &#x2605;
                    &#x2605;
                  </option>
                <option value="5">&#x2605;
                    &#x2605;
                    &#x2605;
                    &#x2605;
                    &#x2605;
                  </option>
              </select>
            </label>
          </legend>
          </fieldset>
          <fieldset>
            <legend>Amenities
            <div class="amenities">
              <label for="StrollerAccessible">Stroller Accessible
                <input
                  type="checkbox"
                  name="StrollerAccessible"
                  value="StrollerAccessible"
                />
              </label>
              <label for="PlayArea">Play Area
                <input type="checkbox" name="PlayArea" value="PlayArea" />
              </label>
              <label for="Changingtable"> Changing Table
                <input
                  type="checkbox"
                  name="Changingtable"
                  value="Changingtable"
                />
                </label>
                <label for="Dogs">Dogs Welcome
                <input type="checkbox" name="DogsWelcome" value="Dogs" />
              </label>
              <label for="Fastcheckout"> Fast Checkout
                <input type="checkbox" name="Fastcheckout" value="Fast" />
              </label>
              <label for="KidsNight"> Kids Night Deals
                <input type="checkbox" name="KidsNight" value="KidsNight" />
              </label>
              <label for="OutdoorSeating"> Outdoor Seating Available
                <input type="checkbox" name="OutdoorSeating" value="Outdoor" />
              </label>
            </div>  
            </legend>
          </fieldset>
          <div class="review">
            <label for="review">Write your review
              <input type="text" name="review" placeholder="Tell us about your visit"/>
            </label>
          </div>
        <button type="submit">Submit</button>
        <button>Cancel</button>
      </form>
    </section>
  )
}