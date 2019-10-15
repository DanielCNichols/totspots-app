import React from 'react'

export default function RefineSearch() {
  return (
     <section className="filter-search">
    <button>Refine search</button>
    <p>Note: This form will display when "refine search" is clicked</p>
      <form action="">
          <label htmlFor="Search">New Search
            <input type="text" placeholder="Search"/>
          </label>
          <label htmlFor="Sort">Sort by:
            <select name="Sort" id="Sort">
              <option value="">select</option>
              <option value="overall rating">Overall Rating</option>
              <option value="price">Price</option>
            </select>
          </label>
          <label htmlFor="Filter">Filter results by: 
            <select name="filter" id="filter">
              <option value="">Select</option>
              <option value="type">type</option>
              <option value="">Minimum Rating</option>
              <option value="">Amenities</option>
            </select>
          </label>
          <button>Search</button>
          <button>Cancel</button>
        </form>
  </section>
  )
}