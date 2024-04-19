# Music To Your Weather
***A Course Project for IT5007 AY23/24 Semester 2***
Group Member
| Name | Matriculation No. | Email |
|-|-|-|
| Li Zhu | A0279534R | E1143347@u.nus.edu |
| Lin Sitian | A0279511B | E1143324@u.nus.edu |
| Zhao Xudong | A0276537R   | E1132270@u.nus.edu |

---
*Yes, there're tons of weather apps on the market.*

*But this might be one of the first apps to **match the music you listen to with the forecasted weather.***

## Deployment Instructions
### Clone Project
To begin with, clone this project to your local environment with the following git command:
* $```git clone <git url>```

### Install Dependencies and Node
Upon Successful download, execute the following command in your terminal to install all dependencies:
* $```npm install```

This project requires on **Node v20.11.1**, you can use the following command to check your local node version:
* $```node -v```

If it's not the target version, you can install the required version of Node by:
* $```nvm install v20.11.1```

Upon successful installation, do the version check again to confirm the target Node version is currently in use, or try the following command to switch Node version:
* $```nvm use v20.11.1```

### Initialize and Run the Project
First, start MongoDB:
* $```systemctl start mongod```

Make sure you're in the project directory, and run the following script to initialize the databse:
* $```mongo music scripts/init.mongo.js```

Upon successful initialization, start the sever:
* $```npm start```

## What's 'Music to Your Weather'?
### Inspirations
*Have you ever walked in the rain while thinking to yourself, "I wish there's some nice music for me to dance to"?*

*Or, do you keep coming back to that one fine Sunday morning, walking in the golden light of the rising sun with a nice cup of coffee in hand, but somehow you still sense the lack of some good melody?*

The inspiration for **Music to Your Weather (MTYW)** comes from such scenarios that everyone could resonate with. The Weather, to us human beings, is much more than the meteorological conditions, rather, varying weather conditions are inherently perceived by people from a subjective point of view and thus related to diffrent moods and feelings.

Starting with this observation, this web application offers to match music, a popular form of art creation to recreate scenes and feelings in the audience, with the forecasted weather.

Just launch the web app, and the matching song would pop-up to you with the latest weather forecast. So you know not only **if it's going to rain or not**, but you'll be confident that **you'll have the perfect song for that special moment in life.**

### Feature List
- Location:
    - Get current location;
    - Manually input latitude & longitude to specify a location;
    - Show the location on Google Maps;
- Weather Forecast:
    - Get 2-hr weather forecast for current location;
- Song Recommendation:
    - Get recommended track from Spotify based on local weather;
- Favorite Songs:
    - Save a recommended song to the favorite list;
- Recommnedation History:
    - View previous recommnedations for that day (for historical dates);
    - View saved songs;
    - Remove a saved song;


### Problem & Analysis
As stated in the ***inspiration*** section, this web app provides a tentative solution to the everyday scenario of finding suitable music for a given weather condition.

To properly match numerical/nominal weather data to music, which are described by numerical acoustic features, a proper algorithm would have to be developed and fine-tuned for satisfactory results - this is exactly where the innovations lie in this project and how we pushed the boundaries.

### Challenges
The team members are faced with two major challenges while implementing the project:
- where to source the raw data;
- how to translate data into usable results (in this case, embedded songs);

To source the core data for the project, we used two APIs in this web app:
- [**Weather Forecast**](https://beta.data.gov.sg/collections/1456/datasets/d_91ffc58263cff535910c16a4166ccbc3/view) APIs provided by SG government and openly accessible to all developers without registration:  
    - 2-hour Weather Forecast, 24-hour Weather Forecast & 4-day Weather Forecast are provided and can be used accordingly;
    - For 20hour Weather Forecast, readings from different meteorological observing stations are provided;
    - In this case, we use the **2-hour Weather Forecast**;
- [**Spotify Web API**](https://developer.spotify.com/documentation/web-api) provided by Spotify, which requires a one to be registered first and generate the token and secret for his application before proceeding:
    - In the research and algorithm design stage, this web app depends on [Get Track's Audio Feature](https://developer.spotify.com/documentation/web-api/reference/get-audio-features) to fetch key features of a given track to decide on the target range for diffrent features for different weather conditions;
    - In the implementation, this web app utilizes [Get Recommendations](https://developer.spotify.com/documentation/web-api/reference/get-recommendations) to fetch real-time recommendations for the forecasted weather condition;

In addition to that, we also developed a simple scrawler to fetch historical data from [Meteorological Service Singapore](http://www.weather.gov.sg/climate-historical-daily/) to so that our users can go back in time to find out about the weather and suggested song for that day.

To more intuitively show the forecasted weather, we also incorporated the [Google Map API](https://developers.google.com/maps/documentation/embed/get-started) into our project so that we can offer the user with a straightforward map display of weather conditions.

---

To tackle the second challenge, we collected a sample weather dataset and analyzed the features of the dataset. Eventually, we have come up with the following design that groups weather into 5 mood categories with their distinctive audio feature parameters to get the most relevant recommendations:

*In acutal implementation, for variety of recommendations, some parameters listed below may have been omitted.*

#### Matching Forecasted Weather (Nominal Data) to Spotify Recommendation
<table class="c11"><tbody><tr class="c15"><td class="c4 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">Weather</span></p></td><td class="c14 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">Mood</span></p></td><td class="c8 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">Parameters</span></p></td><td class="c17 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">seed_genres</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Fair (Day)</span></p></td><td class="c14" colspan="1" rowspan="5"><p class="c5"><span class="c0">Calm and Peaceful</span></p></td><td class="c8" colspan="1" rowspan="5"><ul class="c19 lst-kix_m8w3a1jjewfy-0 start"><li class="c5 c6 li-bullet-0"><span class="c3 c2">Tempo:</span><span class="c24 c3">&nbsp;60-90 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.6-0.9 (suggesting positive and uplifting feelings)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.2-0.4 (lower energy for relaxation)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Acousticness:</span><span class="c3 c24">&nbsp;0.5-0.9 (favoring acoustic sounds)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Instrumentalness:</span><span class="c24 c3">&nbsp;0.4-1.0 (ranging from mostly to fully instrumental)</span></li></ul></td><td class="c17" colspan="1" rowspan="5"><p class="c5 c27"><span class="c23 c2">pop,dance,classical,hip-hop,folk</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Fair (Night)</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Fair and Warm</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Partly Cloudy (Day)</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Partly Cloudy (Night)</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Cloudy</span></p></td><td class="c14" colspan="1" rowspan="4"><p class="c5"><span class="c0">Mysterious and Reflective</span></p></td><td class="c8" colspan="1" rowspan="4"><ul class="c19 lst-kix_ayozs99sgoev-0 start"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo:</span><span class="c0">&nbsp;70-100 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.3-0.5 (conveying a more introspective or ambiguous mood)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.3-0.5 (subdued energy level)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness:</span><span class="c0">&nbsp;0.4-0.8 (a mix of electronic and acoustic sounds)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Instrumentalness:</span><span class="c3">&nbsp;0.2-0.8 (allowing for both vocal and instrumental tracks)</span></li></ul></td><td class="c17" colspan="1" rowspan="4"><p class="c5 c27"><span class="c2 c23">pop,dance,classical,hip-hop,folk</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Hazy</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Slightly Hazy</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Mist</span></p></td></tr><tr class="c15"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Windy</span></p></td><td class="c14" colspan="1" rowspan="1"><p class="c5"><span class="c0">Energetic and Lively</span></p></td><td class="c8" colspan="1" rowspan="1"><ul class="c19 lst-kix_9unu5jarg4jf-0 start"><li class="c5 c6 li-bullet-0"><span class="c2">T</span><span class="c2">empo</span><span class="c0">: 120-160 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.7-1.0 (highly positive and energizing)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.7-1.0 (very high energy to match the lively atmosphere)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Danceability:</span><span class="c0">&nbsp;0.6-1.0 (promoting movement and dance)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Acousticness:</span><span class="c3">&nbsp;0.0-0.4 (more electronic and synthesized sounds)</span></li></ul></td><td class="c17" colspan="1" rowspan="1"><p class="c29 c5"><span class="c23 c2">pop,dance,classical,hip-hop,rock</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Light Rain</span></p></td><td class="c14" colspan="1" rowspan="6"><p class="c5"><span class="c0">Reflective and Somber</span></p></td><td class="c8" colspan="1" rowspan="6"><ul class="c19 lst-kix_rw9n5z8or8yr-0 start"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo:</span><span class="c0">&nbsp;60-90 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.1-0.4 (lower valence for a somber or melancholic feel)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.2-0.5 (lower energy to reflect a subdued or reflective mood)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness</span><span class="c0">: 0.5-0.9 (strong presence of acoustic elements for depth)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Instrumentalness:</span><span class="c0">&nbsp;0.1-0.5 (to include some vocal tracks that convey emotion)</span></li></ul></td><td class="c17" colspan="1" rowspan="6"><p class="c25"><span class="c23 c2">rainy-day</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Moderate Rain</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Heavy Rain</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Passing Showers</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Light Showers</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Showers</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Heavy Showers</span></p></td><td class="c14" colspan="1" rowspan="4"><p class="c5"><span class="c0">Intense and Dramatic</span></p></td><td class="c8" colspan="1" rowspan="4"><ul class="c19 lst-kix_9mf88x9ddus-0 start"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo: </span><span class="c0">80-140 BPM (a wider range to accommodate varying levels of intensity)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.1-0.3 (very low valence for dramatic and tense emotions)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.7-1.0 (high energy to reflect the dramatic and intense nature of the weather)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Danceability:</span><span class="c0">&nbsp;0.3-0.6 (not a focus, but can vary depending on the specific dramatic tone)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness:</span><span class="c0">&nbsp;0.0-0.5 (allowing for a mix of electronic and acoustic sounds to match the intensity)</span></li></ul></td><td class="c17" colspan="1" rowspan="4"><p class="c5 c29"><span class="c23 c2">pop,dance,classical,hip-hop,rock</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Thundery Showers</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Heavy Thundery Showers</span></p></td></tr><tr class="c9"><td class="c4" colspan="1" rowspan="1"><p class="c5"><span class="c0">Heavy Thundery Showers with Gusty Winds</span></p></td></tr></tbody></table>

#### Matching Historical Data to Spotify Recommendations
<table class="c11"><tbody><tr class="c15"><td class="c13" colspan="1" rowspan="1"><p class="c5"><span class="c0">Mood</span></p></td><td class="c21 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">Weather Conditions</span></p></td><td class="c18 c16" colspan="1" rowspan="1"><p class="c5"><span class="c0">Audio Features</span></p></td><td class="c13" colspan="1" rowspan="1"><p class="c5"><span class="c0">Seed_Genres</span></p></td></tr><tr class="c15"><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">Calm and Peaceful</span></p></td><td class="c21" colspan="1" rowspan="1"><ul class="c19 lst-kix_m8w3a1jjewfy-0"><li class="c5 c10 li-bullet-0"><span class="c0">Mean Wind Speed (km/h): Low (4.1 to 10.0) - Gentle breezes that are soothing and create a sense of tranquility.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Daily Rainfall Total (mm): Very low (0.0 to 5.0) - Minimal to no rain, suggesting clear skies and peaceful conditions.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Mean Temperature (°C): Moderate (25.0 to 28.0) - Comfortable temperatures that are neither too hot nor too cold.</span></li></ul></td><td class="c18" colspan="1" rowspan="1"><ul class="c19 lst-kix_m8w3a1jjewfy-0"><li class="c5 c6 li-bullet-0"><span class="c3 c2">Tempo:</span><span class="c24 c3">&nbsp;60-90 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.6-0.9 (suggesting positive and uplifting feelings)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.2-0.4 (lower energy for relaxation)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Acousticness:</span><span class="c24 c3">&nbsp;0.5-0.9 (favoring acoustic sounds)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Instrumentalness:</span><span class="c3">&nbsp;0.4-1.0 (ranging from mostly to fully instrumental)</span></li></ul></td><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">pop,dance,classical,hip-hop,folk</span></p></td></tr><tr class="c15"><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">Mysterious and Reflective</span></p></td><td class="c21" colspan="1" rowspan="1"><ul class="c19 lst-kix_4axgxett014j-0 start"><li class="c5 c10 li-bullet-0"><span class="c0">Mean Temperature (°C): Slightly cool (22.8 to 24.0) - Cooler temperatures that may induce introspection or a reflective mood.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Maximum Temperature (°C): Low peak (23.9 to 25.0) - Overcast days with limited sunlight, enhancing a mysterious ambiance.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Mean Wind Speed (km/h): Moderate (10.1 to 15.0) - A breeze that's noticeable but not overpowering, adding to the atmosphere.</span></li></ul><p class="c1"><span class="c0"></span></p></td><td class="c18" colspan="1" rowspan="1"><ul class="c19 lst-kix_ayozs99sgoev-0"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo:</span><span class="c0">&nbsp;70-100 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.3-0.5 (conveying a more introspective or ambiguous mood)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.3-0.5 (subdued energy level)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness:</span><span class="c0">&nbsp;0.4-0.8 (a mix of electronic and acoustic sounds)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Instrumentalness:</span><span class="c3">&nbsp;0.2-0.8 (allowing for both vocal and instrumental tracks)</span></li></ul></td><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">pop,dance,classical,hip-hop,folk</span></p></td></tr><tr class="c15"><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">Energetic and Lively</span></p></td><td class="c21" colspan="1" rowspan="1"><ul class="c19 lst-kix_sklo4vmrr2jd-0 start"><li class="c5 c10 li-bullet-0"><span class="c0">Maximum Temperature (°C): High (31.0 to 36.7) - Warmer days that are often associated with outdoor activities and vibrancy.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Mean Wind Speed (km/h): Moderately high (15.1 to 20.0) - Stronger winds that can invigorate and energize individuals.</span></li></ul><p class="c1"><span class="c0"></span></p></td><td class="c18" colspan="1" rowspan="1"><ul class="c19 lst-kix_9unu5jarg4jf-0"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo</span><span class="c0">: 120-160 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.7-1.0 (highly positive and energizing)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.7-1.0 (very high energy to match the lively atmosphere)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Danceability:</span><span class="c0">&nbsp;0.6-1.0 (promoting movement and dance)</span></li><li class="c5 c6 li-bullet-0"><span class="c3 c2">Acousticness:</span><span class="c3">&nbsp;0.0-0.4 (more electronic and synthesized sounds)</span></li></ul></td><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">pop,dance,classical,hip-hop,rock</span></p></td></tr><tr class="c15"><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">Reflective and Somber</span></p></td><td class="c21" colspan="1" rowspan="1"><ul class="c19 lst-kix_3tlgshk9lei5-0 start"><li class="c5 c10 li-bullet-0"><span class="c0">Daily Rainfall Total (mm): Moderate (5.1 to 20.0) - Rainy days that often bring about contemplation and a somber mood.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Minimum Temperature (°C): Cool nights (21.4 to 22.7) - Cooler temperatures that can induce a reflective state, especially at night.</span></li></ul><p class="c1"><span class="c0"></span></p></td><td class="c18" colspan="1" rowspan="1"><ul class="c19 lst-kix_rw9n5z8or8yr-0"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo:</span><span class="c0">&nbsp;60-90 BPM</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.1-0.4 (lower valence for a somber or melancholic feel)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.2-0.5 (lower energy to reflect a subdued or reflective mood)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness</span><span class="c0">: 0.5-0.9 (strong presence of acoustic elements for depth)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Instrumentalness:</span><span class="c0">&nbsp;0.1-0.5 (to include some vocal tracks that convey emotion)</span></li></ul></td><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">rainy-day</span></p></td></tr><tr class="c15"><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">Intense and Dramatic</span></p></td><td class="c21" colspan="1" rowspan="1"><ul class="c19 lst-kix_livm5fsjuemn-0 start"><li class="c5 c10 li-bullet-0"><span class="c0">Daily Rainfall Total (mm): Very high (50.0 to 134.0) - Heavy rainfall that can create dramatic and intense weather conditions.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Highest 60 Min Rainfall (mm): High (30.0 to 83.6) - Short bursts of intense rainfall adding to the drama.</span></li><li class="c5 c10 li-bullet-0"><span class="c0">Max Wind Speed (km/h): Very high (50.0 to 77.0) - Strong wind gusts that can be exhilarating and create a sense of urgency.</span></li></ul><p class="c1"><span class="c0"></span></p></td><td class="c18" colspan="1" rowspan="1"><ul class="c19 lst-kix_9mf88x9ddus-0"><li class="c5 c6 li-bullet-0"><span class="c2">Tempo: </span><span class="c0">80-140 BPM (a wider range to accommodate varying levels of intensity)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Valence:</span><span class="c0">&nbsp;0.1-0.3 (very low valence for dramatic and tense emotions)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Energy:</span><span class="c0">&nbsp;0.7-1.0 (high energy to reflect the dramatic and intense nature of the weather)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Danceability:</span><span class="c0">&nbsp;0.3-0.6 (not a focus, but can vary depending on the specific dramatic tone)</span></li><li class="c5 c6 li-bullet-0"><span class="c2">Acousticness:</span><span class="c0">&nbsp;0.0-0.5 (allowing for a mix of electronic and acoustic sounds to match the intensity)</span></li></ul></td><td class="c28" colspan="1" rowspan="1"><p class="c5"><span class="c0">pop,dance,classical,hip-hop,rock</span></p></td></tr></tbody></table>


### Significance of this Project
This web app truly blends technology, music, and environmental sensitivity to deliver a unique and personal experience to users. By utilizing real-time weather data to tailor music recommnedations, our web app connects the emotional tone of music with the ambient conditions, providing a more immersive music experience.

This project not only enriches the way people discover music but also demonstrates the power of data analytics and machine learning in transforming everyday entertainment. It also opens new avenues for artists to connect with audiences in moments directly influenced by their surroundings, potentially reshaping how music is promoted and consumed.

Over the course of the next 2, 5, and 10 years, we are confident that our product will maintain its relevance. Music, as a profound expression of art, plays an integral role in human culture, and the demand for curated musical experiences is unlikely to diminish.

Certainly, advancements in artificial intelligence will enhance the capability to analyze and interpret the tonal and emotional aspects of music. We have designed our web application with a ***modular architecture*** and an ***emphasis on upgradability***, ensuring that it can seamlessly integrate state-of-the-art methodologies for understanding musical content. This strategic design allows us to perpetually update and refine our app, keeping pace with advancements in the field and continually enhancing user experience.
## Solution Architecture

### Prototype
The depicted prototype delineates the structure of our web application, which synthesizes three principal modules: the map module (top-left quadrant), the calendar module (top-right quadrant), and an integrated Spotify module for song preview and playback. This is complemented by a streamlined assortment of interactive elements such as buttons and input fields.

The user interface is engineered to adhere to principles of minimalism and flat design, ensuring a low cognitive load. Interface elements are strategically positioned to facilitate intuitive navigation and quick user acclimatization to the application's full suite of features.

The application adopts a single-page architecture that interfaces seamlessly with a robust backend database, driving the entire user experience. This architecture enables efficient data retrieval and manipulation, ensuring a responsive and cohesive interaction environment.
![](assets/Prototype.png)

### Front-end & Back-end Modules
The following mind map shows the modularized design of the whole system for the Music to Your Weather Web app.

Web APIs used are shown in **bold**.

![](assets/IT5007%20Group%20Project.png)

### Database & Schema
To save the liked songs, this project uses `MongoDB` for back-end database implementation. The liked songs are stored in the `like` collection of the `music` db.

The schema for `LikedMusic` is shown as below:

```graphql
type LikedMusic{
    _id: ID!
    track: String!
    artist: String!
    date: String!
}
```
This type represents a music track that a user has liked.
- Fields:
    - **_id:** A unique identifier for the like entry. It is of type ID and is non-nullable, meaning every like must have an ID.
    - **track:** A string that represents the name of the track. This field is non-nullable.
    - **artist:** A string representing the name of the artist of the track. This field is also non-nullable.
    - **date:** A string indicating the date when the track was liked. It is also non-nullable and presumably stores date data in string format.

A `query` operation and 2 `mutation` operations have also been defined to manipulate the databse:

```graphql
type Query {
	getLikes(date: String!):[LikedMusic]
}


type Mutation {
	addLike(track: String!,artist: String!, date: String!): Boolean!
    deleteLike(track: String!,artist: String!, date: String!):Boolean!
}
```

## Legal Aspects / Others
### Open Source Considerations

We are actively exploring the possibility of open-sourcing this project. As part of this process, we are committed to ensuring that the project remains sustainable and retains its value to the community. To protect the project from unauthorized copying and distribution, we are evaluating various strategies, including:

- Implementing a clear and robust licensing agreement that outlines permissible uses of the source code.
- Incorporating copyright notices and intellectual property acknowledgments where appropriate.

We are committed to openly sharing our recommendation algorithm, as described previously. Although it is in its early stages of development, we believe it can provide valuable insights to those interested in this area of study. This transparency is aimed at fostering collaboration and innovation within the community.

## Competition Analysis
On the market, there are two products that shares similar inspirations with our web app, namely, [Climatune](https://www.awwwards.com/sites/climatune) and [WeatherTunes](https://weathertunes.com).

The former is a temporary campaign launched by Spotify in collaboration with AccuWeather, while the latter is a smartphone app that's available on iOS only.

First, let's look at the case of Climatune.

![Climatune Screenshot](/assets/awwwards-Climatune-1.jpg)

Obviously, the official collaboration by Spotify and AccuWeather could have higher priority in accessing the Spotify API to get song recommendations, or even leveraging some private APIs that's not publicly accessible to non-in-house developers to make the results more satisifying.

However, it is only a 2017 temporary campaign to boost brand presence, and so far, it is not accessible anymore.

Then, let's look at WeatherTunes.

From its website we can tell, it utilizes the Dark Sky api for weather and adjusts the music based on real-time weather, focusing on tempo and mood throughout the day. It offers genre selection and a learning algorithm that refines music choices according to user preferences over time. WeatherTunes emphasizes a no-repeat policy for song selection and leverages YouTube videos for playback.

One major drawback of the app is, it is only available on iOS, makeing it impossible to access for users of smartphones based on different OSs or desktop users. And while evaluating the app, the experience was always satisfying for us, as the server did not always give response.

Apart from those issues regarding app implementation, another shortcoming of the app is that it does not show the results on a map, so that the user does not feel as connected to the physical world out there. Also, it is not possible to go back in time and discover about past recommendations.

Compared with these two solutions, our web app has the following advantages:

1. **Comprehensive Modules**: With a map module, calendar module, and Spotify module, our app offers a more detailed user experience that allows for a variety of interactions, possibly more than what WeatherTunes and Climatune may offer.
2. **Historical Weather Data**: Our app utilizes historical weather data to generate historical recommendations, creating a more personalized and nostalgic experience compared to competitors.
3. **User History and Preferences**: With a back-end database that stores user preferences and history, our app could potentially be upgraded to offer more personalized recommendations over time, learning from past interactions.
4. **One-Page Cross-Platform App Experience**: The simplicity of a single-page application can result in faster load times and a smoother user experience, which is advantageous for user retention. Also, it's web-based experience means it is easy to adapt the app for varying device types.

Challenges faced by our web app compared to other products on the market may include:
1. **Resource Limitations**: Our app currently depends on the Spotify API for song features, and the rate limitation imposed by Spotify may potentially impact the growth of our user base if this product should be commercialized.
2. **Brand Recognition and User Base**: Unlike Climatune, which obviously benefitted from the branding of Spotify and AccuWeather, our new web app has to build its brand recognition from ground up, which could be challenging. Also, an existing user-base means precious user behavior data that could be used to train the recommendation model.
3. **Monetization Strategy**: A sustainable revenue model that can compete with these established services, e.g. Spotify, needs to be found if the app is to be commercialized and put into long-term operation.

In conclusion, while there are similar products on the market, our design offers better expandability and a more comprehensive experiences. However, challenges like building a user base and competing with established players need to be addressed to ensure the app's long-term viability and success in the market.
