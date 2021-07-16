import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import successStyles from "./styles/succesStyles.module.scss";
import { route } from "next/dist/next-server/server/router";

const Success = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const { session_id } = router.query;

  useEffect(() => {
    const getUpdatedUser = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (!session_id) {
          return;
        }
        let options = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": true,
            "Access-Control-Allow-Credentials": true,
            auth: token,
          },
        };
        // 'https://dev-alba.herokuapp.com/stripe/create-subscription'
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/stripe/create-subscription`,
          { session_id },
          options
        );
        setUser(data.data.user);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUpdatedUser();

    return () => {
      setUser({});
    };
  }, [session_id]);

  return (
    <div className={successStyles.container}>
      <div className={successStyles.checkWrapper}>
        <div className={successStyles.imgWrapper}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png"
            alt="success"
            className={successStyles.successImg}
          />
        </div>
        <p>Pago realizado exitosamente.</p>
        <p>
          Gracias por confiar en nosotros {!user ? null : user.userName}.
          Bienvenido a la familia de Alba.{" "}
          <span onClick={() => router.push("/")}>
            Da click aqui para volver al inicio y disfrutar tus beneficios
          </span>
        </p>
      </div>
    </div>
  );
};

export default Success;
