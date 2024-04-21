var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_population_sum_1 = new ol.format.GeoJSON();
var features_population_sum_1 = format_population_sum_1.readFeatures(json_population_sum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_population_sum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_population_sum_1.addFeatures(features_population_sum_1);
var lyr_population_sum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_population_sum_1, 
                style: style_population_sum_1,
                popuplayertitle: "population_sum",
                interactive: true,
    title: 'population_sum<br />\
    <img src="styles/legend/population_sum_1_0.png" /> 4400 - 667000<br />\
    <img src="styles/legend/population_sum_1_1.png" /> 667000 - 11000000<br />\
    <img src="styles/legend/population_sum_1_2.png" /> 11000000 - 1314000<br />\
    <img src="styles/legend/population_sum_1_3.png" /> 1314000 - 4738900<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_population_sum_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_population_sum_1];
lyr_population_sum_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Population': 'Population', });
lyr_population_sum_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'NL_NAME_2': '', 'VARNAME_2': '', 'Population': '', });
lyr_population_sum_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'header label - always visible', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Population': 'inline label - always visible', });
lyr_population_sum_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});