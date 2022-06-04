import { useEffect, useState } from "react"
import { Dialog } from "./Dialog"

export const Converter = () => {

    const [currentUnit, setCurrentUnit] = useState('distance')
    const [selectedUnit, setSelectedUnit] = useState("kms")
    const [toUnit, setToUnit] = useState('meters')
    const [qteInput, setQteInput] = useState("0")
    const [completeUnitName, setCompleteUnitName] = useState("Kilometers")
    const [completeToUnitName, setCompleteToUnitName] = useState("Meters")
    const [result, setResult] = useState("0")
    const dict = ['Word', 'extort', 'precedent', 'upset', 'panic', 'tough', 'copyright', 'fork', 'father', 'broken', 'fan', 'suitcase', 'filter', 'emphasis', 'rice', 'scan', 'creation', 'difficult', 'migration', 'print', 'solution', 'criticism', 'crusade', 'porter', 'trend', 'blast', 'public', 'short', 'album', 'audience', 'charity', 'heaven', 'power', 'misplace', 'equinox', 'toss', 'loop', 'fragrant', 'budge', 'news', 'conspiracy', 'hobby', 'alarm', 'infrastructure', 'gasp', 'eyebrow', 'bet', 'contact', 'manage', 'example', 'runner', 'training', 'pottery', 'plane', 'stand', 'thought', 'fee', 'friendly', 'meat', 'shave', 'time', 'jockey', 'cottage', 'home', 'multiply', 'total', 'unlawful', 'headline', 'cow', 'love', 'color', 'dramatic', 'drill', 'broadcast', 'lonely', 'crosswalk', 'suit', 'surprise', 'liver', 'variable', 'stomach', 'hay', 'vegetable', 'bark', 'range', 'leadership', 'squeeze', 'van', 'pick', 'equal', 'walk', 'bloody', 'first', 'haunt', 'necklace', 'idea', 'appeal', 'reliable', 'result', 'picture', 'skip', 'pull', 'population', 'experienced', 'paragraph', 'fat', 'forbid', 'office', 'deficit', 'pack', 'fee', 'cap', 'secular', 'decay', 'pray', 'transparent', 'voucher', 'initial', 'widen', 'edition', 'share', 'place', 'field', 'shy', 'president', 'system', 'letter', 'agony', 'return', 'contribution', 'asset', 'snuggle', 'bus', 'bubble', 'crevice', 'improve', 'infect', 'voice', 'kitchen', 'tourist', 'stadium', 'story', 'pride', 'pair', 'home', 'slide', 'ice', 'proof', 'fill', 'refuse', 'pavement']


    useEffect(()=> { 

    let options = ['distance', 'quantity', 'weight', 'time'];


    let selected = document.getElementById(`${currentUnit}-units`)
    let selectedTo = document.getElementById(`to-${currentUnit}-units`)
    console.log(selected)
    if (selected.classList.contains("hidden")){ 
        selected.classList.remove("hidden")
    }
    if (selectedTo.classList.contains("hidden")){ 
        selectedTo.classList.remove("hidden")
    }

    options.forEach((option)=>{
        let object = document.getElementById(`${option}-units`)
        if (option !== currentUnit) { 
            console.log(`${option} != ${currentUnit}`)

            object.classList.add("hidden")

        }
     })

     options.forEach((option)=>{
        let object = document.getElementById(`to-${option}-units`)
        if (option !== currentUnit) { 
            console.log(`${option} != ${currentUnit}`)

            object.classList.add("hidden")

        }
     })
     console.log(currentUnit)


    }, [currentUnit])

    function openDialog(){ 

        document.querySelector('#price-dialog').classList.add("price-dialog")

        document.querySelector('#price-dialog').showModal()
        
    }









    

    function selectUnit(unit) { 
        let unitBtn = document.getElementById(unit)

        let optionsQuery = document.querySelectorAll('.unit');
        let options = [];

        optionsQuery.forEach((option) => { 
            if (!option.id.includes("to-"))
            options.push(option.id)
        })


        options.forEach((option) => { 
            let btn = document.getElementById(option);

            if (btn.classList.contains("selected-unit")) { 
                //check if its the same button. Else, it makes it blue.
                    btn.classList.remove("selected-unit")
            } 

        })

        unitBtn.classList.add("selected-unit")
        
        setSelectedUnit(unit)
        setCompleteUnitName(unitBtn.innerText)
        console.log(`complete: ${completeUnitName}`)
        

    }


    function selectTo(unit) { 
        let unitBtn = document.getElementById(`to-${unit}`)

        let optionsQuery = document.querySelectorAll('.unit');
        let options = [];

        optionsQuery.forEach((option) => { 
            if (option.id.includes("to-"))
            options.push(option.id)
        })

        options.forEach((option) => { 
            let btn = document.getElementById(option);

            if (btn.classList.contains("selected-unit")) { 
                //check if its the same button. Else, it makes it blue.
                    btn.classList.remove("selected-unit")
            } 

        })

        let selected = document.getElementById(`to-${unit}`)
        if (selected.classList.contains("hidden")){ 
        selected.classList.remove("hidden")
    }

    

        unitBtn.classList.add("selected-unit")

        setToUnit(unit)
        setCompleteToUnitName(unitBtn.innerText)


    }









    function selectUnitType(unit) { 

        let options = ['distance', 'quantity', 'time', 'weight'];
        let unitBtn = document.getElementById(unit);

        options.forEach((option) => { 
            let btn = document.getElementById(option);


            if (btn.classList.contains("selected-unit")) { 
                //check if its the same button. Else, it makes it blue.
                    btn.classList.remove("selected-unit")
            }


        })



        unitBtn.classList.add("selected-unit");
        setCurrentUnit(unit)

    }

    function convert() { 

        let answerType = Math.floor(Math.random() * 7)

        if (answerType < 5) { 
            let smallOrBig = Math.floor(Math.random() *3)
            let answer = 0
            if (smallOrBig == 2) { 
                 let answer_unfixed = Math.random() * 878654
                 answer = answer_unfixed.toFixed(3)
            } else { 
                 answer = Math.floor(Math.random() *300)
            }
            setResult(answer)
        } else { 
            let answer = 0;
            let selector = Math.floor(Math.random() * (dict.length - 1));
            answer = dict[selector];
            setResult(answer)
        }


    }

    return ( 

        <div className='main'> 

        <Dialog/>

        

        


        <section className="main-title-box"> 
    



            <div className="cloud">        
                <p>The Wrong</p>
                <p>Converter</p>
            </div>

        </section>

        <section className="converter"> 
    



            <div className="converter-box">  

                <div name='unit-type' className='unit-type-selector'>

                        <button onClick={() => selectUnitType('distance')} id='distance' className="selected-unit">Distance</button>
                        <button onClick={() => selectUnitType('quantity')} id='quantity'>Quantity</button>
                        <button onClick={() => selectUnitType('weight')} id='weight'>Weight</button>
                        <button onClick={() => selectUnitType('time')} id='time'>Time</button>
    
                </div>     



                <div id='distance-units' className='unit-type-selector unit-distance-selected hidden'>

                        <button onClick={() => selectUnit('kms')} id='kms' className="unit selected-unit">Kms</button>
                        <button onClick={() => selectUnit('miles')} id='miles' className="unit">Miles</button>   
                        <button onClick={() => selectUnit('meters')} id='meters' className="unit">Meters</button>
                        <button onClick={() => selectUnit('inches')} id='inches' className="unit">Inches</button>
                        <button onClick={() => selectUnit('feet')} id='feet' className="unit">Feet</button>
                </div>     
                

                <div id='weight-units' className='unit-type-selector unit-distance-selected hidden'>

                        <button onClick={() => selectUnit('g')} id='g' className="unit selected-unit">Grams</button>
                        <button onClick={() => selectUnit('oz')} id='oz' className="unit">Ounces</button>   
                        <button onClick={() => selectUnit('lb')} id='lb' className="unit">Pounds</button>
                        <button onClick={() => selectUnit('kg')} id='kg' className="unit">Kg</button>
                        <button onClick={() => selectUnit('tons')} id='tons' className="unit">Tons</button>
                </div>     

                <div id='quantity-units' className='unit-type-selector unit-quantity-selected hidden'>

                        <button onClick={() => selectUnit('ml')} id='ml' className="unit selected-unit">Ml</button>
                        <button onClick={() => selectUnit('l')} id='l' className="unit">Litters</button>   
                        <button onClick={() => selectUnit('oz_liquid')} id='oz_liquid' className="unit">Ounces</button>
                        <button onClick={() => selectUnit('cups')} id='cups' className="unit">Cups</button>
                        <button onClick={() => selectUnit('tsp')} id='tsp' className="unit">Tsp</button>
                        <button onClick={() => selectUnit('tbs')} id='tbs' className="unit">Tbs</button>

                </div>   

                <div id='time-units' className='unit-type-selector unit-time-selected hidden'>

                    <button onClick={() => selectUnit('seconds')} id='seconds' className="unit selected-unit">Seconds</button>
                    <button onClick={() => selectUnit('minutes')} id='minutes' className="unit">Minutes</button>   
                    <button onClick={() => selectUnit('hours')} id='hours' className="unit">Hours</button>
                    <button onClick={() => selectUnit('days')} id='days' className="unit">Days</button>
                    <button onClick={() => selectUnit('months')} id='months' className="unit">Months</button>
                    <button onClick={() => selectUnit('years')} id='years' className="unit">Years</button>

                </div>   

                <div className="flx input">
                <input onChange={(e) => setQteInput(e.target.value)} className="input-box" name="from"/> 
                <label style={{fontSize:'1.5rem'}} for='from'>{completeUnitName}</label>
                </div>

                <button onClick={() => convert()}className="btn">Convert</button>

       

            
            </div>





            <div className="converter-box">        
            

            <div id='to-distance-units' className='unit-type-selector unit-distance-selected'>

                <button onClick={() => selectTo('kms')} id='to-kms' className="unit selected-unit">Kms</button>
                <button onClick={() => selectTo('miles')} id='to-miles' className="unit">Miles</button>   
                <button onClick={() => selectTo('meters')} id='to-meters' className="unit">Meters</button>
                <button onClick={() => selectTo('inches')} id='to-inches' className="unit">Inches</button>
                <button onClick={() => selectTo('feet')} id='to-feet' className="unit">Feet</button>
                </div>     


                <div id='to-weight-units' className='unit-type-selector unit-distance-selected hidden'>

                <button onClick={() => selectTo('g')} id='to-g' className="unit selected-unit">Grams</button>
                <button onClick={() => selectTo('oz')} id='to-oz' className="unit">Ounces</button>   
                <button onClick={() => selectTo('lb')} id='to-lb' className="unit">Pounds</button>
                <button onClick={() => selectTo('kg')} id='to-kg' className="unit">Kg</button>
                <button onClick={() => selectTo('tons')} id='to-tons' className="unit">Tons</button>
                </div>     

                <div id='to-quantity-units' className='unit-type-selector unit-quantity-selected hidden'>

                <button onClick={() => selectTo('ml')} id='to-ml' className="unit selected-unit">Ml</button>
                <button onClick={() => selectTo('l')} id='to-l' className="unit">Litters</button>   
                <button onClick={() => selectTo('oz_liquid')} id='to-oz_liquid' className="unit">Ounces</button>
                <button onClick={() => selectTo('cups')} id='to-cups' className="unit">Cups</button>
                <button onClick={() => selectTo('tsp')} id='to-tsp' className="unit">Tsp</button>
                <button onClick={() => selectTo('tbs')} id='to-tbs' className="unit">Tbs</button>

                </div>   

            <div id='to-time-units' className='unit-type-selector unit-time-selected hidden'>

            <button onClick={() => selectTo('seconds')} id='to-seconds' className="unit selected-unit">Seconds</button>
            <button onClick={() => selectTo('minutes')} id='to-minutes' className="unit">Minutes</button>   
            <button onClick={() => selectTo('hours')} id='to-hours' className="unit">Hours</button>
            <button onClick={() => selectTo('days')} id='to-days' className="unit">Days</button>
            <button onClick={() => selectTo('months')} id='to-months' className="unit">Months</button>
            <button onClick={() => selectTo('years')} id='to-years' className="unit">Years</button>

            </div>   
            
            <div className="flx output">
                <p>{qteInput} {completeUnitName}</p>
                <p>is equal to</p>
                <p>{result} {completeToUnitName}</p>
                
                </div>
                <p onClick={() => openDialog()} className="subtitle">I want the real answer.</p>

            </div>



            
        </section>

        <p className="flx" style={{fontSize:"1rem", color:"white"}}>@2022 - Christophe Chouinard</p>

        </div>
     );
}
 
