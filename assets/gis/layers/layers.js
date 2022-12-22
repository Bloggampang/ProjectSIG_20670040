var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pati_0 = new ol.format.GeoJSON();
var features_pati_0 = format_pati_0.readFeatures(json_pati_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pati_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pati_0.addFeatures(features_pati_0);var lyr_pati_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pati_0, 
                style: style_pati_0,
    title: 'pati<br />\
    <img src="styles/legend/pati_0_0.png" />  0 - 3986 <br />\
    <img src="styles/legend/pati_0_1.png" />  3986 - 6234 <br />\
    <img src="styles/legend/pati_0_2.png" />  6234 - 8483 <br />\
    <img src="styles/legend/pati_0_3.png" />  8483 - 10731 <br />\
    <img src="styles/legend/pati_0_4.png" />  10731 - 12980 <br />'
        });var format_pasarsapi_1 = new ol.format.GeoJSON();
var features_pasarsapi_1 = format_pasarsapi_1.readFeatures(json_pasarsapi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasarsapi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pasarsapi_1.addFeatures(features_pasarsapi_1);var lyr_pasarsapi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pasarsapi_1, 
                style: style_pasarsapi_1,
                title: '<img src="styles/legend/pasarsapi_1.png" /> pasar sapi'
            });var format_RPH_2 = new ol.format.GeoJSON();
var features_RPH_2 = format_RPH_2.readFeatures(json_RPH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPH_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RPH_2.addFeatures(features_RPH_2);var lyr_RPH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RPH_2, 
                style: style_RPH_2,
                title: '<img src="styles/legend/RPH_2.png" /> RPH'
            });

lyr_pati_0.setVisible(true);lyr_pasarsapi_1.setVisible(true);lyr_RPH_2.setVisible(true);
var layersList = [baseLayer,lyr_pati_0,lyr_pasarsapi_1,lyr_RPH_2];
lyr_pati_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Sapi': 'Sapi', 'pasar sapi': 'pasar sapi', 'RPH': 'RPH', });
lyr_pasarsapi_1.set('fieldAliases', {'Pasar Sapi': 'Pasar Sapi', });
lyr_RPH_2.set('fieldAliases', {'RPH': 'RPH', });
lyr_pati_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Sapi': 'TextEdit', 'pasar sapi': 'TextEdit', 'RPH': 'TextEdit', });
lyr_pasarsapi_1.set('fieldImages', {'Pasar Sapi': 'TextEdit', });
lyr_RPH_2.set('fieldImages', {'RPH': 'TextEdit', });
lyr_pati_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Sapi': 'inline label', 'pasar sapi': 'inline label', 'RPH': 'inline label', });
lyr_pasarsapi_1.set('fieldLabels', {'Pasar Sapi': 'inline label', });
lyr_RPH_2.set('fieldLabels', {'RPH': 'inline label', });
lyr_RPH_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});