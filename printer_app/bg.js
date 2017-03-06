// App Launched
chrome.app.runtime.onLaunched.addListener(function(data) {
  chrome.app.window.create('index.html', {id: 'print_app', hidden: true});
});
