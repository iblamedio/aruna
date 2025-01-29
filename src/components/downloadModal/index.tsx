import './styles.css';

import InputMask from "@mona-health/react-input-mask";
import emailjs from '@emailjs/browser';

import { FunctionComponent, useRef, useState } from "react";
import toast from 'react-hot-toast';

type Props = {
  archive: {
    name:string,
    displayName:string
  }
}

export const DownloadModal:FunctionComponent<Props> = ({archive}) => {

    const envServiceId: string = process.env.REACT_APP_DOWNLOADS_EMAILJS_SERVICE_ID || '';
    const envTemplateId: string = process.env.REACT_APP_DOWNLOADS_EMAILJS_TEMPLATE_ID || '';
    const envPublicKey: string = process.env.REACT_APP_DOWNLOADS_EMAILJS_PUBLIC_KEY || '';

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const form: any = useRef();

    const downloadButton:any = useRef();

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

    const clearInputs: () => void = () => {
        setNameValue('');
        setPhoneValue('');
        setEmailValue('');
    }

    const validateName: (input: string) => boolean = input => !!input;

    const validatePhone: (input: string) => boolean = input => {
        if (!input) return false;

        if (input.length < 14) return false;

        return true;
    }

    const validateEmail: (input: string) => boolean = input => {
        if (!input) return false;
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateName(nameValue)) setNameErr(true); else setNameErr(false);
        if (!validatePhone(phoneValue)) setPhoneErr(true); else setPhoneErr(false);
        if (!validateEmail(emailValue)) setEmailErr(true); else setEmailErr(false);

        if (!validateName(nameValue) || !validatePhone(phoneValue) || !validateEmail(emailValue)) return;

        setLoading(true);

        emailjs.sendForm(envServiceId,
            envTemplateId,
            form.current,
            { publicKey: envPublicKey }
        ).then(() => {
            clearInputs();
            setLoading(false);
            downloadButton.current.click();
        }, e => {
            toast.error('Houve um erro ao enviar o formulário :(');
            clearInputs();
            setLoading(false);
        }
        );
    };

    const getArticleAndDisplayName: (a: string) => string = (a: string) => {
        if (a === "Tabela de Preços") return "da " + a;
        else if (a === "Folder Digital") return "do " + a;
        else return "";
    }

    return (
        <div className="download-modal">

            <h4>Preencha o formulário abaixo para fazer o download {getArticleAndDisplayName(archive.displayName)}:</h4>
            <form ref={form} onSubmit={sendEmail}>
                <div className="line">
                    <input disabled={isLoading} required autoComplete="off" className={nameErr ? 'input-error' : ''} type="text" name="name" value={nameValue} onChange={handleNameChange} />
                    <label>Nome</label>
                    <span style={nameErr ? {} : { display: 'none' }}>Insira um nome válido.</span>
                </div>

                <div className="line">
                    <input disabled={isLoading} required autoComplete="off" className={emailErr ? 'input-error' : ''} type="text" name="email" value={emailValue} onChange={handleEmailChange} />
                    <label>Email</label>
                    <span style={emailErr ? {} : { display: 'none' }}>Insira um email válido.</span>
                </div>

                <div className="line">

                    <InputMask
                        className={phoneErr ? 'input-error' : ''}
                        mask="(99) 99999-9999"
                        maskPlaceholder={null}
                        type="text"
                        name="phone"
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        required
                        autoComplete="off"
                        disabled={isLoading}
                    />
                    <label>Telefone</label>
                    <span style={phoneErr ? {} : { display: 'none' }}>Insira um telefone válido.</span>
                </div>

                <input readOnly type="text" name="archive" style={{ display:'none' }} value={archive.displayName} />

                <div className="line">
                    <input className={isLoading ? 'disabled-button' : ''} disabled={isLoading} id="submit-form" type="submit" value="ENVIAR" />
                </div>

                <a ref={downloadButton} style={{ display:'none' }} href={`${archive.name}.pdf`} download>Download Link</a>

            </form>
        </div>
    )
}