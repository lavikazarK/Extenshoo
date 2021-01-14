export const nonDigitalOmiter = (event, previousValue) => {
  const extractedNumber = event.target.value.replace(/[^-.\d]/g, "");
  return {
    ...event,
    target: {
      ...event.target,
      value: /^-?\d*\.{0,1}\d{0,}$/.test(extractedNumber)
        ? extractedNumber
        : previousValue
    }
  };
};
