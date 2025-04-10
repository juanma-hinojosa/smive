import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

function ContactComponent() {
  const form = useRef();
  const captcha = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const onChange = () => {
    if (captcha.current.getValue()) {
      setIsVerified(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que todos los campos tengan datos
    const formData = new FormData(form.current);
    const userName = formData.get("user_name").trim();
    const userEmail = formData.get("user_email").trim();
    const userPhone = formData.get("user_phone").trim();
    const message = formData.get("message").trim();

    if (!userName || !userEmail || !userPhone || !message) {
      toast.error("Todos los campos son obligatorios.");
      return;
    }

    // Validar que el captcha esté verificado
    if (!isVerified) {
      toast.error("Por favor, verifica el reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm("service_rt4exlv", "template_os4dk0a", form.current, {
        publicKey: "9UjvSXnthESeN8UI1",
      })
      .then(
        () => {
          toast.success("Mensaje enviado con éxito.");
          form.current.reset(); // Borra los valores del formulario
          setIsVerified(false); // Resetea el estado del captcha
          captcha.current.reset(); // Resetea el captcha visualmente
        },
        (error) => {
          toast.error("Error al enviar el mensaje: " + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <section className="contact" id="contact">
        <h1 className="heading"> Contactanos </h1>

        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497098433!2d-58.59811178078394!3d-34.615430348021675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1735307892421!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form ref={form} onSubmit={sendEmail}>
            <h3>Consultanos</h3>
            <input type="text" placeholder="Nombre" className="box" name="user_name" />
            <input type="email" placeholder="Email" className="box" name="user_email" />
            <input type="number" placeholder="Telefono" className="box" name="user_phone" />
            <textarea name="message" placeholder="Consulta" className="box" cols="30" rows="10"></textarea>

            <ReCAPTCHA
              ref={captcha}
              sitekey="6LdfFfsqAAAAAE0LnrF5AK_sMqIMG8qYBlKzYfat"
              onChange={onChange}
            />

            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactComponent;
