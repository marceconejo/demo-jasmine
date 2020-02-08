var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    timeUnit: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: true,
    emoji: true,
    beep: true
});

jasmine.getEnv().addReporter(reporter);