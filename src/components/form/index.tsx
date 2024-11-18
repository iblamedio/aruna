import { FunctionComponent, useRef, useState } from "react";
import InputMask from '@mona-health/react-input-mask';

// import { emailjs } from 'emailjs';

import './styles.css';

import arunaFoto from '../../assets/aruna-foto.png';

export const Form: FunctionComponent = () => {

    const form: any = useRef();

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);

    const [nameValue, setNameValue] = useState('');
    const handleNameChange = (e: any) => {
      setNameValue(e.target.value);
    }

    const [emailValue, setEmailValue] = useState('');
    const handleEmailChange = (e: any) => {
      setEmailValue(e.target.value);
    }

    const [phoneValue, setPhoneValue] = useState('');
    const handlePhoneChange = (e: any) => {
      setPhoneValue(e.target.value);
    }

    const [messageValue, setMessageValue] = useState('');
    const handleMessageChange = (e: any) => {
      setMessageValue(e.target.value);
    }

    const validateName: (input: string) => boolean = input => !!input;

    const validatePhone: (input: string) => boolean = input => {
      if(!input) return false;
      return true;
    }

    const validateEmail: (input: string) => boolean = input => {
      if(!input) return false;
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    }

    const sendEmail = (e:  React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateName(nameValue)) setNameErr(true); else setNameErr(false);
      if (!validatePhone(phoneValue)) setPhoneErr(true); else setPhoneErr(false);
      if (!validateEmail(emailValue)) setEmailErr(true); else setEmailErr(false);

      if (!validateName(nameValue) || !validatePhone(phoneValue) || !validateEmail(emailValue)) return;
      
      console.log(nameValue, emailValue, phoneValue, messageValue);
    
    //     emailjs
    //       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    //         publicKey: 'YOUR_PUBLIC_KEY',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
      };

    return (
        <div className="form-container">
            <div className="form-content">
                <div className="form-left">
                    <img src={arunaFoto} alt="Aruna Tower" />
                </div>
                <div className="form-right">
                    <div className="text">
                        <h1>Entre em contato</h1>
                        <p>Gostaria de receber mais informações sobre o empreendimento?
                            Entre já em contato com nossa equipe comercial.</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="line">
                        <input required autoComplete="off" className={ nameErr ? 'input-error' : '' } type="text" name="name" value={nameValue} onChange={handleNameChange}/>
                        <label>Nome</label>
                        <span style={ nameErr ? {} : {display:'none' }}>Insira um nome válido.</span>
                      </div>
                        
                      <div className="line">
                        <input required autoComplete="off" className={ emailErr ? 'input-error' : '' } type="text" name="email" value={emailValue} onChange={handleEmailChange}/>
                        <label>Email</label>
                        <span style={ emailErr ? {} : {display:'none' }}>Insira um email válido.</span>
                      </div>

                      <div className="line">
                        
                        <InputMask
                          className={ phoneErr ? 'input-error' : '' }
                          mask="(99) 99999-9999"
                          maskPlaceholder={null}
                          type="text" 
                          name="phone" 
                          value={phoneValue} 
                          onChange={handlePhoneChange}
                          required
                          autoComplete="off"
                        />
                        <label>Telefone</label>
                        <span style={ phoneErr ? {} : {display:'none' }}>Insira um telefone válido.</span>
                      </div>
                        
                      <div className="line">
                        <textarea required name="message" value={messageValue} onChange={handleMessageChange} autoComplete="off"/>
                        <label id="textarea-label">Mensagem</label>
                      </div>

                      <div className="line">
                        <input type="submit" value="ENVIAR" />
                      </div>

                    </form>
                </div>
            </div>
        </div>
    )
}