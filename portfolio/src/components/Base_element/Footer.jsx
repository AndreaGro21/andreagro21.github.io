import React from 'react';

function Footer (){
    return (
        <footer>
               <form action="#" method="post">
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" id="nom" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="enterprise"> Are you a company?
            <input type="checkbox" id="enterprise" name="enterprise" value="Car"/></label>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
            ></textarea>
            <input type="submit" value="Envoyer" />
          </form>
        </footer>
    )
    }
    export default Footer