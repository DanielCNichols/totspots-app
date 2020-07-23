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

let detail = {
  html_attributions: [],
  result: {
    formatted_address: '107 E Parrish St, Durham, NC 27701, USA',
    formatted_phone_number: '(919) 680-2333',
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
    name: 'Bull City Burger and Brewery',
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 0,
            time: '2100',
          },
          open: {
            day: 0,
            time: '1111',
          },
        },
        {
          close: {
            day: 1,
            time: '2100',
          },
          open: {
            day: 1,
            time: '1700',
          },
        },
        {
          close: {
            day: 2,
            time: '2100',
          },
          open: {
            day: 2,
            time: '1700',
          },
        },
        {
          close: {
            day: 3,
            time: '2100',
          },
          open: {
            day: 3,
            time: '1700',
          },
        },
        {
          close: {
            day: 4,
            time: '2100',
          },
          open: {
            day: 4,
            time: '1700',
          },
        },
        {
          close: {
            day: 5,
            time: '2200',
          },
          open: {
            day: 5,
            time: '1111',
          },
        },
        {
          close: {
            day: 6,
            time: '2200',
          },
          open: {
            day: 6,
            time: '1111',
          },
        },
      ],
      weekday_text: [
        'Monday: 5:00 – 9:00 PM',
        'Tuesday: 5:00 – 9:00 PM',
        'Wednesday: 5:00 – 9:00 PM',
        'Thursday: 5:00 – 9:00 PM',
        'Friday: 11:11 AM – 10:00 PM',
        'Saturday: 11:11 AM – 10:00 PM',
        'Sunday: 11:11 AM – 9:00 PM',
      ],
    },
    photos: [
      {
        height: 3744,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107707024285327103796">Bull City Burger and Brewery</a>',
        ],
        photo_reference:
          'CmRaAAAATMww2iM3JyfhqRylntAcnYdfmCuYmDTmo4ZKffvALI0Eu-PbiMoHjsIAT7jfpl5idAQIrBbyz1N9SS9tZgLix5eXe2C2IrOAOrJax_49kBMuyfsbKWQadayEv108a5QJEhAnohcpLxj95RZT6kBH10uQGhSnraaCBERMVlpbyubBh6yKTQeWJw',
        width: 5616,
      },
      {
        height: 3072,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107707024285327103796">Bull City Burger and Brewery</a>',
        ],
        photo_reference:
          'CmRaAAAApuqb5IJkAm_UiWU-uPxx4zac4Pbxn2JcMhhqmvA-v9j7jkyK5g1jMRF3Wc6_xnfk82p4arbQWUNa66VGbHz-luNfgEsZW9LEu8prH685tHgO1x-91zqFH1xYrsGzK3I7EhCKs0_XH711bSIvwRGbRetFGhSe7Yk2_3SKAo7FUja4RlrIlfGc_w',
        width: 4608,
      },
      {
        height: 3744,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107707024285327103796">Bull City Burger and Brewery</a>',
        ],
        photo_reference:
          'CmRaAAAAzGAb_nTT_vkNsYGyGCBjWxMD4mAsHHvtqxw9aZAr6r89ALyttwbpM_wCI79iWDzmWRjHogdhOsUCMeKx9Q6RYhU-NJShQbSkXEt9iNWGvLLdiqP9AInvt3Kp5yguxsU7EhAZDp8jHPlWO22H-3PidoVPGhTY1C9T3KzTOAigSxDS0xxEQMbncQ',
        width: 5616,
      },
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/108100359339864332319">Joe Cohn</a>',
        ],
        photo_reference:
          'CmRaAAAAoAhv9aDP_DRd171bY26WxdootWwG46IYNdKI1eckELsiZ6y0Ph835unPBJrRDzrJjOi-PzNlbnpCtDZ_3r7BWyDD1sIajzjwv3R-J2WlFt06sqynnziCu8qc_Rpii4ynEhCaH64eJLk8YhDBIqKw3G2dGhSaYo321IS8QsTQHmDbCq9NZ8_HGg',
        width: 3024,
      },
      {
        height: 1000,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101990977102101032141">Dale M. Miller</a>',
        ],
        photo_reference:
          'CmRaAAAAujLjVmFP-3zvjf4Cq_6125NfsQzoKFKR90V-mebBfCSshEt9c7znNJafklQGr8dtoU0E1hN0PLpv5GKi8O0w5JgmVe4SrJPGXK_GPSnODva8O24JejeA_Q-oV1KAs5bLEhCz7O3t0a8GVcvt6-SUitiIGhRrfRklFCFFLY8rfSZ5_jcqVcKwcA',
        width: 1000,
      },
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/103443238018028101255">Daniel Ky</a>',
        ],
        photo_reference:
          'CmRaAAAAXtZm9XER9uURHIcFO2hKIx7JeFvYhQPDgLkcrKStl9VF6tTuHrZd6O2iOC7ClNqIjVtY7xW0PYXaomW4Bgvb_J8gauQJnpJ1p6KZHuzyY6vrtUehm4hCqCitaBS3tMeqEhC_cSsIcMEzIFCvmlOkpr5dGhQfFXRiBVxr1BapSbVAaoJVv0D4-Q',
        width: 4032,
      },
      {
        height: 1440,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107707024285327103796">Bull City Burger and Brewery</a>',
        ],
        photo_reference:
          'CmRaAAAAjQOfEYlZazkvKOStUiqlV1p7G5rqy_1SZK2sbp3Li686wwykYe5sahfVfu7_RsZqkUc3b4TfH5tv9C_U_jL6wYkTk6NFYUbMITKul49QcVUwBVxuRjWmL9P90V-NTgOKEhDJFgdz5LRDZhuCxhKkjSR8GhS_9J85dSvvEA-7j2SeHVmRHltJGQ',
        width: 1440,
      },
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101408047843709961392">Jenay Sampson</a>',
        ],
        photo_reference:
          'CmRaAAAAMPpbJCyBckwGSc0Y3q053UqgjtStBNpHnuimkaD5bNDOv-EoRItCCIjL_O3PDgWvZvTP4y3f5wNB46M_8Y0MiWUBuPLwk-pFnPsNyKANYIiD8zSprulsJK499Lkcj4gnEhBVkXZowXbbQbsU3QWkdW81GhRs6f57DEtwFO4P8LRE4Mr2-2ZLmw',
        width: 3024,
      },
      {
        height: 3265,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107885403616654944581">Jonathan Li</a>',
        ],
        photo_reference:
          'CmRaAAAAsVNEY-7aOSYI8wL80XN98Rr_vmHVqsK9ogHBRcbrSzczVIJbHSYsX-I_LHOizjUUY_GO9-VzWxwzapH8wEfS2gEfgjCNb9hASNIKffuLsAuJbEh1ZRB8z6ov63AiWponEhAarkwGqMShjNtjG3LKolC2GhTwQLzCRtbaynSpedUt3N4XaG-d3w',
        width: 4898,
      },
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107987266181181846332">Ted T</a>',
        ],
        photo_reference:
          'CmRaAAAA_RdVLIUSCMHztzmy1QjCFtpLTymf4pH69YKYRH3qChkS9Ukw9t9xi9cXlEgfJ8w2wylU4LY4OR1u3ia9ghRGeY1BoQldiBO1LK250iy-AsKc-e7-D3ct3cl5_-inHQpaEhAMQFjyY6kApj0_g5WWHaR0GhTkWiup57c2CuuK5itisj-AW6vVag',
        width: 4032,
      },
    ],
    place_id: 'ChIJh3eRD27krIkRpG-tTJnXAf8',
    price_level: 2,
    rating: 4.4,
    reviews: [
      {
        author_name: 'Taohid Latif',
        author_url:
          'https://www.google.com/maps/contrib/111619213134256337473/reviews',
        language: 'en',
        profile_photo_url:
          'https://lh4.ggpht.com/-DC-nWam2eP0/AAAAAAAAAAI/AAAAAAAAAAA/BsClzfuipn0/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg',
        rating: 4,
        relative_time_description: '4 months ago',
        text:
          'I had the beef hamburger (with blue cheese, mushrooms and caramelized onions), dirty fries and fountain soda. They make their own fountain sodas without any high fructose corn syrup and it tastes way better than any other soda on the market. The combination of the toppings  with the beef was also pretty good.',
        time: 1582510419,
      },
      {
        author_name: 'judith khavogoi',
        author_url:
          'https://www.google.com/maps/contrib/108600676146310469305/reviews',
        language: 'en',
        profile_photo_url:
          'https://lh6.ggpht.com/-je5M6Nx_8yg/AAAAAAAAAAI/AAAAAAAAAAA/fbv-0tHrJRs/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg',
        rating: 3,
        relative_time_description: '3 weeks ago',
        text:
          "Server were nice. The burger was surprisingly not that great. It was ok. I've had the burger before and it was great. Maybe it was the bccb sauce I tried or the onions were caramelized with something different 🤔.  Anyway nice atmosphere. Especially during this pandemic season",
        time: 1593046008,
      },
      {
        author_name: 'Abbie Haynes',
        author_url:
          'https://www.google.com/maps/contrib/104523957381808958955/reviews',
        language: 'en',
        profile_photo_url:
          'https://lh3.ggpht.com/-wjNHQCkcH4Q/AAAAAAAAAAI/AAAAAAAAAAA/hgpcTFCjxbU/s128-c0x00000000-cc-rp-mo/photo.jpg',
        rating: 5,
        relative_time_description: '3 weeks ago',
        text:
          'Tried this place on a whim while in Durham for a work trip. Saw the good reviews and was enticed. This place lives up to the hype! I did take-out, and drove ten minutes back to my hotel and my burger was still the perfect temperature, with pink inside. One of the best burgers I’ve had. Highly recommend for any burger lovers out there that are in Durham!',
        time: 1593043762,
      },
      {
        author_name: 'Gabriela Cervantes',
        author_url:
          'https://www.google.com/maps/contrib/113574362681346312062/reviews',
        language: 'en',
        profile_photo_url:
          'https://lh5.ggpht.com/-Zr0gfluOBWg/AAAAAAAAAAI/AAAAAAAAAAA/p-0I2TCw4Sg/s128-c0x00000000-cc-rp-mo/photo.jpg',
        rating: 3,
        relative_time_description: '2 weeks ago',
        text:
          'As a new resident of Durham my fiancé and I have been attempting to try a new place once a week. We were excited to try BCBB after reading several “5 star” reviews and hearing they were voted “best burger in town”. Right now just the patio is open due to COVID and you have to order at a walk up window. I found the menu to be confusing, especially when I only had a couple minutes to order as people were waiting behind me, they do not automatically give you the regular sides with your burger (lettuce, onion, tomatoes, etc) so you have to remember to ask. The lady taking our order had a pretty short attitude, she asked if I wanted anything else on my burger so I asked what it came with, unaware of needing to ask for standard “extras” which she sarcastically replied “bacon and blue cheese” with a tone that sounded like she was rolling her eyes. I asked for my “extras” and then had to amend my fiancé’s order because he was also unaware of this menu fact. We also ordered sweet potato fries that to be fair the menu states have a dusting of sugar on them (I found it contradicting to be dipping sugar fries into ketchup , maybe a mallow sauce would be more appropriate?) and they came out VERY burnt, could only eat about half before giving up. The worst part was the burger. I lifted it up and immediately water began pouring out and completely soaked an entire napkin. After wringing it out the water/juice eventually stopped. There was a minuscule amount of blue cheese, I really thought they had forgot to put any on the burger until I began digging around and lifting the lettuce and pickles up, I did not get a single taste of blue cheese till about half way in. The “patio” area is really a space between two buildings with noisy machine (AC unit I think?) nearby. No actual chair seating, all picnic tables, which most probably don’t mind but for me sitting at a picnic table isn’t the most comfortable and it would be nice to see some various seating options. It wasn’t entirely unenjoyable so I would give it a solid “3 star”. They do have good soda (cane sugar type not corn syrup) and my fiancé enjoyed the beer he ordered.',
        time: 1593266347,
      },
      {
        author_name: 'riggercheck',
        author_url:
          'https://www.google.com/maps/contrib/105936176110870929902/reviews',
        language: 'en',
        profile_photo_url:
          'https://lh6.ggpht.com/-UREtZKqgVf0/AAAAAAAAAAI/AAAAAAAAAAA/-Q3Y6pVqQUk/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
        rating: 5,
        relative_time_description: '8 months ago',
        text:
          "First time here, I like it. Live over a hour away. Had a burger with goat cheese, well done, it was fantastic. Ordered a hot dog, it was good but not a fan of toasted buns. Burnt bread doesn't taste good to me(my opinion). Fries were perfect. The fried pickle chips were good. I would come back for another bite to eat.",
        time: 1573426230,
      },
    ],
    types: ['bar', 'restaurant', 'food', 'point_of_interest', 'establishment'],
    url: 'https://maps.google.com/?cid=18375205008064737188',
    user_ratings_total: 1069,
    vicinity: '107 East Parrish Street, Durham',
    website: 'http://www.bullcityburgerandbrewery.com/',
  },
  status: 'OK',
  amenities: [
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
  ],
  tsReviews: [
    {
      id: 1,
      content:
        'We love this place! The perfect spot to take your kids on a Friday afternoon after work!',
      totspots_rating: 4,
      volume_rating: 5,
      date_created: '2020-07-14T00:02:45.587Z',
      venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
      user_id: 2,
      first_name: 'Kelley',
      last_name: 'Breeze',
      count: '2',
    },
    {
      id: 2,
      content:
        'I do all my work here. The staff is awesome and the coffee is amazing. A little tight, so maybe not the best for infants, IMHO',
      totspots_rating: 4,
      volume_rating: 1,
      date_created: '2020-07-14T00:02:45.599Z',
      venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
      user_id: 5,
      first_name: 'Joanna',
      last_name: 'Nichols',
      count: '2',
    },
    {
      id: 3,
      content:
        'Hands down the best place to get a quick breakfast with your family in the city. A family of four can eat for under 15 bucks! Easy to get a stroller in here, and they have an awesome changing table. Skip the rest, you wanna go to Early Bird.',
      totspots_rating: 5,
      volume_rating: 1,
      date_created: '2020-07-14T00:02:45.601Z',
      venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
      user_id: 7,
      first_name: 'Dermot',
      last_name: 'Holson',
      count: '2',
    },
    {
      id: 4,
      content:
        'The food is good, but not the best place to take your kids. Can be tight, and the prices are more in line with trendy new Durham spots. Maybe save it for a date night.',
      totspots_rating: 3,
      volume_rating: 4,
      date_created: '2020-07-14T00:02:45.603Z',
      venueid: '0f5502f218f8da928bd697801a0ae6f0f6e3beab',
      user_id: 14,
      first_name: 'Gar',
      last_name: 'Fawdery',
      count: '1',
    },
  ],
  tsAverages: {
    avgrating: '4',
    avgvolume: '3',
  },
};
export { venuesData, detail };
