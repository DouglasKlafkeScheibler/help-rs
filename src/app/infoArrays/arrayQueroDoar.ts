import { of } from "rxjs";
import { arrayQueroDoarInternacionalDialog } from "./arrayQueroDoarInternacionalDialog";
import { arrayQueroDoarPeloBrasilDialog } from "./arrayQueroDoarPeloBrasilDialog";
import { arrayQueroDoarRSDialog } from "./arrayQueroDoarRSDialog";

export const arrayQueroDoar = of([
    {
        description: "📍 Doações no RS",
        dialog: arrayQueroDoarRSDialog,
    },
    {
        description: "🇧🇷 Doações pelo Brasil",
        dialog: arrayQueroDoarPeloBrasilDialog,
    },
    {
        description: "🌐 International Donate",
        dialog: arrayQueroDoarInternacionalDialog,
        largeButton: true
    },
])