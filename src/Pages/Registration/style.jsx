import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

  root: {
    width: '1440px',
    height: '1024px',
    margin: '0px auto',
    paddingTop: '44px',
    display: "flex",
    justifyContent: "space-between",
  },
  registration: {
    width: '456px',
    height: '568px',
    paddingTop: '8px',
    position: 'relative',
    "& .progressbar": {
      marginBottom: "80px"
    },
    "& .textRegistrh1": {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '36px',
      marginBottom: '16px'
    },
    "& .textRegistrText": {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '22px',
      marginBottom: '32px'
    },

  },
  privacy: {
    background: "#F0F2F4",
    display: 'flex',
    padding: '16px',
    borderRadius: "8px",
    justifyContent: "space-between",
    marginBottom: '32px',
    "& .lock": {
      width: '16px',
      height: '21px',
      margin: '1px 4px 2px 4px'
    },
    "& .del": {
      width: '14px',
      height: '14px',
      margin: '5px'
    },
    "& .privacyText": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '18px',
      width: '344px',
    }
  },
  enterPhone: {
    height: '160px',
    border: "1px solid #E2E4E5",
    borderRadius: "8px",
    marginBottom: '32px',
  },
  btn: {
    top: "93%",
    left: "0%",
    background: 'white',
    padding: '12px 24px',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    border: "1px solid #E2E4E5",
    borderRadius: "8px",
    cursor: 'pointer',
    position: 'absolute'
  },
  logo: {
    display: 'block',
    width: '178px',
    height: '24px',
  },
  bigDel: {
    display: 'block',
    width: '28px',
    height: '28px',
    margin: '10px'
  },
  inputNumber: {
    border: 'none',
    borderBottom: '1px solid #E2E4E5 ',
    marginLeft: '32px',
    "&:focus": {
      border: 'none',
      borderBottom: '1px solid #E2E4E5 ',
    },
    marginRight: '10px'

  },
  phoneText: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    margin: '32px'
  }

});
export default useStyles;
