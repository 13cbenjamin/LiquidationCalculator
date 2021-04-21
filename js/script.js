$("input[type='text']").on("click", function () {
  $(this).select();
});
//Current Status: 
//Array Object is built
//tracking changes and updating array object is done 
//final calc is done

$('th').addClass('table-primary')

$("select#101").change(function () {
  var selectedasset = $(this).children("option:selected").val();

  if (selectedasset == "Real Property") {
    document.getElementById("finalpcos413").value = "8";
    let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = 1 
        proxyLiquidation.asset[asset].percentcostofsale = 8;
  } else {
    document.getElementById("finalpcos413").value = "0";
    let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = 1
        proxyLiquidation.asset[asset].percentcostofsale = 0;
  }
});
$("select#102").change(function () {
  var selectedasset = $(this).children("option:selected").val();

  if (selectedasset == "Real Property") {
    document.getElementById("finalpcos423").value = "8";
    let asset = 2 
    proxyLiquidation.asset[asset].percentcostofsale = 8;
  } else {
    document.getElementById("finalpcos423").value = "0";
    let asset = 2 
    proxyLiquidation.asset[asset].percentcostofsale = 0;
  }
});
$("select#103").change(function () {
  var selectedasset = $(this).children("option:selected").val();

  if (selectedasset == "Real Property") {
    document.getElementById("finalpcos433").value = "8";
    let asset = 3 
    proxyLiquidation.asset[asset].percentcostofsale = 8;
  } else {
    document.getElementById("finalpcos433").value = "0";
    let asset = 3 
    proxyLiquidation.asset[asset].percentcostofsale = 8;
  }
});
$("select#104").change(function () {
  var selectedasset = $(this).children("option:selected").val();

  if (selectedasset == "Real Property") {
    document.getElementById("finalpcos443").value = "8";
    let asset = 4 
    proxyLiquidation.asset[asset].percentcostofsale = 8;
  } else {
    document.getElementById("finalpcos443").value = "0";
    let asset = 4 
    proxyLiquidation.asset[asset].percentcostofsale = 8;
  }
});

const liquidationObject = {
    'asset': {
             '1': {
                fairmarketvalue: 0,
                percentownership: 100,
                get sum() { return (this.fairmarketvalue*(this.percentownership/100))},
                dagi: document.getElementById('dagi113'),
                totalvaluesecuredloan:  0,
                proratedlien: document.getElementById('prl115'),
                get prorate() {return (this.totalvaluesecuredloan/(this.percentownership/100))},
                get equity() { return Math.max((this.sum-this.totalvaluesecuredloan), 0)},
                debtorequity: document.getElementById('de116'),
                exemptiontype: '',
                exemptionamount:0,
                wildcardamount: 0,
                get assetexemtotal() { return this.exemptionamount+this.wildcardamount},
                totexemused: document.getElementById('te213'),
                totalhypoch7fee: document.getElementById('hypo311'),
                get feecalc() { return this.prorate+this.equity-this.assetexemtotal},
                addhypoch7fee: 0,
                fdagi: document.getElementById('finaldagi411'),
                ffees: document.getElementById('finalfees412'),
                percentcostofsale: 0,
                get hypocostofsale() { return this.sum*(this.percentcostofsale/100)},
                hypocos: document.getElementById('finalhcos414'),
                fvfs: document.getElementById('finalfvfs415'),
                fprorate: document.getElementById('finalprl416'),
                finalde: document.getElementById('finalde417'),
                finalte: document.getElementById('finalte418')
                },
            '2': {
                fairmarketvalue: 0,
                percentownership: 100,
                get sum() { return (this.fairmarketvalue*(this.percentownership/100))},
                dagi: document.getElementById('dagi123'),
                totalvaluesecuredloan:  0,
                proratedlien: document.getElementById('prl125'),
                get prorate() {return (this.totalvaluesecuredloan/(this.percentownership/100))},
                get equity() { if ((this.sum-this.totalvaluesecuredloan)<0) {
                  return 0;
                } else {return this.sum-this.totalvaluesecuredloan}},
                debtorequity: document.getElementById('de126'),
                exemptiontype: '',
                exemptionamount: 0,
                wildcardamount: 0,
                get assetexemtotal() { return this.exemptionamount+this.wildcardamount},
                totexemused: document.getElementById('te223'),
                totalhypoch7fee: document.getElementById('hypo321'),
                get feecalc() { return this.prorate+this.equity-this.assetexemtotal},
                addhypoch7fee: 0,
                fdagi: document.getElementById('finaldagi421'),
                ffees: document.getElementById('finalfees422'),
                percentcostofsale: 0,
                get hypocostofsale() { return this.sum*(this.percentcostofsale/100)},
                hypocos: document.getElementById('finalhcos424'),
                fvfs: document.getElementById('finalfvfs425'),
                fprorate: document.getElementById('finalprl426'),
                finalde: document.getElementById('finalde427'),
                finalte: document.getElementById('finalte428')
            },
            '3': {
                fairmarketvalue: 0,
                percentownership: 100,
                get sum() { return (this.fairmarketvalue*(this.percentownership/100))},
                dagi: document.getElementById('dagi133'),
                totalvaluesecuredloan:  0,
                proratedlien: document.getElementById('prl135'),
                get prorate() {return (this.totalvaluesecuredloan/(this.percentownership/100))},
                get equity() { if ((this.sum-this.totalvaluesecuredloan)<0) {
                  return 0;
                } else {return this.sum-this.totalvaluesecuredloan}},
                debtorequity: document.getElementById('de136'),
                exemptiontype: '',
                exemptionamount: 0,
                wildcardamount: 0,
                get assetexemtotal() { return this.exemptionamount+this.wildcardamount},
                totexemused: document.getElementById('te233'),
                totalhypoch7fee: document.getElementById('hypo331'),
                get feecalc() { return this.prorate+this.equity-this.assetexemtotal},
                addhypoch7fee: 0,
                fdagi: document.getElementById('finaldagi431'),
                ffees: document.getElementById('finalfees432'),
                percentcostofsale: 0,
                get hypocostofsale() { return this.sum*(this.percentcostofsale/100)},
                hypocos: document.getElementById('finalhcos434'),
                fvfs: document.getElementById('finalfvfs435'),
                fprorate: document.getElementById('finalprl436'),
                finalde: document.getElementById('finalde437'),
                finalte: document.getElementById('finalte438')
            },
            '4': {
              fairmarketvalue: 0,
              percentownership: 100,
              get sum() { return (this.fairmarketvalue*(this.percentownership/100))},
              dagi: document.getElementById('dagi143'),
              totalvaluesecuredloan:  0,
              proratedlien: document.getElementById('prl145'),
              get prorate() {return (this.totalvaluesecuredloan/(this.percentownership/100))},
              get equity() { if ((this.sum-this.totalvaluesecuredloan)<0) {
                return 0;
              } else {return this.sum-this.totalvaluesecuredloan}},
              debtorequity: document.getElementById('de146'),
              exemptiontype: '',
              exemptionamount: 0,
              wildcardamount: 0,
              get assetexemtotal() { return this.exemptionamount+this.wildcardamount},
              totexemused: document.getElementById('te243'),
              totalhypoch7fee: document.getElementById('hypo341'),
              get feecalc() { return this.prorate+this.equity-this.assetexemtotal},
              addhypoch7fee: 0,
              fdagi: document.getElementById('finaldagi441'),
              ffees: document.getElementById('finalfees442'),
              percentcostofsale: 0,
              get hypocostofsale() { return this.sum*(this.percentcostofsale/100)},
              hypocos: document.getElementById('finalhcos444'),
              fvfs: document.getElementById('finalfvfs445'),
              fprorate: document.getElementById('finalprl446'),
              finalde: document.getElementById('finalde447'),
              finalte: document.getElementById('finalte448')
          },
            'TOTALS': {
                get ffmvasum() {return liquidationObject.asset[1].fairmarketvalue + liquidationObject.asset[2].fairmarketvalue + liquidationObject.asset[3].fairmarketvalue + liquidationObject.asset[4].fairmarketvalue},
                ffmvatotal: document.getElementById('totffmva171'),
                get equitysum() {return liquidationObject.asset[1].equity + liquidationObject.asset[2].equity + liquidationObject.asset[3].equity + liquidationObject.asset[4].equity},
                equitytotal: document.getElementById('totde176')

            }
    }
}
// A nested object proxy handler getter. 
// https://gist.github.com/eeropic/2742be1f1e03d94a7d1bc558ef1645b6#file-nestedproxy-js
const handler = {
    get(target, key) {
        if (key == 'isProxy')
            return true;
        const prop = target[key];
        if (typeof prop == 'undefined')
            return;
        if (!prop.isProxy && typeof prop === 'object')
            target[key] = new Proxy(prop, handler);
        return target[key];
    },
    set(target, key, value) {
        target[key] = value;
        return true;
    }
};


//create proxy object
const proxyLiquidation = new Proxy(liquidationObject, handler);


//calculate all function, only called when the calculate button is pressed, will probably remove 
function calcAll(){
    clean_numbers();
    calc();
    add_format();
}


//full calculate
function calc() {
    var i;
    let len = Object.keys(proxyLiquidation.asset).length;
    //loop through array and run each function for each array index
    for (i=1; i <= len-1; i++){   
            dagi(proxyLiquidation.asset[i]);
            equityresult(proxyLiquidation.asset[i]);
            prorateresult(proxyLiquidation.asset[i]);
            totalexem(proxyLiquidation.asset[i]);
            finalcostofsale(proxyLiquidation.asset[i]);
            hypotheticalcalc(proxyLiquidation.asset[i]);
            fvfscalc(proxyLiquidation.asset[i]);
            netequity(proxyLiquidation.asset[i])
    }
    //run additional calculations non-proxyLiquidation specific
    totals(proxyLiquidation.asset['TOTALS'])
    ch7feetotals();
    netequitytotals();
    finaltotexemtotals()
    minimumdistrubtion()
}

//update debtor adjusted gross income in both top and bottom sections
function dagi({sum, dagi, fdagi}){
    
dagi.innerText = sum.toLocaleString("en-US", { style: "currency", currency: "USD" });
fdagi.innerText = sum.toLocaleString("en-US", { style: "currency", currency: "USD" })

}

//update equity calc
function equityresult({debtorequity, equity}){
    debtorequity.innerText = equity.toLocaleString("en-US", { style: "currency", currency: "USD" });;
}
function prorateresult({proratedlien, prorate, fprorate}){
    proratedlien.innerText = prorate.toLocaleString("en-US", { style: "currency", currency: "USD" });
    fprorate.innerText = prorate.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function totals({ffmvatotal, ffmvasum, equitysum, equitytotal}){
    ffmvatotal.innerText = ffmvasum.toLocaleString("en-US", { style: "currency", currency: "USD" });;
    equitytotal.innerText = equitysum.toLocaleString("en-US", { style: "currency", currency: "USD" });
    
}

function totalexem({assetexemtotal, totexemused, finalte}){
    totexemused.innerText = assetexemtotal.toLocaleString("en-US", { style: "currency", currency: "USD" });
    finalte.innerText = assetexemtotal.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function finalcostofsale({hypocostofsale, hypocos}) {
  hypocos.innerText = hypocostofsale.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

// {return this.sum-(parseInt(this.ffees.innerText))-this.hypocostofsale},
function fvfscalc({sum, ffees, hypocostofsale, fvfs}){

  let fees = parseFloat(ffees.innerText.replace(/[$,]+/g, ""));

  let finalvaluecalc = sum-fees-hypocostofsale; 

  fvfs.innerText = finalvaluecalc.toLocaleString("en-US", { style: "currency", currency: "USD" })

}

function netequity({equity, ffees, hypocostofsale, finalde}){
  //net equity = equity minus fees minus hypoi cost of sale
  let fees = parseFloat(ffees.innerText.replace(/[$,]+/g, ""));
  let math = equity - fees - hypocostofsale; 
  if (math < 0){
    math = 0;
  finalde.innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})
  }else {
  finalde.innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})
  }

}

function ch7feetotals(){
  let asset1fee = parseFloat(proxyLiquidation.asset[1].totalhypoch7fee.innerText.replace(/[$,]+/g, ""));
  let asset2fee = parseFloat(proxyLiquidation.asset[2].totalhypoch7fee.innerText.replace(/[$,]+/g, ""));
  let asset3fee = parseFloat(proxyLiquidation.asset[3].totalhypoch7fee.innerText.replace(/[$,]+/g, ""));
  let asset4fee = parseFloat(proxyLiquidation.asset[4].totalhypoch7fee.innerText.replace(/[$,]+/g, ""));
  let math = asset1fee+=asset2fee+=asset3fee+=asset4fee;
  hypoch7total = document.getElementById('totde371')
  hypoch7total.innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})

  let asset1afee = parseFloat(proxyLiquidation.asset[1].addhypoch7fee);
  let asset2afee = parseFloat(proxyLiquidation.asset[2].addhypoch7fee);
  let asset3afee = parseFloat(proxyLiquidation.asset[3].addhypoch7fee);
  let asset4afee = parseFloat(proxyLiquidation.asset[4].addhypoch7fee);
  let matha = asset1afee+=asset2afee+=asset3afee+=asset4afee;
  addhypoch7total = document.getElementById('totaddhypo372')
  addhypoch7total.innerText = matha.toLocaleString("en-US", {style: "currency", currency: "USD"})

}

function netequitytotals(){
  let asset1fee = parseFloat(proxyLiquidation.asset[1].finalde.innerText.replace(/[$,]+/g, ""));
  let asset2fee = parseFloat(proxyLiquidation.asset[2].finalde.innerText.replace(/[$,]+/g, ""));
  let asset3fee = parseFloat(proxyLiquidation.asset[3].finalde.innerText.replace(/[$,]+/g, ""));
  let asset4fee = parseFloat(proxyLiquidation.asset[4].finalde.innerText.replace(/[$,]+/g, ""));
  let math = asset1fee+=asset2fee+=asset3fee+=asset4fee;
  document.getElementById('totde477').innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

function finaltotexemtotals(){
  let asset1fee = parseFloat(proxyLiquidation.asset[1].finalte.innerText.replace(/[$,]+/g, ""));
  let asset2fee = parseFloat(proxyLiquidation.asset[2].finalte.innerText.replace(/[$,]+/g, ""));
  let asset3fee = parseFloat(proxyLiquidation.asset[3].finalte.innerText.replace(/[$,]+/g, ""));
  let asset4fee = parseFloat(proxyLiquidation.asset[4].finalte.innerText.replace(/[$,]+/g, ""));
  let math = asset1fee+=asset2fee+=asset3fee+=asset4fee;
  document.getElementById('totte478').innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

function minimumdistrubtion() {
  let totalnetequity = parseFloat(document.getElementById('totde477').innerText.replace(/[$,]+/g, ""));
  let totalexemptions = parseFloat(document.getElementById('totte478').innerText.replace(/[$,]+/g, ""));
  let math = totalnetequity-totalexemptions;
  if (math <= 0){
    let result = 0;
    document.getElementById('mindist571').innerText = result.toLocaleString("en-US", {style: "currency", currency: "USD"})
  } else {
  document.getElementById('mindist571').innerText = math.toLocaleString("en-US", {style: "currency", currency: "USD"})
  }
}


const formInit = function(){
  document.getElementById('btn-reset').addEventListener('click', formReset);
};

const formReset = function(event) {
  event.preventDefault();
  document.getElementById('liquidation-form').reset();
  proxyReset();
  calcAll();
  jQuery('html, body').animate({ scrollTop: 0 }, 'fast');
};

function proxyReset() {
  var i
  var len = Object.keys(proxyLiquidation.asset).length
  for (i = 1; i <= len; i++) {
      for (let prop in proxyLiquidation.asset[i]) {
          var isGetter = !!Object.getOwnPropertyDescriptor(proxyLiquidation.asset[i], [prop])['get']
          if (!isGetter) {
              if(prop == 'percentageOwnership'){
                  proxyLiquidation.asset[i][prop] = 100;
              }else if(prop == 'percentageCOS'){
                  proxyLiquidation.asset[i][prop] = 0.09;
              }
              else{
                  proxyLiquidation.asset[i][prop] = 0;
              }
          }
      }
  }
};


function hypotheticalcalc({feecalc, totalhypoch7fee, ffees, equity, assetexemtotal}) {
  FeeT1 = 5000;
      FeeT2 = 50000;
      FeeT3 = 1000000;
      C1 = 5000;
      C2 = 50000;
      C3 = 1000000;
      AddT1 = 1250;
      AddT2 = 5750;
      AddT3 = 53250;
      P1 = 0.25;
      P2 = 0.1;
      P3 = 0.05;
      P4 = 0.03;
  if (equity - assetexemtotal == 0 || equity - assetexemtotal < 0) {
    var result = 0;
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else if (feecalc < C1) {
    var result = P1 * (feecalc);
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else if (feecalc >= C1 && feecalc < C2) {
    var result = AddT1 + P2 * (feecalc - FeeT1);
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else if (feecalc >= C2 && feecalc < C3) {
    var result = AddT2 + P3 * (feecalc- FeeT2);
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else if (feecalc > C3) {
    var result = AddT3 + P4 * (feecalc - FeeT3);
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else {
    var result = 0;
    totalhypoch7fee.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
    ffees.innerText = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
}




//############################################
//PROXY OBJECT UPDATE VALUES 
//Update proxyLiquidation when inputs value change
//############################################//
const fairMarketInput = document.querySelectorAll("[data-ffmv-section1]")
fairMarketInput.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].fairmarketvalue = parseFloat(val);
        calcAll();
    });
});

const percentownershipInput = document.querySelectorAll("[data-poo-section1]")
percentownershipInput.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].percentownership = parseFloat(val);
        calcAll();
    });
});

const totalsecureloans = document.querySelectorAll("[data-tvsl-section1]")
totalsecureloans.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].totalvaluesecuredloan = parseFloat(val);
        calcAll();
    });
});

const amountExemption = document.querySelectorAll("[data-aoe-section1]")
amountExemption.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].exemptionamount = parseFloat(val);
        calcAll();
    });
});

const wildcardExemption = document.querySelectorAll("[data-weu-section1]")
wildcardExemption.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].wildcardamount = parseFloat(val);
        calcAll();
    });
});

//totalhypoch7fee
const addhypoch7fee = document.querySelectorAll("[data-hypo-section1]")
addhypoch7fee.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].addhypoch7fee = parseFloat(val);
        calcAll();
    });
});

//percentage cost of sale
const perccostsale = document.querySelectorAll("[data-pcos-section1]")
perccostsale.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].percentcostofsale = parseFloat(val);
        calcAll();
    });
});
const selectval = document.querySelectorAll("[data-select-option]")
selectval.forEach(function(input) {
    input.addEventListener("change", function() {
        let id = this.id
        //gets column by pulling the middle number of the id (ex. 123 would be column2 so asset 2 in array object)
        let asset = id.charAt(id.length - 2)
        let val = this.value
        proxyLiquidation.asset[asset].percentcostofsale = parseFloat(val);
        calcAll();
    });
});


//############################################//
//FORMAT FUNCTIONS
//Adds current format to all inputs if needed 
//############################################//
function add_format() {
    $(".tac_money_lv").find("input").each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[$,]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '$' and ',' check if the value is a number
            $(this).val(tac_financial($(this).val())); // if the value is a number, convert it to currency format
          }
        });
      });
      $(".tac_readonly").find("input").each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[$,]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '$' and ',' check if the value is a number
            $(this).val(tac_financial($(this).val())); // if the value is a number, convert it to currency format
          }
        });
      });

    // convert numbers entered into TextBox input fields to currency format.
    $(".tac_percentage_lv").find("input").each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[%]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '%' check if the value is a number
            $(this).val(tac_percentage($(this).val())); // if the value is a number, convert it to currency format
          }
        });
      });
  }
  //currency format
  function tac_financial(x) {
    var num = Number(x.toString().replace(/[$,]+/g, ""));
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  //percent format
  function tac_percentage(x) {
    var num = Number(x.toString().replace(/[%,]+/g, ""));
    return parseFloat(num).toFixed(2) + "%";
  }

  //remove all formats for calculating purposes 
  function clean_numbers() {
    //Convert to plain numbers for calculations
    $(".tac_money_lv")
      .find("input")
      .each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[$,]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '$' and ',' check if the value is a number
            $(this).val(remove_financial($(this).val())); // if the value is a number, convert it to currency format
          }
        });
      });

    $(".tac_readonly")
      .find("input")
      .each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[$,]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '$' and ',' check if the value is a number
            $(this).val(remove_financial($(this).val())); // if the value is currency format, convert it to plain number
          }
        });
      });

    // convert numbers entered into TextBox input fields to currency format.
    $(".tac_percentage_lv")
      .find("input")
      .each(function () {
        // convert TextBox value to currency
        $(this).each(function () {
          if (
            !isNaN($(this).val().toString().replace(/[%]+/g, "")) &&
            $(this).val() != ""
          ) {
            // remove '%' check if the value is a number
            $(this).val(remove_percentage($(this).val())); // if the value is percentage format, convert it to plain number
          }
        });
      });
  }

  //remove currency
  function remove_financial(x) {
    var dollarCurrenyValue = x;
    return Number(dollarCurrenyValue.replace(/[^0-9.-]+/g, ""));
  }

  //remove percent
  function remove_percentage(x) {
    var dollarCurrenyValue = x;
    return Number(dollarCurrenyValue.replace(/[^0-9.-]+/g, ""));
  }


//###################################//
//Create PDF Area
//###################################//
 //https://github.com/simonbengtsson/jsPDF-AutoTable
 function generate() {
  //get width of tablecontent div
var w = document.getElementById("tableContent").offsetWidth;
  // get height of tabalecontent div
var h = document.getElementById("tableContent").offsetHeight;
//declare the ID to be captured by html2Canvas
let captureCanvas = document.querySelector('#tableContent')
//capture and then pass capture to savePDF function
//scrolls to top, scales by 1.2 times and then captures. 
html2canvas(captureCanvas, {
  scrollY: -window.scrollY,
  scale:1.2}).then(canvas => {
    //sent captured canvas to savePDF for jsPDF
    savePDF(canvas)
  }) 
  //jsPDF function receives canvas variable and creates PDF download and adds case number to saved document name    
  function savePDF(x){
    //get current date/time to add to bottom of PDF
    let current = new Date();
    let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear() ;
    let cTime = current.getHours() + ":" + current.getMinutes();
    var img = x.toDataURL("image/jpeg", 1);
    var doc = new jsPDF("p", "pt", [w, h]);
    //add the image with 20px padding on all sides for printer margin
    doc.addImage(img, "JPEG", 20, 20);
    doc.text("Ran on https://chapter13tacoma.org/liquidation-calculator on " + cDate + " at " + cTime, 20, 1100)
    //doc.text("This information is intended for informational purposes only and should not be construed as constituting legal advice", 20, 1150)
    var casenumber;
    if (document.getElementById("100").value == "") {
      casenumber = "00-00000";
    } else {
      casenumber = document.getElementById("100").value;
    }
    doc.save("Liquidation_Calc_" + casenumber + ".pdf");
}
};
