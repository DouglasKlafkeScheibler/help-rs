import { of } from "rxjs";
import { arrayProfissionaisVoluntarioPsicologoDialog } from "./arrayProfissionaisVoluntarioPsicologoDialog";

export const arrayProfissionais = of([
    {
        description: "🙋🏻‍♂️ Profissionais Voluntários",
        link: "https://gsvchat.org/voluntariado/?gad_source=1&gclid=CjwKCAjwps-zBhAiEiwALwsVYcM5aAMgo_73lOky5YbWLWKcxuehPHSBb0Gq5TqoVGgvEksH5ZGPNhoCt0YQAvD_BwE",
    },
    {
        description: "🩺 Voluntário Médico",
        link: "https://sec24.com.br/manual-profissionais-da-saude/",
    },
    {
        description: "🫂 Voluntário Psicólogo",
        dialog: arrayProfissionaisVoluntarioPsicologoDialog,
        largeButton: true
    },
])