const func = delayTime => console.log(`Birth duration: ${delayTime} seconds`),
      ms = 1000,
      delay = 3;

setTimeout(func, delay*ms, delay);