const methods = Object.freeze([
  'buttonSelected',
  'nextPage',
  'renderButtons',
  'renderInstruction',
  'renderSubmit',
  'reset',
  'toggleButtons'
]);

const fastScrollOptions = Object.freeze({
  containerId: 'pages',
  duration: 0,
  smooth: 'linear'
});

const slowScrollOptions = Object.freeze({
  containerId: 'pages',
  duration: 1000,
  smooth: 'easeInOutCubic'
});

// The default instruction is "Click Next"
const defaultInstruction = "Click Next";

const defaultButtonFalseArray = Object.freeze([
  'dummy', false, false, false, false, false, false, false, false, false
]);

const defaultButtonTrueArray = Object.freeze([
  'dummy', true, true, true, true, true, true, true, true, true
]);

const pollButtonArray = Object.freeze([
  'poll', true, true, true, true, false, false, false, false, false
]);

const choicesButtonArray = Object.freeze([
  'choices', false, false, false, false, false, false, true, true, true
]);

const personaButtonArray = Object.freeze([
    'personas', true, true, true, true, true, true, false, false, false
]);

const initialState = Object.freeze({
  currentPage: 0,
  showButtons: false,
  buttons: Object.freeze({
    enable: defaultButtonFalseArray,
    on: defaultButtonFalseArray
  }),
  journey: {},
  data: [],
  persona: {
    name: "Jeff",
    job: "Highschool Teacher",
    salary: "22,000",
    hours: "38",
    description: "A career as a high school teacher offers you the chance to teach a subject you love and to engage pupils in learning for their future. You’ll plan lessons in line with national objectives, with the aim of ensuring a healthy culture of learning."
  },
  choices: [ //TODO change this into an empty array when finish implementing the logic for the choices
    {
      actionDescription: 'Facebook',
      options: {
        1: "likes",
        2: "comments",
        3: "posts",
      },
      iconSrc: '/logos/facebook.svg',
      active: false,
    },
    {
      actionDescription: 'YouTube',
      options: {
        1: {text: "You’ve watched 13 DIY videos this week, showcasing your natural curiosity.", active: true},
        2: {text: "You're not watching your subscriptions, highlighting a lack of engagement.", active: true},
        3: {text: "You actively interact with fellow users, demonstrating a willingness to help others", active: true},
      },
      iconSrc: '/logos/youtube.svg',
      active: true,
    },
    {
      actionDescription: 'Fitbit',
      options: {
        1: {text: "heartrate", active: false},
        2: {
          text: "steps",
          active: false
        },
        3: {text: "You average 5 hours of sleep per night, meaning you will be too exhausted to teach.", active: true},
      },
      iconSrc: '/logos/fitbit.svg',
      active: true,
    },
    {
      actionDescription: 'Instagram',
      options: {
        1: "following",
        2: "posts",
        3: "hashtags",
      },
      iconSrc: '/logos/instagram.svg',
      active: false,
    },
    {
      actionDescription: 'Amazon',
      options: {
        1: "purchases",
        2: "reviews",
        3: "delivery history",
      },
      iconSrc: '/logos/amazon.svg',
      active: false,
    },
    {
      actionDescription: 'Uber',
      options: {
        1: {
          text: "locations",
          active: false
        },
        2: {text: "You’re only rated 3.41 stars, showing that you might not treat everyone respectfully", active: true},
        3: {
          text: "You’ve tipped the driver on all your trips this week, highlighting that you’re appreciative.",
          active: true
        },
      },
      iconSrc: '/logos/uber.svg',
      active: true,
    }
  ],
  jobGotten: false,
});

// Page names are just for readability here
// Important distinction here is that these are zero indexed, but the pdf of screens are 1 index!

const pageStates = Object.freeze([
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 0,
    instruction: defaultInstruction,
    saveButtons: false,
    pageName: "Home"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 1,
    instruction: defaultInstruction,
    saveButtons: false,
    pageName: "Intro"
  }),
  Object.freeze({
    buttonEnablement: personaButtonArray,
    index: 2,
    instruction: 'Click next to find a job',
    saveButtons: true,
    pageName: "Persona Choosing"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 3,
    instruction: '',
    saveButtons: false,
    loadingScreen: true,
    pageName: "Persona Loading screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 4,
    instruction: 'Click next to apply',
    saveButtons: false,
    pageName: "Job Found"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 5,
    instruction: 'Submit your application',
    saveButtons: true,
    pageName: "Data sources choosing"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 6,
    instruction: '',
    saveButtons: false,
    loadingScreen: true,
    pageName: "Data source loading"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 7,
    instruction: defaultInstruction,
    saveButtons: false,
    pageName: "Results Screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 8,
    instruction: "Click next for one final questions",
    saveButtons: false,
    pageName: "Detailed results screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 9,
    instruction: "Submit your application",
    saveButtons: false,
    pageName: "Poll Intro"
  }),
  Object.freeze({
    buttonEnablement: pollButtonArray,
    index: 10,
    instruction: 'Click next to see what other humans said',
    saveButtons: true,
    pageName:"Poll"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 11,
    instruction: defaultInstruction,
    saveButtons: false,
    pageName: "Data Visualisation"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 12,
    instruction: 'Start Over',
    saveButtons: false,
    pageName: "Goodbye"
  }),
]);

export {
  methods,
  fastScrollOptions,
  slowScrollOptions,
  initialState,
  pageStates
}
