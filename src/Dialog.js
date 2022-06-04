export const Dialog = () => {

    function buyThis() { 

        window.location.href = "mailto:acef@acefrsq.com?&subject=Besoin%20d'aide%20avec%20la%20gestion%20de%20mes%20finances%20personnelles%20&body=Bonjour,%20j'ai%20besoin%20d'aide%20urgente.%20J'ai%20un%20problème%20sérieux%20avec%20la%20gestion%20de%20mes%20finances%20personnelles.%20J'ai,%20aujourd'hui,%20voulu%20payer%20800$%20pour%20un%20abonnement%20a%20un%20convertisseur%20en%20ligne... "
        
    }

    window.addEventListener('keydown', function (e) {

        if (e.key == "Escape") { 
            let dialog = this.document.querySelector('#price-dialog'); 
            if (dialog.classList.contains("price-dialog")){ 
                dialog.classList.remove("price-dialog")
            }
            
        }
          }, false);
    return ( 
        <div>


<dialog id='price-dialog'>


<p>Want the real answers ?</p>
<p>Get a annual subscribtion to "The Wrong Converter pro"</p>
<p>for only</p>
<p>799,99$ !!</p>

<button onClick={() => buyThis()}className="btn">Pay here !</button>


</dialog>
        </div>
     );
}
 
