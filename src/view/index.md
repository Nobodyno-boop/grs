# PipouColors ! v1.0.1

![Clowned Space](https://img.shields.io/badge/CLOWNED-SPACE-fca5a5?style=for-the-badge)
[![Github](https://img.shields.io/badge/PipouColors-SPACE-fca5a5?style=for-the-badge&logo=github)](https://github.com/Nobodyno-boop/pipoucolor)

Your beautifull gradient placeholder !

- [API](#sample-routes)
- [Routes Properties](#params-properties)

## Sample routes (Rate limite 500/minutes)

| route used                              | url                                                                            | result                                        |
| --------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| `api/v1/:width/`                        | [api/v1/50/](api/v1/50/)                                                       | ![api](api/v1/50/)                            |
| `api/v1/:width/:height/`                | [api/v1/50/70/](api/v1/50/70/)                                                 | ![api](api/v1/50/70/)                         |
| `api/v1/:width/:height/:colors/`        | [api/v1/50/50/E36387,FCFFA6/](api/v1/50/50/E36387,FCFFA6/)                     | ![api](api/v1/50/50/E36387,FCFFA6/)           |
| `api/v1/:width/:height/:colors/:angle/` | [api/v1/50/50/E36387,FCFFA6/180/](api/v1/50/50/E36387,FCFFA6/180/)             | ![api](api/v1/50/50/E36387,FCFFA6/180/)       |
| `api/v1/:width/:height/:colors/`        | [api/v1/50/50/FA8BFF,2BD2FF,2BFF88/](api/v1/50/50/FA8BFF,2BD2FF,2BFF88/)       | ![api](api/v1/50/50/FA8BFF,2BD2FF,2BFF88/)    |
| `api/v1/:width/:height/:colors/:angle/` | [api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/](api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/) | ![api](api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/) |

## Routes properties

| name   | type   | option                            |
| ------ | ------ | --------------------------------- |
| height | number | min: 1, max: 1000                 |
| width  | number | min: 1, max: 1000                 |
| colors | string | min: 12, max: 60 (10 hex color !) |
| angle  | number | min: 0, max: 360                  |

> Thanks to [cssgradient.io](https://cssgradient.io/gradient-backgrounds/) ♥
