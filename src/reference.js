//Tthis is an example nearby search result with TS data.

let venuesData = {
  html_attributions: [],
  next_page_token:
    'CqQCGAEAAI9stojr3Lsz0ycjLIY7xvr19K9n1j6fPz3WcfsQWwSGdAhOVfeCdHxkjjgvV14yvrFGTC-SuI78veSRhf2ajUgESHw5DGp_kh5yU9I4hw8Yydtfv5JhcaC-lTDx8oGeCVo1eaVdA5eF-ZzsVuBAb-bqnKORAHkc3docwWbgkCfNdnv1pyZQkeeC7-gxwXYStzP8-3jxrGQ79RBnMXnMezEwnvqeDT-CO9DGOoEnf2RnCT6j9ZD42TTeD99x3WaW19oCyVfkGXUlXyYSmOcxciryWi_GnKN5zSHo3mhd7JX_Eei61cfS7ylOFaZRgUNbLbosAbrzp2akjUeClgfB0cnLR0m5RxKVhlCrIm3cH58R2qs_tXipnIkHZtM-NLK17RIQpKBTT_sEE2_5fpkCEkWD9xoURTiTkGyWQuaETel0imBN6yM1iV4',
  results: [
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 35.995494,
          lng: -78.899776,
        },
        viewport: {
          northeast: {
            lat: 35.9967908302915,
            lng: -78.89847541970849,
          },
          southwest: {
            lat: 35.9940928697085,
            lng: -78.90117338029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
      name: 'Bull City Burger and Brewery',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3744,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/107707024285327103796">Bull City Burger and Brewery</a>',
          ],
          photo_reference:
            'CmRaAAAAV1yusCX_AaKWWGnAn1E5PgPc6Ssnu78Kg3xvMXu0cKJ3mdVM4sf9Vj1o-eJCrL0AsQw3VT2ZzA0ULR6_SUowG-sxAphxHe8Y1HWzlINp2kKrAvMGPHUKPt3mzdXJXrUvEhCbAL_nMIijPNI2mBCGFzt-GhT8nT47_QdSTzhKTyL5DQ1Lmr4m6A',
          width: 5616,
        },
      ],
      place_id: 'ChIJh3eRD27krIkRpG-tTJnXAf8',
      plus_code: {
        compound_code: 'X4W2+53 Durham, NC, USA',
        global_code: '8773X4W2+53',
      },
      price_level: 2,
      rating: 4.4,
      reference: 'ChIJh3eRD27krIkRpG-tTJnXAf8',
      scope: 'GOOGLE',
      types: [
        'bar',
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 1069,
      vicinity: '107 East Parrish Street, Durham',
      tsData: {
        tsAverages: {
          avgrating: '4',
          avgvolume: '3',
        },
        tsReviews: [
          {
            id: 1,
            venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
            content:
              'We love this place! The perfect spot to take your kids on a Friday afternoon after work!',
            volume_rating: 5,
            totspots_rating: 4,
            user_id: 2,
            date_created: '2020-07-14T00:02:45.587Z',
          },
          {
            id: 2,
            venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
            content:
              'I do all my work here. The staff is awesome and the coffee is amazing. A little tight, so maybe not the best for infants, IMHO',
            volume_rating: 1,
            totspots_rating: 4,
            user_id: 5,
            date_created: '2020-07-14T00:02:45.599Z',
          },
          {
            id: 3,
            venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
            content:
              'Hands down the best place to get a quick breakfast with your family in the city. A family of four can eat for under 15 bucks! Easy to get a stroller in here, and they have an awesome changing table. Skip the rest, you wanna go to Early Bird.',
            volume_rating: 1,
            totspots_rating: 5,
            user_id: 7,
            date_created: '2020-07-14T00:02:45.601Z',
          },
          {
            id: 4,
            venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
            content:
              'The food is good, but not the best place to take your kids. Can be tight, and the prices are more in line with trendy new Durham spots. Maybe save it for a date night.',
            volume_rating: 4,
            totspots_rating: 3,
            user_id: 14,
            date_created: '2020-07-14T00:02:45.603Z',
          },
        ],
        tsAmenities: [
          {
            amenity_name: 'Play Area',
            id: 2,
          },
          {
            amenity_name: 'Dogs Welcome',
            id: 4,
          },
          {
            amenity_name: 'Fast Checkout',
            id: 5,
          },
          {
            amenity_name: 'Stroller Access',
            id: 5,
          },
          {
            amenity_name: 'Stroller Access',
            id: 5,
          },
        ],
      },
    },
  ],
};

export default venuesData;
