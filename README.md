# Node Manifest Generator

Hi! By using this node app you can write dynamic manifest and load into your browser. Simply use just need to provide manifest object to API endpoint it will write a file and return URL of that file.

## Manifest Object

```
{
  "name": "Dynamic PWA",
  "short_name": "DPA",
  "theme_color": "#026e00",
  "background_color": "#333",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "assets/icons/icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
}
```

> Note: You have to provide full URL for icons and start_url otherwise it will not work.

<br></br>

# API Endpoints

## /manifest/update (POST)

- For this endpoint you have to pass filename and manifest object as data, Here is the code structure for passing data

```
    {
        fileName: `DynamicManifest.json`,
        data: { }  // pass manifest object here
    }
```

- ### Response
  - Success

```
    {
        status: "Done",
        url: `/public/${fileName}` // fileName is which you passed in req.body
    }
```

> Note: You have append this nodejs server URL to response URL. http://localhost:5000/public/DynamicManifest.json

<br></br>

<h3 align="center"> Show some ❤️ by starring some of the repositories! </h3>
<h2 align="center">(｡◕‿◕｡)</h1>
