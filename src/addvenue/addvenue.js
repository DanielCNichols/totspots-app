import React from 'react'


export default function AddVenue() {
  return (
    <section className="main">
      <header>
        <h2>Add A Venue</h2>
      </header>
      <form action="">
        <fieldset>
          <legend>
            <label htmlFor="Venue">Venue/Event Name
              <input type="text" name="Venue" id="Venue" placeholder="ex: Bull McCabe's"/>
            </label>
            
            <label htmlFor="Address">Street Address
              <input type="text" name="Address" placeholder="123 Main St."/>
            </label>
            <label htmlFor="City">City
              <input type="text" name="City" placeholder="ex: Durham"/>
            </label>
            <label htmlFor="State">State
              <input type="text" name="State" placeholder="ex: NC" maxlength="2"/>
            </label>
            <label htmlFor="Website">Website
              <input type="text" name="Website" placeholder="www.reddit.com"/>
            </label>
            <label htmlFor="Phone">Phone
              <input type="text" name="Phone" placeholder="(555) 245-3456"/>
            </label>

            
            <label htmlFor="type">Type of venue/event
              <select name="type" id="type">
                <option value="">Please select</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Bar">Brewery/Bar</option>
                <option value="Educational">Educational</option>
                <option value="music">Music</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </label>
            <label htmlFor="Price">Price
              <select name="Price" name="price" id="price">
                <option value="">Please select</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </label>
            <label htmlFor="Volume">Volume Level
              <select name="Volume" id="Volume">
                <option value="">Please select</option>
                <option value="1">Library</option>
                <option value="2">Coffee Shop</option>
                <option value="3">Restaurant</option>
                <option value="4">Bar/Brewery</option>
                <option value="5">Concert</option>
              </select>
            </label>
            <label htmlFor="Rating"
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
            <div className="amenities">
              <label htmlFor="StrollerAccessible">Stroller Accessible
                <input
                  type="checkbox"
                  name="StrollerAccessible"
                  value="StrollerAccessible"
                />
              </label>
              <label htmlFor="PlayArea">Play Area
                <input type="checkbox" name="PlayArea" value="PlayArea" />
              </label>
              <label htmlFor="Changingtable"> Changing Table
                <input
                  type="checkbox"
                  name="Changingtable"
                  value="Changingtable"
                />
                </label>
                <label htmlFor="Dogs">Dogs Welcome
                <input type="checkbox" name="DogsWelcome" value="Dogs" />
              </label>
              <label htmlFor="Fastcheckout"> Fast Checkout
                <input type="checkbox" name="Fastcheckout" value="Fast" />
              </label>
              <label htmlFor="KidsNight"> Kids Night Deals
                <input type="checkbox" name="KidsNight" value="KidsNight" />
              </label>
              <label htmlFor="OutdoorSeating"> Outdoor Seating Available
                <input type="checkbox" name="OutdoorSeating" value="Outdoor" />
              </label>
            </div>  
            </legend>
          </fieldset>
          <div className="review">
            <label htmlFor="review">Write your review
              <input type="text" name="review" placeholder="Tell us about your visit"/>
            </label>
          </div>
        <button type="submit">Submit</button>
        <button>Cancel</button>
      </form>
    </section>
  )
}