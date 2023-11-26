# markdeep-slides-autoslider-plugin
A plugin for markdeep-slides which aoto-changes slides after a configurable amount of seconds. Optionally adds animated progress-bars.


## Installation

Just include the <script>-tag at the end of the HTML-body.

> [!IMPORTANT]
> It must be included AFTER markdeep-slides.js and after markdeep[.min].js.

```html
<script src="markdeep-slides/markdeep-slides.js"></script>
<script src="markdeep-slides/lib/markdeep/1.11/markdeep.min.js" charset="utf-8"></script>
<!-- Insert plugin after this -->
<script src="markdeep-slides/markdeep-slides-plugin-autoslider.js" charset="utf-8"></script>
```

Then you will have to activate it by adding a plugins field to the markdeep-slide-options:

```javascript
    markdeepSlidesOptions = {
        /* Those are the standard options */
        aspectRatio: 16 / 9,
        theme: 'deepsea',
        fontSize: 28,
        diagramZoom: 1.0,
        totalSlideNumber: false,
        progressBar: true,
        breakOnHeadings: false,
        slideChangeHook: (oldSlide, newSlide) => {},
        modeChangeHook: (newMode) => {}

        /* At minimum add this to activate
           the plugin with default values */
        ,plugins: {    
            autoslider
        }
    }
```


You can configure some options:

```javascript
      ,plugins: {
        autoslider:{
          seconds:10,
          repeat: true,
          growingProgressbar: true,
          growingProgressbarColor: "rgba(255,0,0,0.5)",
          firstDelay: 2
        }
      }
```

> [!CAUTION]
> The first slide acts as a cover and will only be shown once and it will have no progress bar. It will be skipped in the loop. You can include an empty first slide and set the option *firstDelay* to *0* to skip the cover.
