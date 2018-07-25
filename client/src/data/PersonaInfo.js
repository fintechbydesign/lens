// Conversion of Names to the Persona Infos

// I probably should be using Object.freeze here, but so many layers...

const Jeff = {
  index: 0,
  name: "Jeff",
  job: "High School Teacher",
  salary: "£22,000",
  hours: "38",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You like Barack Obama and BBC News, showing you're up-to-date with current events."},
      2: {points: 1, text:"Your comments are articulate, indicating good communication skills."},
      3: {points: -1, text: "You have strong opinions, which may be construed as negative or close minded."}
    },
    "YouTube": {
      1: {points: 1, text: "You’ve watched 13 DIY videos this week, showcasing your natural curiosity."},
      2 : {points: -1, text: "You're not watching your subscriptions, highlighting a lack of engagement."},
      3: {points: 1, text: "You actively interact with fellow users, demonstrating a willingness to help others."}
    },
    "Fitbit": {
      1: {points: 1, text: "The consistency of your heart rate shows that you are a healthy individual."},
      2: {points: -1, text: "You’ve never reached your daily step count goal; it may be difficult to keep up in an active classroom."},
      3: {points: -1, text: "You average 5 hours of sleep per night, meaning you will be too exhausted to teach."}
    },
    "Instagram": {
      1: {points: 1, text: "You follow the Portrait Gallery, displaying your interest in the local culture scene."},
      2: {points: -1, text: "Your photos often contain alchohol, which isn’t appropriate when working with students."},
      3: {points: 0, text: "You have never used a hashtag."}
    },
    "Amazon":{
      1: {points: 1, text: "You purchased books on current events, indicating you keep up-to-date with world issues."},
      2: {points: -1, text: "You tend to give low reviews; you may be too strict when scoring students' tests."},
      3: {points: 1, text: "You’ve never missed a scheduled delivery, proving you’re reliable."}
    },
    "Uber": {
      1: {points: -1, text: "You use Uber to travel to bars on weekdays, revealing you may have a drinking problem."},
      2: {points: -1, text: "You’re only rated 3.41 stars, showing that you might not treat everyone respectfully."},
      3: {points: 1, text: "You’ve tipped the driver on all your trips this week, highlighting that you’re appreciative."}
    }
  },
    description: "A career as a high school teacher offers you the chance to teach a subject you love and to engage pupils in learning for their future. You’ll plan lessons in line with national objectives, with the aim of ensuring a healthy culture of learning."
  };

const Mary = {
  index: 1,
  name: "Mary",
  job: "Sales Advisor",
  salary: "£12,500",
  hours: "20",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You’ve liked many of your friends’ posts, illustrating that you are quite social."},
      2: {points: -1, text:"Your comments could be construed as judgmental, contradicting a friendly sales demeanour."},
      3: {points: -1, text: "You post negative judgements around obesity, which may not be suitable for our customers."}
    },
    "YouTube": {
      1: {points: -1, text: "You spent 10 hours streaming videos last week, highlighting that you're easily distracted."},
      2 : {points: 1, text: "You follow various channels, meaning you'll be able to relate to different customers."},
      3: {points: -1, text: "You easily lose your patience, which is worrying when you are dealing with customers."}
    },
    "Fitbit": {
      1: {points: 1, text: "Your heart rate is consistent, meaning you can withstand long, active days."},
      2: {points: 1, text: "You run for a minimum of 30 minutes per day, showing you’re used to being on your feet."},
      3: {points: 1, text: "You always sleep 8 hours per night, signifying you’ll have the energy to do the job."}
    },
    "Instagram": {
      1: {points: -1, text: "You follow many celebrities, which may influence your opinions too much."},
      2: {points: -1, text: "You post a lot of images of yourself travelling, so you may struggle to work inside all day."},
      3: {points: 0, text: "You have never used a hashtag."}
    },
    "Amazon":{
      1: {points: -1, text: "Your purchases are quite random, showing you may be impulsive at times."},
      2: {points: 1, text: "Your reviews are open and transparent, exhibiting an ability to give customers honest advice."},
      3: {points: -1, text: "You have missed 3 out of the last 5 deliveries, indicating poor time management."}
    },
    "Uber": {
      1: {points: 1, text: "You allow your driver to take the quickest route, indicating that you're courteous of others’ time."},
      2: {points: 1, text: "You have a rating of 4.82, showing you are very respectful and polite."},
      3: {points: 1, text: "You always tip your drivers, demonstrating you appreciate good customer service."}
    },
  },
    description: "Office Managers ensure the smooth running of an office on a day-to-day basis and may manage a team of administrative or support staff. Responsibilities typically include: managing office budgets, liaising with staff, and implementing and maintaining office procedures."
};

const Julie = {
  index: 2,
  name: "Julie",
  job: "Office Manager",
  salary: "$40,000",
  hours: "40",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You like family TV programs, showing you'd be a good fit with the company culture."},
      2: {points: 1, text:"You always post 'Happy Birthday' to friends, showing you remember important details."},
      3: {points: -1, text: "You've shared private work stories on your profile, which may breach our privacy policy."}
    },
    "YouTube": {
      1: {points: -1, text: "73% of your videos were streamed between 9-5; you get easily distracted."},
      2 : {points: 0, text: "You don’t subscribe to any channels."},
      3: {points: 1, text: "You've commented positively on 20 videos, demonstrating that you're proactive."}
    },
    "Fitbit": {
      1: {points: -1, text: "Your heart rate fluctuates, indicating you may have health problems"},
      2: {points: 0, text: "You don’t exercise regularly."},
      3: {points: 1, text: "You wake up everyday at 6am, showing you're unlikely to be late for work."}
    },
    "Instagram": {
      1: {points: 1, text: "You follow many family members, which is in line with our family office culture."},
      2: {points: 0, text: "You've never posted a picture of your children, showing that you value privacy."},
      3: {points: -1, text: "Your hashtags are often unrelated to the post, indicating a lack of awareness."}
    },
    "Amazon":{
      1: {points: 1, text: "Most of your purchases are household items, demonstrating you are organised."},
      2: {points: 1, text: "Your reviews are positive, indicating you're a positive person who gives good feedback."},
      3: {points: 1, text: "You've had deliveries to a previous employer, proving you worked there."}
    },
    "Uber": {
      1: {points: 0, text: "We couldn't find an account associated with you."},
      2: {points: 0, text: "We couldn't find an account associated with you."},
      3: {points: 0, text: "We couldn't find an account associated with you."}
    },
  },
    description: "Office Managers ensure the smooth running of an office on a day-to-day basis and may manage a team of administrative or support staff. Responsibilities typically include: managing office budgets, liaising with staff, and implementing and maintaining office procedures."
};

const Wang = {
  index: 3,
  name: "Wang",
  job: "Senior Trust Fund Advisor",
  salary: "HK$590,000",
  hours: "50+",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You liked many news outlets, indicating you're up-to-date with international business."},
      2: {points: 1, text:"You comment on news posts, showing you use social media as a work tool."},
      3: {points: 0, text: "You have never posted on your own Facebook timeline."}
    },
    "YouTube": {
      1: {points: -1, text: "You've watched some violent videos, highlighting a worrying hobby."},
      2 : {points: 1, text: "You have 4 subscriptions from FinTechs, showing interest in financial technology."},
      3: {points: 0, text: "You have never commented on a video."}
    },
    "Fitbit": {
      1: {points: -1, text: "Your heart rate fluctuates during the day, which shows you may be a health risk."},
      2: {points: 1, text: "You consistently walk for 40 minutes every day, demonstrating discipline."},
      3: {points: 1, text: "You’re always awake by 6:30am, indicating you're unlikely to be late for work."}
    },
    "Instagram": {
      1: {points: 0, text: "We couldn't find an account associated with you."},
      2: {points: 0, text: "We couldn't find an account associated with you."},
      3: {points: 0, text: "We couldn't find an account associated with you."}
    },
    "Amazon":{
      1: {points: 1, text: "You use Amazon Marketplace for your weekly groceries, showing budgeting skills."},
      2: {points: -1, text: "You have never reviewed a purchase, which doesn’t align with the advisor job profile."},
      3: {points: 1, text: "You get your groceries delivered after work, demonstrating that you're a good planner."}
    },
    "Uber": {
      1: {points: 1, text: "You've been picked up from your previous office, proving you worked there."},
      2: {points: 1, text: "You are rated 4.92 stars, indicating you're very kind and professional."},
      3: {points: 0, text: "You never have tipped a driver."}
    }
  },
    description: "The Senior Trust Advisor will administer estate and personal trust accounts including testamentary and intervivos trusts, Charitable Trusts, Conservatorships, Guardianships, Life Insurance Trusts, Private Family Foundations, Special Needs Trusts, and other Agency accounts."
};

const Ana = {
  index: 4,
  name: "Ana",
  job: "Social Media Manager",
  salary: "€22,000",
  hours: "38",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You like many celebrities, showing you stay updated with social media trends."},
      2: {points: 1, text:"Your comments include emojis, illustrating you communicate dynamically."},
      3: {points: -1, text: "The majority of your posts are directed from Instagram, showing a lack of originality."}
    },
    "YouTube": {
      1: {points: 1, text: "You watch and engage with top influencers, demonstrating good networking skills"},
      2 : {points: 1, text: "You've set up alerts for all subscriptions, showing you are proactive."},
      3: {points: 1, text: "You engage with fellow views promptly and friendly, highlighting your professionalism."}
    },
    "Fitbit": {
      1: {points: 1, text: "Your heart rate is stable, showing you're unlikely to struggle with health problems."},
      2: {points: -1, text: "You often exercise between 1-2pm, which may be disrupted with work hours."},
      3: {points: -1, text: "You wake up at 11am most days, indicating that you will be late for work."}
    },
    "Instagram": {
      1: {points: 1, text: "You are following 1,257 users, showing engagement with a wide range of audiences."},
      2: {points: 1, text: "All of your posts are during peak hours, revealing your knowledge of social media trends."},
      3: {points: -1, text: "Your hashtags are often unrelated to the post, indicating a lack of awareness."}
    },
    "Amazon":{
      1: {points: -1, text: "You spend over €200 a month on makeup, showing you may struggle with budgeting."},
      2: {points: 1, text: "You always leave reviews on beauty products, showcasing your ability to influence users."},
      3: {points: "F", text: "Your delivery addresses don't match your previous addresses, so a credit check is needed."}
    },
    "Uber": {
      1: {points: 1, text: "You've been picked up from your previous office, proving you worked there."},
      2: {points: 1, text: "You have a 4.63 rating, showing you treat drivers with courtesy."},
      3: {points: 0, text: "You never have tipped a driver."}
    }
  },
    description: "A social media manager leads an organisation’s social media strategy in order to boost visibility and customer and client engagement. This involves developing a strategy, producing good content, analysing usage data, and managing projects and campaigns."
};

const Martin = {
  index: 5,
  name: "Martin",
  job: "Lead Trainer",
  salary: "€40,000",
  hours: "50",
  // The data array contains the +/- points of the datasources and the descriptions
  data: {
    "Facebook" : {
      1: {points : 1, text:"You like various figures in the fitness industry, showing a keen interest in the subject."},
      2: {points: -1, text:"You insult others on discussion threads, demonstrating a poor demeanour."},
      3: {points: -1, text: "Your posts are often condescening, showing you may not get along with colleagues."}
    },
    "YouTube": {
      1: {points: 1, text: "75% of videos are your own workouts, showing you use gym facilities inappropriately."},
      2 : {points: 1, text: "You have 42 subscriptions to fitness channels, demonstrating you know current trends."},
      3: {points: 1, text: "You ask thoughtful questions, revealing you are inquisitive and want to learn more."}
    },
    "Fitbit": {
      1: {points: 1, text: "You have a low resting heart rate, suggesting you are physically fit."},
      2: {points: 1, text: "You exercise for 4 hours a day, proving your last fitness job."},
      3: {points: 1, text: "You sleep 8 hours a night, showing you understand the benefits of a good night’s sleep."}
    },
    "Instagram": {
      1: {points: -1, text: "You follow accounts with partial female nudity, which may make clients uncomfortable."},
      2: {points: 1, text: "Your posts include many body evolution pictures, demonstrating you are goal-oriented."},
      3: {points: 1, text: "You always use #fitness in your posts, showing dedication to the fitness community."}
    },
    "Amazon":{
      1: {points: 1, text: "You often purchase junkfood, which goes against a healthy lifestyle."},
      2: {points: 1, text: "Your reviews are informative, indicating you'll share knowledge with clients."},
      3: {points: 1, text: "You’ve never missed a delivery, showing you’re reliable and able to manage your time."}
    },
    "Uber": {
      1: {points: -1, text: "You use Uber to travel to pubs, which questions your dedication to your health."},
      2: {points: "F", text: "You have a 1.2 rating, revealing your lack of respect for others."},
      3: {points: 0, text: "You never have tipped a driver."}
    }
  },
    description: "A Lead Trainer is responsible for hiring, developing and managing performance of qualified Personal Trainers and ensuring that all club members have access to a highly trained fitness staff able to provide fitness counseling and training."
};

const Personas = [Jeff,Mary,Julie,Wang,Ana,Martin];

export function getPersonaFromIndex(index){
  return Personas[index];
}

function calculateScore(points){
  // If any of the choices contain an automatic fail
  if(points.some(point => point === "F") || points.length === 0){
    return -1;
  }
  return points.reduce((sum, x) => sum + x);
}

export function jobGotten(choices){
  // Extract the points from the choices
    let points = [];
    choices.map((d) => {
        [1,2,3].map((j) => {
            if(d.options[j].active)
                points.push(d.options[j].points)
        });
    });
  return calculateScore(points) > 0;
}

// The difference between the chosen datasources and the choices is that one is unrelated to the persona
// and the other one contains the right texts and points for the personas
// This converts from a representation like this:
//{
//             actionDescription: 'Facebook',
//             options: {
//                 1: {text: "likes", active: false},
//                 2: {text: "comments", active: false},
//                 3: {text: "posts", active: false},
//             },
//             iconSrc: '/logos/facebook.svg',
//         },
// to this:
// {
//           actionDescription: 'YouTube',
//           options: {
//               1: {text: "You’ve watched 13 DIY videos this week, showcasing your natural curiosity.", active: true, points: 1},
//               2: {text: "You're not watching your subscriptions, highlighting a lack of engagement.", active: true, points: 0},
//               3: {text: "You actively interact with fellow users, demonstrating a willingness to help others", active: true, points: -1},
//           },
//           iconSrc: '/logos/youtube.svg',
//           active: true,
//       }
export function convertToChoices(persona, dataSource){
    // The journey starts with the dummy persona which hasn't chosen anything yet
    if(persona.name === "dummy"){
        return [];
    }
    // Deep copy the array
    let choices = JSON.parse(JSON.stringify(dataSource));
    for (let i = 0; i < dataSource.length; i++) {
        [1,2,3].map((j) => {
            if(choices[i].options[j].active){
                choices[i].options[j].text = persona.data[choices[i].actionDescription][j].text;
            }
            choices[i].options[j].points = persona.data[choices[i].actionDescription][j].points;
        });
        choices[i].active = [1,2,3].some((j) => choices[i].options[j].active);
    }
    return choices;
}
