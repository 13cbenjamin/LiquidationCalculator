function wsOnLoad(){    

    $('body').css('background-image', 'url("/13Software_app_tac/images/gplaypattern.png")');
    $('textarea').css('white-space' , 'pre-wrap').css('width', '100%');
    $('input[name*="TextBox_"]').addClass("form-control"); // add bootstrap form-control class to TextBox elements
    $('.tac_hiddentext').find('intput[name*="TextBox_"]').removeClass("form-control");
    $('table').find('input[name*="TextBox_"]').css('width', '100%').css('text-align', 'left'); // expand TextBox width to fill table cell
    //declare variable i that is used for # of columns 
    var i;
    //set initial value to 3 for 3 columns displayed. 
    i = 3;
    // set variables to get contents of first box for columns 1,4,5,6. 
    var checkfirstbox = document.getElementById("TextBox_93_221").value;
    var checkfourthbox = document.getElementById("TextBox_93_251").value;
    var checkfifthbox = document.getElementById("TextBox_93_261").value;
    var checksixthbox = document.getElementById("TextBox_93_271").value;
    //disable any fields with class "tac_readonly" and set background to yellow 
    $(".tac_readonly").prop( "disabled", true );
    $('.tac_readonly').css('background-color' , '#FFFCBB');
    $('.tac_hiddentext').find('input').hide();

    //CHeck if first load (Determined if first asset value is blank) if so, run Reset function to populate fields with $0.00 
    // if not first load, then check to see if hidden columns contain value in first box, if so, show them, if not, hide them. 
    if (checkfirstbox == '') {
        Reset();
        //console.log("2")
    }
    else {
      //  $('.tac_hiddentext').find('input').show();
        other_amount_input();
       // console.log("Not FIrst Load")
        //if Fourth, Fifth and Sixth column first box is empty then collapse. 
        if (checkfourthbox == '$0.00' && checkfifthbox == '$0.00' && checksixthbox == '$0.00') {
            collapse();
         //   console.log("first box 4 5 6 == $0.00");
         //   i = 3;
        }//if only fifth adn sixth are $0.00 then don't show those
        else if (checkfifthbox == '$0.00' && checksixthbox == '$0.00') {
            $('.tac_hiddencolumn2').hide();
            $('.tac_hiddencolumn3').hide();
            $('.tac_adjustcolumn').attr('colspan',6);
            $('.tac_adjustcolumn2').attr('colspan',5);
            $('.tac_adjustcolumn3').attr('colspan',4);
           // console.log("first box 5 6 == $0.00"); 
           

        }//if only sixth box is $0.00 then don't show it. 
        else if (checksixthbox == '$0.00') {
            $('.tac_hiddencolumn3').hide();
            $('.tac_adjustcolumn').attr('colspan',7);
            $('.tac_adjustcolumn2').attr('colspan',6);
            $('.tac_adjustcolumn3').attr('colspan',5);
           // console.log("first box 6 == $0.00"); 
           

        } // otherwise if information is in the first box for all 6 columns, show all fields. 
        else {
           i = 5;
           AddColumn();
        //console.log(" show all 6 boxes");

        };
        $("select.asset1").val(document.getElementById("TextBox_93_101").value).change();
        $("select.asset2").val(document.getElementById("TextBox_93_102").value).change();
        $("select.asset3").val(document.getElementById("TextBox_93_103").value).change();
        $("select.asset4").val(document.getElementById("TextBox_93_104").value).change();
        $("select.asset5").val(document.getElementById("TextBox_93_105").value).change();
        $("select.asset6").val(document.getElementById("TextBox_93_106").value).change();

       
    }

// on each text box change, run the Other Amount Input function to perform calculations 
    $('[id^=TextBox_]').on('change', function () { 
        other_amount_input();
       
    })



    // if drop down selection is Real Pperty, set the cost of sale to 8.00 

    $("select.asset1").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_101").value = selectedasset;

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_523").value = "8.00";
          
        }
        else {
            document.getElementById("TextBox_93_523").value = "0";
        }
    });
    $("select.asset2").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_102").value = selectedasset;
       

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_533").value = "8.00";
        }
        else {
            document.getElementById("TextBox_93_533").value = "0";
        }
    });
    $("select.asset3").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_103").value = selectedasset;
       

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_543").value = "8.00";
        }
        else {
            document.getElementById("TextBox_93_543").value = "0";
        }
    });
    $("select.asset4").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_104").value = selectedasset;
       

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_553").value = "8.00";
        }
        else {
            document.getElementById("TextBox_93_553").value = "0";
        }
    });
    $("select.asset5").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_105").value = selectedasset;
       

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_563").value = "8.00";
        }
        else {
            document.getElementById("TextBox_93_563").value = "0";
        }
    });
    $("select.asset6").change(function(){
        var selectedasset = $(this).children("option:selected").val();
        document.getElementById("TextBox_93_106").value = selectedasset;
       

        if (selectedasset == "Real Property") {
           
           document.getElementById("TextBox_93_573").value = "8.00";
        }
        else {
            document.getElementById("TextBox_93_573").value = "0";
        }
    });


// check for button clicks. This method of checking doesn't cause the page to refresh 
$("[id^=resetButton]").click( function () {
   // //console.log("resetButton clicked")
    Reset();
});

$("[id^=addColumn]").click(function () {
   // //console.log("addColumn clicked")
    AddColumn();
 });

 $("[id^=removeColumn]").click(function () {
   // //console.log("removeColumn clicked")
     RemoveColumn();
 });

 $("[id^=calculateButton]").on('click', function () {
   // //console.log("calculateButton clicked")
   SaveEvent();
   alert("Save complete, please create snapshot")
});

function RemoveColumn() { // hide columns
    if (i > 5) 
    { //hide column 6
        $('.tac_hiddencolumn3').hide();
        $('.tac_adjustcolumn').attr('colspan',7);
        $('.tac_adjustcolumn2').attr('colspan',6);
        $('.tac_adjustcolumn3').attr('colspan',5); 
        i=6;
        i--;
    }
else if (i == 5) 
    { //hide column 5
        $('.tac_hiddencolumn2').hide();
        $('.tac_adjustcolumn').attr('colspan',6);
        $('.tac_adjustcolumn2').attr('colspan',5);
        $('.tac_adjustcolumn3').attr('colspan',4); 
        i=5
        i--;
    }
else if (i = 4) 
    { //hide column 4
        $('.tac_hiddencolumn1').hide();
        $('.tac_adjustcolumn').attr('colspan',5);
        $('.tac_adjustcolumn2').attr('colspan',4);
        $('.tac_adjustcolumn3').attr('colspan',3);
        i = 4;
        i--;
    }
else
    { //error minimum columns
        alert("Maximum number of columns have been removed");
        i = 3; 
    }   

    //console.log("i =: " + i)

}

function AddColumn() 
{

//console.log("i at beginning of function" + i)
if (i < 4) //when i = 3, show 4th column
    {
        $('.tac_hiddencolumn1').show();
        $('.tac_adjustcolumn').attr('colspan',6);
        $('.tac_adjustcolumn2').attr('colspan',5);
        $('.tac_adjustcolumn3').attr('colspan',4); 
        i = 3
        i++;
        //console.log("I ran i < 4");
    }
else if (i == 4) 
    { //show 5th column 
        $('.tac_hiddencolumn2').show();
        $('.tac_adjustcolumn').attr('colspan',7);
        $('.tac_adjustcolumn2').attr('colspan',6);
        $('.tac_adjustcolumn3').attr('colspan',5); 
        i = 4;
        i++;
        //console.log("I ran i > 3 && i < 5 ");

    }
else if (i == 5) 
    { //show 6th column
        $('.tac_hiddencolumn3').show();
        $('.tac_adjustcolumn').attr('colspan',8);
        $('.tac_adjustcolumn2').attr('colspan',7);
        $('.tac_adjustcolumn3').attr('colspan',6); 
        i=5
        i++;
        //console.log("I Ran i > 4 && i < 6 ")
    }
else
    { // error max columns reached 
        alert("Maximum number of columns have been added");
        //i = 3;
    }   
    //i++;
    //console.log("i at end of function =: " + i)
     

}

}



function other_amount_input() {
    clean_numbers(); 
    calculate_values1();  
    add_format(); 
    
    //postEvent();
} 

function calculate_values1(){
    try {
    var fairmarketsum = parseFloat(document.getElementById("TextBox_93_221").value) + parseFloat(document.getElementById("TextBox_93_231").value) + parseFloat(document.getElementById("TextBox_93_241").value) + parseFloat(document.getElementById("TextBox_93_251").value) + parseFloat(document.getElementById("TextBox_93_261").value) + parseFloat(document.getElementById("TextBox_93_271").value);
    document.getElementById("TextBox_93_281").value = fairmarketsum ;
    var DAGI_ONE= parseFloat(document.getElementById("TextBox_93_221").value) * (parseFloat(document.getElementById("TextBox_93_222").value)/100);
    document.getElementById("TextBox_93_223").value = DAGI_ONE ;
    document.getElementById("TextBox_93_521").value = DAGI_ONE ;
    var DAGI_TWO= parseFloat(document.getElementById("TextBox_93_231").value) * (parseFloat(document.getElementById("TextBox_93_232").value)/100);
    document.getElementById("TextBox_93_233").value = DAGI_TWO ;
    document.getElementById("TextBox_93_531").value = DAGI_TWO ;
    var DAGI_THREE= parseFloat(document.getElementById("TextBox_93_241").value) * (parseFloat(document.getElementById("TextBox_93_242").value)/100);
    document.getElementById("TextBox_93_243").value = DAGI_THREE ;
    document.getElementById("TextBox_93_541").value = DAGI_THREE ;
    var DAGI_FOUR= parseFloat(document.getElementById("TextBox_93_251").value) * (parseFloat(document.getElementById("TextBox_93_252").value)/100);
    document.getElementById("TextBox_93_253").value = DAGI_FOUR ;
    document.getElementById("TextBox_93_551").value = DAGI_FOUR ;
    var DAGI_FIVE= parseFloat(document.getElementById("TextBox_93_261").value) * (parseFloat(document.getElementById("TextBox_93_262").value)/100);
    document.getElementById("TextBox_93_263").value = DAGI_FIVE ;
    document.getElementById("TextBox_93_561").value = DAGI_FIVE ;
    var DAGI_SIX= parseFloat(document.getElementById("TextBox_93_271").value) * (parseFloat(document.getElementById("TextBox_93_272").value)/100);
    document.getElementById("TextBox_93_273").value = DAGI_SIX ;
    document.getElementById("TextBox_93_571").value = DAGI_SIX ;
    //Calculate Pro-Rated Liens 
    var PRL_ONE= parseFloat(document.getElementById("TextBox_93_224").value) * (parseFloat(document.getElementById("TextBox_93_222").value)/100);
    document.getElementById("TextBox_93_225").value = PRL_ONE ;
    document.getElementById("TextBox_93_526").value = PRL_ONE ;
    var PRL_TWO= parseFloat(document.getElementById("TextBox_93_234").value) * (parseFloat(document.getElementById("TextBox_93_232").value)/100);
    document.getElementById("TextBox_93_235").value = PRL_TWO ;
    document.getElementById("TextBox_93_536").value = PRL_TWO ;
    var PRL_THREE= parseFloat(document.getElementById("TextBox_93_244").value) * (parseFloat(document.getElementById("TextBox_93_242").value)/100);
    document.getElementById("TextBox_93_245").value = PRL_THREE ;
    document.getElementById("TextBox_93_546").value = PRL_THREE ;
    var PRL_FOUR= parseFloat(document.getElementById("TextBox_93_254").value) * (parseFloat(document.getElementById("TextBox_93_252").value)/100);
    document.getElementById("TextBox_93_255").value = PRL_FOUR ;
    document.getElementById("TextBox_93_556").value = PRL_FOUR ;
    var PRL_FIVE= parseFloat(document.getElementById("TextBox_93_264").value) * (parseFloat(document.getElementById("TextBox_93_262").value)/100);
    document.getElementById("TextBox_93_265").value = PRL_FIVE ;
    document.getElementById("TextBox_93_566").value = PRL_FIVE ;
    var PRL_SIX= parseFloat(document.getElementById("TextBox_93_274").value) * (parseFloat(document.getElementById("TextBox_93_272").value)/100);
    document.getElementById("TextBox_93_275").value = PRL_SIX ;
    document.getElementById("TextBox_93_576").value = PRL_SIX ;

    //Calculate Debtor's Equity (DAGI - Pro-Rated Leins)
    var EQU_ONE= parseFloat(document.getElementById("TextBox_93_223").value) - parseFloat(document.getElementById("TextBox_93_225").value);
    document.getElementById("TextBox_93_226").value = EQU_ONE ;
    var EQU_TWO= parseFloat(document.getElementById("TextBox_93_233").value) - parseFloat(document.getElementById("TextBox_93_235").value);
    document.getElementById("TextBox_93_236").value = EQU_TWO ;
    var EQU_THREE= parseFloat(document.getElementById("TextBox_93_243").value) - parseFloat(document.getElementById("TextBox_93_245").value);
    document.getElementById("TextBox_93_246").value = EQU_THREE ;
    var EQU_FOUR= parseFloat(document.getElementById("TextBox_93_253").value) - parseFloat(document.getElementById("TextBox_93_255").value);
    document.getElementById("TextBox_93_256").value = EQU_FOUR ;
    var EQU_FIVE= parseFloat(document.getElementById("TextBox_93_263").value) - parseFloat(document.getElementById("TextBox_93_265").value);
    document.getElementById("TextBox_93_266").value = EQU_FIVE ;
    var EQU_SIX= parseFloat(document.getElementById("TextBox_93_273").value) - parseFloat(document.getElementById("TextBox_93_275").value);
    document.getElementById("TextBox_93_276").value = EQU_SIX ;
    //SUM Debtor's Equity
    var debtorequitysum = parseFloat(document.getElementById("TextBox_93_226").value) + parseFloat(document.getElementById("TextBox_93_236").value) + parseFloat(document.getElementById("TextBox_93_246").value) + parseFloat(document.getElementById("TextBox_93_256").value) + parseFloat(document.getElementById("TextBox_93_266").value) + parseFloat(document.getElementById("TextBox_93_276").value);
    document.getElementById("TextBox_93_286").value = debtorequitysum ;
    //Sum Exemptions
    var EXEM_ONE= parseFloat(document.getElementById("TextBox_93_322").value) + parseFloat(document.getElementById("TextBox_93_323").value);
    document.getElementById("TextBox_93_324").value = EXEM_ONE ;
    var EXEM_TWO= parseFloat(document.getElementById("TextBox_93_332").value) + parseFloat(document.getElementById("TextBox_93_333").value);
    document.getElementById("TextBox_93_334").value = EXEM_TWO ;
    var EXEM_THREE= parseFloat(document.getElementById("TextBox_93_342").value) + parseFloat(document.getElementById("TextBox_93_343").value);
    document.getElementById("TextBox_93_344").value = EXEM_THREE ;
    var EXEM_FOUR= parseFloat(document.getElementById("TextBox_93_352").value) + parseFloat(document.getElementById("TextBox_93_353").value);
    document.getElementById("TextBox_93_354").value = EXEM_FOUR ;
    var EXEM_FIVE= parseFloat(document.getElementById("TextBox_93_362").value) + parseFloat(document.getElementById("TextBox_93_363").value);
    document.getElementById("TextBox_93_364").value = EXEM_FIVE ;
    var EXEM_SIX= parseFloat(document.getElementById("TextBox_93_372").value) + parseFloat(document.getElementById("TextBox_93_373").value);
    document.getElementById("TextBox_93_374").value = EXEM_SIX ;

    //Sum Total Exemptions
    var debtorexemsum = EXEM_ONE + EXEM_TWO + EXEM_THREE + EXEM_FOUR + EXEM_FIVE + EXEM_SIX;
    document.getElementById("TextBox_93_384").value = debtorexemsum;

    } catch (error) {
        console.lol("Error: " + error)
    }
    

//Try Hypothetical Calulations 
    try {
        //declare calulation variables 
    var A1,L1,E1,A2,L2,E2,A3,L3,E3,A4,L4,E4,A5,L5,E5,A6,L6,E6,F1,F2,FFinal,FeeT1,FeeT2,FeeT3,AddT1,AddT2,AddT3,C1,C2,C3,P1,P2,P3;
    FeeT1 = 5000;
    FeeT2 = 50000;
    FeeT3 = 1000000;
    C1 = 5000; 
    C2 = 50000;
    C3 = 1000000;
    AddT1 = 1250;
    AddT2 = 5750;
    AttT3 = 53250;
    P1 = .25
    P2 = .10
    P3 = .05
    P4 = .03

    //Create variables for each set of Assets, Liens, and Equity total columns to use for calculation. 
    A1 = parseFloat(document.getElementById("TextBox_93_225").value);
    L1 = parseFloat(document.getElementById("TextBox_93_226").value);
    E1 = parseFloat(document.getElementById("TextBox_93_324").value);
    A2 = parseFloat(document.getElementById("TextBox_93_235").value);
    L2 = parseFloat(document.getElementById("TextBox_93_236").value);
    E2 = parseFloat(document.getElementById("TextBox_93_334").value);
    A3 = parseFloat(document.getElementById("TextBox_93_245").value);
    L3 = parseFloat(document.getElementById("TextBox_93_246").value);
    E3 = parseFloat(document.getElementById("TextBox_93_344").value);
    A4 = parseFloat(document.getElementById("TextBox_93_255").value);
    L4 = parseFloat(document.getElementById("TextBox_93_256").value);
    E4 = parseFloat(document.getElementById("TextBox_93_354").value);
    A5 = parseFloat(document.getElementById("TextBox_93_265").value);
    L5 = parseFloat(document.getElementById("TextBox_93_266").value);
    E5 = parseFloat(document.getElementById("TextBox_93_364").value);
    A6 = parseFloat(document.getElementById("TextBox_93_275").value);
    L6 = parseFloat(document.getElementById("TextBox_93_276").value);
    E6 = parseFloat(document.getElementById("TextBox_93_374").value);

    //Run calculation for each asset and update Hypothetical Fees, Add hypothetical additional fees and update lower fees box
    //Last 3 boxes are passed as element ID numbers for updating/calculating in the function 
    // Prorated Liens, Equity, Exemptions, Hypotehtical Fees, Additional Hypothetical Fees, Fees 
    hypotheticalcalc(A1,L1,E1,"TextBox_93_421","TextBox_93_426","TextBox_93_522");
    hypotheticalcalc(A2,L2,E2,"TextBox_93_431","TextBox_93_436","TextBox_93_532");
    hypotheticalcalc(A3,L3,E3,"TextBox_93_441","TextBox_93_446","TextBox_93_542");
    hypotheticalcalc(A4,L4,E4,"TextBox_93_451","TextBox_93_456","TextBox_93_552");
    hypotheticalcalc(A5,L5,E5,"TextBox_93_461","TextBox_93_466","TextBox_93_562");
    hypotheticalcalc(A6,L6,E6,"TextBox_93_471","TextBox_93_476","TextBox_93_572");

    
function hypotheticalcalc(A,L,E,F1,F2,FFinal){
                if (L-E==0){
                    var result = 0;
                    document.getElementById(F1).value = result;
                    document.getElementById(FFinal).value = result + parseFloat(document.getElementById(F2).value);  
                //console.log("Ran L-E==0")
                //console.log("L: " + L)
                //console.log("E: " + E)
                

                }
                
               else if ((A + L - E) < C1) {
                    var result = (P1*(A+L-E))
                    document.getElementById(F1).value = result;  
                    document.getElementById(FFinal).value = result + parseFloat(document.getElementById(F2).value);  

                }
                else if (((A + L - E) >= C1) && ((A + L - E) < C2)) {
                    var result = (AddT1 + (P2*(A+L-E-FeeT1)))
                    document.getElementById(F1).value = result;  
                    document.getElementById(FFinal).value = result + parseFloat(document.getElementById(F2).value);  
                }
                else if (((A + L - E) >= C2) && ((A + L- E) < C3)) {
                    var result = (AddT2 + (P3*(A+L-E-FeeT2)))
                    document.getElementById(F1).value = result;  
                    document.getElementById(FFinal).value = result + parseFloat(document.getElementById(F2).value);   
                }
                else if ((A + L - E) > C3) {
                    var result = (AddT3 + (P4*(A+L-E-FeeT3)))
                    document.getElementById(F1).value = result;  
                    document.getElementById(FFinal).value = result + parseFloat(document.getElementById(F2).value);   
                }
                else {
                    document.getElementById(F1).value = "Invalid";
                    document.getElementById(FFinal).value = "Invalid";

                }
    }
        
    } catch (error) {
        
    }
    
  //Try Final Determination Calculations   
try {
    //Final Determination calculations 
    //Cost of Sale
    var COS_ONE= parseFloat(document.getElementById("TextBox_93_521").value) * (parseFloat(document.getElementById("TextBox_93_523").value)/100);
    document.getElementById("TextBox_93_524").value = COS_ONE ;
    var COS_TWO= parseFloat(document.getElementById("TextBox_93_531").value) * (parseFloat(document.getElementById("TextBox_93_533").value)/100);
    document.getElementById("TextBox_93_534").value = COS_TWO ;
    var COS_THREE= parseFloat(document.getElementById("TextBox_93_541").value) * (parseFloat(document.getElementById("TextBox_93_543").value)/100);
    document.getElementById("TextBox_93_544").value = COS_THREE ;
    var COS_FOUR= parseFloat(document.getElementById("TextBox_93_551").value) * (parseFloat(document.getElementById("TextBox_93_553").value)/100);
    document.getElementById("TextBox_93_554").value = COS_FOUR ;
    var COS_FIVE= parseFloat(document.getElementById("TextBox_93_561").value) * (parseFloat(document.getElementById("TextBox_93_563").value)/100);
    document.getElementById("TextBox_93_564").value = COS_FIVE ;
    var COS_SIX= parseFloat(document.getElementById("TextBox_93_571").value) * (parseFloat(document.getElementById("TextBox_93_573").value)/100);
    document.getElementById("TextBox_93_574").value = COS_SIX ;
    //Final Value for Schedules
    var FVS_ONE= parseFloat(document.getElementById("TextBox_93_521").value) - parseFloat(document.getElementById("TextBox_93_522").value) - parseFloat(document.getElementById("TextBox_93_524").value);
    document.getElementById("TextBox_93_525").value = parseFloat(FVS_ONE) ;
    var FVS_TWO= parseFloat(document.getElementById("TextBox_93_531").value) - parseFloat(document.getElementById("TextBox_93_532").value) - parseFloat(document.getElementById("TextBox_93_534").value);
    document.getElementById("TextBox_93_535").value = FVS_TWO ;
    var FVS_THREE= parseFloat(document.getElementById("TextBox_93_541").value) - parseFloat(document.getElementById("TextBox_93_542").value) - parseFloat(document.getElementById("TextBox_93_544").value);
    document.getElementById("TextBox_93_545").value = FVS_THREE ;
    var FVS_FOUR= parseFloat(document.getElementById("TextBox_93_551").value) - parseFloat(document.getElementById("TextBox_93_552").value) - parseFloat(document.getElementById("TextBox_93_554").value);
    document.getElementById("TextBox_93_555").value = FVS_FOUR ;
    var FVS_FIVE= parseFloat(document.getElementById("TextBox_93_561").value) - parseFloat(document.getElementById("TextBox_93_562").value) - parseFloat(document.getElementById("TextBox_93_564").value);
    document.getElementById("TextBox_93_565").value = FVS_FIVE ;
    var FVS_SIX= parseFloat(document.getElementById("TextBox_93_571").value) - parseFloat(document.getElementById("TextBox_93_572").value) - parseFloat(document.getElementById("TextBox_93_574").value);
    document.getElementById("TextBox_93_575").value = FVS_SIX ;
    //Net Equity
    var NE_ONE= parseFloat(document.getElementById("TextBox_93_226").value) - parseFloat(document.getElementById("TextBox_93_522").value) - parseFloat(document.getElementById("TextBox_93_524").value);
    document.getElementById("TextBox_93_527").value = NE_ONE ;
    var NE_TWO= parseFloat(document.getElementById("TextBox_93_236").value) - parseFloat(document.getElementById("TextBox_93_532").value) - parseFloat(document.getElementById("TextBox_93_534").value);
    document.getElementById("TextBox_93_537").value = NE_TWO ;
    var NE_THREE= parseFloat(document.getElementById("TextBox_93_246").value) - parseFloat(document.getElementById("TextBox_93_542").value) - parseFloat(document.getElementById("TextBox_93_544").value);
    document.getElementById("TextBox_93_547").value = NE_THREE ;
    var NE_FOUR= parseFloat(document.getElementById("TextBox_93_256").value) - parseFloat(document.getElementById("TextBox_93_552").value) - parseFloat(document.getElementById("TextBox_93_554").value);
    document.getElementById("TextBox_93_557").value = NE_FOUR ;
    var NE_FIVE= parseFloat(document.getElementById("TextBox_93_266").value) - parseFloat(document.getElementById("TextBox_93_562").value) - parseFloat(document.getElementById("TextBox_93_564").value);
    document.getElementById("TextBox_93_567").value = NE_FIVE ;
    var NE_SIX= parseFloat(document.getElementById("TextBox_93_276").value) - parseFloat(document.getElementById("TextBox_93_572").value) - parseFloat(document.getElementById("TextBox_93_574").value);
    document.getElementById("TextBox_93_577").value = NE_SIX ;
    //Net Equity Sum 587
    var netequitysum = NE_ONE + NE_TWO + NE_THREE + NE_FOUR + NE_FIVE + NE_SIX;
    document.getElementById("TextBox_93_587").value = netequitysum ;
    //Total Exemption Sum
    var dagisum = parseFloat(document.getElementById("TextBox_93_521").value) + parseFloat(document.getElementById("TextBox_93_531").value) + parseFloat(document.getElementById("TextBox_93_541").value) + parseFloat(document.getElementById("TextBox_93_551").value) + parseFloat(document.getElementById("TextBox_93_561").value) + parseFloat(document.getElementById("TextBox_93_571").value) 
    document.getElementById("TextBox_93_581").value = dagisum;
    //hyptotehtical sum
    var ch7hypotheticalsum = parseFloat(document.getElementById("TextBox_93_421").value) + parseFloat(document.getElementById("TextBox_93_431").value) + parseFloat(document.getElementById("TextBox_93_441").value) + parseFloat(document.getElementById("TextBox_93_451").value) + parseFloat(document.getElementById("TextBox_93_461").value) + parseFloat(document.getElementById("TextBox_93_471").value);
    document.getElementById("TextBox_93_481").value = ch7hypotheticalsum ;
    //Additional hyptothetical sum
    var ch7hypotheticalsumadd = parseFloat(document.getElementById("TextBox_93_426").value) + parseFloat(document.getElementById("TextBox_93_436").value) + parseFloat(document.getElementById("TextBox_93_446").value) + parseFloat(document.getElementById("TextBox_93_456").value) + parseFloat(document.getElementById("TextBox_93_466").value) + parseFloat(document.getElementById("TextBox_93_476").value);
    document.getElementById("TextBox_93_486").value = ch7hypotheticalsumadd ;

if ((parseFloat(document.getElementById("TextBox_93_226").value) - parseFloat(document.getElementById("TextBox_93_324").value)) == 0) {
document.getElementById("TextBox_93_528").value = parseFloat(document.getElementById("TextBox_93_226").value) - parseFloat(document.getElementById("TextBox_93_524").value)
}
else {
document.getElementById("TextBox_93_528").value = parseFloat(document.getElementById("TextBox_93_324").value) 
}


if ((parseFloat(document.getElementById("TextBox_93_236").value) - parseFloat(document.getElementById("TextBox_93_334").value)) == 0) {
document.getElementById("TextBox_93_538").value = parseFloat(document.getElementById("TextBox_93_236").value) - parseFloat(document.getElementById("TextBox_93_534").value)
}
else {
document.getElementById("TextBox_93_538").value = parseFloat(document.getElementById("TextBox_93_334").value) 
}

if ((parseFloat(document.getElementById("TextBox_93_246").value) - parseFloat(document.getElementById("TextBox_93_344").value)) == 0) {
document.getElementById("TextBox_93_548").value = parseFloat(document.getElementById("TextBox_93_246").value) - parseFloat(document.getElementById("TextBox_93_544").value)
}
else {
document.getElementById("TextBox_93_548").value = parseFloat(document.getElementById("TextBox_93_344").value) 
}

if ((parseFloat(document.getElementById("TextBox_93_256").value) - parseFloat(document.getElementById("TextBox_93_354").value)) == 0) {
document.getElementById("TextBox_93_558").value = parseFloat(document.getElementById("TextBox_93_256").value) - parseFloat(document.getElementById("TextBox_93_554").value)
}
else {
document.getElementById("TextBox_93_558").value = parseFloat(document.getElementById("TextBox_93_354").value) 
}

if ((parseFloat(document.getElementById("TextBox_93_266").value) - parseFloat(document.getElementById("TextBox_93_364").value)) == 0) {
document.getElementById("TextBox_93_568").value = parseFloat(document.getElementById("TextBox_93_266").value) - parseFloat(document.getElementById("TextBox_93_564").value)
}
else {
document.getElementById("TextBox_93_568").value = parseFloat(document.getElementById("TextBox_93_364").value) 
}

if ((parseFloat(document.getElementById("TextBox_93_276").value) - parseFloat(document.getElementById("TextBox_93_374").value)) == 0) {
document.getElementById("TextBox_93_578").value = parseFloat(document.getElementById("TextBox_93_276").value) - parseFloat(document.getElementById("TextBox_93_574").value)
}
else {
document.getElementById("TextBox_93_578").value = parseFloat(document.getElementById("TextBox_93_374").value) 
}

        //Minimum Distribution to all Unsecured Claims:
        var totalexemptionsum = parseFloat(document.getElementById("TextBox_93_528").value)  + parseFloat(document.getElementById("TextBox_93_538").value)  + parseFloat(document.getElementById("TextBox_93_548").value)  + parseFloat(document.getElementById("TextBox_93_558").value)  + parseFloat(document.getElementById("TextBox_93_568").value)  + parseFloat(document.getElementById("TextBox_93_578").value) ;
    document.getElementById("TextBox_93_588").value = totalexemptionsum ; 
    
        var minimumdistro = (parseFloat(netequitysum) - parseFloat(totalexemptionsum));
        //Check if negative (less than zero) show 0, else show number. 
    if (minimumdistro > 0) { 
        document.getElementById("TextBox_93_681").value = minimumdistro;
       // alert("minimum distro: " + minimumdistro)
    }
    else { 
        document.getElementById("TextBox_93_681").value = 0.00;
    }

    
} catch (error) {
    //console.log(error)
    
}
    

}

//perform locale formatting 
function add_format(){
        $('.tac_money').find('input').each(function(){ // convert TextBox value to currency
                        $(this).each(function() {
                            if (!isNaN($(this).val().toString().replace(/[$,]+/g,"")) && $(this).val() != ''){ // remove '$' and ',' check if the value is a number
                            $(this).val(tac_financial($(this).val())); // if the value is a number, convert it to currency format
                            }
                        });
                    });

        $('.tac_readonly').find('input').each(function(){ // convert TextBox value to currency
            $(this).each(function() {
                if (!isNaN($(this).val().toString().replace(/[$,]+/g,"")) && $(this).val() != ''){ // remove '$' and ',' check if the value is a number
                $(this).val(tac_financial($(this).val())); // if the value is a number, convert it to currency format
                }
            });
        });

        // convert numbers entered into TextBox input fields to currency format. 
        $('.tac_percentage').find('input').each(function(){ // convert TextBox value to currency
            $(this).each(function() {
                if (!isNaN($(this).val().toString().replace(/[]+/g,"")) && $(this).val() != ''){ // remove '' check if the value is a number
                $(this).val(tac_percentage($(this).val())); // if the value is a number, convert it to currency format
                }
            });
        });
        
}

//currency format
function tac_financial(x) {
    var num = Number(x.toString().replace(/[$,]+/g,""))
    return num.toLocaleString('en-US', {style:'currency', currency:'USD'});
    }

//percent format 
function tac_percentage(x) {
    var num = Number(x.toString().replace(/[,]+/g,""))
    return parseFloat(num).toFixed(2)+"";
    }

//remove all formats
function clean_numbers(){
       //Convert to plain numbers for calculations
       $('.tac_money').find('input').each(function(){ // convert TextBox value to currency
                        $(this).each(function() {
                            if (!isNaN($(this).val().toString().replace(/[$,]+/g,"")) && $(this).val() != ''){ // remove '$' and ',' check if the value is a number
                            $(this).val(remove_financial($(this).val())); // if the value is a number, convert it to currency format
                            }
                        });
                    });


$('.tac_readonly').find('input').each(function(){ // convert TextBox value to currency
    $(this).each(function() {
        if (!isNaN($(this).val().toString().replace(/[$,]+/g,"")) && $(this).val() != '')
        { // remove '$' and ',' check if the value is a number
            $(this).val(remove_financial($(this).val())); // if the value is currency format, convert it to plain number
        }
    });
});

// convert numbers entered into TextBox input fields to currency format. 
$('.tac_percentage').find('input').each(function(){ // convert TextBox value to currency
    $(this).each(function() {
        if (!isNaN($(this).val().toString().replace(/[]+/g,"")) && $(this).val() != '')
        { // remove '' check if the value is a number
            $(this).val(remove_percentage($(this).val())); // if the value is percentage format, convert it to plain number
        }
    });
});
};

//remove currency
function remove_financial(x){
    var dollarCurrenyValue = x
return Number(dollarCurrenyValue.replace(/[^0-9.-]+/g,""));
}

//remove percent 
function remove_percentage(x){
    var dollarCurrenyValue = x
return Number(dollarCurrenyValue.replace(/[^0-9.-]+/g,""));
}

function collapse() 
{ //initial hide for columns 4,5,6 
        $('.tac_hiddencolumn1').hide();
        $('.tac_hiddencolumn2').hide();
        $('.tac_hiddencolumn3').hide();
        $('.tac_adjustcolumn').attr('colspan',5);
        $('.tac_adjustcolumn2').attr('colspan',4);
        $('.tac_adjustcolumn3').attr('colspan',3);
}

function Reset() { //reset all fields
    $("input:text").val('0.00');
    $('.tac_hiddentext').find('input').val('');
    $('textarea[name*="TextBox_"]').val('');
   
            collapse(); //hide columns 4,5,6
            add_format();
            i=3; // reset i back to 3 
            $('input[name*="TextBox_"]').each(function()
            {
                    var element = document.getElementById(this.id); 
                        var event; 
                        if(typeof(Event) === 'function') 
                        { // non IE browsers 
                            event = new Event('change'); 
                        }
                        else
                        { // IE 
                            event = document.createEvent('Event'); 
                            event.initEvent('change', true, true); 
                        } 
                        element.dispatchEvent(event);
                    })

    };
    


function SaveEvent(){
    $('.tac_readonly').find('input[name*="TextBox_"]').each(function()
        {
            var checkvalue = document.getElementById(this.id).value
            console.log("check value: " + checkvalue)
            if (checkvalue != '$0.00') {
                var element = document.getElementById(this.id); 
                    var event; 
                    if(typeof(Event) === 'function') 
                    { // non IE browsers 
                        event = new Event('change'); 
                    }
                    else
                    { // IE 
                        event = document.createEvent('Event'); 
                        event.initEvent('change', true, true); 
                    } 
                    element.dispatchEvent(event);
                }

    })


    $('.tac_hiddentext').find('input[name*="TextBox_"]').each(function()
    {
       // console.log("check value: " + checkvalue)
       var checkvalue = document.getElementById(this.id).value
       // console.log("check value: " + checkvalue)
        if (checkvalue != '') {
            var element = document.getElementById(this.id); 
                var event; 
                if(typeof(Event) === 'function') 
                { // non IE browsers 
                    event = new Event('change'); 
                }
                else
                { // IE 
                    event = document.createEvent('Event'); 
                    event.initEvent('change', true, true); 
                } 
                element.dispatchEvent(event);
        }

})


    $('.tac_percentage').find('input[name*="TextBox_"]').each(function()
        {
            var checkvalue = document.getElementById(this.id).value
           // console.log("check value: " + checkvalue)
            if (checkvalue != '0.00' || checkvalue != '0') {
                var element = document.getElementById(this.id); 
                    var event; 
                    if(typeof(Event) === 'function') 
                    { // non IE browsers 
                        event = new Event('change'); 
                    }
                    else
                    { // IE 
                        event = document.createEvent('Event'); 
                        event.initEvent('change', true, true); 
                    } 
                    element.dispatchEvent(event);
                }

    })
};


// Left to do 
// Function Test all boxes
// 
