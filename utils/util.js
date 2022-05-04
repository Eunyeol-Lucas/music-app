export const $ = (selector) => document.querySelector(selector);

export const throttle = (cb, delay) => {
  let timerId;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        cb(e);
        timerId = null;
      },
      delay,
      e
    );
  };
};
