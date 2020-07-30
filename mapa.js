let map;
const centerMap = {lat: -3.716816, lng: -38.519115};

function initMap()
{
    //Para criar controles customizados:
    // Interação é nossa responsabilidade;
    // Div- Controle;
        // Div- UI;
            // Div - Text.
    class CenterControl
    {
        constructor(map)
        {
            //construtor para centralizar o mapa 
            this.controlDiv = document.createElement('div');
            this.controlUI = document.createElement('div');
            this.controlText = document.createElement('div');

            this.controlUI.style.backgroundColor = '#fff';
            this.controlUI.style.border = '2px solid #ebebeb';
            this.controlUI.style.borderRadius = '3px';
            this.controlUI.style.padding = '6px';
            this.controlUI.style.cursor = 'pointer';  
            this.controlUI.title = 'Centralizar Mapa';

            this.controlDiv.appendChild(this.controlUI);

            this.controlText.style.fontSize = '16px';
            this.controlText.style.textAlign = 'center';
            this.controlText.style.lineHeight = '20px';
            this.controlText.style.color = '#333';
            this.controlText.innerHTML = 'Centralizar';

            this.controlUI.appendChild(this.controlText);

            this.controlUI.addEventListener('click', () => {
                    map.panTo(centerMap);
                 //map.setCenter(centerMap);
            });
        }
    }
    
    

    const mapOptions = 
    {
        center: {lat: -3.716816, lng: -38.519115},
        zoom: 8,
        mapTypeId: 'roadmap', // roadmap, satellite, hybrid, terrain
        disableDefaultUI: true,
        // alteração no estilo do mapa
        styles:
        [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "hue": "#FFBB00"
                    },
                    {
                        "saturation": 43.400000000000006
                    },
                    {
                        "lightness": 37.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "hue": "#FFC200"
                    },
                    {
                        "saturation": -61.8
                    },
                    {
                        "lightness": 45.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 51.19999999999999
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 52
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "hue": "#0078FF"
                    },
                    {
                        "saturation": -13.200000000000003
                    },
                    {
                        "lightness": 2.4000000000000057
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "hue": "#00FF6A"
                    },
                    {
                        "saturation": -1.0989010989011234
                    },
                    {
                        "lightness": 11.200000000000017
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ]}
        // função para centralizar o mapa.
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const centerControl = new CenterControl(map);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv);

        // adicionar marcadores no mapa
        const marker = new google.maps.Marker
        ({
            position: {lat: -3.716816, lng: -38.519115},
            map: map,
            title: 'Serviço',
            // label: '',
            icon: 'logo.png',
            // animações
            animation: google.maps.Animation.DROP,
            // arrastável
            draggable: false
            // remover marcadores do mapa
            // marker.setMap(null);
        });

        // criando infoWindow
        let infoWindow = new google.maps.InfoWindow
        ({
            content: '<div class="infoWindow"><h4>Formatação de Computadores</h4></div>',
            // position = {},
            // maxWidth: 200
        });

        marker.addListener('click', () => 
        {
            infoWindow.open(map, marker);
        });

        
}