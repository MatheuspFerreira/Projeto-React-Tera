
import formOfPayment from '../../_assets/Forma de pagamento.webp'
import './Footer.css'





const newLettersData = { name:"", email:""};

function nameNewLetters (event) {
    newLettersData.name = event.target.value
    console.log(newLettersData.name);

}

function emailNewLetters (event) {
    newLettersData.email = event.target.value
    console.log(newLettersData.email);

}

async function saveDataFormNewLetters (event) { 
    
    event.preventDefault();

    try {

        if ( newLettersData.name && newLettersData.email) {
        
            const response = await fetch('http://localhost:3000/newletter/register',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify ({

                    name: newLettersData.name,
                    email: newLettersData.email
                    
                })
            });

            let data =  await response.json()
            alert(`${data.name} seu cadastro foi realizado com sucesso.`);
            
        }else {
    
            alert('Você precisa preencher todos os campos')
    
        }
        
    } catch (error) {

        console.log("Deu erro")
        
    }
    
    
    
}

export function Footer () {
    return(
        <footer>
            <div className="footer__firstcontent">
                <article className="footer__textNewsLetters">
                    <h3>MZ ELETRÔNICOS !!</h3>
                    <p>Receba ofertas exclusivas no seu e-mail</p>
                </article>
                <form className="footer__formNews" onSubmit={event => saveDataFormNewLetters(event)}>
                    <input  onChange={event => nameNewLetters (event)} className="input-news" type="text" name="form" id= "nome_form" placeholder="Digite seu nome" required/>
                    <input  onChange={event => emailNewLetters (event)} className="input-news" type="email" name="form" id="email_form" placeholder="Digite seu e-mail" required/>
                    <button className="footer__btnForm" >CADASTRAR</button>
                </ form>
            </div>
            <div className="second-content-footer">
                <section className="form-of-payment">
                    <img className="Second__FormaPagamento" src={formOfPayment} alt="formOfPayment.png" />  
                </section>
                <section className="menu-footer">
                    <h3>Mídias Sociais</h3>
                    <ul>
                        <li><a href="/#"><svg viewBox="0 0 156 156" aria-labelledby="instagramIcon instagramDesc" fill="#999" width="20px" height="20px"><path d="M77.5 14c20.7 0 23.1.1 31.3.4 7.6.4 11.7 1.6 14.4 2.7 3.6 1.4 6.2 3.1 8.9 5.8 2.7 2.7 4.4 5.3 5.8 8.9 1.1 2.7 2.3 6.8 2.7 14.4.3 8.2.4 10.6.4 31.3 0 20.7-.1 23.1-.4 31.3-.4 7.6-1.6 11.7-2.7 14.4-1.4 3.6-3.1 6.2-5.8 8.9-2.7 2.7-5.3 4.4-8.9 5.8-2.7 1.1-6.8 2.3-14.4 2.7-8.2.3-10.6.4-31.3.4-20.7 0-23.1-.1-31.3-.4-7.6-.4-11.7-1.6-14.4-2.7-3.6-1.4-6.2-3.1-8.9-5.8-2.7-2.7-4.4-5.3-5.8-8.9-1.1-2.7-2.3-6.8-2.7-14.4-.3-8.2-.4-10.6-.4-31.3 0-20.7.1-23.1.4-31.3.4-7.6 1.6-11.7 2.7-14.4 1.4-3.6 3.1-6.2 5.8-8.9 2.7-2.7 5.3-4.4 8.9-5.8 2.7-1.1 6.8-2.3 14.4-2.7 8.2-.3 10.6-.4 31.3-.4m0-14c-21 0-23.7.1-31.9.5-8.3.4-13.9 1.7-18.8 3.6-5.1 2-9.5 4.6-13.8 8.9-4.3 4.3-6.9 8.7-8.9 13.8C2.2 31.7.9 37.3.5 45.6.1 53.8 0 56.5 0 77.5s.1 23.7.5 31.9c.4 8.3 1.7 13.9 3.6 18.8 2 5.1 4.6 9.5 8.9 13.8 4.3 4.3 8.7 6.9 13.8 8.9 4.9 1.9 10.5 3.2 18.8 3.6 8.2.4 10.9.5 31.9.5s23.7-.1 31.9-.5c8.3-.4 13.9-1.7 18.8-3.6 5.1-2 9.5-4.6 13.8-8.9 4.3-4.3 6.9-8.7 8.9-13.8 1.9-4.9 3.2-10.5 3.6-18.8.4-8.2.5-10.9.5-31.9s-.1-23.7-.5-31.9c-.4-8.3-1.7-13.9-3.6-18.8-2-5.1-4.6-9.5-8.9-13.8-4.3-4.3-8.7-6.9-13.8-8.9-4.9-1.9-10.5-3.2-18.8-3.6C101.2.1 98.5 0 77.5 0m0 37.7c-22 0-39.8 17.8-39.8 39.8 0 22 17.8 39.8 39.8 39.8 22 0 39.8-17.8 39.8-39.8 0-22-17.8-39.8-39.8-39.8zm0 65.6c-14.3 0-25.8-11.5-25.8-25.8s11.5-25.8 25.8-25.8 25.8 11.5 25.8 25.8-11.5 25.8-25.8 25.8zm50.7-67.2c0 5.2-4.2 9.3-9.3 9.3-5.2 0-9.3-4.1-9.3-9.3 0-5.1 4.1-9.3 9.3-9.3 5.1 0 9.3 4.2 9.3 9.3"></path></svg></a></li>
                        <li><a href="/#"><svg viewBox="0 0 77 145" aria-labelledby="facebookIcon facebookDesc" fill="#999" width="20px" height="20px"><path d="M71.3 78.2l3.6-25.4H49.6V36.5c-.8-3.6.3-7.2 2.9-9.7 2.6-2.6 6.3-3.6 9.8-2.8h13.5V1C69.1.3 62.4 0 55.7 0c-9-.4-17.8 3.1-24 9.6-6.3 6.5-9.4 15.3-8.7 24.3v18.9H.9v25.4H23V144h26.6V78.2h21.7z"></path></svg></a></li>
                        <li><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355 255.1" aria-labelledby="youtubeIcon youtubeDesc" fill="#999" width="25px" height="25px"><path d="M340.5 48.6c-3.9-14.6-15.4-26-29.9-29.9-26.4-7.1-132.3-7.1-132.3-7.1S72.4 11.6 46 18.7C31.5 22.5 20 34 16.1 48.6 9 75 9 130.1 9 130.1s0 55.1 7.1 81.5c3.9 14.6 15.4 26 29.9 29.9 26.4 7.1 132.3 7.1 132.3 7.1s105.9 0 132.3-7.1c14.6-3.9 26-15.4 29.9-29.9 7.1-26.4 7.1-81.5 7.1-81.5s0-55.1-7.1-81.5zm-196 132.3V79.3l88 50.8-88 50.8z"></path></svg></a></li>
                        <li><a href="/#"><svg viewBox="0 0 191 156" aria-labelledby="twitterIcon twitterDesc" fill="#999" width="20px" height="20px"><path d="M190.7 18.5c-7.1 3.1-14.7 5.2-22.5 6.2 8.2-4.9 14.3-12.7 17.2-21.8-7.7 4.6-16.1 7.8-24.8 9.5-12.2-13-31.5-16.1-47.1-7.8C97.9 13 89.9 30.8 94 48.1 62.5 46.5 33.2 31.7 13.3 7.2 2.9 25.1 8.2 48 25.4 59.5c-6.2-.2-12.3-1.9-17.7-4.9-.2 18.8 12.9 35.2 31.4 38.9-3.3.9-6.8 1.3-10.3 1.3-2.5 0-4.9-.2-7.4-.7 5.1 15.9 19.8 26.8 36.5 27.1C44.1 132.1 27 138 9.4 138c-3.2.2-6.3.2-9.4 0 17.9 11.5 38.8 17.6 60.1 17.6 29.5.2 58-11.5 78.9-32.4 20.9-20.9 32.6-49.4 32.4-78.9v-5.1c7.6-5.7 14.2-12.7 19.3-20.7z"></path></svg></a></li>
                    </ul>
                </section>
                <section className="copyright">
                    <p className="copyright">© Copyright MZ Eletrônicos - 2022</p>
                </section>
            </div>
        </footer>
    )
}
