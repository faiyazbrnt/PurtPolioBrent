/**
 * Utility to reliably download cv.pdf across both standalone browsers and sandboxed iframes.
 */
export const downloadCv = () => {
  const isInIframe = (() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })();

  if (isInIframe) {
    // When embedded in a sandboxed iframe (like AI Studio preview),
    // Chrome blocks iframe-initiated downloads with 'Failed - Download error'.
    // Opening /download.html in a top-level tab bypasses the iframe restriction
    // and triggers the file download directly to the user's Downloads folder.
    window.open('/download.html', '_blank');
  } else {
    // In standalone or deployed environment, trigger direct native download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
