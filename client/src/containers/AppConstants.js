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

const pageStates = Object.freeze([
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 0,
    instruction: 'Press the button to continue',
    saveButtons: false,
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 1,
    instruction: 'Press the button to continue',
    saveButtons: false,
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 2,
    instruction: 'Submit to Employer...',
    saveButtons: false,
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 3,
    instruction: 'Press the button to continue',
    saveButtons: false,
  }),
  Object.freeze({
    buttonEnablement: defaultButtonTrueArray,
    index: 4,
    instruction: 'Submit your Poll',
    saveButtons: true,
  }),
  Object.freeze({
    buttonEnablement: defaultButtonFalseArray,
    index: 5,
    instruction: 'Press the button to continue',
    saveButtons: false,
  })
]);

export {
  methods,
  fastScrollOptions,
  slowScrollOptions,
  initialState,
  pageStates
}
