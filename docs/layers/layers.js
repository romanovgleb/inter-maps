var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Refactored_1 = new ol.format.GeoJSON();
var features_Refactored_1 = format_Refactored_1.readFeatures(json_Refactored_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_1.addFeatures(features_Refactored_1);
var lyr_Refactored_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_1, 
                style: style_Refactored_1,
                interactive: true,
                title: '<img src="styles/legend/Refactored_1.png" /> Refactored'
            });
var format_Refactored_nedata_bounds_2 = new ol.format.GeoJSON();
var features_Refactored_nedata_bounds_2 = format_Refactored_nedata_bounds_2.readFeatures(json_Refactored_nedata_bounds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_nedata_bounds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_nedata_bounds_2.addFeatures(features_Refactored_nedata_bounds_2);
var lyr_Refactored_nedata_bounds_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_nedata_bounds_2, 
                style: style_Refactored_nedata_bounds_2,
                interactive: true,
    title: 'Refactored_nedata_bounds<br />\
    <img src="styles/legend/Refactored_nedata_bounds_2_0.png" /> 332 - 401<br />\
    <img src="styles/legend/Refactored_nedata_bounds_2_1.png" /> 401 - 713<br />\
    <img src="styles/legend/Refactored_nedata_bounds_2_2.png" /> 713 - 944<br />\
    <img src="styles/legend/Refactored_nedata_bounds_2_3.png" /> 944 - 4193<br />\
    <img src="styles/legend/Refactored_nedata_bounds_2_4.png" /> 4193 - 17882<br />'
        });

lyr_Positronretina_0.setVisible(true);lyr_Refactored_1.setVisible(true);lyr_Refactored_nedata_bounds_2.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Refactored_1,lyr_Refactored_nedata_bounds_2];
lyr_Refactored_1.set('fieldAliases', {'fid': 'fid', });
lyr_Refactored_nedata_bounds_2.set('fieldAliases', {'fid': 'fid', 'Регион': 'Регион', 'Численность, млн.чел.': 'Численность, млн.чел.', 'ВРП 2018, млрд.руб.': 'ВРП 2018, млрд.руб.', 'Средства на счетах ЮЛ, доля %': 'Средства на счетах ЮЛ, доля %', 'Депозиты ЮЛ, доля %': 'Депозиты ЮЛ, доля %', 'Вклады ФЛ, доля %': 'Вклады ФЛ, доля %', 'Кредиты ЮЛ, доля %': 'Кредиты ЮЛ, доля %', 'Кредиты ФЛ, доля %': 'Кредиты ФЛ, доля %', });
lyr_Refactored_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Refactored_nedata_bounds_2.set('fieldImages', {'fid': 'TextEdit', 'Регион': '', 'Численность, млн.чел.': '', 'ВРП 2018, млрд.руб.': '', 'Средства на счетах ЮЛ, доля %': '', 'Депозиты ЮЛ, доля %': '', 'Вклады ФЛ, доля %': '', 'Кредиты ЮЛ, доля %': '', 'Кредиты ФЛ, доля %': '', });
lyr_Refactored_1.set('fieldLabels', {'fid': 'no label', });
lyr_Refactored_nedata_bounds_2.set('fieldLabels', {'fid': 'no label', 'Регион': 'inline label', 'Численность, млн.чел.': 'inline label', 'ВРП 2018, млрд.руб.': 'inline label', 'Средства на счетах ЮЛ, доля %': 'inline label', 'Депозиты ЮЛ, доля %': 'inline label', 'Вклады ФЛ, доля %': 'inline label', 'Кредиты ЮЛ, доля %': 'inline label', 'Кредиты ФЛ, доля %': 'inline label', });
lyr_Refactored_nedata_bounds_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});