document.addEventListener('DOMContentLoaded', function() {
    
   
    if (typeof ol !== 'undefined') {
        
       
        var mapElement = document.getElementById('map');

        if (mapElement) {
            
            
            
            var fixedLonLat = [32.7351, 39.8665]; 
            var fixedPoint = ol.proj.fromLonLat(fixedLonLat);

            
            var map = new ol.Map({
                target: 'map', 
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: fixedPoint, 
                    zoom: 12 
                })
            });
            
            
            var fixedMarker = new ol.Feature({
              geometry: new ol.geom.Point(fixedPoint)
            });

            var vectorLayer = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [fixedMarker]
              }),
              style: new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({color: 'rgb(240, 100, 160)'}), 
                  stroke: new ol.style.Stroke({color: '#ffffff', width: 3}) 
                })
              })
            });

            map.addLayer(vectorLayer);
            
            
            var coordinateOutput = document.getElementById('coordinate-output');

            
            var initialLon = fixedLonLat[0].toFixed(6);
            var initialLat = fixedLonLat[1].toFixed(6);
            
            coordinateOutput.innerHTML = 'My Fixed Location: <span style="font-weight: 700;">Longitude: ' + initialLon + '° / Latitude: ' + initialLat + '°</span>';

            
            map.on('click', function (evt) {
                var clickedCoord = evt.coordinate;
                var lonLat = ol.proj.toLonLat(clickedCoord);
                var lon = lonLat[0].toFixed(6);
                var lat = lonLat[1].toFixed(6);

                
                coordinateOutput.innerHTML = 'Clicked Coordinate: <span style="font-weight: 700; color: #FCF6BD;">Longitude: ' + lon + '° / Latitude: ' + lat + '°</span>';
                
                
                setTimeout(function() {
                    
                    coordinateOutput.innerHTML = 'Clicked Coordinate: <span style="font-weight: 700;">Longitude: ' + lon + '° / Latitude: ' + lat + '°</span>'; 
                }, 10); 
            });

            
        } 
    } 
});