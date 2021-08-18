
var lastCell;
var lastColumn;
var lastRow;
var objData={};
function excelApp(currDockIcon){
    let appBox=`.box-box[appbox="Excel"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.classList = "active-dot";
            divDot.setAttribute('appBox-dot','Excel-dot');
            currDockIcon.append(divDot);
    }

    //bos is present tho - wo bhaphale opening style hn remove kr do and return - cancel sirf 
    // cancel btn se hoga
    
    let boxBox = document.querySelector(appBox); 
    if(boxBox){
        currDockIcon.removeAttribute('style');
        return;
    }
    
    let div =  document.createElement("div");
    div.classList ="box-box";
    div.setAttribute('appBox',"Excel");
    div.style.zIndex = "75";
    div.innerHTML = `  <div class="box-container">

                            <div class="mac-dialogBox-title">
                                <div class="mac-dialogBox-title-3option-box">
                                    <div class="mac-dialogBox-title-icon1">
                                    </div>
                                    <div class="mac-dialogBox-title-icon2">
                                    </div>
                                    <div class="mac-dialogBox-title-icon3">
                                    </div>
                                </diV>
                                <div class="mac-dialogBox-title-boxText"contenteditable="true">
                                    Excel - Book 1
                                </div>
                            </div>
                            <div class="excel-appSitebox">

                                <div class="excelMenu-bar-section">

                                    <div class="fileBox">
                                        <span>File</span>
                                    </div>
                                 
                                    <div class="helpBox">
                                        <span>Help</span>
                                    </div>

                                </div>

                                <div class="excelMenu-optionBar-section">
                                        

                                            <div class="optionBarTextBox">
                                            <div class="optionInnerBarTextBox">
                                                <span class="material-icons md">
                                                    format_bold
                                                </span>
                                            </div>
                                            <div class="optionInnerBarTextBox">
                                                <span class="material-icons md">
                                                    format_italic
                                                
                                                </span>
                                            </div>
                                            <div class="optionInnerBarTextBox">
                                                <span class="material-icons md">
                                                    strikethrough_s
                                                </span>
                                            </div>
                                        </div>
                                        <div class="optionBarFontBox">
                                            <div class="optionInnerBarFontBox">
                                                    <select name="FontBarBox" id="FontBarBox">
                                                        <option value="Arial">Arial</option>
                                                        <option value="Courier">Courier</option>
                                                        <option value="Brush MT">Brush MT</option>
                                                        <option value="Garamond">Garamond</option>
                                                    </select>
                                            </div>
                                            <div class="optionInnerBarFontSizeBox">
                                                    <select name="FontSizeBarBox" id="FontSizeBarBox">
                                                        <option value="10">10</option>
                                                        <option value="12">12</option>
                                                        <option value="16">16</option>
                                                    </select>
                                            </div>
                                        </div>
                                        <div class="optionBarTextAlignBox">
                                            <div class="optionInnerBarTextAlignBox">
                                                <span class="material-icons alignDecoration">
                                                    format_align_left
                                                </span>
                                            </div>
                                            <div class="optionInnerBarTextAlignBox">
                                                <span class="material-icons alignDecoration">
                                                    format_align_center
                                                </span>
                                            </div>
                                            <div class="optionInnerBarTextAlignBox">
                                                <span class="material-icons alignDecoration">
                                                    format_align_right
                                                </span>
                                            </div>
                                        </div>
                                        <div class="optionBarColorBox">
                                            <div class="optionInnerBarColorBox">
                                               
                                                <span class="material-icons colorBoxBgColor">
                                                    format_color_fill
                                                </span>
                                                
                                            </div>
                                            <div class="optionInnerBarColorBox">
                                                <span class="material-icons colorBoxColorText">
                                                text_format
                                                </span>
                                            </div>
                                        </div>
                                </div>


                                <div class="excel-formula-section">

                                    <div class="excel-selected-cell-div"></div>
                                    <input type="text" class="excel-formula-input" placeholder="Formula">

                                </div>

                                <div class="excel-blank-column-container">
                                    <div class="excel-blank-corner"></div>
                                    <div class="excelColumnSection"></div>
                                </div>
                                <div class="gridExcel">                                 
                                    <div class="excel-rowNum-Section"></div>
                                    <div class="excel-cell-Section"></div>

                                </div>
                                <div class="excelSheetSection"></div>
                                
                            </div>
                    </div>
                `
    divScreenContainer.append(div);
    

        let currBox = document.querySelector('.box-box[appbox="Excel"]');

        if(currBox){
            currDockIcon.addEventListener("click",function(){

                if(lastZIndexAppBOx && lastZIndexAppBOx!='Excel'){
                    let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                    if(lastOpenBox){
                        lastOpenBox.style.zIndex = "0";
                    }
                }
                let currBox = document.querySelector('.box-box[appbox="Excel"]');
                currBox.style.zIndex = "80";
                lastZIndexAppBOx = "Excel";
            })
        }

    let excelFormulaInput = document.querySelector('.excel-formula-input');
        excelFormulaInput.addEventListener("keydown",function(e){
            if(e.key=="Enter"){
                
                let newFormula = excelFormulaInput.value;
                if(!lastCell) return;

                let cellAddress = lastCell.getAttribute('cell-data');
                currCellObj = objData[cellAddress];
                currCellObj.formula =newFormula;

            
                for(let i=0;i<currCellObj.upstream.length;i++){
                    removeFromDownstream(currCellObj.upstream[i],cellAddress);
                }

                currCellObj.upstream = [];

                let formulaArr = newFormula.split(' ');
                let cellInFormula = [];
                for(let k =0;k<formulaArr.length;k++){
                    if(
                        formulaArr[k]!='%' &&
                        formulaArr[k]!='+' &&
                        formulaArr[k]!='-' &&
                        formulaArr[k]!='/' &&
                        formulaArr[k]!='*' &&
                        isNaN(formulaArr[k])
                    ){
                        cellInFormula.push(formulaArr[k]);
                    }
                }
                for(let j=0;j<cellInFormula.length;j++){
                    addToDownStream(cellInFormula[j],cellAddress); 
                }
                currCellObj.upstream=cellInFormula;

                let valueObj={};

                let upstream = currCellObj.upstream;
                for(let k=0;k<upstream.length;k++){
                    valueObj[upstream[k]] = objData[upstream[k]].value;
                }
        
                for(let key in valueObj){
                    newFormula = newFormula.replace(key,valueObj[key])
                }
                
                let newValue = eval(newFormula);
                currCellObj.value = newValue;


                let downstream = currCellObj.downstream;
                for(let i=0;i<downstream.length;i++){
                    updateCell(downstream[i]);
                }

                objData[cellAddress] = currCellObj

                lastCell.innerText = newValue;
                
                excelFormulaInput = "";



            }
        })
        let ExcelGridNum = document.querySelector('.excel-rowNum-Section');
        for(let i=1;i<=100;i++){
            let div = document.createElement('div');
                div.classList ="excelNumBox";
                div.innerText =`${i}`; 
            ExcelGridNum.append(div);
        }

        let excelColumnSection = document.querySelector('.excelColumnSection');
        for(let i=0;i<26;i++){
            let asciiCode = 65+i;
            let reqAlphabet = String.fromCharCode(asciiCode)

            let div = document.createElement('div');
                div.classList = "excel-column-box";
                div.innerText = reqAlphabet;
            excelColumnSection.append(div);
        }
    
    let cellSection= document.querySelector('.excel-cell-Section');
        for(let i=1;i<=100;i++){
            let row =  document.createElement('div');
            row.classList = "excelRow";
            for(let j = 0;j<26;j++){
                let asciiCode = 65+j;
                let reqAlphabet = String.fromCharCode(asciiCode);
                let cellAddress = reqAlphabet + i;
                

// ---------------------------------------------------------------------

                objData[cellAddress] = {
                    value:undefined,
                    formula:undefined,
                    upstream:[],
                    downstream:[],
                    align:undefined,
                    textBoxStyle:[],
                    textFont:undefined,
                    fontSize:undefined,
                    cellBgColor:undefined,
                    cellFontColor:undefined,

                }
// -----------------------------------------------------------------------
                
                let columnCell = document.createElement('div');
                columnCell.classList = "excelColumn";
                columnCell.contentEditable = true;
                columnCell.setAttribute("cell-data",cellAddress);

                columnCell.addEventListener('input',function(e){

                    let currentCellAd = columnCell.getAttribute('cell-data');
                    let currCellObj = objData[currentCellAd]
                    currCellObj.value = e.currentTarget.innerText;
                    currCellObj.formula = undefined;

                    let currUpstream = currCellObj.upstream;

                    for(let k=0;k<currUpstream.length;k++){
                        removeFromDownstream(currUpstream[k],currentCellAd);
                    }
                    currCellObj.upstream =[];

                    let currDownstream = currCellObj.downstream;
                    
                    for(let k=0;k<currDownstream.length;k++){
                        updateCell(currDownstream[k]);
                    }
                    objData[currentCellAd]=currCellObj;

                })

                let formulaBarSelectedArea = document.querySelector('.excel-selected-cell-div');
                columnCell.addEventListener("click",function(e){

                    if(lastCell){
                        lastCell.classList.remove('excelSelectedCell');
                    }
                    e.currentTarget.classList.add("excelSelectedCell");
                    lastCell= e.currentTarget;
                    formulaBarSelectedArea.innerText = cellAddress;

                  
                    if(lastRow){
                        lastRow.style.fontWeight ="";
                        lastRow.style.border = "";
                    }
                    let currAddressCell = lastCell.getAttribute('cell-data');
                    let currCellObj = objData[currAddressCell];


                    let allRow = document.querySelectorAll('.excelNumBox');
                    let currRow = allRow[(currAddressCell.match(/\d+/)[0])-1];
                     lastRow = currRow;
                    currRow.style.fontWeight = 700;
                    currRow.style.border = "2px solid";


                    if(lastColumn){
                        lastColumn.style.fontWeight ="";
                        lastColumn.style.border = "";
                    }
                    let columnAdd = currAddressCell.replace((currAddressCell.match(/\d+/)[0]),"");
                    let allColumn = document.querySelectorAll('.excel-column-box');
                    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    let idx = alphabet.indexOf(columnAdd);
                    let currColumn = allColumn[idx];
                    lastColumn = currColumn;
                    currColumn.style.fontWeight = 700;
                    currColumn.style.border = "2px solid";

                    let alignListNew = document.querySelectorAll('.optionInnerBarTextAlignBox span');
                    let leftAlignNew = alignListNew[0];
                    let centerAlignNew = alignListNew[1];
                    let rightAlignNew = alignListNew[2];
                    let currCellObjAlignValue = currCellObj['align'];

                    if(currCellObjAlignValue=="left"){
                        leftAlignNew.style.backgroundColor = "rgb(206, 214, 224)"; 
                    }else{
                        leftAlignNew.style.backgroundColor = ""; 
                    }

                    if(currCellObjAlignValue=="center"){
                        centerAlignNew.style.backgroundColor = "rgb(206, 214, 224)"; 
                    }else{
                        centerAlignNew.style.backgroundColor = ""; 
                    }

                    if(currCellObjAlignValue=="right"){
                        rightAlignNew.style.backgroundColor = "rgb(206, 214, 224)"; 
                    }else{
                        rightAlignNew.style.backgroundColor = ""; 
                    }
                    
                    //BOx-Style
                    let textBoxStyle = document.querySelectorAll('.optionInnerBarTextBox span');
                    let boldText = textBoxStyle[0];
                    let italic = textBoxStyle[1];
                    let lineThrough = textBoxStyle[2];

                    let currObjTextBoxStyleValue = currCellObj['textBoxStyle'];

                        if(currObjTextBoxStyleValue){
                             
                            if(currObjTextBoxStyleValue.includes("bold")){
                                boldText.style.backgroundColor = "rgb(206, 214, 224)";     
                            }else{
                                boldText.style.backgroundColor = ""; 
                            }

                            if(currObjTextBoxStyleValue.includes("italic")){
                                 italic.style.backgroundColor = "rgb(206, 214, 224)";
                            }else{
                                italic.style.backgroundColor = "";
                            } 

                            if(currObjTextBoxStyleValue.includes("lineThrough")){
                                lineThrough.style.backgroundColor = "rgb(206, 214, 224)";
                            }else{
                                lineThrough.style.backgroundColor = "";
                            } 

                        }

                        //BOx-Style  
                    
                        //FontStyle

                        let textFontNew = document.querySelectorAll('.optionBarFontBox select');
                        let fontNew = textFontNew[0];
                        let textFontBarNew = document.querySelector('.optionInnerBarFontBox');
                        let currCellObjFontValue = currCellObj['textFont'];
                        if(currCellObjFontValue=="Brush MT"){
                            fontNew.selectedIndex ="2";
                            textFontBarNew.style.backgroundColor = "rgb(206, 214, 224)";    
                        }
                        else if(currCellObjFontValue=="Garamond"){
                            fontNew.selectedIndex ="3";
                            textFontBarNew.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        else if(currCellObjFontValue=="Arial"){
                            fontNew.selectedIndex ="0";
                            textFontBarNew.style.backgroundColor = ""; 
                        }
                        else if(currCellObjFontValue=="Courier"){
                            fontNew.selectedIndex ="1";
                            textFontBarNew.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        else{
                            fontNew.selectedIndex ="0";
                            textFontBarNew.style.backgroundColor = ""; 
                        }

                            let fontSizeNew = textFontNew[1];
                            let textFontSizeBar = document.querySelector('.optionInnerBarFontSizeBox');
                            let currCellObjFontSizeValue = currCellObj['fontSize'];
                            if(currCellObjFontSizeValue=="10"){
                                fontSizeNew.selectedIndex ="0";
                                textFontSizeBar.style.backgroundColor = ""; 
                            }else if(currCellObjFontSizeValue=="12"){
                                fontSizeNew.selectedIndex ="1";
                                textFontSizeBar.style.backgroundColor = "rgb(206, 214, 224)";
                            }
                            else if(currCellObjFontSizeValue=="16"){
                                fontSizeNew.selectedIndex ="2";
                                textFontSizeBar.style.backgroundColor = "rgb(206, 214, 224)";
                            }else{
                                fontSizeNew.selectedIndex ="0";
                                textFontSizeBar.style.backgroundColor = ""; 
                            }

                         //FontSize

                         //BgColor

                         let colorOption =  document.querySelectorAll('.optionInnerBarColorBox span');
                         let bgCellColor = colorOption[0];
                        
                         let currCellObjBgColorValue = currCellObj['cellBgColor'];

                         if(currCellObjBgColorValue){
                            bgCellColor.style.backgroundColor = "rgb(206, 214, 224)"; 
                         }else{
                            bgCellColor.style.backgroundColor = ""; 
                         }
                         //BgColor

                         //FontColor
                         let textColor = colorOption[1];
                         
                         let currCellObjFontColorValue = currCellObj['cellFontColor'];
                         if(currCellObjFontColorValue){
                            textColor.style.backgroundColor = "rgb(206, 214, 224)"; 
                         }
                         else{
                            textColor.style.backgroundColor = ""; 
                         }
                         //FontColor
                        
                })
                row.append(columnCell);
            }
            cellSection.append(row)
        }


        if(localStorage.getItem('excelSheet')){ 
            objData = JSON.parse(localStorage.getItem('excelSheet'));
            for(let cellAd in objData){
                
                let currCell = document.querySelector(`[cell-data=${cellAd}]`);
                let currObj = objData[cellAd];
                
                if(currObj.value){
                    currCell.innerText = currObj.value;
                }
                if(currObj.align){
                    currCell.style.textAlign = currObj.align;
                }
                if(currObj.cellBgColor){
                    currCell.style.backgroundColor = currObj.cellBgColor;
                }

                if(currObj.cellFontColor){
                    currCell.style.color = currObj.cellFontColor;
                }

                if(currObj.fontSize){
                    if(currObj.fontSize=="10"){
                        currCell.style.fontSize ="2.1vh";
                    }else if(currObj.fontSize=="12"){
                        currCell.style.fontSize ="2.3vh"
                    }else if(currObj.fontSize=="16"){
                        console.log("a");
                        currCell.style.fontSize ="2.5vh"
                    }
                }

                // console.log(currCell.textFont);                  
                if(currObj.textFont){ 
                    if(currObj.textFont =="Brush MT"){
                        currCell.style.fontFamily = "Brush Script MT";
                    }else if(currObj.textFont =="Garamond"){
                        currCell.style.fontFamily = "Garamond";
                    }else if(currObj.textFont =="Courier"){
                        currCell.style.fontFamily ="Courier";
                    }else if(currObj.textFont =="Arial"){
                        currCell.style.fontFamily ="Arial";
                    }
                }
                if(currObj.textBoxStyle.length>0){
                    if(currObj.textBoxStyle.includes('bold')){
                        currCell.style.fontWeight = "700";
                    }

                    if(currObj.textBoxStyle.includes('italic')){
                        currCell.style.fontStyle = "italic";
                    }
                    if(currObj.textBoxStyle.includes('lineThrough')){
                        currCell.style.textDecoration = "line-through"
                    }
                }

            }
        }


        let blankColumnContainer = document.querySelector('.gridExcel');
        let blankColumnContainerScroll = document.querySelector('.excel-blank-column-container');
        blankColumnContainer.addEventListener("scroll",function(e){
            blankColumnContainerScroll.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`
        })
        cancelCircle(currDockIcon,appBox);
        fullScreenCircle(appBox);
        minimize(appBox);


         
        //barSection work
        
        //Align
            let alignList = document.querySelectorAll('.optionInnerBarTextAlignBox span');
            let leftAlign = alignList[0];
            let centerAlign = alignList[1];
            let rightAlign = alignList[2];

            leftAlign.addEventListener('click',function(){
                if(lastCell){

                    let cellAddress = lastCell.getAttribute('cell-data');
                    let currCellObj = objData[cellAddress];

                    if(lastCell && currCellObj['align']=="left"){
                        lastCell.style.textAlign = "";
                        currCellObj.align = "";
                        leftAlign.style.backgroundColor = "";
                        centerAlign.style.backgroundColor = "";
                        rightAlign.style.backgroundColor = "";
                        return;
                    }
                    else if(lastCell && currCellObj['align']!="left"){

                            lastCell.style.textAlign = "left";
                            leftAlign.style.backgroundColor = "rgb(206, 214, 224)";
                            centerAlign.style.backgroundColor = "";
                            rightAlign.style.backgroundColor = "";
                            currCellObj.align = "left";
                            return;
                    }
                }
            });
            centerAlign.addEventListener('click',function(){
                if(lastCell){

                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];

                        if(lastCell && currCellObj['align']=="center"){
                            lastCell.style.textAlign = "";
                            currCellObj.align = "";
                            centerAlign.style.backgroundColor = "";
                            return;
                        }
                        else if(lastCell && currCellObj['align']!="center"){
                                lastCell.style.textAlign = "center";
                                centerAlign.style.backgroundColor = "rgb(206, 214, 224)";
                                leftAlign.style.backgroundColor = "";
                                rightAlign.style.backgroundColor = "";
                                currCellObj.align = "center";
                                return;
                        }
                    }

            });
            rightAlign.addEventListener('click',function(){
                if(lastCell){
                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];

                        if(lastCell && currCellObj['align']=="right"){
                            lastCell.style.textAlign = "";
                            currCellObj.align = "";
                            rightAlign.style.backgroundColor = "";
                            return;
                        }
                        else if(lastCell && currCellObj['align']!="right"){
                            lastCell.style.textAlign = "right";
                            rightAlign.style.backgroundColor = "rgb(206, 214, 224)";
                            centerAlign.style.backgroundColor = "";
                            leftAlign.style.backgroundColor = "";
                            currCellObj.align = "right";
                            return;
                        }
                }
            });
            
        // Align

        //textStyle

            let textBoxStyle = document.querySelectorAll('.optionInnerBarTextBox span');

            let boldText = textBoxStyle[0];
            let italic = textBoxStyle[1];
            let lineThrough = textBoxStyle[2];

            boldText.addEventListener('click',function(){
                if(lastCell){
                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];
                        let currObjTextBoxStyleValue = currCellObj['textBoxStyle'];
                        if(lastCell && currObjTextBoxStyleValue.includes("bold")){
                            let newArr = [];
                            for(let i=0;i<currObjTextBoxStyleValue.length;i++){
                                if(currObjTextBoxStyleValue[i]!="bold"){
                                    newArr.push(currObjTextBoxStyleValue[i]);
                                }
                            }
                            currObjTextBoxStyleValue = newArr;
                            boldText.style.backgroundColor = "";
                            lastCell.style.fontWeight ="";
                            currCellObj.textBoxStyle =currObjTextBoxStyleValue;
                            return;
                        }
                        else if(lastCell && !currObjTextBoxStyleValue.includes("bold")){
                            lastCell.style.fontWeight = "700";
                            boldText.style.backgroundColor = "rgb(206, 214, 224)";
                            currObjTextBoxStyleValue.push("bold");
                            return;
                        }
                }

            });
            italic.addEventListener('click',function(){
                if(lastCell){
                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];
                        let currObjTextBoxStyleValue = currCellObj['textBoxStyle'];
                        if(lastCell && currObjTextBoxStyleValue.includes("italic")){
                            let newArr = [];
                            for(let i=0;i<currObjTextBoxStyleValue.length;i++){
                                if(currObjTextBoxStyleValue[i]!="italic"){
                                    newArr.push(currObjTextBoxStyleValue[i]);
                                }
                            }
                            currObjTextBoxStyleValue = newArr;
                            italic.style.backgroundColor = "";
                            lastCell.style.fontStyle ="";
                            currCellObj.textBoxStyle =currObjTextBoxStyleValue;
                            return;
                        }
                        else if(lastCell && !currObjTextBoxStyleValue.includes("italic")){
                            lastCell.style.fontStyle = "italic";
                            italic.style.backgroundColor = "rgb(206, 214, 224)";
                            currObjTextBoxStyleValue.push("italic");
                            return;
                        }
                    }
            });
            lineThrough.addEventListener('click',function(){
                if(lastCell){

                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];
                        let currObjTextBoxStyleValue = currCellObj['textBoxStyle'];
                        if(lastCell && currObjTextBoxStyleValue.includes("lineThrough")){
                            let newArr = [];

                            for(let i=0;i<currObjTextBoxStyleValue.length;i++){
                                if(currObjTextBoxStyleValue[i]!="lineThrough"){
                                    newArr.push(currObjTextBoxStyleValue[i]);
                                }
                            }

                            currObjTextBoxStyleValue = newArr;
                            lineThrough.style.backgroundColor = "";
                            lastCell.style.textDecoration = "";
                            currCellObj.textBoxStyle = currObjTextBoxStyleValue;
                            return;
                        }
                        else if(lastCell && !currObjTextBoxStyleValue.includes("lineThrough")){
                            lastCell.style.textDecoration = "line-through"
                            lineThrough.style.backgroundColor = "rgb(206, 214, 224)";
                            currObjTextBoxStyleValue.push("lineThrough");
                            return;
                        }
                }
            });

        //textStyle

        //fontStyle

                let textFont = document.querySelectorAll('.optionBarFontBox select');
                let textFontBar = document.querySelector('.optionInnerBarFontBox');
                let font = textFont[0];
          
                font.addEventListener("change",function(e){
                    if(lastCell){
                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];
                        let currFont =  e.currentTarget.value;

                        if(currFont =="Brush MT"){
                            lastCell.style.fontFamily = "Brush Script MT";
                            currCellObj.textFont = "Brush MT";
                            textFontBar.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        if(currFont =="Garamond"){
                            lastCell.style.fontFamily = "Garamond";
                            currCellObj.textFont = "Garamond";
                            textFontBar.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        if(currFont =="Courier"){
                            lastCell.style.fontFamily = "Courier";
                            currCellObj.textFont = "Courier";
                            textFontBar.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        if(currFont =="Arial"){
                            lastCell.style.fontFamily = "Arial";
                            currCellObj.textFont = "Arial";
                            textFontBar.style.backgroundColor = ""; 
                        }
                    }
                })

                let fontsize = textFont[1];
                fontsize.addEventListener("change",function(e){
                    if(lastCell){
                    let cellAddress = lastCell.getAttribute('cell-data');
                    let textFontSizeBar = document.querySelector('.optionInnerBarFontSizeBox')
                        let currCellObj = objData[cellAddress];
                        let currFontSize =  e.currentTarget.value;

                        if(currFontSize =="10"){
                            lastCell.style.fontSize ="2.1vh"
                            currCellObj.fontSize = "10";
                            textFontSizeBar.style.backgroundColor = ""; 
                        }
                        if(currFontSize =="12"){
                            lastCell.style.fontSize ="2.3vh"
                            currCellObj.fontSize = "12";
                            textFontSizeBar.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                        if(currFontSize =="16"){
                            lastCell.style.fontSize ="2.5vh"
                            currCellObj.fontSize = "16";
                            textFontSizeBar.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                    }
                });
        //fontStyle

        //bgCellColor

                let colorOption =  document.querySelectorAll('.optionInnerBarColorBox span');
                let divBoxCreate = document.querySelectorAll('.optionInnerBarColorBox');
                let box1 = divBoxCreate[0];
                let box2 = divBoxCreate[1];
                let bgCellColor = colorOption[0];
                let textColor = colorOption[1];
                bgCellColor.addEventListener("click",function(){
                     if(box1.querySelector('.bgCellColor')){
                        if(lastCell){
                            let cellAddress = lastCell.getAttribute('cell-data');
                            let currCellObj = objData[cellAddress]

                            bgCellColor.style.backgroundColor = ""; 
                            let oldBox= box1.querySelector('.bgCellColor');
                            oldBox.parentNode.removeChild(oldBox);
                            lastCell.style.backgroundColor = '';
                            currCellObj.cellBgColor = "";
                            return;
                        }
                     };
                    let div =  document.createElement("div");
                    div.classList.add("bgCellColor");
                    let inputColor = document.createElement("input");
                    inputColor.type="color";
                    div.append(inputColor);
                    box1.append(div);
                    setTimeout(() => {
                        inputColor.click();
                    },10);
                    inputColor.addEventListener('input',function(e){
                        if(lastCell){
                          
                            let cellAddress = lastCell.getAttribute('cell-data');
                            let currCellObj = objData[cellAddress];
                             let currBgColor =  e.currentTarget.value;
                            lastCell.style.backgroundColor = `${currBgColor}`
                            currCellObj.cellBgColor = currBgColor;
                            bgCellColor.style.backgroundColor = "rgb(206, 214, 224)"; 
                        }
                    })
                })
        //bgCellColor

        //textColor
        textColor.addEventListener("click",function(){
                    if(box2.querySelector('.bgCellColor')){
                    let cellAddress = lastCell.getAttribute('cell-data');
                    let currCellObj = objData[cellAddress]
                        textColor.style.backgroundColor = ""; 
                        let oldBox= box2.querySelector('.bgCellColor');
                        oldBox.parentNode.removeChild(oldBox);
                        lastCell.style.color = '';
                        currCellObj.cellFontColor= "";

                        return;
                    };

                let div =  document.createElement("div");
                div.classList.add("bgCellColor");
                let inputColor = document.createElement("input");
                inputColor.type="color";
                div.append(inputColor);
                box2.append(div);
                setTimeout(() => {
                    inputColor.click();
                },10);

                inputColor.addEventListener('input',function(e){
                    if(lastCell){
                        let cellAddress = lastCell.getAttribute('cell-data');
                        let currCellObj = objData[cellAddress];
                            let currFontColor =  e.currentTarget.value;
                        lastCell.style.color = `${currFontColor}`
                        currCellObj.cellFontColor = currFontColor;
                        textColor.style.backgroundColor = "rgb(206, 214, 224)"; 
                    }
                })
            })
                
        //textColor

        //barSection work

        // menuSection BAr

        let file = document.querySelector('.fileBox');

       

        file.addEventListener('click',function(){
            let fileBoxArea = document.querySelector('.excelMenu-bar-section');

            if(document.querySelector('.fileM')){
                file.style.backgroundColor = "";
                file.style.color ="";
                document.querySelector('.fileM').parentNode.removeChild(document.querySelector('.fileM')); 
                return;
            }
            file.style.backgroundColor = "#cbcbce"; 
           
            let div =  document.createElement('div');
            div.classList.add('fileM');
            let div2 = document.createElement('div');
            div2.classList.add('excelClear');
            div2.innerText = "Save";
            div.append(div2);
            let div3 = document.createElement('div');
            div3.classList.add('excelSave');
            div3.innerText = "clear";
            div.append(div3);
            fileBoxArea.append(div);

            div2.addEventListener("click",function(){
              
                localStorage.setItem('excelSheet',JSON.stringify(objData));
                let fileNew = document.querySelector('.fileBox');
                fileNew.style.backgroundColor ="";
      
                let fileM = document.querySelector('.fileM');
                setTimeout(function(){
                    div.parentNode.removeChild(div);
                },20)
            })
            div3.addEventListener("click",function(){
          
                localStorage.setItem('excelSheet','');
                let fileNew = document.querySelector('.fileBox');
                fileNew.style.backgroundColor ="";
            
                let fileM = document.querySelector('.fileM');
                setTimeout(function(){
                    div.parentNode.removeChild(div);
                },20)
            })

        })

        let help = document.querySelector('.helpBox');
        help.addEventListener('click',function(){
            
            let fileM = document.querySelector('.fileM');
            if(fileM){
                let file = document.querySelector('.fileBox');
                file.style.backgroundColor="";
                fileM.parentNode.removeChild(fileM);
            }
            let excelAppSiteBox = document.querySelector('.excel-appSitebox');
            let div = document.createElement('div');
            div.classList.add('innerHelpBox');
            div.innerHTML=`<div class="helpContent">
                    <div class="cancelHelp">
                    <span class="material-icons">
                            highlight_off
                    </span>
                    </div>
                    <div class="excelFeatures">
                        Excel - Help
                    </div>
                </div>`
            excelAppSiteBox.append(div);

            if(document.querySelector('.cancelHelp .material-icons')){
                let cancelWork = document.querySelector('.cancelHelp .material-icons')
                cancelWork.addEventListener('click',function(){
                div.parentElement.removeChild(div);
            })
            }
            
        });
        // menuSection BAr



    // Functions Of excel

    function addToDownStream(parentCell,childCell){
       objData[parentCell].downstream.push(childCell);
    }


    function removeFromDownstream(parentCell,childCell){
        let currParentDownstream = objData[parentCell].downstream;
        
        let filterDownStream = [];
        for(let i=0;i<currParentDownstream.length;i++){
            if(currParentDownstream[i]!= childCell){
                filterDownStream.push(currParentDownstream[i]);
            }
        }
        objData[parentCell].downstream = filterDownStream;
    }

    function updateCell(cell){
        let cellObj = objData[cell];
        let upstream = cellObj.upstream;
        let formula = cellObj.formula;

        let valueObj={};

        for(let k=0;k<upstream.length;k++){
            valueObj[upstream[k]] = objData[upstream[k]].value;
        }

        for(let key in valueObj){
            formula = formula.replace(key,valueObj[key])
        }

        let newValue = eval(formula);
        cellObj.value = newValue;

        let cellOnUi = document.querySelector(`[cell-data="${cell}"]`);
        cellOnUi.innerText = cellObj.value;

        let cellObjDownstream = cellObj.downstream;

        for(let i=0;i<cellObjDownstream.length;i++){
            updateCell(cellObjDownstream[i]);
        }

    }
}