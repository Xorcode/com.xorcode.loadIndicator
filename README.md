# Alloy *Load Indicator* widget [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)
Implements a load indicator overlay in Alloy.

# Use it

Add the widget to a `View` or `Window`. Make sure the parent element has `layout` set to `composite` before you try this.

```xml
<View id="container">
  <Widget id="loadIndicator" src="com.xorcode.loadIndicator"/>
</View>
```

Hide and show the widget by calling it from the controller:

```javascript
$.loadIndicator.show();
$.loadIndicator.hide();
```

# License

```
Copyright 2015 Xorcode, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
