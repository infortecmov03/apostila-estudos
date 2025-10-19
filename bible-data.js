// Dados dos versículos bíblicos - Almeida Corrigida Fiel (ACF)
const bibleVerses = {
    // Gênesis
    "Gn. 1:1": "No princípio, criou Deus os céus e a terra.",
    
    // Salmos
    "Sl. 1:2": "Antes, tem o seu prazer na lei do SENHOR, e na sua lei medita de dia e de noite.",
    "Sl. 34:4": "Busquei ao SENHOR, e ele me respondeu; livrou-me de todos os meus temores.",
    "Sl. 37:7": "Descansa no SENHOR, e espera nele; não te indignes por causa daquele que prospera em seu caminho, por causa do homem que executa astutos intentos.",
    "Sl. 40:1": "Esperei com paciência no SENHOR, e ele se inclinou para mim, e ouviu o meu clamor.",
    "Sl. 65:12": "Os prados do deserto estão reverdecendo, e os outeiros vestem-se de alegria.",
    "Sl. 69:10": "Chorei e mortifiquei a minha alma com jejum; e isto me foi por opróbrio.",
    "Sl. 86:5": "Pois tu, Senhor, és bom, e pronto a perdoar, e abundante em benignidade para com todos os que te invocam.",
    "Sl. 90:2": "Antes que os montes nascessem, ou que tu formasses a terra e o mundo, mesmo de eternidade a eternidade, tu és Deus.",
    "Sl. 119:9": "Como purificará o jovem o seu caminho? Observando-o conforme a tua palavra.",
    "Sl. 119:11": "Escondi a tua palavra no meu coração, para eu não pecar contra ti.",
    "Sl. 119:105": "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
    "Sl. 133:1": "Oh! quão bom e quão suave é que os irmãos vivam em união.",
    "Sl. 141:2": "Suba a minha oração perante a tua face como incenso, e as minhas mãos levantadas sejam como o sacrifício da tarde.",
    "Sl. 143:10": "Ensina-me a fazer a tua vontade, pois és o meu Deus; o teu Espírito é bom; guie-me por terra plana.",

    // Isaías
    "Is. 1:18": "Vinde então, e argüi-me, diz o SENHOR: ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve; ainda que sejam vermelhos como o carmesim, se tornarão como a branca lã.",
    "Is. 5:2": "Cercou-a, e a limpou das pedras, e plantou-a de excelentes vides; e edificou uma torre no meio dela, e também construiu nela um lagar; e esperava que desse uvas boas, mas deu uvas bravas.",
    "Is. 9:6": "Porque um menino nos nasceu, um filho se nos deu, e o principado está sobre os seus ombros, e se chamará o seu nome: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz.",
    "Is. 11:6-9": "O lobo habitará com o cordeiro, e o leopardo se deitará junto ao cabrito; o bezerro, o leão novo e o animal cevado andarão juntos, e um menino pequeno os guiará.",
    "Is. 28:16": "Portanto, assim diz o Senhor DEUS: Eis que eu assentei em Sião uma pedra, uma pedra já provada, pedra preciosa de esquina, que está bem firme e fundada; aquele que crer não se apressará.",
    "Is. 43:25": "Eu, eu mesmo, sou o que apago as tuas transgressões por amor de mim, e dos teus pecados não me lembro.",
    "Is. 53:4-5": "Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",
    "Is. 55:6": "Buscai ao SENHOR enquanto se pode achar, invocai-o enquanto está perto.",
    "Is. 55:8": "Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos os meus caminhos, diz o SENHOR.",
    "Is. 56:7": "Também os levarei ao meu santo monte, e os alegrarei na minha casa de oração; os seus holocaustos e os seus sacrifícios serão aceitos no meu altar; porque a minha casa será chamada casa de oração para todos os povos.",
    "Is. 58:3": "Por que jejuamos nós, e tu não atentas para isso? Por que afligimos as nossas almas, e tu não o sabes? Eis que no dia em que jejuais achais o vosso próprio contentamento, e requereis todo o vosso trabalho.",
    "Is. 58:6-7": "Porventura não é este o jejum que escolhi, que soltes as ligaduras da impiedade, que desfaças as ataduras do jugo? e que deixes ir livres os oprimidos, e despedaces todo o jugo? Porventura não é também que repartas o teu pão com o faminto, e recolhas em casa os pobres abandonados? e, vendo o nu, o cubras, e não te escondas da tua carne?",
    "Is. 59:2": "Mas as vossas iniqüidades fazem separação entre vós e o vosso Deus; e os vossos pecados encobrem o seu rosto de vós, para que não vos ouça.",

    // Jeremias
    "Jr. 14:10": "Assim diz o SENHOR acerca deste povo: Pois que tanto gostaram de andar errantes, e não retiveram os seus pés, por isso o SENHOR não se agrada deles; mas agora se lembrará da iniqüidade deles, e visitará os seus pecados.",
    "Jr. 14:12": "Quando jejuarem, não ouvirei o seu clamor, e quando oferecerem holocausto e oferta de alimentos, não me agradarei deles; antes eu os consumirei pela espada, e pela fome, e pela peste.",
    "Jr. 15:18": "Por que é incurável a minha ferida? E a minha chaga não tem cura? Na verdade, fizeste para comigo como mentiroso, e como águas que não são firmes.",
    "Jr. 17:9": "Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?",
    "Jr. 17:12": "Um trono de glória, lugar alto desde o princípio, é o lugar do nosso santuário.",

    // Ezequiel
    "Ez. 37:28": "E saberão as nações que eu sou o SENHOR que santifico a Israel, estando o meu santuário no meio deles para sempre.",

    // Daniel
    "Dn. 6:18": "Então o rei foi para o seu palácio, e passou a noite em jejum, e não deixou trazer à sua presença instrumentos de música; e fugiu dele o sono.",
    "Dn. 9:3": "E eu dirigi o meu rosto ao Senhor Deus, para o buscar com oração e súplicas, com jejum, e saco e cinza.",

    // Joel
    "Jl. 1:14": "Santificai um jejum, convocai uma assembléia solene, congregai os anciãos, e todos os moradores da terra, na casa do SENHOR vosso Deus, e clamai ao SENHOR.",
    "Jl. 2:12": "Ainda mesmo agora, diz o SENHOR, convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto.",

    // Miqueias
    "Mq. 7:18": "Quem é Deus semelhante a ti, que perdoa a iniqüidade, e que passa por cima da rebelião do restante da sua herança? Ele não retém a sua ira para sempre, porque tem prazer na sua benignidade.",
    "Mq. 7:19": "Tornará a apiedar-se de nós; sujeitará as nossas iniqüidades, e tu lançarás todos os seus pecados nas profundezas do mar.",

    // Ageu
    "Ag. 1:14": "E o SENHOR excitou o espíulo de Zorobabel, filho de Sealtiel, governador de Judá, e o espírito de Josué, filho de Jozadaque, sumo sacerdote, e o espírito de todo o restante do povo; e vieram, e fizeram obra na casa do SENHOR dos Exércitos, seu Deus.",

    // Zacarias
    "Zc. 7:5": "Fala a todo o povo desta terra, e aos sacerdotes, dizendo: Quando jejuastes, e pranteastes, no quinto e no sétimo mês, durante estes setenta anos, porventura jejuastes para mim, mesmo para mim?",
    "Zc. 7:8-10": "E a palavra do SENHOR veio a Zacarias, dizendo: Assim falou o SENHOR dos Exércitos, dizendo: Executai juízo verdadeiro, mostrai piedade e misericórdia cada um para com seu irmão. E não oprimais a viúva, nem o órfão, nem o estrangeiro, nem o pobre, nem intente cada um em seu coração o mal contra o seu irmão.",

    // Malaquias
    "Ml. 3:10": "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o SENHOR dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes.",

    // Mateus
    "Mt. 3:8": "Produzi, pois, frutos dignos de arrependimento;",
    "Mt. 4:10": "Então disse-lhe Jesus: Vai-te, Satanás, porque está escrito: Ao Senhor teu Deus adorarás, e só a ele servirás.",
    "Mt. 5:23-24": "Se, pois, ao trazeres ao altar a tua oferta, ali te lembrares de que teu irmão tem alguma coisa contra ti, Deixa ali diante do altar a tua oferta, vai reconciliar-te primeiro com teu irmão e, depois, vem apresentar a tua oferta.",
    "Mt. 6:15": "Mas, se não perdoardes aos homens as suas ofensas, também vosso Pai vos não perdoará as vossas ofensas.",
    "Mt. 6:16-18": "E, quando jejuardes, não vos mostreis contristados como os hipócritas; porque eles desfiguram os seus rostos, para que aos homens pareça que jejuam. Em verdade vos digo que já receberam o seu galardão. Porém tu, quando jejuares, unge a tua cabeça, e lava o teu rosto, Para não pareceres aos homens que jejuas, mas a teu Pai, que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente.",
    "Mt. 6:33": "Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
    "Mt. 7:7": "Pedí, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.",
    "Mt. 9:31": "Ele, porém, saindo, começou a anunciar e a divulgar muito aquele feito, de tal maneira que Jesus já não podia entrar publicamente na cidade, mas conservava-se fora em lugares desertos; e de todas as partes iam ter com ele.",
    "Mt. 10:6-11": "Mas ide antes às ovelhas perdidas da casa de Israel; E, indo, pregai, dizendo: É chegado o reino dos céus. Curai os enfermos, limpai os leprosos, ressuscitai os mortos, expulsai os demônios; de graça recebestes, de graça dai.",
    "Mt. 12:50": "Porque, qualquer que fizer a vontade de meu Pai que está nos céus, este é meu irmão, e irmã e mãe.",
    "Mt. 15:31": "De tal sorte que a multidão se maravilhou vendo os mudos a falar, os aleijados sãos, os coxos a andar, e os cegos a ver; e glorificavam o Deus de Israel.",
    "Mt. 16:16": "E Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo.",
    "Mt. 16:24": "Então disse Jesus aos seus discípulos: Se alguém quiser vir após mim, renuncie-se a si mesmo, tome sobre si a sua cruz, e siga-me;",
    "Mt. 17:21": "Mas esta casta de demônios não se expulsa senão pela oração e pelo jejum.",
    "Mt. 18:15": "Ora, se teu irmão pecar contra ti, vai, e repreende-o entre ti e ele só; se te ouvir, ganhaste a teu irmão;",
    "Mt. 18:16": "Mas, se não te ouvir, leva ainda contigo um ou dois, para que pela boca de duas ou três testemunhas toda a palavra seja confirmada.",
    "Mt. 18:17": "E, se não as escutar, dize-o à igreja; e, se também não escutar a igreja, considera-o como um gentio e publicano.",
    "Mt. 18:33-35": "Não devias tu, igualmente, ter compaixão do teu companheiro, como eu também tive misericórdia de ti? E, indignado, o seu senhor o entregou aos atormentadores, até que pagasse tudo o que devia. Assim vos fará, também, meu Pai celestial, se do coração não perdoardes, cada um a seu irmão, as suas ofensas.",
    "Mt. 21:22": "E, tudo o que pedirdes na oração, crendo, o recebereis.",
    "Mt. 22:29": "Jesus, porém, respondendo, disse-lhes: Errais, não conhecendo as Escrituras, nem o poder de Deus.",
    "Mt. 24:9-14": "Então vos hão de entregar para serdes atormentados, e matar-vos-ão; e sereis odiados de todas as nações por causa do meu nome.",
    "Mt. 24:30": "Então aparecerá no céu o sinal do Filho do homem; e todas as tribos da terra se lamentarão, e verão o Filho do homem, vindo sobre as nuvens do céu, com poder e grande glória.",
    "Mt. 24:44": "Por isso, estai vós também apercebidos; porque virá o Filho do homem à hora que não imaginais.",
    "Mt. 25:31": "E quando o Filho do homem vier em sua glória, e todos os santos anjos com ele, então se assentará no trono da sua glória;",
    "Mt. 25:46": "E irão estes para o tormento eterno, mas os justos para a vida eterna.",
    "Mt. 26:64": "Disse-lhe Jesus: Tu o disseste; digo-vos, porém, que vereis em breve o Filho do homem assentado à direita do poder, e vindo sobre as nuvens do céu.",
    "Mt. 28:19": "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo;",
    "Mt. 28:20": "Ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém.",

    // Marcos
    "Mc. 2:5": "E Jesus, vendo a fé deles, disse ao paralítico: Filho, perdoados estão os teus pecados.",
    "Mc. 13:36": "Para que, vindo de improviso, não vos ache dormindo.",
    "Mc. 16:15": "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.",
    "Mc. 16:16": "Quem crer e for batizado será salvo; mas quem não crer será condenado.",
    "Mc. 16:20": "E eles, tendo partido, pregaram por todas as partes, cooperando com eles o Senhor, e confirmando a palavra com os sinais que se seguiram. Amém.",

    // Lucas
    "Lc. 1:77": "Para dar ao seu povo conhecimento da salvação, na remissão dos seus pecados;",
    "Lc. 5:33-35": "E disseram-lhe eles: Por que jejuam os discípulos de João frequentemente, e fazem orações, como também os dos fariseus, mas os teus comem e bebem? E ele lhes disse: Podeis vós fazer que os filhos das bodas jejuem, enquanto o esposo está com eles? Dias virão, porém, em que o esposo lhes será tirado, e então, naqueles dias, jejuarão.",
    "Lc. 6:31": "E como vós quereis que os homens vos façam, da mesma maneira lhes fazei vós, também.",
    "Lc. 7:48": "E disse-lhe: Os teus pecados te são perdoados.",
    "Lc. 11:2": "E disse-lhes: Quando orardes, dizei: Pai nosso, que estás nos céus, santificado seja o teu nome; venha o teu reino; seja feita a tua vontade, assim na terra, como no céu.",
    "Lc. 11:13": "Pois, se vós, sendo maus, sabeis dar boas coisas aos vossos filhos, quanto mais dará o Pai celestial o Espírito Santo àqueles que lho pedirem?",
    "Lc. 12:40": "Estai vós também apercebidos; porque o Filho do homem virá à hora em que não penseis.",
    "Lc. 14:26": "Se alguém vier a mim, e não aborrecer a seu pai, e mãe, e mulher, e filhos, e irmãos, e irmãs, e ainda também a sua própria vida, não pode ser meu discípulo.",
    "Lc. 14:33": "Assim, pois, qualquer de vós, que não renuncia a tudo quanto tem, não pode ser meu discípulo.",
    "Lc. 17:4": "E, se pecar contra ti sete vezes no dia, e sete vezes no dia voltar a ti, dizendo: Arrependo-me; perdoa-lhe.",
    "Lc. 22:19-20": "E tomando o pão, e havendo dado graças, partiu-o, e deu-lho, dizendo: Isto é o meu corpo, que por vós é dado; fazei isto em memória de mim. Semelhantemente, tomou o cálice, depois da ceia, dizendo: Este cálice é o novo testamento no meu sangue, que é derramado por vós.",
    "Lc. 23:42": "E disse a Jesus: Senhor, lembra-te de mim, quando entrares no teu reino.",
    "Lc. 24:49": "E eis que sobre vós envio a promessa de meu Pai; ficai, porém, na cidade de Jerusalém, até que do alto sejais revestidos de poder.",

    // João
    "Jo. 1:12": "Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, aos que crêem no seu nome;",
    "Jo. 3:3": "Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus.",
    "Jo. 3:11": "Na verdade, na verdade te digo que nós dizemos o que sabemos, e testificamos o que vimos; e não aceitais o nosso testemunho.",
    "Jo. 3:16": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    "Jo. 5:24": "Na verdade, na verdade vos digo que quem ouve a minha palavra, e crê naquele que me enviou, tem a vida eterna, e não entrará em condenação, mas passou da morte para a vida.",
    "Jo. 5:28-29": "Não vos maravilheis disto; porque vem a hora em que todos os que estão nos sepulcros ouvirão a sua voz. E os que fizeram o bem sairão para a ressurreição da vida; e os que fizeram o mal para a ressurreição da condenação.",
    "Jo. 6:37": "Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora.",
    "Jo. 9:31": "Ora, nós sabemos que Deus não ouve a pecadores; mas, se alguém é temente a Deus, e faz a sua vontade, a esse ouve.",
    "Jo. 13:13": "Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou.",
    "Jo. 14:6": "Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.",
    "Jo. 14:27": "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    "Jo. 15:5": "Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.",
    "Jo. 15:8": "Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus discípulos.",
    "Jo. 15:16": "Não me escolhestes vós a mim, mas eu vos escolhi a vós, e vos nomeei, para que vades e deis fruto, e o vosso fruto permaneça; a fim de que tudo quanto em meu nome pedirdes ao Pai ele vo-lo conceda.",
    "Jo. 16:8": "E, quando ele vier, convencerá o mundo do pecado, e da justiça e do juízo.",
    "Jo. 16:14": "Ele me glorificará, porque há de receber do que é meu, e vo-lo há de anunciar.",
    "Jo. 17:14-17": "Eu lhes tenho dado a tua palavra, e o mundo os odiou, porque não são do mundo, assim como eu não sou do mundo. Não peço que os tires do mundo, mas que os livres do mal. Santifica-os na tua verdade; a tua palavra é a verdade.",
    "Jo. 17:19": "E por eles me santifico a mim mesmo, para que também eles sejam santificados na verdade.",

    // Atos
    "At. 1:8": "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judéia e Samaria, e até aos confins da terra.",
    "At. 1:13-14": "E, entrando, subiram ao cenáculo, onde habitavam Pedro, e Tiago, e João, e André, Filipe, e Tomé, Bartolomeu, e Mateus; Tiago, filho de Alfeu, e Simão Zelotes, e Judas, irmão de Tiago. Todos estes perseveravam unanimemente em oração e súplicas, com as mulheres, e Maria, mãe de Jesus, e com seus irmãos.",
    "At. 2:1": "E, cumprindo-se o dia de Pentecostes, estavam todos concordemente no mesmo lugar;",
    "At. 2:4": "E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito Santo lhes concedia que falassem.",
    "At. 2:38": "E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo;",
    "At. 2:41": "De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas;",
    "At. 4:7": "E, pondo-os no meio, perguntaram: Com que poder ou em nome de quem fizestes isto?",
    "At. 4:8": "Então Pedro, cheio do Espírito Santo, lhes disse: Principais do povo, e vós, anciãos de Israel,",
    "At. 4:19-20": "Mas Pedro e João, respondendo, disseram-lhes: Julgai vós se é justo, diante de Deus, ouvir-vos antes a vós do que a Deus; Porque não podemos deixar de falar do que temos visto e ouvido.",
    "At. 5:1-3": "Mas um certo homem chamado Ananias, com Safira, sua mulher, vendeu uma propriedade, E reteve parte do preço, sabendo-o também sua mulher; e, levando uma parte, a depositou aos pés dos apóstolos. Disse então Pedro: Ananias, por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo, e retivesses parte do preço da herdade?",
    "At. 5:11": "E houve um grande temor em toda a igreja, e em todos os que ouviram estas coisas.",
    "At. 5:12": "E muitos sinais e prodígios eram feitos entre o povo pelas mãos dos apóstolos. E estavam todos unanimemente no alpendre de Salomão.",
    "At. 7:59": "E apedrejavam a Estêvão que em invocação dizia: Senhor Jesus, recebe o meu espírito.",
    "At. 8:9-13": "E estava lá um certo homem, chamado Simão, que anteriormente exercera naquela cidade a arte mágica, e tinha iludido o povo de Samaria, dizendo que era uma grande pessoa;",
    "At. 8:20": "Mas Pedro lhe disse: O teu dinheiro seja contigo para perdição, pois cuidaste que o dom de Deus se alcança por dinheiro.",
    "At. 8:36": "E, indo eles caminhando, chegaram ao pé de alguma água, e disse o eunuco: Eis aqui água; que impede que eu seja batizado?",
    "At. 8:38": "E mandou parar o carro, e desceram ambos à água, tanto Filipe como o eunuco, e o batizou.",
    "At. 9:11": "E disse-lhe o Senhor: Levanta-te, e vai à rua chamada Direita, e pergunta em casa de Judas por um homem de Tarso chamado Saulo; pois eis que ele ora;",
    "At. 10:36": "A palavra que ele enviou aos filhos de Israel, anunciando a paz por Jesus Cristo (este é o Senhor de todos);",
    "At. 10:46": "Porque os ouviam falar línguas, e magnificar a Deus.",
    "At. 13:2": "E, servindo eles ao Senhor, e jejuando, disse o Espírito Santo: Apartai-me a Barnabé e a Saulo para a obra a que os tenho chamado.",
    "At. 13:3": "Então, jejuando e orando, e pondo sobre eles as mãos, os despediram.",
    "At. 13:39": "E de tudo o que, pela lei de Moisés, não pudestes ser justificados, por ele é justificado todo aquele que crê.",
    "At. 13:47": "Porque assim nos ordenou o Senhor: Eu te pus para luz dos gentios, A fim de que sejas para salvação até os confins da terra.",
    "At. 15:2": "Tendo tido Paulo e Barnabé não pequena discussão e contenda contra eles, resolvedo que Paulo e Barnabé, e alguns dentre eles, subissem a Jerusalém, aos apóstolos e aos anciãos, sobre aquela questão.",
    "At. 15:23-29": "E por intermédio deles escreveram o seguinte: Os apóstolos, e os anciãos e os irmãos, aos irmãos dentre os gentios que estão em Antioquia, e na Síria e na Cilícia, saúde.",
    "At. 19:2": "Disse-lhes ele: Recebestes vós já o Espírito Santo quando crestes? E eles disseram-lhe: Nós nem ainda ouvimos que haja Espírito Santo.",
    "At. 19:6": "E, impondo-lhes Paulo as mãos, veio sobre eles o Espírito Santo; e falavam línguas, e profetizavam.",

    // Romanos
    "Rm. 3:23": "Porque todos pecaram e destituídos estão da glória de Deus;",
    "Rm. 3:25": "Ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça pela remissão dos pecados dantes cometidos, sob a paciência de Deus;",
    "Rm. 6:3-4": "Ou não sabeis que todos quantos fomos batizados em Jesus Cristo fomos batizados na sua morte? De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo foi ressuscitado dentre os mortos, pela glória do Pai, assim andemos nós também em novidade de vida.",
    "Rm. 6:4-9": "De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo foi ressuscitado dentre os mortos, pela glória do Pai, assim andemos nós também em novidade de vida.",
    "Rm. 7:4": "Assim, meus irmãos, também vós estais mortos para a lei pelo corpo de Cristo, para que sejais de outro, daquele que ressuscitou dentre os mortos, a fim de que demos fruto para Deus.",
    "Rm. 8:15": "Porque não recebestes o espírito de escravidão, para outra vez estardes em temor, mas recebestes o Espírito de adoção de filhos, pelo qual clamamos: Aba, Pai.",
    "Rm. 8:26": "E da mesma maneira também o Espírito ajuda as nossas fraquezas; porque não sabemos o que havemos de pedir como convém, mas o mesmo Espírito intercede por nós com gemidos inexprimíveis.",
    "Rm. 8:37": "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
    "Rm. 10:8-10": "Mas que diz? A palavra está junto de ti, na tua boca e no teu coração; esta é a palavra da fé, que pregamos, a saber: Se, com a tua boca, confessares ao Senhor Jesus, e, em teu coração, creres que Deus o ressuscitou dentre os mortos, serás salvo. Visto que com o coração se crê para a justiça, e com a boca se faz confissão para a salvação.",
    "Rm. 10:14": "Como, pois, invocarão aquele em quem não creram? e como crerão naquele de quem não ouviram? e como ouvirão, se não há quem pregue?",
    "Rm. 10:17": "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
    "Rm. 12:2": "E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.",
    "Rm. 12:5": "Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.",
    "Rm. 12:10": "Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros;",
    "Rm. 12:15": "Alegrai-vos com os que se alegram; e chorai com os que choram;",
    "Rm. 13:1": "Toda a alma esteja sujeita às potestades superiores; porque não há potestade que não venha de Deus; e as potestades que há foram ordenadas por Deus.",
    "Rm. 14:9": "Porque foi para isto que morreu Cristo, e ressurgiu, e tornou a viver, para ser Senhor, tanto dos mortos, como dos vivos.",
    "Rm. 14:19": "Sigamos, pois, as coisas que servem para a paz e para a edificação de uns para com os outros.",
    "Rm. 14:23": "Mas aquele que tem dúvidas, se come está condenado, porque não come por fé; e tudo o que não é de fé é pecado.",
    "Rm. 15:2": "Portante cada um de nós agrade ao seu próximo no que é bom para edificação.",
    "Rm. 15:16": "Para que eu seja ministro de Jesus Cristo entre os gentios, ministrando o evangelho de Deus, para que seja agradável a oferta dos gentios, santificada pelo Espírito Santo.",
    "Rm. 15:19": "Pelo virtude de sinais e prodígios, na virtude do Espírito de Deus; de maneira que desde Jerusalém, e arredores, até ao Ilírico, tenho pregado o evangelho de Jesus Cristo.",
    "Rm. 16:1": "Recomendo-vos, pois, Febe, nossa irmã, a qual serve na igreja que está em Cencreia,",
    "Rm. 16:16": "Saudai-vos uns aos outros com santo ósculo. As igrejas de Cristo vos saúdam.",

    // 1 Coríntios
    "ICo. 1:2": "À igreja de Deus que está em Corinto, aos santificados em Cristo Jesus, chamados santos, com todos os que em todo o lugar invocam o nome de nosso Senhor Jesus Cristo, Senhor deles e nosso:",
    "ICo. 1:10": "Rogo-vos, porém, irmãos, pelo nome de nosso Senhor Jesus Cristo, que digais todos uma mesma coisa, e que não haja entre vós dissensões; antes sejais unidos em um mesmo pensamento e em um mesmo parecer.",
    "ICo. 1:30": "Mas vós sois dele, em Jesus Cristo, o qual para nós foi feito por Deus sabedoria, e justiça, e santificação, e redenção;",
    "ICo. 3:11-15": "Porque ninguém pode pôr outro fundamento além do que já está posto, o qual é Jesus Cristo.",
    "ICo. 3:21-23": "Portanto, ninguém se glorie nos homens; porque tudo é vosso;",
    "ICo. 5:7": "Alimpai-vos, pois, do fermento velho, para que sejais uma nova massa, assim como estais sem fermento. Porque Cristo, nossa páscoa, foi sacrificado por nós.",
    "ICo. 6:10-11": "Não erreis: nem os devassos, nem os idólatras, nem os adúlteros, nem os efeminados, nem os sodomitas, Nem os ladrões, nem os avarentos, nem os bêbados, nem os maldizentes, nem os roubadores herdarão o reino de Deus.",
    "ICo. 8:6": "Todavia para nós há um só Deus, o Pai, de quem é tudo e para quem nós vivemos; e um só Senhor, Jesus Cristo, pelo qual são todas as coisas, e nós por ele.",
    "ICo. 9:14": "Assim ordenou também o Senhor aos que anunciam o evangelho, que vivam do evangelho.",
    "ICo. 9:20-23": "E fiz-me como judeu para os judeus, para ganhar os judeus; para os que estão debaixo da lei, como se estivesse debaixo da lei, para ganhar os que estão debaixo da lei.",
    "ICo. 11:1": "Sede meus imitadores, como também eu de Cristo.",
    "ICo. 11:24": "E, tendo dado graças, o partiu e disse: Tomai, comei; isto é o meu corpo que é partido por vós; fazei isto em memória de mim.",
    "ICo. 11:26": "Porque todas as vezes que comerdes este pão e beberdes este cálice anunciais a morte do Senhor, até que venha.",
    "ICo. 11:28": "Examine-se, pois, o homem a si mesmo, e assim coma deste pão e beba deste cálice.",
    "ICo. 12:7": "Mas a manifestação do Espírito é dada a cada um, para o que for útil.",
    "ICo. 12:8-10": "Porque a um pelo Espírito é dada a palavra da sabedoria; e a outro, pelo mesmo Espírito, a palavra da ciência; E a outro, pelo mesmo Espírito, a fé; e a outro, pelo mesmo Espírito, os dons de curar; E a outro a operação de maravilhas; e a outro a profecia; e a outro o dom de discernir os espíritos; e a outro a variedade de línguas; e a outro a interpretação das línguas.",
    "ICo. 12:11": "Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.",
    "ICo. 12:12": "Porque, assim como o corpo é um, e tem muitos membros, e todos os membros, sendo muitos, são um só corpo, assim é Cristo também.",
    "ICo. 12:25-26": "Para que não haja divisão no corpo, mas que os membros tenham igual cuidado uns dos outros. E, se um membro padece, todos os membros padecem com ele; e, se um membro é honrado, todos os membros se regozijam com ele.",
    "ICo. 14:3": "Mas o que profetiza fala aos homens, para edificação, exortação e consolação.",
    "ICo. 14:12": "Assim também vós, como desejais dons espirituais, procurai abundar neles para edificação da igreja.",
    "ICo. 14:26": "Que fareis pois, irmãos? Quando vos ajuntais, cada um de vós tem salmo, tem doutrina, tem revelação, tem língua, tem interpretação. Faça-se tudo para edificação.",
    "ICo. 14:40": "Mas faça-se tudo decentemente e com ordem.",
    "ICo. 15:51-53": "Eis aqui vos digo um mistério: Na verdade, nem todos dormiremos, mas todos seremos transformados, Num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados.",
    "ICo. 15:57": "Mas graças a Deus que nos dá a vitória por nosso Senhor Jesus Cristo.",
    "ICo. 16:19": "As igrejas da Ásia vos saúdam. Saúdam-vos afetuosamente no Senhor Áqüila e Priscila, com a igreja que está em sua casa.",

    // 2 Coríntios
    "IICo. 2:7-8": "De modo que, pelo contrário, deveis antes perdoar-lhe e consolá-lo, para que o tal não seja de modo algum devorado de demasiada tristeza. Por isso vos rogo que confirmeis para com ele o vosso amor.",
    "IICo. 3:18": "Mas todos nós, com rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.",
    "IICo. 4:13": "Tendo, porém, o mesmo espírito de fé, como está escrito: Cri, por isso falei; nós cremos também, por isso também falamos.",
    "IICo. 5:7": "Porque andamos por fé, e não por vista.",
    "IICo. 5:10": "Porque todos devemos comparecer ante o tribunal de Cristo, para que cada um receba segundo o que tiver feito por meio do corpo, ou bem, ou mal.",
    "IICo. 5:15": "E ele morreu por todos, para que os que vivem não vivam mais para si, mas para aquele que por eles morreu e ressuscitou.",
    "IICo. 5:17": "Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.",
    "IICo. 5:20": "De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse. Rogamo-vos, pois, da parte de Cristo, que vos reconcilieis com Deus.",
    "IICo. 6:3": "Não dando nós escândalo em coisa alguma, para que o nosso ministério não seja censurado;",
    "IICo. 6:6": "Na pureza, na ciência, na longanimidade, na benignidade, no Espírito Santo, no amor não fingido,",
    "IICo. 10:15": "Não nos glorificando beyond measure in other men's labours; but having hope, when your faith is increased, that we shall be enlarged by you according to our rule abundantly,",
    "IICo. 12:9": "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.",
    "IICo. 13:5": "Examinai-vos a vós mesmos, se permaneceis na fé; provai-vos a vós mesmos. Ou não sabeis quanto a vós mesmos, que Jesus Cristo está em vós? Se não é que já estais reprovados.",

    // Gálatas
    "Gl. 3:28": "Não há judeu nem grego; não há servo nem livre; não há macho nem fêmea; porque todos vós sois um em Cristo Jesus.",
    "Gl. 4:6": "E, porque sois filhos, Deus enviou aos vossos corações o Espírito de seu Filho, que clama: Aba, Pai.",
    "Gl. 4:26": "Mas a Jerusalém que é de cima é livre; a qual é mãe de todos nós.",
    "Gl. 5:1": "Estai, pois, firmes na liberdade com que Cristo nos libertou, e não torneis a colocar-vos debaixo do jugo da servidão.",
    "Gl. 5:16": "Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne.",
    "Gl. 5:16-18": "Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne. Porque a carne cobiça contra o Espírito, e o Espírito contra a carne; e estes opõem-se um ao outro, para que não façais o que quereis.",
    "Gl. 5:22": "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
    "Gl. 6:9": "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.",
    "Gl. 6:16": "E a todos quantos andarem conforme esta regra, paz e misericórdia sobre eles e sobre o Israel de Deus.",

    // Efésios
    "Ef. 2:5-10": "Estando nós ainda mortos em nossas ofensas, nos vivificou juntamente com Cristo (pela graça sois salvos), E nos ressuscitou juntamente com ele e nos fez assentar nos lugares celestiais, em Cristo Jesus; Para mostrar nos séculos vindouros as abundantes riquezas da sua graça pela sua benignidade para conosco em Cristo Jesus. Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie; Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.",
    "Ef. 2:8-9": "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie;",
    "Ef. 2:13": "Mas agora em Cristo Jesus, vós, que antes estáveis longe, já pelo sangue de Cristo chegastes perto.",
    "Ef. 4:2": "Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor,",
    "Ef. 4:12-13": "Querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo; Até que todos cheguemos à unidade da fé, e ao conhecimento do Filho de Deus, a homem perfeito, à medida da estatura completa de Cristo,",
    "Ef. 4:32": "Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
    "Ef. 5:9": "Porque o fruto do Espírito está em toda a bondade, e justiça e verdade;",
    "Ef. 5:21": "Sujeitando-vos uns aos outros no temor de Deus.",
    "Ef. 5:25-26": "Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela, Para a santificar, purificando-a com a lavagem da água, pela palavra,",
    "Ef. 6:11": "Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo.",
    "Ef. 6:17-18": "E tomai o capacete da salvação, e a espada do Espírito, que é a palavra de Deus; Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisso com toda a perseverança e súplica por todos os santos.",

    // Filipenses
    "Fp. 1:11": "Cheios dos frutos de justiça, que são por Jesus Cristo, para glória e louvor de Deus.",
    "Fp. 1:27": "Somente deveis portar-vos dignamente conforme o evangelho de Cristo, para que, quer vá e vos veja, quer esteja ausente, ouça acerca de vós que estais num mesmo espírito, combatendo juntamente com o mesmo ânimo pela fé do evangelho.",
    "Fp. 2:2": "Completai o meu gozo, para que sintais o mesmo, tendo o mesmo amor, o mesmo ânimo, sentindo uma mesma coisa.",
    "Fp. 2:3": "Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo.",
    "Fp. 3:16": "Mas, naquela a que já chegamos, andemos segundo a mesma regra, e sintamos o mesmo.",
    "Fp. 4:4": "Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.",
    "Fp. 4:6": "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.",
    "Fp. 4:13": "Posso todas as coisas em Cristo que me fortalece.",

    // Colossenses
    "Cl. 1:22": "Na verdade, ele vos reconciliou no corpo da sua carne, pela morte, para perante ele vos apresentar santos, e irrepreensíveis, e inculpáveis,",
    "Cl. 1:22-23": "Na verdade, ele vos reconciliou no corpo da sua carne, pela morte, para perante ele vos apresentar santos, e irrepreensíveis, e inculpáveis, Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que tendes ouvido, o qual foi pregado a toda criatura que há debaixo do céu, e do qual eu, Paulo, estou feito ministro.",
    "Cl. 2:12": "Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o raised from the dead.",
    "Cl. 2:13-14": "E a vós, quando estáveis mortos nos pecados, e na incircuncisão da vossa carne, vos vivificou juntamente com ele, perdoando-vos todas as ofensas, Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz.",
    "Cl. 4:6": "A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.",

    // 1 Tessalonicenses
    "ITs. 4:2-4": "Porque vós bem sabeis que mandamentos vos temos dado pelo Senhor Jesus. Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da fornicação; Que cada um de vós saiba possuir o seu vaso em santificação e honra;",
    "ITs. 4:3-12": "Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da fornicação;",
    "ITs. 5:11": "Pelo que exortai-vos uns aos outros e edificai-vos uns aos outros, como também o fazeis.",
    "ITs. 5:17": "Orai sem cessar.",
    "ITs. 5:23": "E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.",

    // 2 Tessalonicenses
    "IITs. 3:15": "Todavia não o tenhais como inimigo, mas admoestai-o como irmão.",

    // 1 Timóteo
    "ITm. 2:9": "Que do mesmo modo as mulheres se ataviem em traje honesto, com pudor e modéstia, não com tranças, ou com ouro, ou pérolas, ou vestidos preciosos,",
    "ITm. 3:15": "Para que, se tardar, saibas como convém andar na casa de Deus, que é a igreja do Deus vivo, a coluna e firmeza da verdade.",
    "ITm. 4:9": "Esta palavra é fiel e digna de toda a aceitação.",
    "ITm. 5:19-20": "Não aceites acusação contra o presbítero, senão com duas ou três testemunhas. Aos que pecarem, repreende-os na presença de todos, para que também os outros tenham temor.",
    "ITm. 6:11": "Mas tu, ó homem de Deus, foge destas coisas, e segue a justiça, a piedade, a fé, o amor, a paciência, a mansidão.",

    // 2 Timóteo
    "IITm. 2:24-25": "E ao servo do Senhor não convém contender, mas sim, ser manso para com todos, apto para ensinar, sofredor; Instruindo com mansidão os que resistem, a ver se porventura Deus lhes dará arrependimento para conhecerem a verdade,",
    "IITm. 3:14-16": "Tu, porém, permanece naquilo que aprendeste, e de que foste inteirado, sabendo de quem o tens aprendido, E que desde a tua meninice sabes as sagradas Escrituras, que podem fazer-te sábio para a salvação, pela fé que há em Cristo Jesus. Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redargüir, para corrigir, para instruir em justiça;",

    // Tito
    "Tt. 1:8": "Mas hospitaleiro, amigo do bem, moderado, justo, santo, temperante;",
    "Tt. 2:8": "Linguagem sã e irrepreensível, para que o adversário se envergonhe, não tendo nenhum mal que dizer de nós.",
    "Tt. 2:15": "Fala disto, e exorta, e repreende com toda a autoridade. Ninguém te despreze.",
    "Tt. 3:2": "Que a ninguém infamem, nem sejam contenciosos, mas modestos, mostrando toda a mansidão para com todos os homens.",
    "Tt. 3:5": "Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou pela lavagem da regeneração e da renovação do Espírito Santo,",

    // Hebreus
    "Hb. 4:12": "Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.",
    "Hb. 6:9": "Mas de vós, ó amados, esperamos coisas melhores, e coisas que acompanham a salvação, ainda que assim falamos.",
    "Hb. 9:22": "E quase todas as coisas, segundo a lei, se purificam com sangue; e sem derramamento de sangue não há remissão.",
    "Hb. 10:22": "Cheguemo-nos com verdadeiro coração, em inteira certeza de fé; tendo os corações purificados da má consciência, e o corpo lavado com água limpa,",
    "Hb. 10:23": "Retenhamos firmes a confissão da nossa esperança; porque fiel é o que prometeu.",
    "Hb. 10:36": "Porque tendes necessidade de paciência, para que, depois de haverdes feito a vontade de Deus, possais alcançar a promessa.",
    "Hb. 10:38": "Mas o justo viverá da fé; E, se ele recuar, a minha alma não tem prazer nele.",
    "Hb. 10:39": "Nós, porém, não somos daqueles que se retiram para a perdição, mas daqueles que crêem para a conservação da alma.",
    "Hb. 12:2": "Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.",
    "Hb. 12:6": "Porque o Senhor corrige o que ama, E açoita a qualquer que recebe por filho.",
    "Hb. 12:7": "Se suportais a correção, Deus vos trata como filhos; porque que filho há a quem o pai não corrija?",
    "Hb. 12:14": "Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor;",
    "Hb. 13:17": "Obedecei a vossos pastores, e sujeitai-vos a eles; porque velam por vossas almas, como aqueles que hão de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.",

    // Tiago
    "Tg. 1:22-23": "E sede cumpridores da palavra, e não somente ouvintes, enganando-vos com falsos discursos. Porque, se alguém é ouvinte da palavra, e não cumpridor, é semelhante ao homem que contempla ao espelho o seu rosto natural;",
    "Tg. 3:2": "Porque todos tropeçamos em muitas coisas. Se alguém não tropeça em palavra, o tal é perfeito, e poderoso para também refrear todo o corpo.",
    "Tg. 3:13": "Quem entre vós é sábio e entendido? Mostre pelo seu bom trato as suas obras em mansidão de sabedoria.",
    "Tg. 4:3": "Pedis, e não recebeis, porque pedis mal, para o gastardes em vossos deleites.",
    "Tg. 4:7": "Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós.",
    "Tg. 4:8": "Chegai-vos a Deus, e ele se chegará a vós. Limpai as mãos, pecadores; e, vós de duplo ânimo, purificai os corações.",

    // 1 Pedro
    "IPd. 1:15-16": "Mas, como é santo aquele que vos chamou, sede vós também santos em toda a vossa maneira de viver; Porquanto está escrito: Sede santos, porque eu sou santo.",
    "IPd. 1:22": "Purificando as vossas almas pelo Espírito na obediência à verdade, para o amor fraternal, não fingido; amai-vos ardentemente uns aos outros com um coração puro;",
    "IPd. 2:9": "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz;",
    "IPd. 2:15": "Porque assim é a vontade de Deus, que, fazendo bem, tapeis a boca à ignorância dos homens insensatos;",
    "IPd. 3:1": "Semelhantemente, vós, mulheres, sede sujeitas aos vossos próprios maridos; para que também, se alguns não obedecem à palavra, pelo porte de suas mulheres sejam ganhos sem palavra;",
    "IPd. 3:3-5": "O enfeite delas não seja o exterior, no frisado dos cabelos, no uso de joias de ouro, na compostura dos vestidos; Mas o homem encoberto no coração; no incorruptível traje de um espírito manso e quieto, que é precioso diante de Deus. Porque assim se adornavam também antigamente as santas mulheres que esperavam em Deus, e estavam sujeitas aos seus próprios maridos;",
    "IPd. 3:7": "Igualmente vós, maridos, coabitai com elas com entendimento, dando honra à mulher, como vaso mais fraco; como sendo vós os seus co-herdeiros da graça da vida; para que não sejam impedidas as vossas orações.",
    "IPd. 3:21": "Que também, como uma verdadeira figura, agora vos salva, o batismo, não do despojamento da imundícia da carne, mas da indagação de uma boa consciência para com Deus, pela ressurreição de Jesus Cristo;",
    "IPd. 5:7": "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",

    // 2 Pedro
    "IIPd. 2:9": "Assim, sabe o Senhor livrar da tentação os piedosos, e reservar os injustos para o dia do juízo, para serem castigados.",

    // 1 João
    "IJo. 1:7": "Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.",
    "IJo. 1:9": "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.",
    "IJo. 2:13": "Pai, escrevo-vos, porque conhecestes aquele que é desde o princípio. Jovens, escrevo-vos, porque vencestes o maligno. Filhinhos, escrevo-vos, porque conhecestes o Pai.",
    "IJo. 2:15-17": "Não ameis o mundo, nem o que no mundo há. Se alguém ama o mundo, o amor do Pai não está nele. Porque tudo o que há no mundo, a concupiscência da carne, a concupiscência dos olhos e a soberba da vida, não é do Pai, mas do mundo. E o mundo passa, e a sua concupiscência; mas aquele que faz a vontade de Deus permanece para sempre.",
    "IJo. 2:17": "E o mundo passa, e a sua concupiscência; mas aquele que faz a vontade de Deus permanece para sempre.",
    "IJo. 3:22": "E qualquer coisa que lhe pedirmos, dele a receberemos, porque guardamos os seus mandamentos, e fazemos o que é agradável à sua vista.",
    "IJo. 3:24": "E aquele que guarda os seus mandamentos nele está, e ele nele. E nisto conhecemos que ele está em nós, pelo Espírito que nos tem dado.",
    "IJo. 4:4": "Filhinhos, sois de Deus, e já os tendes vencido; porque maior é o que está em vós do que o que está no mundo.",
    "IJo. 5:4": "Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo, a nossa fé.",
    "IJo. 5:11-13": "E o testemunho é este: que Deus nos deu a vida eterna; e esta vida está em seu Filho. Quem tem o Filho tem a vida; quem não tem o Filho de Deus não tem a vida. Estas coisas vos escrevi a vós, os que credes no nome do Filho de Deus, para que saibais que tendes a vida eterna, e para que creiais no nome do Filho de Deus.",
    "IJo. 5:20": "E sabemos que já o Filho de Deus é vindo, e nos deu entendimento para conhecermos o que é verdadeiro; e no que é verdadeiro estamos, isto é, em seu Filho Jesus Cristo. Este é o verdadeiro Deus e a vida eterna.",

    // Judas
    "Jd. 1:3": "Amados, procurando eu escrever-vos com toda a diligência acerca da salvação comum, tive por necessidade escrever-vos, e exortar-vos a batalhar pela fé que uma vez foi dada aos santos.",

    // Apocalipse
    "Ap. 2:10": "Nada temas das coisas que hás de padecer. Eis que o diabo lançará alguns de vós na prisão, para que sejais tentados; e tereis uma tribulação de dez dias. Sê fiel até à morte, e dar-te-ei a coroa da vida.",
    "Ap. 3:20": "Eis que estou à porta, e bato; se alguém ouvir a minha voz, e abrir a porta, entrarei em sua casa, e com ele cearei, e ele comigo.",
    "Ap. 4:5": "E do trono saíam relâmpagos, e trovões, e vozes; e diante do trono ardiam sete lâmpadas de fogo, as quais são os sete espíritos de Deus.",
    "Ap. 5:8": "E, havendo tomado o livro, os quatro animais e os vinte e quatro anciãos prostraram-se diante do Cordeiro, tendo todos eles harpas e salvas de ouro cheias de incenso, que são as orações dos santos.",
    "Ap. 19:1-10": "E depois destas coisas ouvi no céu uma grande voz de uma grande multidão, que dizia: Aleluia! A salvação, e a glória, e a honra, e o poder pertencem ao Senhor nosso Deus;",
    "Ap. 19:7": "Regozijemo-nos, e alegremo-nos, e demos-lhe glória; porque vindas são as bodas do Cordeiro, e já a sua esposa se aprontou.",
    "Ap. 19:11-21": "E vi o céu aberto, e eis um cavalo branco; e o que estava assentado sobre ele chama-se Fiel e Verdadeiro; e julga e peleja com justiça.",
    "Ap. 20:10-15": "E o diabo, que os enganava, foi lançado no lago de fogo e enxofre, onde está a besta e o falso profeta; e de dia e de noite serão atormentados para todo o sempre.",
    "Ap. 20:11-15": "E vi um grande trono branco, e o que estava assentado sobre ele, de cuja presença fugiu a terra e o céu; e não se achou lugar para eles.",
    "Ap. 21:1-8": "E vi um novo céu, e uma nova terra. Porque já o primeiro céu e a primeira terra passaram, e o mar já não existe.",
    "Ap. 21:24": "E as nações dos salvos andarão à sua luz; e os reis da terra trarão para ela a sua glória e honra.",
    "Ap. 22:6": "E disse-me: Estas palavras são fiéis e verdadeiras; e o Senhor, o Deus dos santos profetas, enviou o seu anjo, para mostrar aos seus servos as coisas que em breve hão de acontecer."
};

// Função para obter texto do versículo
function getBibleVerse(reference) {
    return bibleVerses[reference] || "Versículo não encontrado na base de dados.";
}

// Função para obter informações do livro
function getBookInfo(bookAbbr) {
    const bookInfo = {
        "Gn": { name: "Gênesis", chapters: 50 },
        "Sl": { name: "Salmos", chapters: 150 },
        "Is": { name: "Isaías", chapters: 66 },
        "Jr": { name: "Jeremias", chapters: 52 },
        "Ez": { name: "Ezequiel", chapters: 48 },
        "Dn": { name: "Daniel", chapters: 12 },
        "Jl": { name: "Joel", chapters: 3 },
        "Mq": { name: "Miqueias", chapters: 7 },
        "Ag": { name: "Ageu", chapters: 2 },
        "Zc": { name: "Zacarias", chapters: 14 },
        "Ml": { name: "Malaquias", chapters: 4 },
        "Mt": { name: "Mateus", chapters: 28 },
        "Mc": { name: "Marcos", chapters: 16 },
        "Lc": { name: "Lucas", chapters: 24 },
        "Jo": { name: "João", chapters: 21 },
        "At": { name: "Atos", chapters: 28 },
        "Rm": { name: "Romanos", chapters: 16 },
        "ICo": { name: "1 Coríntios", chapters: 16 },
        "IICo": { name: "2 Coríntios", chapters: 13 },
        "Gl": { name: "Gálatas", chapters: 6 },
        "Ef": { name: "Efésios", chapters: 6 },
        "Fp": { name: "Filipenses", chapters: 4 },
        "Cl": { name: "Colossenses", chapters: 4 },
        "ITs": { name: "1 Tessalonicenses", chapters: 5 },
        "IITs": { name: "2 Tessalonicenses", chapters: 3 },
        "ITm": { name: "1 Timóteo", chapters: 6 },
        "IITm": { name: "2 Timóteo", chapters: 4 },
        "Tt": { name: "Tito", chapters: 3 },
        "Fm": { name: "Filemom", chapters: 1 },
        "Hb": { name: "Hebreus", chapters: 13 },
        "Tg": { name: "Tiago", chapters: 5 },
        "IPd": { name: "1 Pedro", chapters: 5 },
        "IIPd": { name: "2 Pedro", chapters: 3 },
        "IJo": { name: "1 João", chapters: 5 },
        "IIJo": { name: "2 João", chapters: 1 },
        "IIIJo": { name: "3 João", chapters: 1 },
        "Jd": { name: "Judas", chapters: 1 },
        "Ap": { name: "Apocalipse", chapters: 22 }
    };
    
    return bookInfo[bookAbbr] || { name: "Livro não encontrado", chapters: 0 };
}