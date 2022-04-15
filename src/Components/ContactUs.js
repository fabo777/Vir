import React, { useRef, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "./Contexts/Context";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputLabel } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const { apNum } = useContext(Context);
  const { t } = useTranslation(["common"]);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    data.apartman = apNum;
    sendEmail(data, e);
  };
  const onChangeHandle = (value) => {
    setRecaptchaValue(value);
    setIsVerified(true);
    return value;
  };

  const sendEmail = (templateParams, e) => {
    templateParams = {
      ...templateParams,
      "g-recaptcha-response": recaptchaValue,
    };
    console.log(templateParams);
    e.preventDefault();

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        templateParams,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert(`${t("mailposlan")}`);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      )
      .catch((error) => alert(error.message))
      .finally(e.target.reset());
  };
  return (
    <form
      autoFocus
      autoComplete="off"
      className="ContactUsContainer"
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        style={{ margin: "0.5rem 0px" }}
        name="name"
        variant="outlined"
        label={`${t("imeiprezime")}`}
        required={true}
        {...register("name", {
          required: "Required",
          pattern: /^[a-zA-Z\s]*$/,
        })}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
      />
      <TextField
        style={{ margin: "0.5rem 0px" }}
        variant="outlined"
        type="email"
        name="email"
        label={`${t("email")}`}
        {...register("email", {
          required: "Required",
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
        required={true}
      />
      <InputLabel htmlFor="proba">{`${t("DatumDolaska")}`}</InputLabel>
      <TextField
        id="proba"
        variant="outlined"
        type="date"
        name="DatumDolaska"
        {...register("DatumDolaska", { required: "Required" })}
        error={!!errors?.DatumDolaska}
        helperText={errors?.DatumDolaska ? errors.DatumDolaska.message : null}
        required={true}
      />
      <InputLabel htmlFor="proba">{`${t("DatumOdlaska")}`}</InputLabel>
      <TextField
        variant="outlined"
        type="date"
        name="DatumOdlaska"
        {...register("DatumOdlaska", { required: "Required" })}
        error={!!errors?.DatumOdlaska}
        helperText={errors?.DatumOdlaska ? errors.DatumOdlaska.message : null}
        required={true}
      />
      <TextField
        style={{ margin: "0.5rem 0px" }}
        variant="outlined"
        type="number"
        name="BrojGostiju"
        label={`${t("BrojGostiju")}`}
        {...register("BrojGostiju", { required: "Required" })}
        error={!!errors?.BrojGostiju}
        helperText={errors?.BrojGostiju ? errors.BrojGostiju.message : null}
        required={true}
      />
      <TextField
        style={{ margin: "0.5rem 0px" }}
        variant="outlined"
        type="text"
        name="message"
        multiline
        rows={2}
        label={`${t("message")}`}
        {...register("message", {})}
        error={!!errors?.message}
        helperText={errors?.message ? errors.message.message : null}
      />

      <ReCAPTCHA
        className="g-recaptcha"
        theme="dark"
        sitekey={`${process.env.REACT_APP_RECAPTCHA_SITEKEY}`}
        onChange={onChangeHandle}
      />

      <input
        disabled={!isVerified}
        style={isVerified === false ? { color: "grey" } : {}}
        type="submit"
        value={`${t("send")}`}
        className="ContactUsButton"
      />

      <div className="text">{`${t("textForm")}`}</div>
    </form>
  );
};
