# RadioExtn

RadioExtn is a chrome extension which plays music streams or audio files. 

# Structure

There are two html files - popup.html & background.html.

Popup.html is the file which opens when the icon of the extension is clicked. It gets destroyed when a click outside the extension icon occurs. 

Therefore, we keep the audio element in background.html and use popup.html to pass controls to the user. 

User clicks play button in popup.html, popup.js takes that button action and passes that to background.html, which uses functions defined in back.js to controlt eh audio element.
