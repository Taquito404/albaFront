import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

import Modal from "../../src/components/Modal";

import Image from "next/image";
import UserImg from "../../src/assets/img/UserImg-2.png";
import AlbaForm from "../../src/assets/img/login-alba-maternidad.png";

import miMembresiaStyles from "./styles/miMembresia.module.scss";

const MiMembresia = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [canceledSub, setCanceledSub] = useState(false);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = window.localStorage.getItem("token");
        let options = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            auth: token,
          },
        };
        // 'https://dev-alba.herokuapp.com/users/profile'
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/profile`,
          options
        );

        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
    return () => {
      setUser({});
    };
  }, [canceledSub]);

  const handleLogOut = () => {
    router.push("/detalles-usuario");
  };

  const createCheckoutSession = async (priceId) => {
    try {
      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      //   "https://dev-alba.herokuapp.com/stripe/create-checkout-session"
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}stripe/create-checkout-session`,
        { priceId },
        options
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubscribe = async () => {
    try {
      const data = await createCheckoutSession(
        "price_1J8WSdKHiexP1NsDKDoxuQ2j"
      );
      const stripePromise = await loadStripe(
        "pk_test_51IrpVdKHiexP1NsDkcMFdZOFFMNbsFstsTNYxiqeOSE3Vt9klcshochH2Ymeb5pE4AGB6EjbzqWcGz2Rmp3e9sCO00o6k4LBAE"
      );

      await stripePromise.redirectToCheckout({
        sessionId: data.sessionId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSubscription = async () => {
    try {
      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      //   `https://dev-alba.herokuapp.com/stripe/subscriptions/${user.subscriptionId}`
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}stripe/subscriptions/${user.subscriptionId}`,
        options
      );
      setCanceledSub(true);
      setCanceledSub(false);
      setVisibility(false);
    } catch (error) {
      console.error(error);
    }
  };

  const showModal = () => setVisibility(true);
  const closeModal = () => setVisibility(false);
  return (
    <>
      <Head>
        <title>Mi membresia</title>
      </Head>
      {visibility === true ? (
        <Modal
          title="Advertencia, estas a punto de cancelar la subscripcion"
          message="Despues de cancelarla no podras tener acceso a tus cursos seleccionados y perderas todos los beneficios, aun asi deseas cancelarla?"
          handleClose={closeModal}
          handleConfirm={handleDeleteSubscription}
        />
      ) : null}
      <div className={miMembresiaStyles.container}>
        <div className={miMembresiaStyles.wrapperSubscription}>
          <div className={miMembresiaStyles.headerUserWrapper}>
            <div className={miMembresiaStyles.imageWrapper}>
              <Image src={UserImg} width={100} height={100} />
            </div>

            <div className={miMembresiaStyles.buttonWrapper}>
              <button type="button" onClick={handleLogOut}>
                Regresar
              </button>
            </div>
          </div>

          <div className={miMembresiaStyles.userSubInfoWrapper}>
            <h3>{user ? user.userName : ""}</h3>

            <div className={miMembresiaStyles.membresiaWrapper}>
              <div>
                <label>Correo:</label>
                <p>{user ? user.email : ""}</p>
              </div>
              <div>
                <label>Membresía:</label>
                <p>
                  {user.subscriptionId ? "Pro" : "Free"}{" "}
                  {user.subscriptionId ? (
                    <span onClick={showModal}>Cancelar suscripción</span>
                  ) : (
                    <span onClick={handleSubscribe}>Iniciar suscripción</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={miMembresiaStyles.fixedImage}>
          <Image src={AlbaForm} />
        </div>
      </div>
    </>
  );
};

export default MiMembresia;
