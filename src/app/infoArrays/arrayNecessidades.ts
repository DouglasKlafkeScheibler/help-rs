import { of } from "rxjs";
import { arrayNecessidadesAguaPotavelDialog } from "./arrayNecessidadesAguaPotavelDialog";
import { arrayNecessidadesApoioPsicologicoDialog } from "./arrayNecessidadesApoioPsicologicoDialog";
import { arrayNecessidadesAtendimentoMedicoDialog } from "./arrayNecessidadesAtendimentoMedicoDialog";
import { arrayNecessidadesCuidadosPetDialog } from "./arrayNecessidadesCuidadosPetDialog";
import { arrayNecessidadesPrecisoAbrigoDialog } from "./arrayNecessidadesPrecisoAbrigoDialog";
import { arrayNecessidadesReconstruirLarDialog } from "./arrayNecessidadesReconstruirLarDialog";
import { arrayNecessidadesRefeicaoQuentinhaDialog } from "./arrayNecessidadesRefeicaoQuentinhaDialog";

export const arrayNecessidades = of([
    {
        description: "🛌🏻 Preciso de Abrigo",
        dialog: arrayNecessidadesPrecisoAbrigoDialog,
    },
    {
        description: '🏡 Reconstruir Meu Lar',
        dialog: arrayNecessidadesReconstruirLarDialog,
    },
    {
        description: "💧 Água potável",
        dialog: arrayNecessidadesAguaPotavelDialog,
    },
    {
        description: '🍲 Refeição quentinha',
        dialog: arrayNecessidadesRefeicaoQuentinhaDialog,
    },
    {
        description: '🩺 Atendimento Médico',
        dialog: arrayNecessidadesAtendimentoMedicoDialog,
    },
    {
        description: '🫂 Apoio Psicológico',
        dialog: arrayNecessidadesApoioPsicologicoDialog,
    },
    {
        description: '🐾 Cuidados Pet',
        dialog: arrayNecessidadesCuidadosPetDialog,
    },
    {
        description: '💊 Preciso de Medicação',
        link: 'https://api.whatsapp.com/qr/6GCOHSIAK2SJJ1?autoload=1&app_absent=0',
    },
])