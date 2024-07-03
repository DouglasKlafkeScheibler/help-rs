import { of } from "rxjs";
import { arrayMonitoramentoAlertasMeteorologicos } from "./arrayMonitoramentoAlertasMeteorologicos";

export const arrayMonitoriamento = of([
    {
        description: "🛰 Estação de Monitoramento",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZmNkNzVmYTktMTc5NC00YTQwLThkOGEtNjdjYWZkNzNkODI1IiwidCI6IjI2ZTFjYjlkLWZkMmQtNDdkNi1iMjdmLWI0MzAyZWZhNTc1NiJ9",
    },
    {
        description: "🗺 Mapas de enchentes do Estado",
        link: "https://storymaps.arcgis.com/stories/a81d69f4bccf42989609e3fe64d8ef48",
    },
    {
        description: "🌤 Metereologia RS",
        link: "https://x.com/metsul",
    },
    {
        description: "⛲ Simulação Nível Água",
        link: "https://coastal.climatecentral.org/map/13/-51.1893/-30.0297/?theme=water_level&map_type=water_level_above_mhhw&basemap=roadmap&contiguous=true&elevation_model=best_available&refresh=true&water_level=5.1&water_unit=m",
    },
    {
        description: "❗ Pelotas mapa risco",
        link: "https://www.google.com/maps/d/u/0/viewer?mid=1bdKWG1dR0OLwSb3dwwjRTAyfc398zjE&ll=-31.742803016221732%2C-52.273272500000004&z=12",
    },
    {
        description: "️⚠️ Receba pelo celular Alertas Meteorológicos - Defesa Cilvi",
        dialog: arrayMonitoramentoAlertasMeteorologicos,
    },
])