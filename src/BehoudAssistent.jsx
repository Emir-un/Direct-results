// ============ BEHOUD-ASSISTENT — gespreksspoor per NGO ============
// 3 NGO's als werkend voorbeeld. Elke NGO heeft eigen doelen, zinnen en vertakkingen.
// KERNREGEL: blauw kader = HARDOP zeggen. Grijs = regie/uitleg voor jou (NIET voorlezen).

import React, { useState } from "react";

const NGO_DATA = {
  "alzheimer": {
    "naam": "Alzheimer Nederland",
    "tagline": "Onderzoek naar dementie & steun voor naasten",
    "kern": "onderzoek dat dementie stap voor stap beter behandelbaar maakt",
    "afsluit": "door belangrijk onderzoek naar dementie mogelijk te maken",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een mantelzorger die steun vond, en over onderzoek dat steeds meer ontdekt over wat dementie veroorzaakt. Echte verhalen van mensen en hun familie, geen cijfers.",
    "overtuig": {
      "raakt": "Een wereld zonder dementie — en voor veel mensen ook heel persoonlijk, omdat ze iemand kennen die het treft.",
      "zinnen": [
        "“Uw bijdrage gaat naar onderzoek dat steeds meer ontdekt over de hersenen — en naar steun voor mensen met dementie en hun naasten, vandaag al.”",
        "“En omdat onderzoek jaren loopt, houdt uw vaste steun de zoektocht naar een doorbraak aan de gang.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest over een nieuwe ontdekking die behandeling dichterbij brengt — mede dankzij mensen die bleven steunen.”"
    },
    "redenen": [
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan houdt u mee dementie-onderzoek aan de gang, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat onderzoek naar dementie over jaren loopt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag draagt bij aan onderzoek dat levens verandert.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Loop gewoon een tijdje mee, kijk via de nieuwsbrief wat er met uw steun gebeurt, en voel zelf of u wilt blijven. U zit nergens aan vast.”"
    ],
    "vangnet": "Lukt maandelijks niet? Bied de jaarlijkse gift aan: “We hebben ook de mogelijkheid om één keer per jaar bij te dragen. Dan blijft u betrokken via updates, zonder maandelijkse verplichting.” Lukt ook dat niet: eenmalig — ook dat helpt het onderzoek echt.",
    "note": ""
  },
  "azg": {
    "naam": "Artsen Zonder Grenzen",
    "tagline": "Medische hulp waar niemand anders komt",
    "kern": "dat onze artsen blijven, ook waar niemand anders komt",
    "afsluit": "doordat onze artsen kunnen blijven, ook op de plekken waar niemand anders komt",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een arts die in een crisisgebied een kind weer gezond kreeg, en over plekken waar wij als enigen bleven. Echte verhalen uit het veld, geen cijfers.",
    "overtuig": {
      "raakt": "Artsen die blíjven waar niemand anders komt — onafhankelijk van overheden — en u maakt die onafhankelijkheid mogelijk.",
      "zinnen": [
        "“Wij zijn vaak de enigen die blijven als het ergens echt misgaat. En we willen onafhankelijk blijven, zodat we overal kunnen helpen. Dat kan alleen dankzij vaste donateurs.”",
        "“Juist daarom hebben we mensen zoals u nodig: uw vaste steun betekent dat onze artsen kunnen blíjven, ook als het moeilijk wordt.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest dat onze artsen er waren op een plek waar niemand anders kwam — omdat mensen zoals u dat mogelijk maakten.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een kleiner bedrag houdt onze artsen op de plekken waar ze het hardst nodig zijn.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat wij onafhankelijk willen blijven en daarvoor vaste donateurs nodig hebben.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan zorgt u mee dat onze artsen blíjven, ook waar niemand anders komt, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Loop een paar maanden mee, ervaar via de nieuwsbrief wat uw steun mogelijk maakt, en beslis daarna zelf hoe lang u meeloopt.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "cliniclowns": {
    "naam": "CliniClowns",
    "tagline": "Lichtpuntjes voor zieke kinderen & kwetsbare ouderen",
    "kern": "dat de clowns langs blijven gaan bij zieke kinderen",
    "afsluit": "doordat de clowns langs blijven gaan bij zieke kinderen en kwetsbare ouderen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een ziek kind dat even alles vergat toen de clown langskwam, of een oudere met dementie die weer lachte. Echte momenten, geen cijfers.",
    "overtuig": {
      "raakt": "Een ziek kind of een kwetsbare oudere die even mag vergeten en weer lacht — en u zorgt dat de clowns blijven komen.",
      "zinnen": [
        "“De clowns geven kinderen en ouderen een lichtpuntje in een zware tijd. Even mogen ze vergeten dat ze ziek zijn. En dat is professioneel werk, het hele jaar door.”",
        "“En het mooie van maandelijks: u helpt mee dat de clowns langs blijven gaan. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoeveel kinderen de clowns dit jaar blij hebben gemaakt — daar zorgde u mee voor.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag maakt mee dat de clowns langs blijven gaan.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan geeft u een ziek kind een lichtpuntje naast uw andere giften, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe de clowns week na week kinderen blij maken.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Doe gewoon een paar maanden mee, kijk via de nieuwsbrief wat uw steun mogelijk maakt voor zieke kinderen, en daarna beslist u zelf. U kunt altijd stoppen.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "greenpeace": {
    "naam": "Greenpeace",
    "tagline": "Strijd voor een groene, leefbare wereld",
    "kern": "campagnes die een stuk natuur of een wet daadwerkelijk veranderen",
    "afsluit": "in de strijd voor een groene, leefbare wereld",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een stuk natuur dat beschermd werd, of een campagne die een vervuiler wist te stoppen. Concrete overwinningen, geen vage beloftes.",
    "overtuig": {
      "raakt": "Een groene, leefbare wereld — en u hoort bij de mensen die volhouden tot een campagne echt iets verandert.",
      "zinnen": [
        "“Milieucampagnes winnen — een wet veranderen, een gebied beschermen — vraagt een lange adem. Het mooie van maandelijks: daar kunnen we echt mee doorwerken.”",
        "“En het mooie van maandelijks: u helpt ons doorgaan waar het telt. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest dat een gebied beschermd is of een wet veranderd — omdat mensen zoals u zijn blijven steunen.”"
    },
    "redenen": [
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan blijft u betrokken bij de strijd voor een groene wereld, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe campagnes stap voor stap gewonnen worden.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag houdt mee een campagne draaiend.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Doe gewoon een paar maanden mee, kijk wat we samen bereiken via de nieuwsbrief, en daarna bepaalt u zelf. U kunt altijd stoppen.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "hersen": {
    "naam": "Hersenstichting",
    "tagline": "Onderzoek naar het brein",
    "kern": "onderzoek naar het brein dat behandelingen dichterbij brengt",
    "afsluit": "door onderzoek naar het brein mogelijk te maken voor mensen met een hersenaandoening",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over iemand die na een beroerte stap voor stap weer leerde praten, en over onderzoek dat zulke behandelingen beter maakt. Echte verhalen van mensen en hun naasten.",
    "overtuig": {
      "raakt": "Een toekomst waarin meer mensen met een gezond brein kunnen leven — en voor velen ook persoonlijk, want 1 op de 4 krijgt ermee te maken.",
      "zinnen": [
        "“Uw bijdrage steunt onderzoek naar het brein: beroerte, dementie, hersenletsel. En het steunt mensen die ermee leven.”",
        "“En omdat onderzoek jaren loopt, houdt uw vaste steun de zoektocht naar betere behandelingen aan de gang.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest over een nieuwe ontdekking die mensen met een hersenaandoening helpt — mede dankzij uw steun.”"
    },
    "redenen": [
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat hersenonderzoek over jaren loopt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag draagt bij aan onderzoek dat levens verandert.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan houdt u mee de zoektocht naar betere behandelingen aan de gang, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Begin gewoon een paar maanden, kijk via de nieuwsbrief wat uw steun mogelijk maakt, en daarna beslist u zelf. U zit nergens aan vast.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "jantjebeton": {
    "naam": "Jantje Beton",
    "tagline": "Buitenspelen voor ieder kind",
    "kern": "speelplekken waar kinderen weer veilig buiten kunnen spelen",
    "afsluit": "doordat kinderen weer veilig buiten kunnen spelen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een buurt waar kinderen weer veilig buiten kunnen spelen, of een kind dat het thuis zwaar heeft en even onbezorgd mocht zijn. Echte verhalen, geen cijfers.",
    "overtuig": {
      "raakt": "Kinderen die gewoon weer kind mogen zijn — ook de kinderen die het thuis zwaar hebben — en u maakt die plekken mogelijk.",
      "zinnen": [
        "“Buitenspelen klinkt klein, maar het maakt kinderen gezonder en gelukkiger. U bouwt mee aan speelplekken en momenten waar kinderen even onbezorgd kunnen zijn.”",
        "“En het mooie van maandelijks: we kunnen er beter speelprojecten mee opzetten. U bepaalt zelf hoe lang u meedoet — al een paar maanden helpt al echt.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest over een speelplek die er staat — waar kinderen elke dag spelen die dat eerder niet konden.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft een kind weer ruimte om te spelen.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe speelplekken en projecten stap voor stap tot stand komen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een speelplek of project meerdere jaren loopt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Probeer het gewoon een paar maanden, kijk wat het oplevert voor de kinderen, en dan beslist u zelf. Geen verplichting, u kunt altijd stoppen.”"
    ],
    "vangnet": "Lukt maandelijks niet? Bied de jaarlijkse gift aan (één keer per jaar, wél betrokken via updates). Lukt ook dat niet: eenmalig.",
    "note": ""
  },
  "kika": {
    "naam": "KiKa",
    "tagline": "Onderzoek naar kinderkanker",
    "kern": "onderzoek naar kinderkanker, op weg naar betere behandelingen",
    "afsluit": "door onderzoek naar kinderkanker mogelijk te maken",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een kind dat nu in behandeling is, en over onderzoek waardoor de chemo voor zulke kinderen minder zwaar wordt. Echte verhalen van kinderen en hun ouders, geen cijfers.",
    "overtuig": {
      "raakt": "Een wereld waarin geen kind meer aan kanker overlijdt — en u bouwt daar persoonlijk aan mee, onderzoek voor onderzoek.",
      "zinnen": [
        "“Uw bijdrage is niet één losse gift. U steunt onderzoek dat jaren loopt en stap voor stap zoekt naar betere behandelingen voor kinderen met kanker.”",
        "“En het mooie van maandelijks: onderzoekers kunnen er echt mee vooruit werken. Al een paar maanden steun helpt een studie verder.”"
      ],
      "toekomst": "“Stelt u zich voor dat u over een jaar in de nieuwsbrief leest over een doorbraak — en weet dat u daaraan heeft bijgedragen.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een paar euro per maand houdt onderzoek naar kinderkanker draaiend.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan houdt u mee onderzoek naar kinderkanker draaiend, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe het onderzoek stap voor stap vooruitgaat.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat onderzoek naar kinderkanker jaren loopt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Begin gewoon, kijk een paar maanden mee wat uw bijdrage oplevert voor zieke kinderen, en dan voelt u zelf of u langer wilt blijven. U zit nergens aan vast en kunt altijd stoppen.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "kikaloterij": {
    "naam": "KiKa Loterij",
    "tagline": "Meespelen én kinderkanker bestrijden",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een kind dat geholpen is door het onderzoek dat u mede mogelijk maakt — en u speelt elke trekking mee voor de prijzen. Echte verhalen, plus de spanning van het meespelen.",
    "overtuig": {
      "raakt": "Onderzoek dat zieke kinderen een echte genezingskans geeft — en het meespelen voelt als meedoen aan iets dat groter is dan jezelf.",
      "zinnen": [
        "“Wat u doet is meer dan meespelen: u financiert onderzoek dat kinderen met kanker een betere kans geeft. Elke trekking houdt dat onderzoek draaiend.”",
        "“En juist door mee te blijven spelen, weten onderzoekers dat ze door kunnen — daar plannen ze hun studies op.”"
      ],
      "toekomst": "“Stelt u zich voor dat u straks leest dat een behandeling milder is geworden — mede dankzij mensen die zijn blijven meespelen.”"
    },
    "redenen": [
      {
        "scenario": "Dacht eenmalig mee te spelen",
        "herken": "“ik wilde maar één keer meedoen”, “ik dacht dat het eenmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en fijn dat u het zegt. De KiKa Loterij werkt met trekkingen — u speelt minimaal drie keer mee, juist zodat het onderzoek kan doorlopen. Het is geen verkooptruc, zo zit de loterij in elkaar.”",
          "“Het voordeel: na die drie trekkingen krijgt u ook het welkomstcadeau — een Coolblue-bon van €20 — en daarna bepaalt u helemaal zelf of u doorgaat.”"
        ],
        "verts": [
          {
            "als": "Zegt ja (3 trekkingen)",
            "doe": "bevestig warm.",
            "zin": [
              "“Top! Dan speelt u mee voor de prijzen én helpt u zieke kinderen. Daarna beslist u zelf.”"
            ]
          },
          {
            "als": "Vindt 2 loten te veel",
            "doe": "loten terugbrengen naar 1.",
            "zin": [
              "“Zullen we het terugbrengen naar één lot? Dan speelt u toch mee en helpt u nog steeds.”"
            ]
          },
          {
            "als": "Wil echt korter dan 3",
            "doe": "kan niet — netjes annuleren + website.",
            "zin": [
              "“Korter dan drie trekkingen kan helaas echt niet. Dan haal ik u netjes uit het systeem, en u kunt altijd via de website meespelen wanneer het u uitkomt.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — vindt het bedrag te hoog",
        "herken": "“€13 per trekking is veel”, “twee loten is te duur”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Één lot kost €13 per trekking — zullen we het op één lot houden? Dan blijft het behapbaar en speelt u toch mee voor de kinderen.”"
        ],
        "verts": [
          {
            "als": "Akkoord met 1 lot",
            "doe": "aanpassen, bevestigen.",
            "zin": [
              "“Mooi, dan zet ik het op één lot. Dank u wel!”"
            ]
          },
          {
            "als": "Nog steeds te veel",
            "doe": "kan niet lager dan 1 lot — annuleren + website.",
            "zin": [
              "“Lager dan één lot kan helaas niet. Ik haal u netjes uit het systeem; via de website kunt u altijd meedoen wanneer het wel past.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Laten we het zo doen: u speelt gewoon de eerste drie trekkingen mee, ontvangt uw welkomstcadeau, en ziet ondertussen wat uw deelname oplevert. Daarna beslist u zelf. Klinkt dat goed?”"
    ],
    "vangnet": "Geen eenmalige of jaarlijkse optie mogelijk. Lukt minimaal drie trekkingen niet, dan annuleren en doorverwijzen naar de website. Dit is correcte afhandeling.",
    "note": "Let op: dit is een loterij. Minder dan drie trekkingen meespelen kán echt niet — dat is geen onderhandelpunt. Het vervolg draait dus om ‘minimaal drie trekkingen’, niet om maandelijks vs. eenmalig.",
    "loterij": true,
    "coolblue": "“En als blijk van waardering krijgt u na drie trekkingen een Coolblue-bon van € 20,00 — een leuke verrassing bovenop het meespelen.”"
  },
  "legerdesheils": {
    "naam": "Leger des Heils",
    "tagline": "Hulp aan mensen zonder vangnet",
    "kern": "iemand van de straat helpen naar werk en een eigen plek",
    "afsluit": "door mensen zonder vangnet weer op weg te helpen naar een eigen leven",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over iemand die dakloos was en nu weer een eigen plek en werk heeft. Echte verhalen van mensen die er weer bovenop kwamen, geen cijfers.",
    "overtuig": {
      "raakt": "Iemand zonder vangnet die van de straat naar een eigen leven wordt geholpen — en u maakt dat hele traject mogelijk.",
      "zinnen": [
        "“Wij geven mensen niet alleen een bed voor de nacht, maar begeleiden ze naar herstel, werk en een eigen plek. Dat is een weg van jaren.”",
        "“En het mooie van maandelijks: u bouwt met elke maand een stukje mee aan iemands weg terug. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe iemand die helemaal vastzat nu weer een eigen leven heeft opgebouwd — daar heeft u aan meegeholpen.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft iemand een maaltijd, onderdak of een stap richting herstel.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan helpt u mee iemand zonder vangnet weer op weg, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat iemand van de straat naar een stabiel leven helpen jaren kost.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Loop gewoon een paar maanden mee, kijk via de nieuwsbrief wat uw steun mogelijk maakt voor mensen die opnieuw beginnen, en daarna beslist u zelf. U zit nergens aan vast.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "rodekruis": {
    "naam": "Nederlandse Rode Kruis",
    "tagline": "Hulp klaar vóór en tijdens een ramp",
    "kern": "dat hulp al klaarstaat op het moment dat een ramp toeslaat",
    "afsluit": "doordat hulp al klaarstaat op het moment dat een ramp toeslaat",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over hulpverleners die er binnen uren waren toen een ramp toesloeg, en over mensen die dankzij die hulp veilig waren. Echte verhalen, geen cijfers.",
    "overtuig": {
      "raakt": "Er zijn op het moment dat het er echt toe doet — en u zorgt dat de hulp al klaarstaat vóórdat de ramp komt.",
      "zinnen": [
        "“Het bijzondere: wij moeten al paraat staan vóórdat er iets gebeurt. Uw steun zorgt dat de hulp er meteen is als iemand het op zijn zwaarst heeft.”",
        "“En het mooie van maandelijks: daarmee kunnen we onze paraatheid beter op peil houden. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor: ergens slaat een ramp toe, en de hulp is er meteen — omdat mensen zoals u ervoor zorgden dat we klaarstonden.”"
    },
    "redenen": [
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan helpt u mee dat we al klaarstaan vóór een ramp, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een kleine bijdrage maakt mee dat we paraat staan als het misgaat.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe uw steun ons elke maand paraat houdt voor de volgende ramp.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat we al klaar moeten staan vóórdat een ramp gebeurt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Doe gewoon een paar maanden mee met een bedrag dat goed voelt, kijk via de updates wat er met uw steun gebeurt, en daarna bepaalt u zelf. Zo zit u nergens aan vast.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "plan": {
    "naam": "Plan International",
    "tagline": "Gelijke kansen voor meisjes wereldwijd",
    "kern": "dat een meisje naar school kan en haar eigen toekomst opbouwt",
    "afsluit": "doordat meisjes wereldwijd naar school kunnen en hun eigen toekomst opbouwen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een meisje dat dankzij steun naar school kon en nu haar eigen toekomst opbouwt. Echte verhalen van kinderen, geen cijfers.",
    "overtuig": {
      "raakt": "Een meisje dat naar school kan en haar eigen toekomst in handen neemt — en u verandert daarmee niet één leven, maar vaak een hele gemeenschap.",
      "zinnen": [
        "“Uw steun geeft kinderen, en vooral meisjes, een eerlijke kans: onderwijs, veiligheid, gelijke rechten. Dat verandert een heel leven.”",
        "“En het mooie van maandelijks: u bouwt met elke maand een stukje mee aan haar weg vooruit. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe een meisje dankzij steun haar opleiding afmaakt en op eigen benen staat — dat maakt u mee mogelijk.”"
    },
    "redenen": [
      {
        "scenario": "Partner is het er niet mee eens",
        "herken": "“mijn man/vrouw vindt het niks”, “we beslissen dit samen”.",
        "toon": "respectvol, geen druk. Bied een terugbelmoment aan.",
        "scripts": [
          "“Dat snap ik helemaal — zoiets beslist u samen. Ik wil u niet overvallen.”",
          "“Zal ik u op een ander moment terugbellen, wanneer u er samen rustig naar kunt kijken?”"
        ],
        "verts": [
          {
            "als": "Stemt in met terugbellen",
            "doe": "afspraak maken, niet nu pushen.",
            "zin": [
              "“Top, dan bel ik u op een beter moment terug. Bespreekt u het rustig samen.”"
            ]
          },
          {
            "als": "Wil nu al beslissen — nee",
            "doe": "eenmalig of annuleren, geen druk.",
            "zin": [
              "“Helemaal goed. Dan zet ik het om naar eenmalig / annuleer ik het netjes. Dank voor uw tijd.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een meisje van haar eerste schooljaar tot zelfstandigheid begeleiden jaren kost.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft een meisje toegang tot onderwijs.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Neem de tijd om het te ervaren. Een paar maanden meelopen, en dan beslist u zelf — eventueel samen met uw partner.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "savethechildren": {
    "naam": "Save the Children",
    "tagline": "Hulp & onderwijs voor kinderen in nood",
    "kern": "dat een kind in nood zorg, veiligheid en onderwijs krijgt",
    "afsluit": "doordat kinderen in nood zorg, veiligheid en onderwijs krijgen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een kind in een oorlogsgebied dat weer veilig naar school gaat, en over hulp die echt aankwam. Echte verhalen, geen cijfers.",
    "overtuig": {
      "raakt": "Een kind in oorlog of armoede dat tóch een kans op een toekomst krijgt — en u bent degene die dat verschil mogelijk maakt.",
      "zinnen": [
        "“Uw steun geeft een kind vandaag hulp: zorg, voeding, een veilige plek. En het geeft een kind een echte kans om weer naar school te gaan.”",
        "“En het mooie van maandelijks: met een paar maanden steun geeft u een kind echt een stuk meer dan één moment hulp. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe een kind dat in een uitzichtloze situatie zat weer naar school gaat — dat maakt u mee mogelijk.”"
    },
    "redenen": [
      {
        "scenario": "Partner is het er niet mee eens",
        "herken": "“mijn man/vrouw vindt het niks”, “we beslissen dit samen”.",
        "toon": "respectvol, geen druk. Bied een terugbelmoment aan.",
        "scripts": [
          "“Dat snap ik helemaal — zoiets beslist u samen. Ik wil u niet overvallen.”",
          "“Zal ik u op een ander moment terugbellen, wanneer u er samen rustig naar kunt kijken?”"
        ],
        "verts": [
          {
            "als": "Stemt in met terugbellen",
            "doe": "afspraak maken, niet nu pushen.",
            "zin": [
              "“Top, dan bel ik u op een beter moment terug. Bespreekt u het rustig samen.”"
            ]
          },
          {
            "als": "Wil nu al beslissen — nee",
            "doe": "eenmalig of annuleren, geen druk.",
            "zin": [
              "“Helemaal goed. Dan zet ik het om naar eenmalig / annuleer ik het netjes. Dank voor uw tijd.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft een kind zorg, voeding of onderwijs.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een kind helpen — zorg, school, veiligheid — een proces van jaren is.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Loop een paar maanden mee, ervaar wat het de kinderen oplevert, en beslis daarna zelf — eventueel samen met uw partner. U zit nergens aan vast.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "sos": {
    "naam": "SOS Kinderdorpen",
    "tagline": "Een stabiel thuis voor kwetsbare kinderen",
    "kern": "dat een kwetsbaar kind een liefdevol, stabiel thuis krijgt",
    "afsluit": "doordat een kwetsbaar kind een liefdevol, stabiel thuis krijgt",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een kind dat onveilig opgroeide en nu een liefdevol, stabiel thuis heeft. Echte verhalen van kinderen, geen cijfers.",
    "overtuig": {
      "raakt": "Een kwetsbaar kind dat een liefdevol, stabiel thuis krijgt — en u bouwt daaraan mee.",
      "zinnen": [
        "“Een kind een echt thuis geven — met zorg, school en veiligheid — bouw je op over jaren. Uw steun geeft een kind die stabiliteit.”",
        "“En het mooie van maandelijks: u geeft een kind daarmee een stukje stabiliteit. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe een kind dat onveilig opgroeide nu een echt thuis heeft — daar heeft u aan meegebouwd.”"
    },
    "redenen": [
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een kind een stabiel thuis geven werk van jaren is.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft een kind een stukje stabiliteit.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan geeft u een kind continuïteit naast uw andere giften, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Probeer een paar maanden, zie wat het voor een kind doet, en bepaal daarna zelf. U zit nergens aan vast en kunt altijd stoppen.”"
    ],
    "vangnet": "Lukt maandelijks niet? Bied de jaarlijkse gift aan (één keer per jaar, wél betrokken via updates). Lukt ook dat niet: eenmalig.",
    "note": ""
  },
  "uaf": {
    "naam": "UAF",
    "tagline": "Vluchteling-studenten naar een diploma",
    "kern": "dat een gevluchte student kan toewerken naar een diploma",
    "afsluit": "doordat een gevluchte student kan toewerken naar een diploma en een toekomst",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een gevluchte student die is afgestudeerd en nu aan het werk is. Echte verhalen van mensen die hun talent konden waarmaken, geen cijfers.",
    "overtuig": {
      "raakt": "Talent dat anders verloren zou gaan — een vluchteling die tot een diploma en een toekomst komt, met u aan de zijlijn.",
      "zinnen": [
        "“Uw steun begeleidt een student helemaal tot het diploma: taal, studiekeuze, de weg naar werk. U bouwt mee aan iemands hele toekomst.”",
        "“En het mooie van maandelijks: u bouwt met elke maand een stukje mee aan iemands weg naar het diploma. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe een student is afgestudeerd en aan het werk is — en weet dat u daar onderdeel van was.”"
    },
    "redenen": [
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat we een student meerdere jaren begeleiden tot het diploma.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een kleiner bedrag helpt een student richting het diploma.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe een student stap voor stap richting het diploma werkt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Kijk het gerust een tijdje aan. Ervaar wat uw steun mogelijk maakt voor een student, en beslis daarna zelf hoe lang u meeloopt.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "unhcr": {
    "naam": "UNHCR",
    "tagline": "Hulp aan mensen op de vlucht",
    "kern": "dat een gezin dat alles kwijt is weer een leven opbouwt",
    "afsluit": "door gezinnen te ondersteunen die alles zijn kwijtgeraakt en opnieuw moeten beginnen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een gezin dat met niets aankwam en nu weer een eigen plek heeft, of een kind dat na jaren weer naar school kan. Echte mensen, geen cijfers.",
    "overtuig": {
      "raakt": "Mensen die alles kwijt zijn en opnieuw moeten beginnen — en u staat naast hen op die hele weg, niet op één moment.",
      "zinnen": [
        "“Uw steun is niet één keer hulp, maar steun aan een heel traject: een kind dat weer naar school kan, een gezin dat mag werken. Dat opbouwen duurt jaren.”",
        "“En het mooie van maandelijks: het team kan er echt mee vooruit werken — een gezin een hele stap verder helpen in plaats van één moment hulp. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u straks leest hoe een gezin dat met niets aankwam weer een leven heeft opgebouwd — dat is wat u mogelijk maakt.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een kleiner bedrag maakt voor een gezin op de vlucht al echt verschil.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan blijft u betrokken bij mensen die opnieuw moeten beginnen, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan is het na één keer voorbij, en mist u hoe een gezin stap voor stap weer opbouwt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een gezin weer op de been helpen jaren kost.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Neem gerust de tijd. Loop een paar maanden mee, ervaar wat uw steun doet voor mensen op de vlucht, en daarna beslist u helemaal zelf hoe lang u meeloopt.”"
    ],
    "vangnet": "Lukt maandelijks niet? Bied de jaarlijkse gift aan: “We hebben ook de mogelijkheid om één keer per jaar bij te dragen. Dan blijft u betrokken via updates, zonder maandelijkse verplichting.” Lukt ook dat niet: eenmalig — ook dat helpt mensen op de vlucht echt.",
    "note": ""
  },
  "unicef": {
    "naam": "UNICEF",
    "tagline": "Onderwijs, zorg & bescherming voor kinderen",
    "kern": "dat kinderen wereldwijd onderwijs, zorg en bescherming krijgen",
    "afsluit": "doordat kinderen wereldwijd onderwijs, zorg en bescherming krijgen",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over een kind dat na een noodsituatie weer naar school gaat, of werd ingeënt tegen een dodelijke ziekte. Echte verhalen van kinderen, geen cijfers.",
    "overtuig": {
      "raakt": "Kinderen wereldwijd die onderwijs, zorg en bescherming krijgen — ook in crisisgebieden — en u geeft ze niet alleen vandaag hulp, maar een toekomst.",
      "zinnen": [
        "“Uw steun gaat niet alleen naar noodhulp, maar bouwt aan de toekomst van een kind: onderwijs, vaccinaties, veiligheid. Dat is werk van jaren.”",
        "“En omdat u elke maand geeft, kan UNICEF vooruit plannen — u geeft een kind een heel schooljaar in plaats van één moment.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe een kind dat in een noodsituatie zat weer veilig naar school gaat — dat maakt u mee mogelijk.”"
    },
    "redenen": [
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een klein bedrag geeft een kind toegang tot zorg of onderwijs.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Meerdere doelen — ‘ik steun al genoeg’",
        "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”.",
        "toon": "waarderend, niet bevechten. Positioneer ernaast, niet als concurrent.",
        "scripts": [
          "“Wat mooi dat u al meerdere doelen steunt — daar kunnen wij juist op bouwen. U hoeft niet te kiezen tussen ons en de rest.”",
          "“Misschien past een klein bedrag dat comfortabel naast uw andere giften voelt. Dan helpt u mee aan onderwijs, zorg en bescherming wereldwijd, zonder dat het te veel wordt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, klein bedrag vastleggen.",
            "zin": [
              "“Heel fijn, dank u wel. Juist structurele steun maakt voor ons het verschil.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "benadruk ‘ernaast, niet kiezen’ + ervaren.",
            "zin": [
              "“U zit nergens aan vast — help gewoon de komende maanden mee en bepaal dan zelf of het naast de rest past.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig, geen druk.",
            "zin": [
              "“Helemaal goed. Dan doen we het eenmalig — ook dat is waardevol.”"
            ]
          }
        ]
      },
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat een kind helpen — onderwijs, vaccinaties, veiligheid — een proces van jaren is.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Begin gewoon een paar maanden, kijk via de nieuwsbrief wat u mogelijk maakt voor kinderen, en daarna beslist u zelf. U zit nergens aan vast.”"
    ],
    "vangnet": "Lukt geen van de takken? Omzetten naar eenmalig is prima — ook dat helpt. Deze NGO heeft géén jaarlijkse optie.",
    "note": ""
  },
  "vwn": {
    "naam": "Vluchtelingenwerk Nederland",
    "tagline": "Begeleiding bij een nieuw bestaan",
    "kern": "iemand begeleiden van de eerste Nederlandse woorden tot een eigen baan",
    "afsluit": "door vluchtelingen te helpen bij wonen, werken en integratie in Nederland",
    "vaag": "In die nieuwsbrief leest u bijvoorbeeld over iemand die van de eerste Nederlandse woorden naar een eigen baan en plek groeide. Echte verhalen van mensen die opnieuw begonnen, geen cijfers.",
    "overtuig": {
      "raakt": "Iemand die hier met niets aankomt en stap voor stap een nieuw bestaan opbouwt — en u loopt die hele weg mee.",
      "zinnen": [
        "“Uw steun helpt iemand bij de eerste, kwetsbare stappen: de taal, de weg vinden, werk zoeken. Dat is geen kwestie van één maand maar van een lange weg.”",
        "“En het mooie van maandelijks: u bouwt met elke maand een stukje mee aan iemands weg naar zelfstandigheid. U bepaalt zelf hoe lang u meedoet.”"
      ],
      "toekomst": "“Stelt u zich voor dat u leest hoe iemand van de eerste Nederlandse woorden naar een eigen baan en plek is gegroeid — daar was u bij.”"
    },
    "redenen": [
      {
        "scenario": "Dacht dat het eenmalig was — werverfout",
        "herken": "“dat is niet wat ik aan de deur afsprak”, “ik dacht dat dit éénmalig was”.",
        "toon": "eerlijk en kalm, niet defensief. Erken de verwarring eerst.",
        "scripts": [
          "“Dat snap ik, en vervelend als dat aan de deur niet duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad maandelijkse steun, juist omdat iemand begeleiden van de eerste woorden tot een baan jaren duurt.”",
          "“Maar u bepaalt zelf hoe lang u meedoet. Laten we kijken wat wél past — misschien een kleiner bedrag, een paar maanden, om het te ervaren.”"
        ],
        "verts": [
          {
            "als": "Voelt zich gehoord, zegt ja",
            "doe": "bevestig, lager bedrag indien nodig.",
            "zin": [
              "“Dank u voor uw begrip. Zo doen we het — fijn dat u meedoet.”"
            ]
          },
          {
            "als": "Blijft wantrouwig",
            "doe": "niet duwen, eenmalig + nette afhandeling.",
            "zin": [
              "“Ik snap het en wil u niets opdringen. Dan zet ik het om naar eenmalig, dan klopt het zoals u het bedoelde.”"
            ]
          }
        ]
      },
      {
        "scenario": "Financieel — ‘ik kan niet maandelijks missen’",
        "herken": "“ik wil niet vastzitten aan een vast bedrag”, “het is krap”.",
        "toon": "begripvol, niet meteen verlagen. Stel eerst de vraag hieronder. Zegt hij dat het maandelijks krap is → lees de krapte-zin. Twijfelt hij of het verschil maakt → ga terug en kies eerst het overtuig-verhaal, géén verlaging.",
        "scripts": [
          "“Dat begrijp ik. Mag ik eerst even vragen: is het vooral dat het maandelijks lastig uitkomt? Of zit u er meer mee of uw bijdrage echt verschil maakt?”", "“Als het maandelijks krap is: dan stemmen we het bedrag gewoon af op wat comfortabel voelt — ook een kleiner bedrag helpt iemand een nieuw bestaan opbouwen.”",
          "“Liever een klein bedrag waar u zich prettig bij voelt, dan iets dat te zwaar wordt. En u kunt altijd stoppen of aanpassen.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig warm, leg vast op lager bedrag.",
            "zin": [
              "“Fantastisch, dank u wel. Zo maken we samen echt verschil.”"
            ]
          },
          {
            "als": "Twijfelt nog",
            "doe": "vraag door, bied evt. nog lager aan.",
            "zin": [
              "“Mag ik vragen wat er nog meespeelt? Misschien past een nog kleiner bedrag.”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "zachte landing naar eenmalig.",
            "zin": [
              "“Geen probleem, dank voor uw eerlijkheid. Dan doen we het eenmalig — ook dat helpt enorm.”"
            ]
          }
        ]
      },
      {
        "scenario": "Wil niet vastzitten — controle-angst",
        "herken": "“een abonnement, daar kom ik nooit vanaf”, “ik geef liever los”.",
        "toon": "geruststellend en licht. Haal de controle-angst weg.",
        "scripts": [
          "“Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen met één mailtje. Zie het niet als abonnement, maar als even meelopen.”",
          "“Het mooie: u ziet via de nieuwsbrief wat u mogelijk maakt. Bij één gift mist u dat juist — dan mist u hoe iemand stap voor stap een nieuw leven opbouwt.”"
        ],
        "verts": [
          {
            "als": "Zegt ja",
            "doe": "bevestig, stoppen is makkelijk.",
            "zin": [
              "“Fijn! En onthoud: stoppen kan altijd, in één stap. U houdt de regie.”"
            ]
          },
          {
            "als": "Twijfelt",
            "doe": "laag anker + paar maanden.",
            "zin": [
              "“Zullen we het klein houden — een paar maanden voor een laag bedrag, en daarna bepaalt u zelf?”"
            ]
          },
          {
            "als": "Blijft nee",
            "doe": "eenmalig.",
            "zin": [
              "“Geen probleem, dan doen we het eenmalig. Dank u wel.”"
            ]
          }
        ]
      }
    ],
    "close": [
      "“Kijk het rustig aan. Een paar maanden meelopen, ervaren wat uw steun doet, en dan bepaalt u zelf het vervolg. Geen druk.”"
    ],
    "vangnet": "Lukt maandelijks niet? Bied de jaarlijkse gift aan: “We hebben ook de mogelijkheid om één keer per jaar bij te dragen. Dan blijft u betrokken via updates, zonder maandelijkse verplichting.” Lukt ook dat niet: eenmalig — ook dat helpt echt.",
    "note": ""
  }
};

// Algemene redenen die bij ELKE NGO kunnen spelen (los van de NGO-specifieke data).
// Worden onderaan de redenenlijst toegevoegd.
const SCRIPTS = {
  "alzheimer": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan onderzoek dat dementie steeds beter behandelbaar maakt, en in de nieuwsbrief ziet u dan zelf hoe onderzoekers stap voor stap dichter bij een doorbraak komen.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan onderzoek dat dementie steeds beter behandelbaar maakt, en in de nieuwsbrief ziet u dan hoe onderzoekers stap voor stap dichter bij een doorbraak komen."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe onderzoekers stap voor stap dichter bij een doorbraak komen, en zo voelt u zelf wat u mogelijk maakt aan onderzoek dat dementie steeds beter behandelbaar maakt. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat onderzoek dat dementie steeds beter behandelbaar maakt tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "azg": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan onze artsen die blijven helpen, ook waar niemand anders komt, en in de nieuwsbrief ziet u dan zelf hoe onze artsen ergens ter wereld levens hebben gered.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan onze artsen die blijven helpen, ook waar niemand anders komt, en in de nieuwsbrief ziet u dan hoe onze artsen ergens ter wereld levens hebben gered."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe onze artsen ergens ter wereld levens hebben gered, en zo voelt u zelf wat u mogelijk maakt aan onze artsen die blijven helpen, ook waar niemand anders komt. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat onze artsen die blijven helpen, ook waar niemand anders komt tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "cliniclowns": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan de clowns die zieke kinderen en kwetsbare ouderen weer laten lachen, en in de nieuwsbrief ziet u dan zelf hoe een ziek kind dankzij de clown even alles kon vergeten.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan de clowns die zieke kinderen en kwetsbare ouderen weer laten lachen, en in de nieuwsbrief ziet u dan hoe een ziek kind dankzij de clown even alles kon vergeten."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een ziek kind dankzij de clown even alles kon vergeten, en zo voelt u zelf wat u mogelijk maakt aan de clowns die zieke kinderen en kwetsbare ouderen weer laten lachen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat de clowns die zieke kinderen en kwetsbare ouderen weer laten lachen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "greenpeace": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan campagnes die natuur en klimaat beschermen, en in de nieuwsbrief ziet u dan zelf hoe een stuk natuur dankzij volhouden beschermd is.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan campagnes die natuur en klimaat beschermen, en in de nieuwsbrief ziet u dan hoe een stuk natuur dankzij volhouden beschermd is."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een stuk natuur dankzij volhouden beschermd is, en zo voelt u zelf wat u mogelijk maakt aan campagnes die natuur en klimaat beschermen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat campagnes die natuur en klimaat beschermen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "hersen": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan hersenonderzoek voor mensen met bijvoorbeeld een beroerte of dementie, en in de nieuwsbrief ziet u dan zelf hoe onderzoek een nieuwe behandeling dichterbij brengt.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan hersenonderzoek voor mensen met bijvoorbeeld een beroerte of dementie, en in de nieuwsbrief ziet u dan hoe onderzoek een nieuwe behandeling dichterbij brengt."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe onderzoek een nieuwe behandeling dichterbij brengt, en zo voelt u zelf wat u mogelijk maakt aan hersenonderzoek voor mensen met bijvoorbeeld een beroerte of dementie. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat hersenonderzoek voor mensen met bijvoorbeeld een beroerte of dementie tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "jantjebeton": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan kinderen die weer veilig buiten kunnen spelen, en in de nieuwsbrief ziet u dan zelf hoe een nieuwe speelplek een buurt vol kinderen blij maakt.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan kinderen die weer veilig buiten kunnen spelen, en in de nieuwsbrief ziet u dan hoe een nieuwe speelplek een buurt vol kinderen blij maakt."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een nieuwe speelplek een buurt vol kinderen blij maakt, en zo voelt u zelf wat u mogelijk maakt aan kinderen die weer veilig buiten kunnen spelen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat kinderen die weer veilig buiten kunnen spelen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "kika": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan onderzoek naar kinderkanker, op weg naar betere behandelingen, en in de nieuwsbrief ziet u dan zelf hoe onderzoek de behandeling voor zieke kinderen milder maakt.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan onderzoek naar kinderkanker, op weg naar betere behandelingen, en in de nieuwsbrief ziet u dan hoe onderzoek de behandeling voor zieke kinderen milder maakt."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe onderzoek de behandeling voor zieke kinderen milder maakt, en zo voelt u zelf wat u mogelijk maakt aan onderzoek naar kinderkanker, op weg naar betere behandelingen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat onderzoek naar kinderkanker, op weg naar betere behandelingen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "legerdesheils": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan mensen zonder vangnet die weer op weg geholpen worden, en in de nieuwsbrief ziet u dan zelf hoe iemand van de straat weer een eigen leven opbouwde.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan mensen zonder vangnet die weer op weg geholpen worden, en in de nieuwsbrief ziet u dan hoe iemand van de straat weer een eigen leven opbouwde."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe iemand van de straat weer een eigen leven opbouwde, en zo voelt u zelf wat u mogelijk maakt aan mensen zonder vangnet die weer op weg geholpen worden. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat mensen zonder vangnet die weer op weg geholpen worden tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "rodekruis": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan hulp die al klaarstaat op het moment dat een ramp toeslaat, en in de nieuwsbrief ziet u dan zelf hoe hulpverleners er binnen uren waren toen het ergens misging.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan hulp die al klaarstaat op het moment dat een ramp toeslaat, en in de nieuwsbrief ziet u dan hoe hulpverleners er binnen uren waren toen het ergens misging."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe hulpverleners er binnen uren waren toen het ergens misging, en zo voelt u zelf wat u mogelijk maakt aan hulp die al klaarstaat op het moment dat een ramp toeslaat. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat hulp die al klaarstaat op het moment dat een ramp toeslaat tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "plan": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan meisjes die naar school kunnen en hun eigen toekomst opbouwen, en in de nieuwsbrief ziet u dan zelf hoe een meisje dankzij onderwijs haar eigen weg vond.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan meisjes die naar school kunnen en hun eigen toekomst opbouwen, en in de nieuwsbrief ziet u dan hoe een meisje dankzij onderwijs haar eigen weg vond."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een meisje dankzij onderwijs haar eigen weg vond, en zo voelt u zelf wat u mogelijk maakt aan meisjes die naar school kunnen en hun eigen toekomst opbouwen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat meisjes die naar school kunnen en hun eigen toekomst opbouwen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "savethechildren": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan kinderen in nood die zorg, veiligheid en onderwijs krijgen, en in de nieuwsbrief ziet u dan zelf hoe een kind in een oorlogsgebied weer veilig naar school gaat.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan kinderen in nood die zorg, veiligheid en onderwijs krijgen, en in de nieuwsbrief ziet u dan hoe een kind in een oorlogsgebied weer veilig naar school gaat."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een kind in een oorlogsgebied weer veilig naar school gaat, en zo voelt u zelf wat u mogelijk maakt aan kinderen in nood die zorg, veiligheid en onderwijs krijgen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat kinderen in nood die zorg, veiligheid en onderwijs krijgen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "sos": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan kwetsbare kinderen die een stabiel, liefdevol thuis krijgen, en in de nieuwsbrief ziet u dan zelf hoe een kind dat alleen stond nu een echt thuis heeft.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan kwetsbare kinderen die een stabiel, liefdevol thuis krijgen, en in de nieuwsbrief ziet u dan hoe een kind dat alleen stond nu een echt thuis heeft."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een kind dat alleen stond nu een echt thuis heeft, en zo voelt u zelf wat u mogelijk maakt aan kwetsbare kinderen die een stabiel, liefdevol thuis krijgen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat kwetsbare kinderen die een stabiel, liefdevol thuis krijgen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "uaf": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan gevluchte studenten die toewerken naar een diploma en een toekomst, en in de nieuwsbrief ziet u dan zelf hoe een gevluchte student is afgestudeerd en nu werkt.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan gevluchte studenten die toewerken naar een diploma en een toekomst, en in de nieuwsbrief ziet u dan hoe een gevluchte student is afgestudeerd en nu werkt."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een gevluchte student is afgestudeerd en nu werkt, en zo voelt u zelf wat u mogelijk maakt aan gevluchte studenten die toewerken naar een diploma en een toekomst. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat gevluchte studenten die toewerken naar een diploma en een toekomst tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "unhcr": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan gezinnen op de vlucht die stap voor stap weer een leven opbouwen, en in de nieuwsbrief ziet u dan zelf hoe een gezin dat alles kwijt was weer een veilig bestaan vond.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan gezinnen op de vlucht die stap voor stap weer een leven opbouwen, en in de nieuwsbrief ziet u dan hoe een gezin dat alles kwijt was weer een veilig bestaan vond."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een gezin dat alles kwijt was weer een veilig bestaan vond, en zo voelt u zelf wat u mogelijk maakt aan gezinnen op de vlucht die stap voor stap weer een leven opbouwen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat gezinnen op de vlucht die stap voor stap weer een leven opbouwen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "unicef": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan kinderen wereldwijd die onderwijs, zorg en bescherming krijgen, en in de nieuwsbrief ziet u dan zelf hoe een kind na een ramp weer veilig naar school kon.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan kinderen wereldwijd die onderwijs, zorg en bescherming krijgen, en in de nieuwsbrief ziet u dan hoe een kind na een ramp weer veilig naar school kon."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe een kind na een ramp weer veilig naar school kon, en zo voelt u zelf wat u mogelijk maakt aan kinderen wereldwijd die onderwijs, zorg en bescherming krijgen. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat kinderen wereldwijd die onderwijs, zorg en bescherming krijgen tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  },
  "vwn": {
    "financieel": {
      "emoji": "💶",
      "naam": "Financieel — ‘ik kan dit niet maandelijks missen’",
      "herken": "“ik weet niet of ik het kan blijven betalen”, “het is krap”",
      "hint": "Begripvol. Verlaag niet meteen — vraag eerst of het echt om geld gaat of om twijfel.",
      "zegt": [
        "Dat begrijp ik helemaal, en fijn dat u het eerlijk zegt. Mag ik heel even vragen: zit het ’m vooral in dat het maandelijks lastig uitkomt, of twijfelt u of uw bijdrage echt verschil maakt?"
      ],
      "krapte": "Helemaal goed dat u dat aangeeft — ik heb geen glazen bol, ik kan niet zien hoe het er bij u financieel voorstaat, dus fijn dat u het deelt. We stemmen het bedrag gewoon af op wat prettig voelt. Ook een klein bedrag helpt al echt mee aan mensen die stap voor stap een nieuw bestaan opbouwen in Nederland, en in de nieuwsbrief ziet u dan zelf hoe iemand van de eerste woorden Nederlands naar een eigen baan groeide.",
      "twijfel": null
    },
    "meerdere": {
      "emoji": "🎯",
      "naam": "Meerdere doelen — ‘ik steun er al genoeg’",
      "herken": "“ik geef al aan andere goede doelen”, “ik wil afwisselen”",
      "hint": "Waarderen, niet bevechten. Positioneer ernaast, niet als concurrent.",
      "zegt": [
        "Wat mooi dat u al meerdere goede doelen steunt — daar kunnen wij juist op bouwen. U hoeft echt niet te kiezen tussen ons en de rest. Misschien past een klein bedrag dat prettig naast uw andere giften voelt. Zo helpt u toch mee aan mensen die stap voor stap een nieuw bestaan opbouwen in Nederland, en in de nieuwsbrief ziet u dan hoe iemand van de eerste woorden Nederlands naar een eigen baan groeide."
      ]
    },
    "vastzitten": {
      "emoji": "🔓",
      "naam": "Wil niet vastzitten — ‘ik geef liever los’",
      "herken": "“een abonnement, daar kom ik nooit meer vanaf”, “ik geef liever eenmalig”",
      "hint": "Geruststellend en licht. Haal de controle-angst weg, maak er ‘even meelopen’ van.",
      "zegt": [
        "Dat snap ik goed. Maar u zit nergens aan vast — u kunt elk moment stoppen, met één mailtje. Zie het niet als een abonnement, maar als even meelopen. En juist het mooie van maandelijks: in de nieuwsbrief ziet u hoe iemand van de eerste woorden Nederlands naar een eigen baan groeide, en zo voelt u zelf wat u mogelijk maakt aan mensen die stap voor stap een nieuw bestaan opbouwen in Nederland. Bij één gift mist u dat juist."
      ]
    },
    "eenmalig": {
      "emoji": "🚪",
      "naam": "Dacht / zei eenmalig — werverfout",
      "herken": "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar één keer geven”",
      "hint": "Eerlijk en kalm, niet defensief. Erken de verwarring, achterhaal dan de échte reden.",
      "zegt": [
        "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun, juist omdat mensen die stap voor stap een nieuw bestaan opbouwen in Nederland tijd kost. Maar u bepaalt zelf hoe lang u meedoet. Mag ik kort vragen wat maakt dat u liever één keer geeft? Dan denk ik met u mee."
      ]
    }
  }
};

const ALGEMENE_REDENEN = [
  {
    scenario: "Partner is het er niet mee eens",
    herken: "“mijn man/vrouw vindt het niks”, “we beslissen dit samen”",
    toon: "respectvol, geen druk. Je kunt niet behouden tegen iemand die niet aan de lijn zit \u2014 bied een terugbelmoment aan.",
    scripts: [
      "Dat snap ik helemaal \u2014 zoiets beslist u natuurlijk samen, dat is juist goed. Zal ik u op een ander moment terugbellen, wanneer u er samen rustig naar kunt kijken? Dan voelt niemand zich overvallen, en kunt u er samen op uw gemak naar kijken.",
    ],
    verts: [
      { als: "Stemt in met terugbellen", doe: "Maak een concreet terugbelmoment. Niet nu pushen.",
        zin: ["Top, dan bel ik u op een beter moment terug. Bespreekt u het rustig samen \u2014 geen druk."] },
      { als: "Wil nu al beslissen \u2014 nee", doe: "Geen druk. Eenmalig of nette afhandeling.",
        zin: ["Helemaal goed, dank voor uw eerlijkheid. Dan zet ik het om naar eenmalig, dan klopt het zoals u het wilt."] },
    ],
  },
  {
    scenario: "Werver zei eenmalig / wil per se eenmalig",
    herken: "“dat is niet wat ik aan de deur afsprak”, “ik wilde maar \u00e9\u00e9n keer geven”, en er zit (nog) geen duidelijke reden onder",
    toon: "eerlijk en kalm, niet defensief. Erken de verwarring, en achterhaal dan de \u00e9chte reden \u2014 een kale \u2018eenmalig\u2019 is bijna nooit het hele verhaal.",
    scripts: [
      "Dat snap ik, en vervelend als dat aan de deur niet helemaal duidelijk is geworden. Daar wil ik even eerlijk over zijn: het is inderdaad bedoeld als maandelijkse steun.",
      "Mag ik heel kort vragen \u2014 wat maakt dat u liever \u00e9\u00e9n keer geeft? Dan kan ik met u meedenken.",
    ],
    verts: [
      { als: "Noemt nu alsnog een reden", doe: "Ga naar die reden hierboven (geld, meerdere doelen, vastzitten).",
        zin: ["Dank u, dat helpt. Laten we even kijken wat dan w\u00e9l goed bij u past."] },
      { als: "Voelt zich gehoord, wil het toch proberen", doe: "Bevestig, eventueel een lager bedrag of een paar maanden.",
        zin: ["Fijn dat u het wilt proberen. Begin gewoon een paar maanden, en u bepaalt zelf hoe lang u doorgaat."] },
      { als: "Blijft echt bij eenmalig", doe: "Geen druk. Nette landing naar eenmalig.",
        zin: ["Helemaal goed, en dank voor uw eerlijkheid. Dan zet ik het om naar eenmalig \u2014 ook dat helpt echt."] },
    ],
  },
];

const C = {
  navy: "#1F3A5F", blue: "#2D6CB5", blueSoft: "#EAF1FA", blueLine: "#C5D8F0",
  green: "#357A4B", greenSoft: "#E7F3EB", greenLine: "#BFE0C9",
  amber: "#8A6200", amberSoft: "#FBF2DB", amberLine: "#EAD9A6",
  red: "#A8392F", redSoft: "#F8EAE8", redLine: "#EDC9C3",
  ink: "#1B2430", grey: "#5B6573", faint: "#8A93A0", line: "#E2E6EC",
  paper: "#FFFFFF", bg: "#F4F6F9", regieBg: "#F0F2F5",
};

// HARDOP-kader: het enige dat je voorleest
function Say({ children, nummer }) {
  return (
    <div style={{ background: C.paper, border: "1px solid " + C.blueLine,
      borderLeft: "4px solid " + C.blue, borderRadius: 8, padding: "13px 16px", marginBottom: 11 }}>
      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.06em",
        color: C.blue, marginBottom: 6 }}>🗣️ DIT ZEG JE{nummer ? "  ·  " + nummer : ""}</div>
      <div style={{ fontSize: 16.5, lineHeight: 1.6, color: C.ink }}>{children}</div>
    </div>
  );
}

// Lichte hint-regel: één dunne grijze regel, geen zware balk. Voor regie/toon.
function Hint({ children }) {
  return (
    <div style={{ fontSize: 13, color: C.faint, fontStyle: "italic", lineHeight: 1.5,
      margin: "0 0 12px", paddingLeft: 2 }}>
      {children}
    </div>
  );
}

// REGIE-blok: nooit voorlezen — duidelijk meta (alleen voor uitzonderingen)
function Regie({ label, children }) {
  return (
    <div style={{ background: C.regieBg, borderRadius: 8, padding: "9px 13px", marginBottom: 11,
      display: "flex", gap: 9, alignItems: "flex-start" }}>
      <span style={{ flexShrink: 0, fontSize: 10.5, fontWeight: 700, color: C.faint,
        background: "#E4E7EC", padding: "2px 8px", borderRadius: 5, letterSpacing: "0.03em",
        textTransform: "uppercase" }}>{label}</span>
      <span style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.5, fontStyle: "italic" }}>{children}</span>
    </div>
  );
}

function Choice({ label, sub, tone, onClick }) {
  const p = {
    go:   { bg: C.greenSoft, br: C.greenLine, fg: C.green },
    mid:  { bg: C.blueSoft,  br: C.blueLine,  fg: C.navy },
    warn: { bg: C.amberSoft, br: C.amberLine, fg: C.amber },
    stop: { bg: C.redSoft,   br: C.redLine,   fg: C.red },
  }[tone] || { bg: C.bg, br: C.line, fg: C.ink };
  return (
    <button onClick={onClick} style={{ display: "block", width: "100%", textAlign: "left",
      cursor: "pointer", background: p.bg, border: "1px solid " + p.br, borderRadius: 9,
      padding: "12px 15px", marginBottom: 9 }}
      onMouseDown={e => e.currentTarget.style.transform = "scale(0.99)"}
      onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
      <div style={{ fontSize: 15, fontWeight: 600, color: p.fg }}>{label}</div>
      {sub && <div style={{ fontSize: 13, color: C.grey, marginTop: 3, lineHeight: 1.45 }}>{sub}</div>}
    </button>
  );
}

function StepTitle({ n, t, color, bg }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
      <div style={{ flexShrink: 0, minWidth: 34, height: 34, padding: "0 8px", borderRadius: 8,
        background: bg, color: color, fontWeight: 700, fontSize: 14, display: "flex",
        alignItems: "center", justifyContent: "center" }}>{n}</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: C.ink, lineHeight: 1.25 }}>{t}</div>
    </div>
  );
}

const btnGhost = { background: "transparent", border: "1px solid " + C.line, borderRadius: 8,
  padding: "6px 12px", fontSize: 13, color: C.grey, cursor: "pointer" };

// kies tone van een vertakking op basis van het label
function vertTone(als) {
  if (/ja|akkoord|gehoord|klinkt goed/i.test(als)) return "go";
  if (/nee|wantrouwig|blijft|echt korter|te veel/i.test(als)) return "stop";
  return "warn";
}

function lotVertTone(als) {
  if (/ja|akkoord|top/i.test(als)) return "go";
  if (/korter|nog steeds te veel|lager|niet/i.test(als)) return "stop";
  return "warn";
}

// Map een scenario-naam naar de SCRIPTS-sleutel.
function redenSleutel(scenario) {
  const s = scenario.toLowerCase();
  if (/financ|bedrag|krap|missen/.test(s)) return "financieel";
  if (/meerdere doelen|steun al|genoeg/.test(s)) return "meerdere";
  if (/vastzitten|controle|los/.test(s)) return "vastzitten";
  if (/dacht|werver|eenmalig/.test(s)) return "eenmalig";
  return null; // partner e.d. → fallback op data
}

// Categoriseer een reden: emoji + vaste sorteervolgorde, zodat verwante redenen
// (bv. 'dacht eenmalig' en 'werver eenmalig') altijd bij elkaar staan.
function redenInfo(scenario) {
  const s = scenario.toLowerCase();
  if (/financ|bedrag|krap|missen/.test(s))      return { emoji: "💶", orde: 1 };
  if (/meerdere doelen|steun al|genoeg/.test(s)) return { emoji: "🎯", orde: 2 };
  if (/vastzitten|controle/.test(s))             return { emoji: "🔓", orde: 3 };
  if (/dacht|werver|eenmalig/.test(s))           return { emoji: "🚪", orde: 4 };
  if (/partner/.test(s))                         return { emoji: "👥", orde: 5 };
  return { emoji: "💬", orde: 9 };
}

// NGO-kennis verweven per reden-type: koppelt de NGO-kern aan het juiste argument.
// Geeft één concrete hardop-zin die je inzet binnen de tak.
function ngoKennisZin(scenario, kern) {
  if (!kern) return null;
  const s = scenario.toLowerCase();
  if (/financ|bedrag|krap|missen/.test(s))
    return "En ook een kleiner bedrag helpt al echt mee aan " + kern + ".";
  if (/meerdere doelen|steun al|genoeg/.test(s))
    return "Het mooie is dat u met een klein bedrag naast uw andere giften tóch meehelpt aan " + kern + ".";
  if (/vastzitten|controle/.test(s))
    return "En juist door een paar maanden mee te lopen, ziet u in de nieuwsbrief wat u mogelijk maakt: " + kern + ".";
  if (/dacht|werver|eenmalig/.test(s))
    return "Het mooie van maandelijks is dat u dan echt meebouwt aan " + kern + " — meer dan met één gift.";
  if (/partner/.test(s))
    return "U kunt het samen rustig bekijken — het gaat erom dat u samen meehelpt aan " + kern + ".";
  return "U helpt zo mee aan " + kern + ".";
}

export default function BehoudAssistent() {
  const [ngoId, setNgoId] = useState(null);
  const [node, setNode] = useState({ type: "home" });
  const [trail, setTrail] = useState([]);
  const ngo = ngoId ? NGO_DATA[ngoId] : null;
  const redenen = ngo
    ? [...ngo.redenen, ...ALGEMENE_REDENEN]
        .map((r, idx) => ({ r, idx, orde: redenInfo(r.scenario).orde }))
        .sort((a, b) => a.orde - b.orde || a.idx - b.idx)
        .map(x => x.r)
    : [];

  function go(next) { setTrail(t => [...t, { ngoId, node }]); setNode(next); }
  function back() {
    setTrail(t => {
      if (!t.length) return t;
      const prev = t[t.length - 1];
      setNgoId(prev.ngoId); setNode(prev.node);
      return t.slice(0, -1);
    });
  }
  function reset() { setNgoId(null); setNode({ type: "home" }); setTrail([]); }
  function pickNgo(id) { setTrail(t => [...t, { ngoId, node }]); setNgoId(id); setNode({ type: NGO_DATA[id].loterij ? "lotCijfer" : "cijfer" }); }

  const Header = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      marginBottom: 18, paddingBottom: 14, borderBottom: "1px solid " + C.line }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {ngo && <span style={{ background: C.navy, color: "#fff", fontSize: 12, fontWeight: 600,
          padding: "3px 11px", borderRadius: 6 }}>{ngo.naam}</span>}
        <span style={{ fontSize: 13, color: C.grey }}>{ngo ? ngo.tagline : ""}</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {trail.length > 0 && <button onClick={back} style={btnGhost}>‹ Terug</button>}
        {ngoId && <button onClick={reset} style={btnGhost}>Nieuw gesprek</button>}
      </div>
    </div>
  );

  // ---------- HOME ----------
  function renderHome() {
    return (
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: C.navy, margin: "0 0 6px" }}>Behoud-assistent</h1>
        <p style={{ fontSize: 15, color: C.grey, margin: "0 0 14px", lineHeight: 1.5 }}>
          Kies het goede doel waarvoor je belt. Daarna loop je stap voor stap door het gesprek.
        </p>
        <div style={{ background: C.blueSoft, border: "1px solid " + C.blueLine, borderRadius: 9,
          padding: "11px 14px", marginBottom: 20, fontSize: 13.5, color: C.navy, lineHeight: 1.5 }}>
          <strong>Lees-regel:</strong> het blauwe kader lees je hardop voor. De grijze blokjes zijn
          aanwijzingen voor jou — die zeg je nooit hardop.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 11 }}>
          {Object.keys(NGO_DATA).map(id => (
            <button key={id} onClick={() => pickNgo(id)} style={{ display: "flex", alignItems: "center",
              justifyContent: "space-between", width: "100%", cursor: "pointer", background: C.paper,
              border: "1px solid " + C.line, borderRadius: 11, padding: "16px 18px" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.blue}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.line}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: C.navy }}>{NGO_DATA[id].naam}</div>
                <div style={{ fontSize: 13, color: C.grey, marginTop: 2 }}>{NGO_DATA[id].tagline}</div>
              </div>
              <span style={{ color: C.blue, fontSize: 20 }}>→</span>
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: C.faint, marginTop: 18, lineHeight: 1.5 }}>
          Alle goede doelen volgen dezelfde stappen. Kies het doel waarvoor je nu belt.
        </p>
      </div>
    );
  }

  // ---------- STAP 1: cijfer ----------
  function renderCijfer() {
    return (
      <div>
        <StepTitle n="1" t="Je hoorde een cijfer op de schaalvraag" color={C.amber} bg={C.amberSoft} />
        <Hint>Het cijfer bepaalt je route. Bij twijfel of een bezwaar ga je naar het redenmenu — daar kies je meteen wat de donateur noemt.</Hint>
        <Choice tone="go" label="7 of hoger" sub="Overtuigd. Direct de afspraak vastleggen." onClick={() => go({ type: "close" })} />
        <Choice tone="mid" label="5 of 6 — twijfelaar" sub="Wil eigenlijk wel. Even geruststellen, dan de reden kiezen." onClick={() => go({ type: "vijfzes" })} />
        <Choice tone="warn" label="4 of lager" sub="Concreet bezwaar. Eerst luisteren en samenvatten." onClick={() => go({ type: "vierlager" })} />
        <Choice tone="mid" label="Wil liever eenmalig" sub="Ga naar het redenmenu en kies de eenmalig-tak." onClick={() => go({ type: "redenen" })} />
      </div>
    );
  }

  // ---------- STAP 1: 5 of 6 (korte brug, dan meteen het redenmenu) ----------
  function renderVijfZes() {
    return (
      <div>
        <StepTitle n="1" t="Een 5 of 6 — de twijfelaar" color={C.amber} bg={C.amberSoft} />
        <Hint>Geen tegenstander, maar een twijfelaar. Normaliseer eerst, stel de vraag, wees even stil — kies daarna de reden die je hoort.</Hint>
        <Say>Ik kan me heel goed voorstellen dat u nu nog niet precies weet hoe lang u wilt helpen — sterker nog, de meeste mensen die ik spreek weten dat op dit moment nog niet, dat is heel normaal. Dank u wel dat u zo eerlijk bent. Mag ik u vragen wat er voor u nog twijfel oproept?</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Wat hoor je terug?</p>
        <Choice tone="mid" label="Hij noemt een reden" sub="geld, partner, al zoveel doelen, vastzitten… → kies 'm in het redenmenu" onClick={() => go({ type: "redenen" })} />
        <Choice tone="warn" label="Hij blijft vaag / weet het niet" sub="“gewoon, ik weet niet zo goed”" onClick={() => go({ type: "vaag" })} />
      </div>
    );
  }

  // ---------- vage tak ----------
  function renderVaag() {
    return (
      <div>
        <StepTitle n="1b" t="Blijft vaag — maak het concreet" color={C.amber} bg={C.amberSoft} />
        <Hint>Vaag betekent: nog geen verbinding met het doel. Niet doorvragen — geef één concreet beeld om vast te houden. Mensen geven aan één herkenbaar verhaal.</Hint>
        <Say>Helemaal niet erg, hoor — de meeste mensen weten dit op dit moment nog niet, dat hoeft ook niet. {stripQuotes(ngo.vaag)} Zullen we het zo doen: u loopt gewoon een paar maanden mee en ziet via de nieuwsbrief zelf wat het oplevert. Daarna bepaalt u helemaal zelf.</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>En dan?</p>
        <Choice tone="go" label="Klinkt goed" sub="Naar de afspraak vastleggen." onClick={() => go({ type: "close" })} />
        <Choice tone="warn" label="Aarzelt nog" sub="Dan zit er tóch een reden onder — ga naar het redenmenu." onClick={() => go({ type: "redenen" })} />
      </div>
    );
  }

  // ---------- STAP 1b: 4 of lager ----------
  function renderVierLager() {
    return (
      <div>
        <StepTitle n="1b" t="Een 4 of lager — eerst echt luisteren" color={C.amber} bg={C.amberSoft} />
        <Hint>Hier zit een concreet bezwaar onder. Niet doordrukken — laat eerst merken dat je hem hoort, vat samen, kies dan de reden.</Hint>
        <Say>Mag ik vragen wat de belangrijkste reden is dat u zichzelf een [cijfer] geeft? … Begrijp ik goed dat het vooral [reden] is? Dank u dat u dat zo open deelt — dat helpt mij om met u mee te denken.</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Kies nu de reden:</p>
        <Choice tone="mid" label="Verder naar het redenmenu" onClick={() => go({ type: "redenen" })} />
      </div>
    );
  }

  // ---------- waarde bouwen (bij twijfel of het verschil maakt) ----------
  function renderOvertuig(i) {
    const o = ngo.overtuig;
    return (
      <div>
        <StepTitle n="2" t="Laat voelen wat de steun doet" color={C.green} bg={C.greenSoft} />
        <Hint>De donateur twijfelt of zijn bijdrage iets uitmaakt. Géén verlaging — maak het concreet en menselijk.</Hint>
        <Say>{stripQuotes(o.zinnen[0])} {o.zinnen[1] ? stripQuotes(o.zinnen[1]) : ""} {stripQuotes(o.toekomst)}</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Hoe reageert de donateur?</p>
        <Choice tone="go" label="✅ Komt over de streep → vastleggen" onClick={() => go({ type: "close" })} />
        <Choice tone="warn" label="🤔 Twijfelt nog → kleine drempel" onClick={() => go({ type: "kleineAfspraak", i: i || 0 })} />
        <Choice tone="stop" label="🚫 Blijft nee → vangnet" onClick={() => go({ type: "vangnet" })} />
      </div>
    );
  }

  // ---------- STAP 2: het redenmenu (centraal) ----------
  function renderRedenen() {
    return (
      <div>
        <StepTitle n="2" t="Welke reden zit eronder?" color={C.blue} bg={C.blueSoft} />
        <Hint>Kies wat de donateur noemde. Elke reden geeft je één blok dat je gewoon kunt voorlezen — met dit doel én de nieuwsbrief erin verwerkt.</Hint>
        {ngo.note && <Regie label="Let op">{ngo.note}</Regie>}
        {redenen.map((r, i) => (
          <Choice key={i} tone="mid" label={redenInfo(r.scenario).emoji + "  " + r.scenario}
            sub={r.herken ? "Klinkt als: " + stripQuotes(r.herken) : null}
            onClick={() => go({ type: "tak", i })} />
        ))}
      </div>
    );
  }

  // ---------- STAP 3.x: een reden-tak ----------
  function renderTak(i) {
    const r = redenen[i];
    return (
      <div>
        <StepTitle n={"3." + (i + 1)} t={redenInfo(r.scenario).emoji + "  " + r.scenario} color={C.blue} bg={C.blueSoft} />
        <Hint>{r.toon}</Hint>
        {r.scripts.map((z, j) => <Say key={j}>{stripQuotes(z)}</Say>)}
        {ngo.kern && (() => {
          const kz = ngoKennisZin(r.scenario, ngo.kern);
          return kz ? (
            <div style={{ background: C.greenSoft, border: "1px solid " + C.greenLine,
              borderLeft: "4px solid " + C.green, borderRadius: 8, padding: "11px 15px", marginBottom: 11 }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.05em", color: C.green, marginBottom: 5 }}>
                💚 NGO-KENNIS — verweef dit, hardop
              </div>
              <div style={{ fontSize: 15.5, lineHeight: 1.5, color: C.ink }}>{kz}</div>
            </div>
          ) : null;
        })()}
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Hoe reageert de donateur?</p>
        {/financ|bedrag|krap|missen/i.test(r.scenario) && (
          <button onClick={back} style={{ display: "block", width: "100%", textAlign: "left",
            cursor: "pointer", background: C.blueSoft, border: "1px solid " + C.blueLine,
            borderRadius: 9, padding: "12px 15px", marginBottom: 9 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.blue }}>
              ↩ Twijfelt of het verschil maakt? → terug naar overtuigen
            </div>
            <div style={{ fontSize: 13, color: C.grey, marginTop: 3, lineHeight: 1.45 }}>
              Dan géén verlaging — bouw eerst waarde met het overtuig-verhaal.
            </div>
          </button>
        )}
        {r.verts.map((v, j) => (
          <Choice key={j} tone={vertTone(v.als)} label={v.als}
            onClick={() => go({ type: "vert", i, j })} />
        ))}
      </div>
    );
  }

  // ---------- STAP 2.x: een reden-tak — ÉÉN voorleesblok ----------
  function renderTak(i) {
    const r = redenen[i];
    const sc = SCRIPTS[ngoId] ? SCRIPTS[ngoId][redenSleutel(r.scenario)] : null;
    // Algemene takken (partner) hebben geen SCRIPTS-entry → val terug op data
    if (!sc) return renderTakData(i);
    const isFin = redenSleutel(r.scenario) === "financieel";
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t={sc.emoji + "  " + sc.naam} color={C.blue} bg={C.blueSoft} />
        <Hint>{sc.hint}</Hint>
        {sc.zegt.map((z, k) => <Say key={k}>{z}</Say>)}
        {isFin ? (
          <>
            <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Wat antwoordt de donateur?</p>
            <Choice tone="warn" label="💶 Het komt maandelijks krap uit" sub="Echte krapte → stem het bedrag af." onClick={() => go({ type: "finKrapte", i })} />
            <button onClick={() => go({ type: "overtuig", i })} style={{ display: "block", width: "100%", textAlign: "left",
              cursor: "pointer", background: C.blueSoft, border: "1px solid " + C.blueLine, borderRadius: 9,
              padding: "12px 15px", marginBottom: 9 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.blue }}>🤔 Twijfelt of het verschil maakt → bouw waarde</div>
              <div style={{ fontSize: 13, color: C.grey, marginTop: 3, lineHeight: 1.45 }}>Géén verlaging — laat eerst voelen wat de steun doet.</div>
            </button>
          </>
        ) : (
          <>
            <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Hoe reageert de donateur?</p>
            <Choice tone="go" label="✅ Komt over de streep → vastleggen" onClick={() => go({ type: "close" })} />
            <Choice tone="warn" label="🤔 Twijfelt nog → kleine drempel" onClick={() => go({ type: "kleineAfspraak", i })} />
            <Choice tone="stop" label="🚫 Blijft nee → vangnet" onClick={() => go({ type: "vangnet" })} />
          </>
        )}
      </div>
    );
  }

  // financieel: krapte-route (eigen voorleesblok)
  function renderFinKrapte(i) {
    const sc = SCRIPTS[ngoId].financieel;
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t="💶 Het komt maandelijks krap uit" color={C.blue} bg={C.blueSoft} />
        <Hint>Nu mag het bedrag omlaag. Geen schuldgevoel — een klein bedrag is oprecht genoeg.</Hint>
        <Say>{sc.krapte}</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>En dan?</p>
        <Choice tone="go" label="✅ Akkoord op een lager bedrag → vastleggen" onClick={() => go({ type: "close" })} />
        <Choice tone="stop" label="🚫 Lukt ook dat niet → vangnet" onClick={() => go({ type: "vangnet" })} />
      </div>
    );
  }

  // kleine-drempel afspraak (sociaal contract, één blok)
  function renderKleineAfspraak(i) {
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t="🤔 Twijfelt nog — verlaag de drempel" color={C.blue} bg={C.blueSoft} />
        <Hint>Maak het klein en vrijblijvend. Laat hem het eerst ervaren via de nieuwsbrief.</Hint>
        <Say>Zullen we het zo afspreken: u helpt in elk geval de komende maanden mee. In de nieuwsbrief ziet u dan zelf wat u mogelijk maakt. Bevalt het en kunt u het missen, dan blijft u — en zo niet, dan stopt u gewoon. U zit nergens aan vast. Klinkt dat als een prettige manier om het te doen?</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>En dan?</p>
        <Choice tone="go" label="✅ Ja, zo doen we het → vastleggen" onClick={() => go({ type: "close" })} />
        <Choice tone="stop" label="🚫 Toch liever niet → vangnet" onClick={() => go({ type: "vangnet" })} />
      </div>
    );
  }

  // fallback voor algemene takken (partner) die de oude data-structuur gebruiken
  function renderTakData(i) {
    const r = redenen[i];
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t={redenInfo(r.scenario).emoji + "  " + r.scenario} color={C.blue} bg={C.blueSoft} />
        <Hint>{r.toon}</Hint>
        {r.scripts.map((z, j) => <Say key={j}>{stripQuotes(z)}</Say>)}
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Hoe reageert de donateur?</p>
        {r.verts.map((v, j) => (
          <Choice key={j} tone={vertTone(v.als)} label={v.als} onClick={() => go({ type: "vert", i, j })} />
        ))}
      </div>
    );
  }

  // ---------- vertakking-afhandeling (alleen voor data-takken/partner) ----------
  function renderVert(i, j) {
    const r = redenen[i];
    const v = r.verts[j];
    const tone = vertTone(v.als);
    const isEnd = tone === "go" || tone === "stop";
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t={v.als} color={C.blue} bg={C.blueSoft} />
        <Hint>{v.doe}</Hint>
        {(v.zin && v.zin.length ? v.zin : ["(geen vaste zin — zeg het in je eigen woorden)"]).map((z, k) =>
          z.startsWith("(") ? <Hint key={k}>{z.replace(/^\(|\)$/g, "")}</Hint> : <Say key={k}>{stripQuotes(z)}</Say>
        )}
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>
          {isEnd ? "Sluit nu af:" : "En dan?"}
        </p>
        {tone === "go" && <Choice tone="go" label="✅ Donateur zegt ja → vastleggen" onClick={() => go({ type: "close" })} />}
        {tone === "stop" && <Choice tone="stop" label="🚫 Nette landing → vangnet" onClick={() => go({ type: "vangnet" })} />}
        {tone === "warn" && <>
          <Choice tone="go" label="✅ Komt nu over de streep" onClick={() => go({ type: "close" })} />
          <Choice tone="stop" label="🚫 Blijft nee → vangnet" onClick={() => go({ type: "vangnet" })} />
        </>}
      </div>
    );
  }

  // ---------- afspraak ----------
  function renderClose() {
    return (
      <div>
        <StepTitle n="✓" t="De afspraak vastleggen" color={C.green} bg={C.greenSoft} />
        <Hint>warm en dankbaar. Bevestig, en zeg dat stoppen altijd kan.</Hint>
        {ngo.close.map((z, i) => <Say key={i}>{stripQuotes(z)}</Say>)}
        {ngo.afsluit && <Say>{"Nogmaals oprecht bedankt. Elke maand die u steunt, maakt u weer een verschil — " + ngo.afsluit + ". Ik wens u een hele fijne dag!"}</Say>}
        <div style={{ background: C.greenSoft, border: "1px solid " + C.greenLine, borderRadius: 9,
          padding: "13px 16px", margin: "6px 0 16px", fontSize: 15, color: C.green, fontWeight: 600,
          textAlign: "center" }}>Donateur behouden</div>
        <Choice tone="mid" label="Nieuw gesprek" onClick={reset} />
      </div>
    );
  }

  // ---------- vangnet ----------
  function renderVangnet() {
    return (
      <div>
        <StepTitle n="!" t="Lukt het niet? Vangnet" color={C.red} bg={C.redSoft} />
        <Hint>geen druk, oprecht dankbaar. Ook eenmalig of jaarlijks helpt echt.</Hint>
        <div style={{ background: C.redSoft, border: "1px solid " + C.redLine, borderLeft: "4px solid " + C.red,
          borderRadius: 8, padding: "13px 16px", fontSize: 14.5, lineHeight: 1.55, color: C.ink, marginBottom: 16 }}>
          {ngo.vangnet}
        </div>
        <Choice tone="mid" label="Nieuw gesprek" onClick={reset} />
      </div>
    );
  }

  // ============ EIGEN SPOOR: KIKA LOTERIJ ============
  // De loterij volgt een andere logica: niet 'maandelijks vs eenmalig', maar 'minimaal 3 trekkingen'.

  function renderLotCijfer() {
    return (
      <div>
        <StepTitle n="1" t="Kernvraag — minimaal 3 trekkingen?" color={C.amber} bg={C.amberSoft} />
        <Hint>Bij de loterij draait alles om dit: speelt de donateur minimaal 3 trekkingen mee? Minder kán echt niet — dat is geen onderhandelpunt, zo werkt de loterij.</Hint>
        <Hint>rustig en vriendelijk. Stel de vraag en wees even stil.</Hint>
        <Say>U ontvangt de eerste drie trekkingen een extra gratis lot van ons. Mag ik vragen — op een schaal van 1 tot 10, hoe groot is de kans dat u minimaal drie trekkingen meespeelt?</Say>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Welk cijfer / antwoord geeft de donateur?</p>
        <Choice tone="go" label="Waarschijnlijk wel (3+ trekkingen)" sub="Bevestig warm en sluit af." onClick={() => go({ type: "lotClose" })} />
        <Choice tone="warn" label="Twijfelt of wil korter" sub="Vraag de reden — kies de tak die past." onClick={() => go({ type: "lotTakken" })} />
      </div>
    );
  }

  function renderLotTakken() {
    return (
      <div>
        <StepTitle n="2" t="Waarom twijfelt de donateur?" color={C.blue} bg={C.blueSoft} />
        <Hint>Korter dan 3 trekkingen kan niet. Zoek dus de reden achter de twijfel — vaak is het een misverstand aan de deur, of het bedrag. Pas dán, als het echt niet kan, netjes annuleren.</Hint>
        <div style={{ background: C.greenSoft, border: "1px solid " + C.greenLine, borderRadius: 9,
          padding: "11px 14px", margin: "0 0 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: C.green, marginBottom: 5 }}>
            🎁 TROEF — zet in bij twijfel
          </div>
          <div style={{ fontSize: 14.5, lineHeight: 1.5, color: C.ink }}>
            {stripQuotes(ngo.coolblue)}
          </div>
          <div style={{ fontSize: 12, color: C.grey, marginTop: 6, fontStyle: "italic" }}>
            Dit mocht aan de deur niet genoemd worden — dus voor de donateur is dit nieuw. Een echte verrassing.
          </div>
        </div>
        {ngo.redenen.map((r, i) => (
          <Choice key={i} tone="mid" label={redenInfo(r.scenario).emoji + "  " + r.scenario}
            sub={r.herken ? "Klinkt als: " + stripQuotes(r.herken) : null}
            onClick={() => go({ type: "lotTak", i })} />
        ))}
      </div>
    );
  }

  function renderLotTak(i) {
    const r = ngo.redenen[i];
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t={redenInfo(r.scenario).emoji + "  " + r.scenario} color={C.blue} bg={C.blueSoft} />
        <Hint>{r.toon}</Hint>
        {r.scripts.map((z, j) => <Say key={j}>{stripQuotes(z)}</Say>)}
        <div style={{ background: C.greenSoft, border: "1px solid " + C.greenLine, borderRadius: 8,
          padding: "10px 13px", margin: "2px 0 14px" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>🎁 TROEF: </span>
          <span style={{ fontSize: 14, color: C.ink }}>{stripQuotes(ngo.coolblue)}</span>
        </div>
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>Hoe reageert de donateur?</p>
        {r.verts.map((v, j) => (
          <Choice key={j} tone={lotVertTone(v.als)} label={v.als}
            onClick={() => go({ type: "lotVert", i, j })} />
        ))}
      </div>
    );
  }

  function renderLotVert(i, j) {
    const r = ngo.redenen[i];
    const v = r.verts[j];
    const tone = lotVertTone(v.als);
    const isAnnuleer = /korter|kan niet|nog steeds te veel|lager/i.test(v.als + " " + v.doe);
    const isJa = /ja|akkoord|top/i.test(v.als);
    return (
      <div>
        <StepTitle n={"2." + (i + 1)} t={v.als} color={C.blue} bg={C.blueSoft} />
        <Hint>{v.doe}</Hint>
        {(v.zin || []).map((z, k) => <Say key={k}>{stripQuotes(z)}</Say>)}
        <p style={{ fontSize: 14, color: C.grey, margin: "10px 0 11px", fontWeight: 600 }}>
          {isAnnuleer ? "Lukt het niet? Sluit netjes af:" : "En dan?"}
        </p>
        {isJa && <Choice tone="go" label="Speelt mee → bevestigen" onClick={() => go({ type: "lotClose" })} />}
        {isAnnuleer && <Choice tone="stop" label="Kan echt niet → annuleren + website" onClick={() => go({ type: "lotAnnuleer" })} />}
        {!isJa && !isAnnuleer && <>
          <Choice tone="go" label="Speelt nu mee → bevestigen" onClick={() => go({ type: "lotClose" })} />
          <Choice tone="stop" label="Blijft erbij → annuleren + website" onClick={() => go({ type: "lotAnnuleer" })} />
        </>}
      </div>
    );
  }

  function renderLotClose() {
    return (
      <div>
        <StepTitle n="✓" t="Bevestigen — 3 trekkingen + cadeau" color={C.green} bg={C.greenSoft} />
        <Hint>warm en enthousiast. Bevestig het meespelen en het welkomstcadeau.</Hint>
        {ngo.close.map((z, i) => <Say key={i}>{stripQuotes(z)}</Say>)}
        <Say>{stripQuotes(ngo.coolblue)}</Say>
        <div style={{ background: C.greenSoft, border: "1px solid " + C.greenLine, borderRadius: 9,
          padding: "13px 16px", margin: "6px 0 16px", fontSize: 15, color: C.green, fontWeight: 600,
          textAlign: "center" }}>Deelname behouden</div>
        <Choice tone="mid" label="Nieuw gesprek" onClick={reset} />
      </div>
    );
  }

  function renderLotAnnuleer() {
    return (
      <div>
        <StepTitle n="!" t="Kan niet — netjes annuleren" color={C.red} bg={C.redSoft} />
        <Hint>Minder dan 3 trekkingen kan echt niet. Dit netjes afhandelen is de juiste keuze — geen behoudfout. Haal de donateur uit het systeem en verwijs naar de website.</Hint>
        <Hint>vriendelijk en zonder druk. Laat een goede indruk achter.</Hint>
        <Say>Korter dan drie trekkingen kan helaas echt niet — zo werkt de loterij, juist om het onderzoek te laten doorlopen. Ik haal u netjes uit het systeem, en u kunt altijd via de website meespelen wanneer het u uitkomt. Dank u wel voor uw tijd!</Say>
        <div style={{ background: C.redSoft, border: "1px solid " + C.redLine, borderRadius: 8,
          padding: "10px 13px", margin: "4px 0 16px", fontSize: 13, color: C.red, fontStyle: "italic" }}>
          Dit is correcte afhandeling, geen behoudfout.
        </div>
        <Choice tone="mid" label="Nieuw gesprek" onClick={reset} />
      </div>
    );
  }

  let body;
  if (!ngoId) body = renderHome();
  else if (node.type === "cijfer") body = renderCijfer();
  else if (node.type === "vijfzes") body = renderVijfZes();
  else if (node.type === "vaag") body = renderVaag();
  else if (node.type === "vierlager") body = renderVierLager();
  else if (node.type === "overtuig") body = renderOvertuig(node.i);
  else if (node.type === "redenen") body = renderRedenen();
  else if (node.type === "tak") body = renderTak(node.i);
  else if (node.type === "finKrapte") body = renderFinKrapte(node.i);
  else if (node.type === "kleineAfspraak") body = renderKleineAfspraak(node.i);
  else if (node.type === "vert") body = renderVert(node.i, node.j);
  else if (node.type === "close") body = renderClose();
  else if (node.type === "vangnet") body = renderVangnet();
  else if (node.type === "lotCijfer") body = renderLotCijfer();
  else if (node.type === "lotTakken") body = renderLotTakken();
  else if (node.type === "lotTak") body = renderLotTak(node.i);
  else if (node.type === "lotVert") body = renderLotVert(node.i, node.j);
  else if (node.type === "lotClose") body = renderLotClose();
  else if (node.type === "lotAnnuleer") body = renderLotAnnuleer();
  else body = renderHome();

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: C.bg,
      minHeight: "100vh", padding: "24px 16px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", background: C.paper, border: "1px solid " + C.line,
        borderRadius: 16, padding: "22px 24px", boxShadow: "0 1px 3px rgba(20,30,50,0.04)" }}>
        {ngoId && <Header />}
        {body}
      </div>
    </div>
  );
}

function stripQuotes(s) {
  if (!s) return s;
  return s.replace(/^[“"]/, "").replace(/[”"]$/, "");
}
