const windowWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
  };
  
  const windowHeight  = () => {
    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  };
  
  const documentWidth = () => {
    return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
  };
  
  const documentHeight = () => {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  };
  
  const scrollTop = () => {
    return document.body.scrollTop || document.documentElement.scrollTop;
  };
  
  const scrollLeft = () => {
    return document.body.scrollLeft || document.documentElement.scrollLeft;
  };
  
  const devicePixelRatio = () => {
    return window.devicePixelRatio || Math.round(window.screen.availWidth / document.documentElement.clientWidth);
  };
  
  export {
    windowWidth,
    windowHeight,
    documentWidth,
    documentHeight,
    scrollTop,
    scrollLeft,
    devicePixelRatio
  }