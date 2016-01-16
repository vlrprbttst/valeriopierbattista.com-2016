
<p id="docs-internal-guid-36aee34b-4210-05e6-3454-b007f49dc340" dir="ltr"><strong>Nota:</strong> Questa è la traduzione italiana dell’articolo “<a href="http://stilldrinking.org/programming-sucks" target="_blank">Programming Sucks</a>” di <a href="http://stilldrinking.org/" target="_blank">Peter Welsh</a>. Ho letto per la prima volta questo articolo qualche mese fa, e mi ha talmente divertito e fatto sentire meno solo, che lo considero un must-read per chiunque lavori nel mondo della programmazione. Ho deciso di tradurlo e dedicargli un post sul mio blog per poterlo condividere, non mi cimento di solito in opere di traduzione, scuserete quindi eventuali imprecisioni grammaticali e/o strafalcioni.</p>
<p dir="ltr"><strong>Note:</strong> This is the italian translation of the brilliant article “<a href="http://stilldrinking.org/programming-sucks" target="_blank">Programming Sucks</a>” by <a href="http://stilldrinking.org/" target="_blank">Peter Welsh</a>. This article was so funny to read that i decided to translate it in my native language and share it on my blog.</p>

<h2>Programmare fa schifo</h2>
<img class="alignnone" src="http://stilldrinking.org/blog_images/code-horror.gif" alt="programmare fa schifo" class="cover" />
<p dir="ltr">Ogni amico che ho che abbia un lavoro che implichi uno sforzo maggiore di sollevare un laptop un paio di volte a settimana trova sempre il modo di infilare in una qualsiasi conversazione frasi tipo: "amico mio, tu non lavori sodo. Ho appena finito una settimana di 4700 ore di lavoro a scavare un tunnel sotto Mordor con un cacciavite"</p>
<p dir="ltr"><!--more--></p>
<p dir="ltr">Da una parte hanno ragione. Mordor fa cagare, ed è sicuramente un lavoro più stancante fisicamente che picchettare su una tastiera, a meno che tu non sia una formica. A parte tutto, siamo comunque tutti d'accordo sul fatto che stress e pazzia siano cose negative? Ottimo. Benvenuti nel mondo della programmazione.</p>

<h2 dir="ltr">Ogni team di programmazione è composto e organizzato da pazzi.</h2>
<p dir="ltr">Immagina di entrare a far parte di un team di ingegneri. Sei eccitato e pieno di idee, ti sei appena laureato e vivi in un mondo di design puliti e funzionali la cui estetica, eleganza e forza sono magistrali. Cominci la tua avventura lavorativa incontrando Mary, capo progetto di un ponte in costruzione in una grossa area metropolitana della città.  Mary ti fa poi conoscere Fred, ma per conoscerlo hai dovuto superare i 15 controlli di sicurezza installati da Dave perché a Dave, tempo addietro, fregarono la felpa dalla sua postazione di lavoro e "QUESTA COSA NON DOVRA' MAI PIU' SUCCEDERE!". Fred lavora esclusivamente col legno, ti viene quindi spontaneo chiedergli come mai stia lavorando al progetto di un ponte che supporterà il passaggio di centinaia di automobili che nell'ora di punta guideranno attraverso un cratere che cade a picco per 200 metri.</p>
<p dir="ltr">Non preoccuparti, dice Mary, Fred si occuperà dei marciapiedi. Marciapiedi? Beh Fred ci sa fare coi marciapiedi e il suo contributo renderà sicuramente il ponte più bello. Certo, dovranno essere costruiti senza parapetti, perché Phil ha imposto una legge ferrea sui parapetti in cantiere, anche se Phil non è il capo cantiere. Nessuno sa bene quale sia esattamente il lavoro di Phil, ma è sicuramente una persona molto sinergica e ha connessioni con l'upper management, e nessuno degli ingegneri ha voglia di avere a che fare con loro quindi Phil in sostanza fa quello che vuole. Sara, nel frattempo, ha studiato un metodo di pavimentazione alla super-mega-ultra-avanguardia, e ha applicato le pavimentazioni direttamente sul progetto di design del ponte, quindi praticamente dovrai costruirci intorno mentre i lavori vanno avanti, perché per ogni tipo di pavimentazione c'è bisogno di una posa particolare e sistemi di sicurezza su misura. Poi ci sono Tom e Harry, lavorano insieme da anni ma hanno una diatriba irrisolta sull'uso di metodi di misurazione metrica o imperiale, e alla fine si sono accordati sul fatto che chi arriva prima a quella parte del progetto vince e adotta il suo sistema di misurazione preferito. Questa faida ha creato talmente tanta confusione negli operai che assemblano il ponte che si sono semplicemente arresi e martellano, avvitano e arrivano a fine giornata senza preoccuparsi troppo di cosa stiano effettivamente facendo.</p>
<p dir="ltr">In aggiunta, il ponte è stato disegnato per essere un ponte sospeso ma nessuno nel team sapeva come si costruisse un ponte sospeso, quindi sono arrivati a metà progetto ultimato e poi hanno semplicemente aggiunto qualche colonna qua e là per mantenerlo sospeso, ma congiuntamente hanno lasciato in opera i cavi di sospensione che tenevano in piedi qualche pezzo di ponte, nessuno sa quali ma tutti sanno che sono parti importanti.</p>
<p dir="ltr">Finita l'introduzione, sei invitato a proporre qualche nuova idea, ma tu non ne hai perché sei un ingegnere della propulsione aerospaziale e non ci capisci niente di ponti.</p>
<p dir="ltr">Ci passeresti tu su quel ponte? No. Se il progetto vedesse effettivamente la luce, tutto il team verrebbe giustiziato. Nonostante tutto questo, la dinamica appena descritta è alla base di qualsiasi software tu abbia mai usato nella tua vita: banche online, siti internet, o qualsiasi altro software che dice di proteggere le tue informazioni personali su internet ma che, in realtà, non lo fa.</p>

<h2 dir="ltr">Non esiste il Codice Buono</h2>
<p dir="ltr">Ogni programmatore, ogni tanto, quando non c'è nessuno a casa, spegne le luci, si versa un bicchiere di scotch, mette su un po' di musica elettronica tedesca, e apre un file sul suo computer. Il file è diverso per ogni programmatore, a volte l'ha scritto lui, a volte no. Legge le righe di codice, e piange di gioia ammirando la qualità di ciò che vede scritto, ma le lacrime ben presto diventano amare, perché è consapevole che tutti gli altri file del mondo non si avvicineranno mai neanche lontanamente a quella perfezione.</p>
<p dir="ltr"> Quel file è il Codice Buono. Ha dei nomi autoesplicativi e consistenti per variabili e funzioni, è conciso. Non fa niente di stupido, non ha mai dovuto essere pubblicato o sottoposto ad un team di vendita. Fa una sola, stupida, specifica cosa, e la fa bene. E' stato scritto da un'unica persona e non è mai stato toccato da altri. Si fa leggere come leggeresti una poesia.</p>
<p dir="ltr">Ogni programmatore inizia scrivendo un perfetto fiocco di neve come questo. Poi venerdì ti dicono che devono avere altri 600 fiocchi di neve pronti entro martedì, ed è qui che inizi a fare il furbetto iniziando a copiare qualche fiocco di neve qua e là, magari chiedi anche a qualche collega di aiutarti per velocizzare il processo perché qualche fiocco nel frattempo si sta sciogliendo. A quel punto qualcuno ci disegna sopra un Picasso perché nessuno vuole che i nostri fiocchi di neve si impregnino di urina di gatto mentre si sciolgono sotto al sole. La settimana successiva poi, altre persone ci buttano sopra altra neve per evitare che il Picasso messo in precedenza cada a pezzi.</p>
<p dir="ltr"> Dicono che situazioni del genere si possano evitare seguendo degli "standard", ma la verità è che esistono più standard di quanto un computer possa realmente fare, e questi standard vengono modificati, migliorati o peggiorati dalle preferenze personali del programmatore di turno, quindi nessun pezzo di codice ha mai visto la luce senza aver fatto 12 cose praticamente identiche in 12 modi completamente diversi. Le prime settimane di un qualsiasi nuovo lavoro consistono nel capire come muoversi all'interno del progetto dell'azienda in cui sei finito, anche se conosci alla perfezione ogni linguaggio, framework e "standard" usato nei progetti, perché gli standard non esistono, gli standard sono unicorni.</p>

<h2 dir="ltr"> Ci saranno sempre le tenebre</h2>
<p dir="ltr"> Quando ero piccolo, avevo un armadio in camera da letto. L'armadio aveva un design un po' particolare, sembrava normale all'inizio, ma poi se lo aprivi, scoprivi che sulla parete destra c'era una piccolo ripostiglio, che ospitava un'utile piccola mensola. Sopra la mensola, scoprivi un ulteriore piccolo spazio che dava sul nulla, era uno spazio che tu immediatamente consideravi il nascondiglio diurno dei mostri che riuscivi a tenere a bada di notte con la tua torcia elettrica e con i tuoi peluches.</p>
<p dir="ltr">Imparare a programmare è esattamente questo. Impari a conoscere gli strumenti che hai a disposizione, ti guardi intorno e fai luce su ulteriori strumenti utili che ti aiutano a vedere l'orrore senza fine che avevi proprio accanto a te fino a quel momento.</p>
<p dir="ltr">Facciamo finta che tu sia uno sviluppatore web di livello medio. Conosci una decina di linguaggi di programmazione, tonnellate di librerie utili, standards, protocolli, quello che ti pare. Non puoi fermarti però, perché devi impararne uno nuovo ogni settimana, senza dimenticare di controllare ciò che già sai per verificare che non sia diventato obsoleto, che funzioni ancora, o che qualcuno non abbia corretto il bug di cui tu approfittavi per fare qualcosa che pensavi fosse molto furbo quella sera che eri ubriaco davanti al computer. Hai controllato tutto e sei perfettamente allineato, è fantastico ... e poi improvvisamente, non funziona più niente.</p>
<p dir="ltr">"Ma che cazz..." esclami, e cominci a cercare la magagna. Scopri che un giorno un idiota decise che visto che un altro idiota decise che 1/0 dovesse equivalere a Infinito, potevi usare Infinito come shorthand per semplificare un po' il tuo codice. Ad un certo punto un non-idiota decise che quella cosa era un'idiozia, che è poi la cosa che il primo idiota avrebbe dovuto pensare sin da subito, ma visto che non lo fece, il non-idiota decide di fare lo stronzo e corregge questa cosa, creando errori di compilazione a valanga su tutti i sistemi. A quel punto decide anche di tenerselo per se, perché è uno stronzo, e ora tutti i tuoi fiocchi di neve sono urina, e non riesci neanche a trovare il gatto.</p>
<p dir="ltr"> Tu sei un grande esperto di queste tecnologie, ed è un'ottima cosa, perché la tua esperienza ti permetterà di impiegare solamente 6 ore della tua vita a scoprire cosa causa il problema anziché perdere il tuo lavoro. Ora hai una cosa in più a cui stare attento da aggiungere alla tua lista di cose a cui stare attento, e tutto questo perché tutti i programmi da cui dipendi sono stati scritti da idioti e da stronzi.</p>
<p dir="ltr">Tutta questa situazione poi è ristretta al tuo specifico campo, che rappresenta una frazione talmente piccola nell'universo dei computer che praticamente è come se tu fossi completamente ignorante. Nessuno sa esattamente come funzionino tutte le componenti del tuo MacBook. Secondo te, perché quando il tuo computer ha un problema ti viene chiesto di riavviarlo? Perché nessuno ha la più pallida idea di cosa succeda veramente nel tuo computer, ed è più facile indurgli un coma e lasciare ai piccoli dottori contenuti nei chipset il compito di farlo resuscitare. L'unica ragione per la quale il computer di un programmatore funziona meglio del computer di un non-programmatore è perché il programmatore sa che il proprio computer è un bambino schizofrenico affetto da malattie autoimmuni e che non deve picchiarlo se si comporta male.</p>

<h2 dir="ltr"> Un sacco di lavoro viene svolto su internet, e internet è un inferno</h2>
<p dir="ltr"> Avete presente la storia di prima su pazzi e Codice Cattivo? Internet è quello, ma letteralmente un miliardo di volte peggio. Siti qualunque che abbiano un minimo di 3 paginette dinamiche sono mantenuti da teams con i minuti contati, perché la verità è che si rompe tutto, sempre e per chiunque. In questo momento qualcuno che lavora a Facebook sta ricevendo sul suo terminale decine di migliaia di errori e cerca freneticamente una soluzione prima che l'intera baracca cada a pezzi. C'è un team agli uffici di Google che non dorme da 3 giorni. C'è un sistemista da qualche parte contornato di bottiglie vuote la cui moglie pensa sia morto. Sappiate che se queste persone si fermano, il mondo andrà in fiamme. Quasi nessuno sa che cosa fa un "Amministratore di Sistema" ma vi assicuro che se tutti gli amministratori di sistema del mondo andassero in pausa pranzo nello stesso momento, tu avresti finito le munizioni per le armi con le quali proteggi i tuoi cibi in scatola da alieni incazzati durante un’invasione prima che loro arrivino al bar.</p>
<p dir="ltr">Non puoi semplicemente riavviare internet come fai col tuo computer. Trilioni di dollari dipendono da pezzi di codice che "per ora vanno bene così" inzeppati di commenti tipo "da fare: aggiusta al più presto questo pericolosissimo hack, non so quale sia il problema ma fallo!!" scritti 10 anni prima. Ad aggiungersi a questo disastroso panorama ci sono legioni di persone che attaccano varie parti di internet per spionaggio, profitto o noia. Avete mai sentito parlare di 4chan? 4chan potrebbe distruggere la vostra vita solo perché ne ha voglia, e noi non ci preoccupiamo più di tanto di 4chan perché una bomba nucleare in più o una in meno non fanno una grossa differenza durante un inverno nucleare.</p>
<p dir="ltr">Su internet è accettabile dire: "mah, questa cosa usata nel modo giusto e nel giusto contesto ogni tanto funziona" e BAM! diventa parte integrante di internet. Chiunque con 200€ e un computer può pubblicare su internet pezzetti maligni di codice, che poi vengono attaccati ad altri pezzi di codice peggiorando la situazione generale ogni giorno un pezzetto di codice alla volta. Nemmeno i bravi programmatori perdono tempo a leggere arcane specifiche scritte da grosse organizzazioni di persone che fabricano unicorni, quindi ciò che fai è scopiazzare qua e là mettendo tutto insieme anche se le parti non coincidono o non hanno nulla a che fare l'una con l'altra, sai che ciò che fai potrebbe rompersi da un momento all'altro e l'unica cosa che puoi fare è aggiungere toppe su toppe e sperare che nessuno se ne accorga.</p>
<p dir="ltr"> Ecco le regole segrete di internet: 5 minuti dopo che hai aperto per la prima volta nella tua vita un browser, un ragazzino in Russia ha il tuo codice fiscale. Ti sei iscritto a qualcosa? Se la risposta è si sappi che un computer della Sicurezza Nazionale sta tracciando ogni tuo spostamento. Hai mai mandato una email? Il tuo indirizzo è già su un tabellone in Nigeria.</p>
<p dir="ltr">Queste cose accadono non perché non ce ne frega niente o perché non cerchiamo di fermarle, accadono perché non esiste del buon codice e cerchiamo tutti semplicemente di far funzionare le cose. E' quello che devi fare se lavori con internet: sperare che l'ultima cosa che hai scritto duri abbastanza a lungo per riuscire a cenare e dormire qualche ora.</p>

<h2 dir="ltr"> Non siamo nati pazzi, ci siamo diventati</h2>
<pre class="language-markup">ERROR: Attempted to parse HTML with regular expression; system returned Cthulhu.</pre>
<p dir="ltr"> fa ridere vero? No? E questa:</p>
<p dir="ltr"><em> "si chiama arrayReverse?"</em></p>
<p dir="ltr"><em>"s/camel/_/"</em></p>
<p dir="ltr"><em>"fico, grazie"</em></p>
<p dir="ltr"> Questa risposta è stata utile vero? L’hai capita quella sul cammello? Non era la risposta migliore che potesse dare? No? Ottimo, hai ancora una speranza. Non hai ancora letto abbastanza codice da iniziare anche a parlare in codice. Il cervello umano non è esattamente predisposto a processare logiche complesse e ai giorni nostri c'è un'intera carriera basata su logiche molto, ma molto, ma molto complesse. Vastissime catene di condizioni astratte e requisiti vengono giornalmente analizzate in vano per scoprire che, semplicemente, non funzionavano perché mancava una virgola. Ti immergi in un mondo completamente senza senso dove l'unica cosa importante è che un piccola serie di numeri vada in un gigante labirinto di simboli e si immetta poi in un'altra serie di numeri per trasformarsi, da un'altra parte ancora, nell'immagine di un gattino.</p>
<p dir="ltr">L'impatto distruttivo che la programmazione ha sul cervello umano è dimostrata da come si scrive un linguaggio di programmazione. questo è un programma:</p>

<pre class="language-markup">#include &lt;iostream&gt;

 int main( int argc, char** argv ) {

    std::cout &lt;&lt; "Hello World!" &lt;&lt; std::endl;

    return 0;

}</pre>
<p dir="ltr">questo codice, fa esattamente la stessa cosa di quest'altro programma:</p>

<pre class="language-markup">`r```````````.H.e.l.l.o. .w.o.r.l.d</pre>
<p dir="ltr">e quest'altro:</p>

<pre class="language-markup">&gt;+++++++++[&lt;++++++++&gt;-]&lt;.&gt;+++++++[&lt;++++&gt;-]&lt;+.+++++++..+++.[-]

&gt;++++++++[&lt;++++&gt;-] &lt;.&gt;+++++++++++[&lt;++++++++&gt;-]&lt;-.--------.+++

.------.--------.[-]&gt;++++++++[&lt;++++&gt;- ]&lt;+.[-]++++++++++.</pre>
<p dir="ltr"> e quest'altro:</p>

<pre class="language-markup">Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.

Ook! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?

Ook! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.

Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.

Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.

Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!

Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook. Ook! Ook? Ook! Ook! Ook? Ook!

Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.

Ook. Ook. Ook. Ook. Ook! Ook.</pre>
Una volta un tizio scrisse un linguaggio di programmazione che consentì ad un'altra persona di scrivere questo:
<pre class="language-markup">#:: ::-| ::-| .-. :||-:: 0-| .-| ::||-| .:|-. :||

open(Q,$0);while("){if(/^#(.*)$/){for(split('-',$1)){$q=0;for(split){s/|

/:.:/xg;s/:/../g;$Q=$_?length:$_;$q+=$q?$Q:$Q*20;}print chr($q);}}}print"n";

#.: ::||-| .||-| :|||-| ::||-| ||-:: :|||-| .:|

"</pre>
<p dir="ltr"> secondo l'autore quel programma equivale a: "2 linee di codice che filtrano due linee di commenti embeddati per tirare fuori i numeri Maya che renderizzano il testo del titolo della rivista in ASCII art ruotata di 90 gradi"</p>
<p dir="ltr"> Quel programma vinse un concorso, beh per forza. Vuoi vivere in un mondo del genere? No. E' un mondo dove potresti fumare un pacchetto di sigarette al giorno e nessuno ti direbbe niente. "Ovvio che fuma così tanto, chi non lo farebbe?"</p>
<p dir="ltr">Dopo un po', ogni programmatore si sveglia e poco prima di essere coscienti, vedono il loro mondo e ogni relazione fra le cose in codice e si confrontano fra di loro come se lo stato di incoscienza pre-veglia che scatena questi trip degni di una pasticca di MDMA sia una cosa normale. E' un mondo fatto di persone che si astiene dal sesso per scrivere un linguaggio di programmazione per orangutan. Tutti i programmi forzano il proprio cervello a fare cose per il quale non è stato pensato in una situazione dove tanto non potrebbero comunque mai fare di meglio, questo per 10-15 ore al giorno, dai 5 ai 7 giorni a settimana, e ognuno di loro sta lentamente diventando pazzo.</p>

<code class="language-markup">&lt;/lamentela&gt;</code>

<p dir="ltr">quindi no, non devo essere in grado di sollevare oggetti che pesano 50kg per ritenermi uno che lavora sodo. Ho preferito scegliere di rasare i peli pubici di Satana mentre banchetta col cervello che spunta dal mio cranio aperto così che dei pezzettini di internet  possano continuare a funzionare per qualche altro giorno.</p>
