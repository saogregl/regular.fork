"use client";

import React from "react";
import Link from "next/link";
import { signIn, getSession, getProviders  } from "next-auth/react";
import { Button, TextInput, Checkbox } from "@carbon/react";
import { Theme } from "@carbon/react";

import { Google } from "@carbon/icons-react";

import "./login.scss";




const TextInputProps = {
  className: "some-class",
  id: "test2",
  labelText: "Email",
  placeholder: "usuario@jacto.com.br",
};

const InvalidPasswordProps = {
  className: "some-class",
  id: "test4",
  labelText: "Senha",
  invalid: false,
  invalidText:
    "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.",
};

const checkboxEvents = {
  className: "some-class",
  labelText: "Manter-me logado",
};
//

interface providers {
  provider: provider[];
}

interface provider {
    name: string
    id: string
}


function Signin({ providers }) {


  return (
    <Theme theme="g90">
      <div className="login-page">
        <div className="login-wrapper">
          <h1>Log in</h1>
          <div className="login-form-legend">
            <p>Não tem uma conta?</p>
            <Link href="/Register">Cadastre-se</Link>
          </div>
          <hr className="login-form-divider"></hr>
          <div className="login-form">
            <div className="login-form-legend">
              <p>Continue com e-mail e senha: </p>
              <Link href="/ForgotPassword">Esqueceu a senha?</Link>
            </div>
            <TextInput {...TextInputProps} />
            <TextInput
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              {...InvalidPasswordProps}
            />
            <Button onClick={() => signIn()}>Log in</Button>
            <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
          </div>
          <hr className="login-form-divider"></hr>

          <div className="alternate-logins">
            <>
            <div className="login-form-legend">
              <p>Logins alternativos: </p>
            </div>
            {providers &&
             Object.values(providers).map((provider) => (
               <Button key={provider.name} kind="tertiary" onClick={() => signIn(provider.id)}>
                 Faça login com {provider.name}
                 </Button>
             ))}            
             </>
          </div>
          <hr className="login-form-divider"></hr>

          <div className="login-footer">
            <p className="light-text-note">Precisa de ajuda?</p>
            <Link href="/Help">Entre em contato</Link>
          </div>
        </div>
        <div className="background-image"></div>
      </div>
    </Theme>
  );
}

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers,
    },
  };
}
