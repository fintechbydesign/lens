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

const defaultButtonFalseArray = Object.freeze([
  'dummy', false, false, false, false, false, false, false, false, false
]);

const defaultButtonTrueArray = Object.freeze([
  'dummy', true, true, true, true, true, true, true, true, true
]);

const initialState = Object.freeze({
  currentPage: 0,
  showButtons: false,
  buttons: Object.freeze({
    enable: defaultButtonFalseArray,
    on: defaultButtonFalseArray
  }),
  journey: {},
  data :[]
});

// Page names are just for readability here
const pageStates = Object.freeze([
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 0,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Home"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 1,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Intro"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 2,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Persona Intro"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 3,
    instruction: 'Click next to find a job',
    saveButtons: true,
    pageName: "Persona Choosing"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 4,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Job Description"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 5,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Data sharing intro"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 6,
    instruction: 'Submit your what you want to share',
    saveButtons: true,
    pageName: "Data sources choosing"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 7,
    instruction: '',
    saveButtons: false,
    pageName: "Fake thinking screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 8,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Simple Decision screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 9,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Detailed decision screen"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 10,
    instruction: 'Submit your choices',
    saveButtons: true,
    pageName:"Poll"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 11,
    instruction: 'Press the button to continue',
    saveButtons: false,
    pageName: "Data Visualisation"
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 12,
    instruction: 'Press the button to restart',
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
