import ContactComponent from "../components/contact-component"
import { TitleDinamic } from "../js/title-list"

function ContactPage() {
    TitleDinamic('Contacto - SMIVE')
    return(
        <>
            <ContactComponent />
        </>
    )
}

export default ContactPage