
import BlobsCanvas from './blobsCanvas';

export default (options = {}) => {

  let blobsCanvas;
  let canvas;

  // private
  function checkCanvas() {
    if (!canvas) console.error('canvas not available');
  }

  function getShouldRenderBlobs() {
    return document.querySelector('[blobs-enabled]');
  }

  function pageChange(e) {
    const hasInterstitial = e.detail.interstitial;

    // has interstitial and no canvas, create and play
    if (hasInterstitial && !canvas) {
      create();

    // has interstitial with previous canvas, create and play
    } else if (hasInterstitial && canvas) {
     
    }
  }

  function pageDone() {

    const shouldRenderBlobs = getShouldRenderBlobs();

    // should render with previous canvas: refresh
    if (shouldRenderBlobs && canvas) {
      destroy();
      create();

    // should not render with previous canvas: destroy
    } else if (!shouldRenderBlobs && canvas) {
      destroy();

    // should render with no previous canvas: create
    } else if (shouldRenderBlobs && !canvas) {
      create();
    }
  }

  function load() { 
      blobsCanvas = BlobsCanvas;          
  }

  // public

  function create() {
    if (!blobsCanvas) throw new Error('BlobsCanvas not available');
    canvas = blobsCanvas(options);
  }

  function destroy() {
    checkCanvas();
    canvas.destroy();
    canvas = null;
  }

  // bind page events
  window.addEventListener('page:change', pageChange);
  window.addEventListener('page:done', pageDone);

  //return a promise with the given resolved value  
  let promiseLoad = Promise.resolve(load());

  //chain to the above promise
  promiseLoad.then(()=>{
    pageDone();
  });

  // api
  return {
    create,
    destroy,
  };

};