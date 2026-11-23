export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export function trackDatasetDownload({
  fileName,
  datasetGroup,
  fileUrl = '',
  actionType = 'download',
}) {
  trackEvent('dataset_download', {
    action_type: actionType,
    file_name: fileName,
    dataset_group: datasetGroup,
    file_url: fileUrl,
  });
}