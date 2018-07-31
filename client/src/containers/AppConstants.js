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
const defaultInstruction = "Hit the white button to continue";

const defaultButtonFalseArray = Object.freeze([
  'dummy', false, false, false, false, false, false, false, false, false
]);

const defaultButtonTrueArray = Object.freeze([
  'dummy', true, true, true, true, true, true, true, true, true
]);

const pollButtonArray = Object.freeze([
  'poll', true, true, true, true, true, true, false, false, false
]);

const dataButtonTrueArray = Object.freeze([
  'data', true, true, true, true, true, true, true, true, true
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
  data: [[],[]],
  persona: {
    name: "dummy",
    job: "dummy",
    salary: "dummy",
    hours: "dummy",
    description: "dummy"
  },
  pollChoice: "Agree",
  dataSource: [
        {
            actionDescription: 'Facebook',
            options: Object.freeze({
                1: Object.freeze({text: "likes", active: false}),
                2: Object.freeze({text: "comments", active: false}),
                3: Object.freeze({text: "posts", active: false}),
            }),
            iconSrc: '/logos/facebook.svg',
        },
        {
            actionDescription: 'YouTube',
            options: Object.freeze({
                1: Object.freeze({text: "watch list", active: false}),
                2: Object.freeze({text: "subscription", active: false}),
                3: Object.freeze({text: "comments", active: false}),
            }),
            iconSrc: '/logos/youtube.svg',
        },
        {
            actionDescription: 'Fitbit',
            options: Object.freeze({
                1: Object.freeze({text: "heart rate", active: false}),
                2: Object.freeze({text: "steps", active: false}),
                3: Object.freeze({text: "sleep", active: false}),
            }),
            iconSrc: '/logos/fitbit.svg',
        },
        {
            actionDescription: 'Instagram',
            options: Object.freeze({
                1: Object.freeze({text: "following", active: false}),
                2: Object.freeze({text: "posts", active: false}),
                3: Object.freeze({text: "hashtags", active: false}),
            }),
            iconSrc: '/logos/instagram.svg',
        },
        {
            actionDescription: 'Amazon',
            options: Object.freeze({
                1: Object.freeze({text: "purchases", active: false}),
                2: Object.freeze({text: "reviews", active: false}),
                3: Object.freeze({text: "delivery history", active: false}),
            }),
            iconSrc: '/logos/amazon.svg',
        },
        {
            actionDescription: 'Uber',
            options: Object.freeze({
                1: Object.freeze({text: "location", active: false}),
                2: Object.freeze({text: "your rating", active: false}),
                3: Object.freeze({text: "tips", active: false}),
            }),
            iconSrc: '/logos/fitbit.svg',
        },
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
    instruction: "Hit the white button to explore",
    saveButtons: false,
    pageName: "Intro"
  }),
  Object.freeze({
    buttonEnablement: personaButtonArray,
    index: 2,
    instruction: 'Hit the white button to find a job',
    saveButtons: true,
    block : true,
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
    instruction: 'Hit the white button to apply',
    saveButtons: false,
    pageName: "Job Found"
  }),
  Object.freeze({
    buttonEnablement: dataButtonTrueArray,
    index: 5,
    instruction: 'Hit the white button to submit',
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
    instruction: defaultInstruction,
    saveButtons: false,
    pageName: "Detailed results screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 9,
    instruction: "Hit the white button for one final question",
    saveButtons: false,
    pageName: "Poll Intro"
  }),
  Object.freeze({
    buttonEnablement: pollButtonArray,
    index: 10,
    instruction: defaultInstruction,
    saveButtons: true,
    block : true,
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
    instruction: 'Hit the white button to start over',
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
