const modalItems = [
  {
    modalId: 1,
    header: " Čia galėsite sužinoti apie pagrindines šio puslapio funkcijas",
    content: "Spauskite 'tęsti', kad pradėtumėte pamoką.",
    modalStyle: "modal__content first-modal",
  },
  {
    modalId: 2,
    header: "Darbo erdvė",
    content:
      "Joje rasi visus reikalingus įrankius sukurti savo svetainę.\n Dešinėje pusėje - programavimo erdvė į kurią sudėti blokai virsta kodu.\n Kairėje pusėje - visos blokų kategorijos, kuriose rasi blokus svetainės struktūrai ir jos dizainui.\n\n Pagrindinis rėmas - svetainės 'pamatas'. Nuo šių blokų pradedama kiekviena svetainė. \n Teksto struktūra - čia rasi visus teksto įvesties bei teksto talpinimo blokus. \n Teksto žymėjimas - teksto formatavimo blokai, kaip paryškinimas, pažymėjimas ir t.t.\n Stilius - blokai skirti elementų stilizavimui.\n Sąrašai - blokai skirti sukurti sąrašus.\n Lentelės - blokai skirti sukurti lenteles.\n Formos - blokai skirti sukurti formas arba anketas.\n Rašmena - blokai skirti pridėti funkcionalumo į svetainę. \n\n Prisimink, kad bet kada galima užvesti pelę ant bloko ir gauti trumpą jo aprašymą arba paspausti dešiniu mygtuku ant bloko ir paspausti 'Help' funkciją, kuri nuves į bloko dokumentaciją.",
    modalStyle: "modal__content second-modal",
  },
  {
    modalId: 3,
    header: "Funkciniai mygtukai",
    content:
      "Išsaugoti svetainės kodą: išsaugo dabartinį svetainės kodą tekstinio failo formatu.\n\n Ištrinti visus blokus: ištrina visus programavimo erdvėje esančius blokus.\n\n Pagalba: įjungia šią supažindinimo pamoką.",
    modalStyle: "modal__content third-modal",
  },
  {
    modalId: 4,
    header: "Svetainės pavadinimas",
    content:
      "Čia rodomas svetainės pavadinimas, kurį galima pakeisti 'title' bloke esančioje teksto įvestyje.",
    modalStyle: "modal__content fourth-modal",
  },
  {
    modalId: 5,
    header: "Svetainės kodas",
    content: "Čia rodomas sukurtos svetainės HTML kodas.",
    modalStyle: "modal__content fifth-modal",
  },
  {
    modalId: 6,
    header: "Svetainės atvaizdavimas",
    content: "Šiame lange rodoma jūsų sukurta svetainė.",
    modalStyle: "modal__content sixth-modal",
  },
];

const ModalConfig = {
  modalItems,
};

export default ModalConfig;
