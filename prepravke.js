// promenjena funkcija od linije 292 pa nadalje...
var HTML = function () {
    return {
        1: `
              <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Pol</strong></h1>
              </div>
            
            
              <div id="strana_1" class="row">
                <div class="btn_answer_col col-sm col-lg-12 text-center py-3">
                  <button id="btn_1_1" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="" data-value="Muski" data-goto="${page}">Muški</button>
                </div>

                <div class="btn_answer_col col-sm col-lg-12 text-center py-3">
                  <button id="btn_1_2" type="button" class="slide-from-right btn_answer btn text-center" value="next" data-key="" data-value="Zenski" data-goto="${page}">Ženski</button>
                </div>
              </div>
            `,

        2: `
              <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Godine</strong></h1>
              </div>
            
            
              <div id="strana_2" class="row">
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_2_1" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="" data-value="16-34" data-goto="${page}">16 - 34</button>
                </div>

                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_2_2" type="button" class="slide-from-right btn_answer btn text-center" value="next" data-key="" data-value="35-49" data-goto="${page}">35 - 49</button>
                </div>
                  
                <div id="3" class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_2_3" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="" data-value="50+" data-goto="${page}">50+</button>
                </div>
              </div>
              <div class="btn_nav_div container">
                  <div class="row h-100">
                    <div class="col-6 align-self-start text-left my-auto">
                      <button id="prev" type="button" class="prev_btn" data-goto="${page}"> < nazad</button>
                    </div>
                  </div>
                </div>
            `,

        3: `
              <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Fizička aktivnost</strong></h1>
              </div>
            
            
              <div id="strana_3" class="row">
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_3_1" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="4" data-value="Ne treniram" data-goto="${page}">Ne treniram</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_3_2" type="button" class="slide-from-right btn_answer btn text-center" value="next" data-key="0" data-value="Ponekad treniram" data-goto="${page}">Ponekad treniram</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_3_3" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="3" data-value="Redovno treniram" data-goto="${page}">Redovno treniram</button>
                </div>
              </div>
              <div class="btn_nav_div container">
                  <div class="row h-100">
                    <div class="col-6 align-self-start text-left my-auto">
                      <button id="prev" type="button" class="prev_btn" data-goto="${page}"> < nazad</button>
                    </div>
                  </div>
                </div>
            `,

        4: `
              <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Kvalitet sna</strong></h1>
              </div>
            
            
              <div id="strana_4" class="row">
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_4_1" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="" data-value="Spavam kao beba" data-goto="${page}">Spavam kao beba</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_4_2" type="button" class="slide-from-right btn_answer btn text-center" value="next" data-key="5" data-value="Cesto se budim nocu" data-goto="${page}">Često se budim noću</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_4_3" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="5" data-value="Ne mogu da se uspavam dugo" data-goto="${page}">Dugo se uspavljujem</button>
                </div>
              </div>
              <div class="btn_nav_div container">
                  <div class="row h-100">
                    <div class="col-6 align-self-start text-left my-auto">
                      <button id="prev" type="button" class="prev_btn" data-goto="${page}"> < nazad</button>
                    </div>
                  </div>
                </div>
            `,

        5: `
              <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Krvni pritisak</strong></h1>
              </div>
            
            
              <div id="strana_5" class="row">
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_5_1" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="" data-value="Ne kontrolisem" data-goto="${page}">Ne kontrolišem</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_5_2" type="button" class="slide-from-right btn_answer btn text-center" value="next" data-key="2" data-value="Normalan" data-goto="${page}">Normalan</button>
                </div>
              
                <div class="btn_answer_col col-sm col-lg-12 text-center py-2">
                  <button id="btn_5_3" type="button" class="slide-from-left btn_answer btn text-center" value="next" data-key="1" data-value="Imam hipertenziju" data-goto="${page}">Imam hipertenziju</button>
                </div>
              </div>
                <div class="btn_nav_div container">
                  <div class="row h-100">
                    <div class="col-6 align-self-start text-left my-auto">
                      <button id="prev" type="button" class="prev_btn" data-goto="${page}"> < nazad</button>
                    </div>
                  </div>
                </div>
            `,

        6: `  <div class="row pitanje_row justify-content-center">
                <h1 class="text-center pitanje"><strong>Razlog</strong></h1>
              </div>  
              <form>
                
                <div class="row justify-content-center">
                  <div class="col-4 col-lg-2 text-center field" id="kontrola_stresa" data-check="6"  onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/kontrola_stresa.png">
                    <p>kontrola stresa</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="kontrola_stresa">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="srce" data-check="5" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/srce.png">
                    <p>srce</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="srce">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="imunitet" data-check="7" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/imunitet.png">
                    <p>imunitet </p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="imunitet">
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="row justify-content-center">
                  <div class="col-4 col-lg-2 text-center field" id="energija" data-check="0" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/energija.png">
                    <p>energija</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="energija">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="dobar_san" data-check="8" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/dobar_san.png">
                    <p>dobar san</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="dobar_san">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="misici" data-check="1" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/misici.png">
                    <p>misici </p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="misici">
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="row justify-content-center">
                  <div class="col-4 col-lg-2 text-center field" id="nervni_sistem" data-check="2" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/nervni_sistem.png">
                    <p>nervni sistem</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="nervni_sistem">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="laka_primena" data-check="3" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/laka_primena.png">
                    <p>laka primena</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="laka_primena">
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-lg-2 text-center field" id="metabolizam" data-check="4" onmouseclick="active(this)">
                    <img src="./img/magnall_ikonice/metabolizam.png">
                    <p>metabolizam</p>
                    <div class="checkbox_overlay">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" data-value="metabolizam">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn_nav_div container">
                  <div class="row justify-content-center h-100">
                    <div class="col-6 align-self-start text-left my-auto">
                      <button id="prev" type="button" class="prev_btn" data-goto="${page}"> < nazad</button>
                    </div>
                    <div class="col-6 align-self-end text-right my-auto">
                      <button id="submit" type="button" class="submit_btn" value="submit"><strong>izračunaj ></strong></button>
                    </div>
                  </div>
                </div>
            </form>`,
        direct: `<div id="direct" class="card ">
                  <img class="card-img-top" src="./img/proizvodi/direct.jpg" alt="ŠTA JE MAGNALL® DIRECT? slika">
                  <div class="card-body">
                    <h4 class="card-title"><strong>ŠTA JE MAGNALL® DIRECT?</strong></h4>
                    <p class="card-text">Magnall® Direct u samo 1 kesici i praktičnom primenom obezbeđuje preporučene dnevne potrebe za magnezijumom (375 mg).</p>
                    <p class="mobile_text">${limitOpisLength('Magnall® Direct u samo 1 kesici i praktičnom primenom obezbeđuje preporučene dnevne potrebe za magnezijumom (375 mg).', 140)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        cardio: `<div id="cardio" class="card " >
                  <img class="card-img-top" src="./img/proizvodi/cardio.jpg" alt="ŠTA JE MAGNALL® CARDIO? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® CARDIO?</h4>
                    <p class="card-text">Magnall® Cardio je formulacija magnezijuma, vitamina B6 i vitamina K2, koja pruža podršku vašem srcu i krvnim sudovima u obavljanju fizioloških funkcija.</p>
                    <p class="mobile_text">${limitOpisLength('Magnall® Cardio je formulacija magnezijuma, vitamina B6 i vitamina K2, koja pruža podršku vašem srcu i krvnim sudovima u obavljanju fizioloških funkcija.', 140)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        relax: `<div id="relax" class="card ">
                  <img class="card-img-top" src="./img/proizvodi/relax.jpg" alt="ŠTA JE MAGNALL® RELAX? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® RELAX?</h4>
                    <p class="card-text">Magnall® Relax je jedinstvena formulacija magnezijuma i kompleksa vitamina B u visokim dozama, koji na prirodan i siguran način pomaže da ostanete mirni, opušteni i u dobrom raspoloženju (psihički i fizički).</p>
                    <p class="mobile_text">${limitOpisLength('Magnall® Relax je jedinstvena formulacija magnezijuma i kompleksa vitamina B u visokim dozama, koji na prirodan i siguran način pomaže da ostanete mirni, opušteni i u dobrom raspoloženju (psihički i fizički).', 140)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        immuno: `<div id="immuno" class="card ">
                  <img class="card-img-top" src="./img/proizvodi/immuno.jpg" alt="ŠTA JE MAGNALL® IMMUNO? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® IMMUNO?</h4>
                    <p class="card-text">Magnall® Immuno kao formulacija magnezijuma i cinka, pomaže organizmu u održavanju normalne funkcije imunog sistema, održavanju zdrave funkcije mišića, u periodu oporavka od bolesti, kod teške fizičke aktivnosti, omogućava proizvodnju energije kako bi vašem organizmu obezbedilo normalno funkcionisanje.</p>
                    <p class="mobile_text">${limitOpisLength('Magnall® Immuno kao formulacija magnezijuma i cinka, pomaže organizmu u održavanju normalne funkcije imunog sistema, održavanju zdrave funkcije mišića, u periodu oporavka od bolesti, kod teške fizičke aktivnosti, omogućava proizvodnju energije kako bi vašem organizmu obezbedilo normalno funkcionisanje.', 140)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        mineral: `<div id="mineral" class="card ">
                    <img class="card-img-top" src="./img/proizvodi/mineral.jpg" alt="Šta je Marine Mineral? slika">
                    <div class="card-body">
                      <h4 class="card-title">ŠTA JE MARINE MINERAL?</h4>
                      <p class="card-text">Magnall® Marine Mineral predstavlja jedinstveni mineralno-vitaminski kompleks, koji sadrži prečišćeni prirodni ekstrakt magnezijuma obogaćen vitaminom B6.</p>
                      <p class="mobile_text">${limitOpisLength('Magnall® Marine Mineral predstavlja jedinstveni mineralno-vitaminski kompleks, koji sadrži prečišćeni prirodni ekstrakt magnezijuma obogaćen vitaminom B6.', 140)}</p>
                      <a href="#" class="btn_answer">Detaljnije</a>
                    </div>
                  </div>`,
        sleep: `<div id="sleep" class="card ">
                  <img class="card-img-top" src="./img/proizvodi/sleep.jpg" alt="ŠTA JE MAGNALL® SLEEP? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® SLEEP?</h4>
                    <p class="card-text">Magnall® Sleep je jedinstvena formulacija magnezijuma sa melatoninom, aktivnim oblikom folne kiseline i vitaminima B6 i B12, i pomaže da se eliminišu simptomi nesanice i poremećaja spavanja.</p>
                    <p class="mobile_text">${limitOpisLength('Magnall® Sleep je jedinstvena formulacija magnezijuma sa melatoninom, aktivnim oblikom folne kiseline i vitaminima B6 i B12, i pomaže da se eliminišu simptomi nesanice i poremećaja spavanja.', 140)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        ostalidirect: `<div id="ostali-direct" class="card col-${otherProductsColWidth()}">
                  <img class="card-img-top" src="./img/proizvodi/direct.jpg" alt="ŠTA JE MAGNALL® DIRECT? slika">
                  <div class="card-body">
                    <h4 class="card-title"><strong>ŠTA JE MAGNALL® DIRECT?</strong></h4>
                    <p class="card-text">${limitOpisLength('Magnall® Direct u samo 1 kesici i praktičnom primenom obezbeđuje preporučene dnevne potrebe za magnezijumom (375 mg).', 70)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        ostalicardio: `<div id="ostali-cardio" class="card col-${otherProductsColWidth()}" >
                  <img class="card-img-top" src="./img/proizvodi/cardio.jpg" alt="ŠTA JE MAGNALL® CARDIO? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® CARDIO?</h4>
                    <p class="card-text">${limitOpisLength('Magnall® Cardio je formulacija magnezijuma, vitamina B6 i vitamina K2, koja pruža podršku vašem srcu i krvnim sudovima u obavljanju fizioloških funkcija.', 70)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        ostalirelax: `<div id="ostali-relax" class="card col-${otherProductsColWidth()}">
                  <img class="card-img-top" src="./img/proizvodi/relax.jpg" alt="ŠTA JE MAGNALL® RELAX? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® RELAX?</h4>
                    <p class="card-text">${limitOpisLength('Magnall® Relax je jedinstvena formulacija magnezijuma i kompleksa vitamina B u visokim dozama, koji na prirodan i siguran način pomaže da ostanete mirni, opušteni i u dobrom raspoloženju (psihički i fizički).', 70)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        ostaliimmuno: `<div id="ostali-immuno" class="card col-${otherProductsColWidth()}">
                  <img class="card-img-top" src="./img/proizvodi/immuno.jpg" alt="ŠTA JE MAGNALL® IMMUNO? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® IMMUNO?</h4>
                    <p class="card-text">${limitOpisLength('Magnall® Immuno kao formulacija magnezijuma i cinka, pomaže organizmu u održavanju normalne funkcije imunog sistema, održavanju zdrave funkcije mišića, u periodu oporavka od bolesti, kod teške fizičke aktivnosti, omogućava proizvodnju energije kako bi vašem organizmu obezbedilo normalno funkcionisanje.', 70)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
        ostalimineral: `<div id="ostali-mineral" class="card col-${otherProductsColWidth()}">
                    <img class="card-img-top" src="./img/proizvodi/mineral.jpg" alt="ŠTA JE MAGNALL® IMMUNO? slika">
                    <div class="card-body">
                      <h4 class="card-title">ŠTA JE MARINE MINERAL?</h4>
                      <p class="card-text">${limitOpisLength('Magnall® Marine Mineral predstavlja jedinstveni mineralno-vitaminski kompleks, koji sadrži prečišćeni prirodni ekstrakt magnezijuma obogaćen vitaminom B6.', 70)}</p>
                      <a href="#" class="btn_answer">Detaljnije</a>
                    </div>
                  </div>`,
        ostalisleep: `<div id="ostali-sleep" class="card col-${otherProductsColWidth()}">
                  <img class="card-img-top" src="./img/proizvodi/sleep.jpg" alt="ŠTA JE MAGNALL® SLEEP? slika">
                  <div class="card-body">
                    <h4 class="card-title">ŠTA JE MAGNALL® SLEEP?</h4>
                    <p class="card-text">${limitOpisLength('Magnall® Sleep je jedinstvena formulacija magnezijuma sa melatoninom, aktivnim oblikom folne kiseline i vitaminima B6 i B12, i pomaže da se eliminišu simptomi nesanice i poremećaja spavanja.', 70)}</p>
                    <a href="#" class="btn_answer">Detaljnije</a>
                  </div>
                </div>`,
    }
}





// ovo je prepravljena stara funkcija showFinal -- samo je prekopiraj preko stare
function showFinal(htmlObj) {
    var html = htmlObj;
    DOM.progress_container.classList.add('hide');
    finalArr.forEach(function (element, index) {
        if (index === 0) {
            DOM.products.insertAdjacentHTML('beforeend', html[element]);
        } else {
            DOM.other_products.insertAdjacentHTML('beforeend', html['ostali' + element]);
        }
    });
}


//************** ovo je nova funkcija, nju mozes a i ne moras da ubacis*******************//
// odredjivanje sirine jedne kolone za prikaz ostalih preporucenih proizvoda
function otherProductsColWidth() {
    var finalProductsLength = finalArr.length;
    if (finalProductsLength === 2) { // slucaj kada je jedan glavni proizvod i jedan ostali proizvod
        return 6; // sirina kolone za bootstrap
    }
    if (finalProductsLength === 3) { // slucaj kada je jedan glavni proizvod i dva ostala proizvoda
        return 6; // sirina kolone za bootstrap
    }
    if (finalProductsLength === 4) { // slucaj kada je jedan glavni proizvod i tri ostala proizvoda
        return 4; // sirina kolone za bootstrap
    }
    if (finalProductsLength === 5) { // slucaj kada je jedan glavni proizvod i cetiri ostala proizvoda
        return 6; // sirina kolone za bootstrap
    }
}

