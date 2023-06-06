import "./App.css";
import { useState } from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [otp, setOtp] = useState<string | null>(null);
  const [step, setStep] = useState<string>("ENTER_PHONE_NUMBER");

  const handleSendOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  const handleVerifyOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      {step === "ENTER_PHONE_NUMBER" && (
        <form onSubmit={handleSendOTP}>
          <label>Phone number</label>
          <input
            type="text"
            required
            placeholder="enter your phone number"
            value={phoneNumber || ""}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div id="recapcha-verifier"></div>
          <button type="submit">Gửi mã xác nhận</button>
        </form>
      )}

      {step === "VERIFY_OTP" && (
        <form onSubmit={handleVerifyOTP}>
          <label>Phone number</label>
          <input
            type="text"
            required
            placeholder="enter your OTP"
            value={otp || ""}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Xác nhận OTP</button>
        </form>
      )}
    </>
  );
}

export default App;
