// Capture environment as module variable to allow testing.
var compileTimeEnv;
try {
  compileTimeEnv = process.env;
} catch(error) {
  compileTimeEnv = {};
  console.log(
    '`process.env` is not defined. '+
    'Compile-time environment will be empty.'
  );
}
// This template tag should be rendered/replaced with the environment in production.
// Padded to 4KB so that the data can be inserted without offsetting character 
// indexes of the bundle (avoids breaking source maps).
var runtimeEnv = '{{REACT_APP_VARS_AS_JSON______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________}}';


// A function returning the runtime environment, so that 
// JSON parsing & errors occur at runtime instead of load time.
function loadRuntimeEnv() {
  var env;

  if (compileTimeEnv.NODE_ENV === 'production') {
    try {
      env = JSON.parse(runtimeEnv);
    } catch(error) {
      // Fallback to compile time env
      env = compileTimeEnv;
      console.log('Runtime env vars cannot be parsed. Falling back to compile-time environment.');
    }

  } else {
    env = compileTimeEnv;
  }

  return env;
}

module.exports = loadRuntimeEnv;
