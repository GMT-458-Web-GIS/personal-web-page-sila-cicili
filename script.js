document.addEventListener('DOMContentLoaded', function() {
    
    // KRİTİK KONTROL 1: OpenLayers kütüphanesinin yüklenip yüklenmediğini kontrol et.
    if (typeof ol !== 'undefined') {
        
        // KRİTİK KONTROL 2: Harita konteynerini al ve harita kodunu sadece "map" ID'sine sahip element varsa çalıştır
        var mapElement = document.getElementById('map');

        if (mapElement) {
            
            // =======================================
            // HARİTA AYARLARI BURADA BAŞLAR
            // =======================================

            // 1. SABİT KONUMUNUZUN KOORDİNATLARI 
            var fixedLonLat = [32.7485, 39.8660]; 
            var fixedPoint = ol.proj.fromLonLat(fixedLonLat);

            // 2. Harita oluşturma
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
            
            // 3. SABİT İŞARETLEYİCİ (Marker) eklenmesi
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
            
            // Koordinat Çıktı Alanını Güncelleme
            var coordinateOutput = document.getElementById('coordinate-output');

            // Başlangıçta sabit konumu göster
            var initialLon = fixedLonLat[0].toFixed(6);
            var initialLat = fixedLonLat[1].toFixed(6);
            coordinateOutput.innerHTML = 'Sabit Konumum: <span style="font-weight: 700;">Boylam: ' + initialLon + '° / Enlem: ' + initialLat + '°</span>';

            // 4. TIKLAMA OLAYI VE KOORDİNAT GÖSTERİMİ
            map.on('click', function (evt) {
                var clickedCoord = evt.coordinate;
                var lonLat = ol.proj.toLonLat(clickedCoord);
                var lon = lonLat[0].toFixed(6);
                var lat = lonLat[1].toFixed(6);

                coordinateOutput.innerHTML = 'Tıklanan Koordinat: <span style="font-weight: 700; color: #FCF6BD;">Boylam: ' + lon + '° / Enlem: ' + lat + '°</span>';
                
                setTimeout(function() {
                    coordinateOutput.innerHTML = 'Tıklanan Koordinat: <span style="font-weight: 700;">Boylam: ' + lon + '° / Enlem: ' + lat + '°</span>'; 
                }, 10); 
            });

            // =======================================
            // HARİTA AYARLARI BURADA BİTER
            // =======================================
        } 
    } 
});