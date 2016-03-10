  // Initialize the platform object:
  var platform = new H.service.Platform({
    'app_id': 'tqdpL2rGDZclXliu8H8p',
    'app_code': 'fU3vlhaOhYNi-jM-uSjMtA'
  });

  // Get the default map types from the Platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate the map:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map, {
      zoom: 16,
      center: {
        lng: -122.39972,
        lat: 37.79202
      }
    });

  // Add window resize listener to adjust the map dimensions.
  window.addEventListener('resize', function() {
    map.getViewPort().resize();
  });

  // Create the default UI:
  var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

  // Enable the event system on the map instance:
  var mapEvents = new H.mapevents.MapEvents(map);

  // Add event listener:
  map.addEventListener('tap', function(evt) {
    // Log 'tap' and 'mouse' events:
    console.log(evt.type, evt.currentPointer.type);
  });

  // Instantiate the default behavior, providing the mapEvents object:
  var behavior = new H.mapevents.Behavior(mapEvents);

  // Create a group that can hold map objects:
  group = new H.map.Group();

  // Add the group to the map object (created earlier):
  map.addObject(group);

  // Add map context menu event listener.
  map.addEventListener('contextmenu', onContextMenuRequested);

  function onContextMenuRequested(e) {
    e.items.push(new H.util.ContextItem({
      label: 'Hello Holberton School!',
      callback: function() {
        map.setZoom(map.getZoom() + 1);
      }
    }));
  }
