import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import useStyles from "./style";

const Registration = () => {
  const classes = useStyles();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className={classes.root}>
      <img className={classes.logo} src="./assets/logo.png" />
      <div className={classes.registration}>
        <img className="progressbar" src="./assets/progressbar.png" />
        <div className="text">
          <h1 className="textRegistrh1">Registration</h1>
          <p className="textRegistrText">
            Fill in the registration data. It will take a couple of minutes.<br />
            All you need is a phone number and e-mail</p>
        </div>
        <div className={classes.privacy}>
          <img className="lock" src="./assets/lock.png" />
          <h1 className="privacyText">We take privacy issues seriously. You can be sure <br />
            that your personal data is securely protected.</h1>
          <img className="del" src="./assets/del.png" />
        </div>
        <div className={classes.enterPhone}>
          <h1 className={classes.phoneText}>Enter your phone number</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputMask className={classes.inputNumber} mask="+38(999)999-99-99" {...register("telephone", { required: true })} />
            {errors.telephone && <span>This field is required</span>}

            <button className={classes.btn}>
              Send code
            </button>
          </form>
        </div>

      </div>
      <img className={classes.bigDel} src="./assets/bigDel.png" />
    </div>
  );
};

export { Registration };
