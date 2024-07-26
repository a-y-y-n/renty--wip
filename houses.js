const houses = [
  {
    "name": "Затишна студія на Подолі",
    "image": "pic/Затишна студія на Подолі.png",
    "price": 10000,
    "id": 1,
    "desc": "Комфортна студія з сучасним ремонтом, розташована у історичному районі Поділ. Ідеально підходить для одного-двох осіб.",
    "tags": ["студія", "затишок", "сучасний ремонт", "історичний район", "Поділ", "комфорт", "для одного", "для пари", "зручність", "доступність"]
  },
  {
    "name": "Елітний пентхаус у центрі",
    "image": "pic/Елітний пентхаус у центрі.png",
    "price": 60000,
    "id": 2,
    "desc": "Розкішний пентхаус з панорамними вікнами і терасою. Неперевершений вид на місто та всі зручності в кроковій доступності.",
    "tags": ["пентхаус", "центр", "елітний", "панорамні вікна", "тераса", "розкіш", "вид на місто", "зручності", "комфорт", "високий рівень"]
  },
  {
    "name": "Квартира з видом на парк",
    "image": "pic/Квартира з видом на парк.png",
    "price": 15000,
    "id": 3,
    "desc": "Світла і простора квартира, з вікон якої відкривається мальовничий вид на парк. Тихий та зелений район.",
    "tags": ["квартира", "вид на парк", "світла", "простора", "мальовничий вид", "тихий район", "зелений район", "комфорт", "для сім'ї", "затишок"]
  },
  {
    "name": "Сучасна однокімнатна квартира",
    "image": "pic/Сучасна однокімнатна квартира.png",
    "price": 12000,
    "id": 4,
    "desc": "Затишна однокімнатна квартира з новими меблями та технікою. Ідеальна для молодої пари чи студента.",
    "tags": ["однокімнатна", "сучасна", "нові меблі", "техніка", "затишок", "молода пара", "студент", "комфорт", "зручності", "доступність"]
  },
  {
    "name": "Двокімнатна квартира біля метро",
    "image": "pic/Двокімнатна квартира біля метро.png",
    "price": 14000,
    "id": 5,
    "desc": "Простора квартира з двома кімнатами, розташована в безпосередній близькості до станції метро. Зручне транспортне сполучення.",
    "tags": ["двокімнатна", "біля метро", "простора", "транспортне сполучення", "зручності", "для сім'ї", "комфорт", "доступність", "розташування", "затишок"]
  },
  {
    "name": "Романтичний будиночок біля озера",
    "image": "pic/Романтичний будиночок біля озера.png",
    "price": 20000,
    "id": 6,
    "desc": "Затишний будинок з романтичним інтер'єром, розташований біля озера. Ідеальне місце для відпочинку на природі.",
    "tags": ["будиночок", "біля озера", "романтичний інтер'єр", "затишок", "природа", "відпочинок", "комфорт", "для пари", "релакс", "тихий район"]
  },
  {
    "name": "Простора трикімнатна квартира",
    "image": "pic/Простора трикімнатна квартира.png",
    "price": 18000,
    "id": 7,
    "desc": "Велика квартира з трьома кімнатами, підходить для сім'ї з дітьми. Розташована у спокійному районі.",
    "tags": ["трикімнатна", "простора", "велика", "для сім'ї", "діти", "спокійний район", "затишок", "комфорт", "зручності", "розташування"]
  },
  {
    "name": "Будинок з власним садом",
    "image": "pic/Будинок з власним садом.png",
    "price": 25000,
    "id": 8,
    "desc": "Комфортний будинок з власним садом, де можна насолоджуватися природою та проводити час на свіжому повітрі.",
    "tags": ["будинок", "власний сад", "природа", "свіже повітря", "затишок", "комфорт", "для сім'ї", "відпочинок", "релакс", "тихий район"]
  },
  {
    "name": "Комфортна квартира на Оболоні",
    "image": "pic/Комфортна квартира на Оболоні.png",
    "price": 13000,
    "id": 9,
    "desc": "Сучасна квартира з усіма зручностями, розташована в престижному районі Оболонь. Розвинена інфраструктура.",
    "tags": ["квартира", "Оболонь", "сучасна", "зручності", "престижний район", "інфраструктура", "комфорт", "для сім'ї", "затишок", "доступність"]
  },
  {
    "name": "Сімейний будинок у передмісті",
    "image": "pic/Сімейний будинок у передмісті.png",
    "price": 22000,
    "id": 10,
    "desc": "Просторий будинок для великої родини, розташований у передмісті. Тихий район і велике подвір'я.",
    "tags": ["будинок", "передмістя", "велика родина", "просторий", "тихий район", "велике подвір'я", "затишок", "комфорт", "для сім'ї", "релакс"]
  },
  {
    "name": "Лофт у стилі індустріал",
    "image": "pic/Лофт у стилі індустріал.png",
    "price": 16000,
    "id": 11,
    "desc": "Стильний лофт з відкритим плануванням та індустріальним дизайном. Ідеальний для творчих особистостей.",
    "tags": ["лофт", "індустріал", "стильний", "відкрите планування", "творчість", "дизайн", "комфорт", "затишок", "сучасність", "унікальність"]
  },
  {
    "name": "Квартира з панорамним видом",
    "image": "pic/Квартира з панорамним видом.png",
    "price": 18000,
    "id": 12,
    "desc": "Простора квартира з великими вікнами та захоплюючим панорамним видом на місто.",
    "tags": ["квартира", "панорамний вид", "простора", "великі вікна", "місто", "комфорт", "затишок", "сучасність", "для сім'ї", "унікальність"]
  },
  {
    "name": "Еко-будинок біля лісу",
    "image": "pic/Еко-будинок біля лісу.png",
    "price": 30000,
    "id": 13,
    "desc": "Затишний будинок з екологічних матеріалів, розташований біля лісу. Ідеальний для шанувальників природи.",
    "tags": ["еко-будинок", "біля лісу", "екологічні матеріали", "затишок", "природа", "комфорт", "для сім'ї", "релакс", "унікальність", "тихий район"]
  },
  {
    "name": "Вілла з басейном",
    "image": "pic/Вілла з басейном.png",
    "price": 70000,
    "id": 14,
    "desc": "Розкішна вілла з великим басейном та приватним садом. Високий рівень комфорту та приватності.",
    "tags": ["вілла", "басейн", "розкіш", "приватний сад", "комфорт", "приватність", "для сім'ї", "релакс", "унікальність", "високий рівень"]
  },
  {
    "name": "Затишний котедж на околиці міста",
    "image": "pic/Затишний котедж на околиці міста.png",
    "price": 23000,
    "id": 15,
    "desc": "Комфортний котедж з затишним інтер'єром, розташований на околиці міста. Тихий та зелений район.",
    "tags": ["котедж", "околиці міста", "затишок", "інтер'єр", "комфорт", "зелений район", "тихий район", "для сім'ї", "релакс", "природа"]
  },
  {
    "name": "Квартира біля університету",
    "image": "pic/Квартира біля університету.png",
    "price": 11000,
    "id": 16,
    "desc": "Зручна квартира для студентів, розташована неподалік університету. Усі необхідні зручності поруч.",
    "tags": ["квартира", "університет", "для студентів", "зручності", "комфорт", "затишок", "доступність", "розташування", "молода пара", "компактність"]
  },
  {
    "name": "Апартаменти на березі моря",
    "image": "pic/Апартаменти на березі моря.png",
    "price": 35000,
    "id": 17,
    "desc": "Комфортабельні апартаменти з видом на море. Ідеальне місце для літнього відпочинку.",
    "tags": ["апартаменти", "берег моря", "вид на море", "комфорт", "відпочинок", "літній відпочинок", "релакс", "затишок", "для сім'ї", "унікальність"]
  },
  {
    "name": "Квартира з великим балконом",
    "image": "pic/Квартира з великим балконом.png",
    "price": 16000,
    "id": 18,
    "desc": "Світла квартира з великим балконом, де можна насолоджуватися свіжим повітрям та красивими видами.",
    "tags": ["квартира", "великий балкон", "світла", "свіже повітря", "красиві види", "комфорт", "затишок", "для сім'ї", "релакс", "унікальність"]
  },
  {
    "name": "Будинок зі старовинним шармом",
    "image": "pic/Будинок зі старовинним шармом.png",
    "price": 40000,
    "id": 19,
    "desc": "Просторий будинок з елементами старовинного декору. Ідеальний для поціновувачів антикваріату.",
    "tags": ["будинок", "старовинний шарм", "просторий", "антикваріат", "декор", "комфорт", "унікальність", "затишок", "для сім'ї", "тихий район"]
  },
  {
    "name": "Мінімалістична квартира у новобудові",
    "image": "pic/Мінімалістична квартира у новобудові.png",
    "price": 15000,
    "id": 20,
    "desc": "Сучасна квартира в стилі мінімалізм, розташована у новому житловому комплексі. Затишок і комфорт.",
    "tags": ["квартира", "мінімалізм", "новобудова", "сучасна", "затишок", "комфорт", "для сім'ї", "зручності", "доступність", "унікальність"]
  },
  {
    "name": "Сонячна квартира з терасою",
    "image": "pic/Сонячна квартира з терасою.png",
    "price": 17000,
    "id": 21,
    "desc": "Світла квартира з великою терасою, де можна насолоджуватися сонячними днями та вечорами.",
    "tags": ["квартира", "велика тераса", "сонячна", "світла", "затишок", "комфорт", "релакс", "для сім'ї", "свіже повітря", "унікальність"]
  },
  {
    "name": "Затишний будиночок у горах",
    "image": "pic/Затишний будиночок у горах.png",
    "price": 27000,
    "id": 22,
    "desc": "Невеликий будинок у горах з чудовим видом на околиці. Ідеальне місце для відпочинку від міської метушні.",
    "tags": ["будиночок", "гори", "чудовий вид", "околиці", "затишок", "комфорт", "відпочинок", "релакс", "унікальність", "тихий район"]
  },
  {
    "name": "Квартира біля дитячого садка",
    "image": "pic/Квартира біля дитячого садка.png",
    "price": 13000,
    "id": 23,
    "desc": "Зручна квартира для сімей з дітьми, розташована неподалік дитячого садка. Спокійний район.",
    "tags": ["квартира", "біля дитячого садка", "для сімей з дітьми", "зручності", "комфорт", "спокійний район", "затишок", "доступність", "розташування", "для дітей"]
  },
  {
    "name": "Люксова квартира з каміном",
    "image": "pic/Люксова квартира з каміном.png",
    "price": 24000,
    "id": 24,
    "desc": "Простора квартира з каміном, що створює особливу атмосферу затишку і тепла.",
    "tags": ["люксова", "квартира", "камін", "простора", "затишок", "атмосфера", "тепло", "комфорт", "для сім'ї", "унікальність"]
  },
  {
    "name": "Тихий будинок у приватному секторі",
    "image": "pic/Тихий будинок у приватному секторі.png",
    "price": 21000,
    "id": 25,
    "desc": "Комфортний будинок, розташований у приватному секторі. Тиша і спокій гарантовані.",
    "tags": ["будинок", "приватний сектор", "тиша", "спокій", "комфорт", "затишок", "для сім'ї", "розташування", "релакс", "унікальність"]
  },
  {
    "name": "Сучасні апартаменти в центрі",
    "image": "pic/Сучасні апартаменти в центрі.png",
    "price": 22000,
    "id": 26,
    "desc": "Стильні апартаменти з сучасним дизайном, розташовані в самому центрі міста. Всі зручності поруч.",
    "tags": ["апартаменти", "центр міста", "сучасний дизайн", "стильні", "комфорт", "затишок", "зручності", "розташування", "для сім'ї", "унікальність"]
  },
  {
    "name": "Квартира з великими вікнами",
    "image": "pic/Квартира з великими вікнами.png",
    "price": 14000,
    "id": 27,
    "desc": "Простора квартира з великими вікнами, що забезпечують багато природного світла.",
    "tags": ["квартира", "великі вікна", "простора", "природне світло", "затишок", "комфорт", "для сім'ї", "унікальність", "доступність", "свіже повітря"]
  },
  {
    "name": "Будинок біля річки",
    "image": "pic/Будинок біля річки.png",
    "price": 26000,
    "id": 28,
    "desc": "Затишний будинок, розташований біля річки. Ідеальне місце для риболовлі та відпочинку на природі.",
    "tags": ["будинок", "біля річки", "затишок", "комфорт", "риболовля", "відпочинок на природі", "релакс", "для сім'ї", "унікальність", "тихий район"]
  },
  {
    "name": "Комфортний котедж в тихому районі",
    "image": "pic/Комфортний котедж в тихому районі.png",
    "price": 19000,
    "id": 29,
    "desc": "Комфортний дуплекс з затишним інтер'єром, розташований на околиці міста. Тихий район.",
    "tags": ["комфорт", "котедж", "тихий район", "затишок", "приватність", "сімейний відпочинок", "природа", "релакс", "зелений район", "простір"]
  },
  {
    "name": "Квартира в історичній будівлі",
    "image": "pic/Квартира в історичній будівлі.png",
    "price": 25000,
    "id": 30,
    "desc": "Простора квартира в будівлі з історією. Унікальний інтер'єр та атмосфера старовини.",
    "tags": ["квартира", "історична будівля", "простора", "унікальний інтер'єр", "атмосфера старовини", "затишок", "комфорт", "для сім'ї", "унікальність", "тихий район"]
  },
  {
    "name": "Розкішний маєток з парком",
    "image": "pic/Розкішний маєток з парком.png",
    "price": 80000,
    "id": 31,
    "desc": "Величезний маєток з власним парком та великим будинком. Високий рівень комфорту і приватності.",
    "tags": ["маєток", "парк", "великий будинок", "високий рівень комфорту", "приватність", "затишок", "для сім'ї", "унікальність", "релакс", "природа"]
  },
  {
    "name": "Маленька квартира для студента",
    "image": "pic/Маленька квартира для студента.png",
    "price": 9000,
    "id": 32,
    "desc": "Компактна квартира з усіма необхідними зручностями для комфортного життя студента.",
    "tags": ["квартира", "компактна", "для студента", "зручності", "комфорт", "затишок", "доступність", "розташування", "для молодої пари", "економний варіант"]
  },
  {
    "name": "Котедж з барбекю-зоною",
    "image": "pic/Котедж з барбекю-зоною.png",
    "price": 22000,
    "id": 33,
    "desc": "Комфортний котедж з окремою зоною для барбекю. Ідеальне місце для зустрічей з друзями та родиною.",
    "tags": ["котедж", "барбекю-зона", "комфорт", "затишок", "для друзів", "для родини", "релакс", "унікальність", "природа", "зона відпочинку"]
  },
  {
    "name": "Пентхаус з терасою",
    "image": "pic/Пентхаус з терасою.png",
    "price": 65000,
    "id": 34,
    "desc": "Розкішний пентхаус з великою терасою і панорамним видом на місто. Високий рівень комфорту.",
    "tags": ["пентхаус", "тераса", "панорамний вид", "розкішний", "високий рівень комфорту", "затишок", "унікальність", "релакс", "для сім'ї", "інтер'єр"]
  },
  {
    "name": "Квартира біля торгового центру",
    "image": "pic/Квартира біля торгового центру.png",
    "price": 14000,
    "id": 35,
    "desc": "Зручна квартира, розташована неподалік великого торгового центру. Розвинена інфраструктура.",
    "tags": ["квартира", "біля торгового центру", "зручності", "розвинена інфраструктура", "комфорт", "доступність", "для сім'ї", "затишок", "унікальність", "розташування"]
  },
  {
    "name": "Будинок з власним гаражем",
    "image": "pic/Будинок з власним гаражем.png",
    "price": 24000,
    "id": 36,
    "desc": "Просторий будинок з власним гаражем. Зручний для власників автомобілів.",
    "tags": ["будинок", "власний гараж", "просторий", "зручність", "комфорт", "для сім'ї", "затишок", "унікальність", "розташування", "тихий район"]
  },
  {
    "name": "Апартаменти з джакузі",
    "image": "pic/Апартаменти з джакузі.png",
    "price": 27000,
    "id": 37,
    "desc": "Розкішні апартаменти з джакузі, що забезпечують високий рівень комфорту та релаксу.",
    "tags": ["апартаменти", "джакузі", "розкішні", "високий рівень комфорту", "релакс", "затишок", "унікальність", "для сім'ї", "інтер'єр", "відпочинок"]
  },
  {
    "name": "Квартира в елітному районі",
    "image": "pic/Квартира в елітному районі.png",
    "price": 21000,
    "id": 38,
    "desc": "Стильна квартира в престижному районі міста. Високий рівень безпеки і комфорту.",
    "tags": ["квартира", "елітний район", "стильна", "престижний район", "високий рівень безпеки", "комфорт", "затишок", "унікальність", "для сім'ї", "розташування"]
  },
  {
    "name": "Модний лофт у хмарочосі",
    "image": "pic/Модний лофт у хмарочосі.png",
    "price": 28000,
    "id": 39,
    "desc": "Стильний лофт з відкритим плануванням, розташований у сучасному хмарочосі. Прекрасний вид на місто.",
    "tags": ["лофт", "хмарочос", "стильний", "відкрите планування", "сучасний", "прекрасний вид", "на місто", "комфорт", "унікальність", "для сім'ї"]
  },
  {
    "name": "Будинок з винним погребом",
    "image": "pic/Будинок з винним погребом.png",
    "price": 32000,
    "id": 40,
    "desc": "Просторий будинок з власним винним погребом. Ідеальний для поціновувачів вина.",
    "tags": ["будинок", "винний погреб", "просторий", "затишок", "комфорт", "унікальність", "для сім'ї", "для поціновувачів вина", "тихий район", "релакс"]
  }
]
export default houses
