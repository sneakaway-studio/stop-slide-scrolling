<img src="extension/assets/img/icon128.png">

# stop-slide-scrolling

Removes annoying accidental slide scrolling behavior in Google Drive Presentations.


## FAQ


### How do I install?

1. Download from the [Chrome Web Store](https://chrome.google.com/webstore/detail/stop-slide-scrolling-in-g/cmpmjbfhpecollipohbphhgbohleeeon?hl=en)
2. After installing, refresh the browser tab for each Google Presentation you already have open.



### How do I test it?

1. Install the extension
1. Go to this [test presentation](https://docs.google.com/presentation/d/1OuEYcbP3Y2i8wl77RORIhZhJiV2jIhi9edBk3sHiGQM/edit#slide=id.p) (make sure to reload any presentations after you install the extension)
1. Test it with the modifier keys on or off



### Is this safe?

Yes. The extension does not save any data.


### What permissions does this use?

This fixes the scrolling problem that users experience with Apple's Magic Mouse on several Google sites:

- https://docs.google.com/presentation/*
- https://docs.google.com/drawings/*
- https://calendar.google.com/*


### How do I turn it on or off?

1. In Chrome, click Window > Extensions
2. Use the on / off toggle for this extension


### Is there a version for ______?

This extension only works in Chromium browsers (including Chrome, Brave, Opera, and many others). To see if you can use it with your browser, try to install it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/stop-slide-scrolling-in-g/cmpmjbfhpecollipohbphhgbohleeeon?hl=en).







## Privacy Policy

This extension does not collect user data.


## Credits

Owen Mundy / [sneakaway.studio](https://sneakaway.studio)


## License

[MIT](LICENSE)


## Changelog

Version 0.1.5
- Update to Manifest 3, background to service worker 

Version 0.1.4
- Adds more sites to manifest (drive and calendar)
- Improve wheel action

Version 0.1.3
- Replace depreated [`mousewheel`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event) with standard [`wheel`](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event) event.
- Added support for a modifier key
