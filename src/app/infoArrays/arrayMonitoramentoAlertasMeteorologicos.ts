import { of } from "rxjs";

export const arrayMonitoramentoAlertasMeteorologicos = of([
    {
        title: "🆘 Alertas Meteorológicos",
        description: "💬 Por Whatsapp",
        link: 'https://api.whatsapp.com/send/?phone=556120344611&text&type=phone_number&app_absent=0',
    },
    {
        description: '📱 Via SMS',
        link: '',
    },
])