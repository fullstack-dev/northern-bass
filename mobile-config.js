App.info({
  id: 'nz.northernbass',
  name: 'northern-bass',
  version: '1.6',
  description: 'Get the Official Northern Bass app for 2016/17',
  author: 'Sidechain',
  email: 'studio@sidechain.studio',
  website: 'http://northernbass.co.nz'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('northernbassapp.uppercase8.com/*');
App.accessRule('*');
App.accessRule('meteor.local/*');
App.accessRule('*.northernbass.co.nz/*');
App.accessRule('*.northern-bass.meteorapp.com/*');


App.icons({
  "iphone_2x": "resources/icons/iphone_2x.png",
  "iphone_3x": "resources/icons/iphone_3x.png",
  "ios_settings": "resources/icons/ios_settings.png",
  "ios_settings_2x": "resources/icons/ios_settings_2x.png",
  "ios_settings_3x": "resources/icons/ios_settings_3x.png",
  "ios_spotlight_2x": "resources/icons/ios_spotlight_2x.png",
  "ios_spotlight_3x": "resources/icons/ios_spotlight_3x.png",
  "android_mdpi": "resources/icons/android_mdpi-(48x48).png",
  "android_android_hdpi": "resources/icons/android_hdpi-(72x72).png",
  "android_xhdpi": "resources/icons/android_xhdpi-(96x96).png",
  "android_xxhdpi": "resources/icons/android_xxhdpi-(144x144).png",
  "android_xxxhdpi": "resources/icons/android_xxxhdpi-(192x192).png"
});

App.launchScreens({
  "iphone_2x": "resources/splashes/iphone_2x.png",
  "iphone5": "resources/splashes/iphone5.png",
  "iphone6": "resources/splashes/iphone6.png",
  "iphone6p_portrait": "resources/splashes/iphone6p_portrait.png",
  "iphone6p_landscape": "resources/splashes/iphone6p_landscape.png",

  "android_mdpi_portrait": "resources/splashes/android_mdpi_portrait-(320x470).png",
  "android_mdpi_landscape": "resources/splashes/android_mdpi_landscape-(470x320).png",
  "android_hdpi_portrait": "resources/splashes/android_hdpi_portrait-(480x640).png",
  "android_hdpi_landscape": "resources/splashes/android_hdpi_landscape-(640x480).png",
  "android_xhdpi_portrait": "resources/splashes/android_xhdpi_portrait-(720x960).png",
  "android_xhdpi_landscape": "resources/splashes/android_xhdpi_landscape-(960x720).png",
  "android_xxhdpi_portrait": "resources/splashes/android_xhdpi_portrait-(720x960).png",
  "android_xxhdpi_landscape": "resources/splashes/android_xhdpi_landscape-(960x720).png"
});

App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'default');
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('Orientation', 'default');