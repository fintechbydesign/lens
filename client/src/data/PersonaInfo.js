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
      likes: {points : 1, text:"You like Barack Obama and BBC News, showing you're up-to-date with current events."},
      comments: {points: 1, text:"Your comments are articulate, indicating good communication skills."},
      posts: {points: -1, text: "You have strong opinions, which may be construed as negative or close minded."}
    },
    "YouTube": {
      watched: {points: 1, text: "You’ve watched 13 DIY videos this week, showcasing your natural curiosity."},
      subscriptions : {points: -1, text: "You're not watching your subscriptions, highlighting a lack of engagement."},
      comments: {points: 1, text: "You actively interact with fellow users, demonstrating a willingness to help others."}
    },
    "Fitbit": {
      heart: {points: 1, text: "The consistency of your heart rate shows that you are a healthy individual."},
      steps: {points: -1, text: "You’ve never reached your daily step count goal; it may be difficult to keep up in an active classroom."},
      sleep: {points: -1, text: "You average 5 hours of sleep per night, meaning you will be too exhausted to teach."}
    },
    "Instagram": {
      following: {points: 1, text: "You follow the Portrait Gallery, displaying your interest in the local culture scene."},
      posts: {points: -1, text: "Your photos often contain alchohol, which isn’t appropriate when working with students."},
      hashtags: {points: 0, text: "You have never used a hashtag."}
    },
    "Amazon":{
      purchases: {points: 1, text: "You purchased books on current events, indicating you keep up-to-date with world issues."},
      reviews: {points: -1, text: "You tend to give low reviews; you may be too strict when scoring students' tests."},
      deliveries: {points: 1, text: "You’ve never missed a scheduled delivery, proving you’re reliable."}
    },
    "Uber": {
      locations: {points: -1, text: "You use Uber to travel to bars on weekdays, revealing you may have a drinking problem."},
      rating: {points: -1, text: "You’re only rated 3.41 stars, showing that you might not treat everyone respectfully."},
      tips: {points: 1, text: "You’ve tipped the driver on all your trips this week, highlighting that you’re appreciative."}
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
      likes: {points : 1, text:"You’ve liked many of your friends’ posts, illustrating that you are quite social."},
      comments: {points: -1, text:"Your comments could be construed as judgmental, contradicting a friendly sales demeanour."},
      posts: {points: -1, text: "You post negative judgements around obesity, which may not be suitable for our customers."}
    },
    "YouTube": {
      watched: {points: -1, text: "You spent 10 hours streaming videos last week, highlighting that you're easily distracted."},
      subscriptions : {points: 1, text: "You follow various channels, meaning you'll be able to relate to different customers."},
      comments: {points: -1, text: "You easily lose your patience, which is worrying when you are dealing with customers."}
    },
    "Fitbit": {
      heart: {points: 1, text: "Your heart rate is consistent, meaning you can withstand long, active days."},
      steps: {points: 1, text: "You run for a minimum of 30 minutes per day, showing you’re used to being on your feet."},
      sleep: {points: 1, text: "You always sleep 8 hours per night, signifying you’ll have the energy to do the job."}
    },
    "Instagram": {
      following: {points: -1, text: "You follow many celebrities, which may influence your opinions too much."},
      posts: {points: -1, text: "You post a lot of images of yourself travelling, so you may struggle to work inside all day."},
      hashtags: {points: 0, text: "You have never used a hashtag."}
    },
    "Amazon":{
      purchases: {points: -1, text: "Your purchases are quite random, showing you may be impulsive at times."},
      reviews: {points: 1, text: "Your reviews are open and transparent, exhibiting an ability to give customers honest advice."},
      deliveries: {points: -1, text: "You have missed 3 out of the last 5 deliveries, indicating poor time management."}
    },
    "Uber": {
      locations: {points: 1, text: "You allow your driver to take the quickest route, indicating that you're courteous of others’ time."},
      rating: {points: 1, text: "You have a rating of 4.82, showing you are very respectful and polite."},
      tips: {points: 1, text: "You always tip your drivers, demonstrating you appreciate good customer service."}
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
      likes: {points : 1, text:"You like family TV programs, showing you'd be a good fit with the company culture."},
      comments: {points: 1, text:"You always post 'Happy Birthday' to friends, showing you remember important details."},
      posts: {points: -1, text: "You've shared private work stories on your profile, which may breach our privacy policy."}
    },
    "YouTube": {
      watched: {points: -1, text: "73% of your videos were streamed between 9-5; you get easily distracted."},
      subscriptions : {points: 0, text: "You don’t subscribe to any channels."},
      comments: {points: 1, text: "You've commented positively on 20 videos, demonstrating that you're proactive."}
    },
    "Fitbit": {
      heart: {points: -1, text: "Your heart rate fluctuates, indicating you may have health problems"},
      steps: {points: 0, text: "You don’t exercise regularly."},
      sleep: {points: 1, text: "You wake up everyday at 6am, showing you're unlikely to be late for work."}
    },
    "Instagram": {
      following: {points: 1, text: "You follow many family members, which is in line with our family office culture."},
      posts: {points: 0, text: "You've never posted a picture of your children, showing that you value privacy."},
      hashtags: {points: -1, text: "Your hashtags are often unrelated to the post, indicating a lack of awareness."}
    },
    "Amazon":{
      purchases: {points: 1, text: "Most of your purchases are household items, demonstrating you are organised."},
      reviews: {points: 1, text: "Your reviews are positive, indicating you're a positive person who gives good feedback."},
      deliveries: {points: 1, text: "You've had deliveries to a previous employer, proving you worked there."}
    },
    "Uber": {
      locations: {points: 0, text: "We couldn't find an account associated with you."},
      rating: {points: 0, text: "We couldn't find an account associated with you."},
      tips: {points: 0, text: "We couldn't find an account associated with you."}
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
      likes: {points : 1, text:"You liked many news outlets, indicating you're up-to-date with international business."},
      comments: {points: 1, text:"You comment on news posts, showing you use social media as a work tool."},
      posts: {points: 0, text: "You have never posted on your own Facebook timeline."}
    },
    "YouTube": {
      watched: {points: -1, text: "You've watched some violent videos, highlighting a worrying hobby."},
      subscriptions : {points: 1, text: "You have 4 subscriptions from FinTechs, showing interest in financial technology."},
      comments: {points: 0, text: "You have never commented on a video."}
    },
    "Fitbit": {
      heart: {points: -1, text: "Your heart rate fluctuates during the day, which shows you may be a health risk."},
      steps: {points: 1, text: "You consistently walk for 40 minutes every day, demonstrating discipline."},
      sleep: {points: 1, text: "You’re always awake by 6:30am, indicating you're unlikely to be late for work."}
    },
    "Instagram": {
      following: {points: 0, text: "We couldn't find an account associated with you."},
      posts: {points: 0, text: "We couldn't find an account associated with you."},
      hashtags: {points: 0, text: "We couldn't find an account associated with you."}
    },
    "Amazon":{
      purchases: {points: 1, text: "You use Amazon Marketplace for your weekly groceries, showing budgeting skills."},
      reviews: {points: -1, text: "You have never reviewed a purchase, which doesn’t align with the advisor job profile."},
      deliveries: {points: 1, text: "You get your groceries delivered after work, demonstrating that you're a good planner."}
    },
    "Uber": {
      locations: {points: 1, text: "You've been picked up from your previous office, proving you worked there."},
      rating: {points: 1, text: "You are rated 4.92 stars, indicating you're very kind and professional."},
      tips: {points: 0, text: "You never have tipped a driver."}
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
      likes: {points : 1, text:"You like many celebrities, showing you stay updated with social media trends."},
      comments: {points: 1, text:"Your comments include emojis, illustrating you communicate dynamically."},
      posts: {points: -1, text: "The majority of your posts are directed from Instagram, showing a lack of originality."}
    },
    "YouTube": {
      watched: {points: 1, text: "You watch and engage with top influencers, demonstrating good networking skills"},
      subscriptions : {points: 1, text: "You've set up alerts for all subscriptions, showing you are proactive."},
      comments: {points: 1, text: "You engage with fellow views promptly and friendly, highlighting your professionalism."}
    },
    "Fitbit": {
      heart: {points: 1, text: "Your heart rate is stable, showing you're unlikely to struggle with health problems."},
      steps: {points: -1, text: "You often exercise between 1-2pm, which may be disrupted with work hours."},
      sleep: {points: -1, text: "You wake up at 11am most days, indicating that you will be late for work."}
    },
    "Instagram": {
      following: {points: 1, text: "You are following 1,257 users, showing engagement with a wide range of audiences."},
      posts: {points: 1, text: "All of your posts are during peak hours, revealing your knowledge of social media trends."},
      hashtags: {points: -1, text: "Your hashtags are often unrelated to the post, indicating a lack of awareness."}
    },
    "Amazon":{
      purchases: {points: -1, text: "You spend over €200 a month on makeup, showing you may struggle with budgeting."},
      reviews: {points: 1, text: "You always leave reviews on beauty products, showcasing your ability to influence users."},
      deliveries: {points: "F", text: "Your delivery addresses don't match your previous addresses, so a credit check is needed."}
    },
    "Uber": {
      locations: {points: 1, text: "You've been picked up from your previous office, proving you worked there."},
      rating: {points: 1, text: "You have a 4.63 rating, showing you treat drivers with courtesy."},
      tips: {points: 0, text: "You never have tipped a driver."}
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
      likes: {points : 1, text:"You like various figures in the fitness industry, showing a keen interest in the subject."},
      comments: {points: -1, text:"You insult others on discussion threads, demonstrating a poor demeanour."},
      posts: {points: -1, text: "Your posts are often condescening, showing you may not get along with colleagues."}
    },
    "YouTube": {
      watched: {points: 1, text: "75% of videos are your own workouts, showing you use gym facilities inappropriately."},
      subscriptions : {points: 1, text: "You have 42 subscriptions to fitness channels, demonstrating you know current trends."},
      comments: {points: 1, text: "You ask thoughtful questions, revealing you are inquisitive and want to learn more."}
    },
    "Fitbit": {
      heart: {points: 1, text: "You have a low resting heart rate, suggesting you are physically fit."},
      steps: {points: 1, text: "You exercise for 4 hours a day, proving your last fitness job."},
      sleep: {points: 1, text: "You sleep 8 hours a night, showing you understand the benefits of a good night’s sleep."}
    },
    "Instagram": {
      following: {points: -1, text: "You follow accounts with partial female nudity, which may make clients uncomfortable."},
      posts: {points: 1, text: "Your posts include many body evolution pictures, demonstrating you are goal-oriented."},
      hashtags: {points: 1, text: "You always use #fitness in your posts, showing dedication to the fitness community."}
    },
    "Amazon":{
      purchases: {points: 1, text: "You often purchase junkfood, which goes against a healthy lifestyle."},
      reviews: {points: 1, text: "Your reviews are informative, indicating you'll share knowledge with clients."},
      deliveries: {points: 1, text: "You’ve never missed a delivery, showing you’re reliable and able to manage your time."}
    },
    "Uber": {
      locations: {points: -1, text: "You use Uber to travel to pubs, which questions your dedication to your health."},
      rating: {points: "F", text: "You have a 1.2 rating, revealing your lack of respect for others."},
      tips: {points: 0, text: "You never have tipped a driver."}
    }
  },
    description: "A Lead Trainer is responsible for hiring, developing and managing performance of qualified Personal Trainers and ensuring that all club members have access to a highly trained fitness staff able to provide fitness counseling and training."
};

const Personas = [Jeff,Mary,Julie,Wang,Ana,Martin];

export function getPersonaFromIndex(index){
  return Personas[index];
}

function calculateScore(choices){
  // If any of the choices contain an automatic fail
  if(choices.some(choice => choice === "F")){
    return -1;
  }
  return choices.map(choice => choice.points).reduce((sum, x) => sum + x);
}

export function jobGotten(choices){
  return calculateScore(choices) > 0;
}
