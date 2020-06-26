// Response objects

//Get venues
let dummyData = {
  html_attributions: [],
  next_page_token: 'string',
  results: [
    //actual venues
    {
      tsReviews: [], //Get from DB
      tsAmenities: [], //Get from DB
      business_status: 'open',
      geometry: {
        location: {
          lat: 11223,
          lng: 12313,
        },
      },
      icon: 'string url',
      id: 'string',
      name: 'string',
      opening_hours: {
        open_now: Boolean,
      },
      photos: [
        {
          height: Number,
          html_attributions: ['<HTML>String</HTML>'],
          photo_reference: 'string',
          width: Number,
        },
      ],
      place_id: 'string',
      plus_code: {
        compound_code: 'string',
        global_code: 'string',
      },
      price_level: 2,
      rating: 3.3,
      reference: 'string',
      scope: 'string',
      types: ['bar', 'coffee_shop'],
      user_ratings_total: Number,
      vicinity: 'string address',
    },
  ],
};

export default dummyData;
