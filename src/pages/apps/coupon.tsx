import { FormEvent, useState } from "react";
import AdminSidebar from "../../components/adminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharaters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeCharacters && !includeNumbers && !includeSymbols)
      return alert("Please Select One At Least");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;
    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeCharacters) entireString += allLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNum: number = ~~(Math.random() * entireString.length);

      result += entireString[randomNum];
      setCoupon(result);
    }
  };

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboardAppContainer">
        <h1>Coupon</h1>
        <section>
          <form className="couponForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Text to Include"
              value={prefix}
              onChange={(e) => {
                setPrefix(e.target.value);
              }}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
              }}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => {
                  setIncludeNumbers((prev) => !prev);
                }}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => {
                  setIncludeCharaters((prev) => !prev);
                }}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => {
                  setIncludeSymbols((prev) => !prev);
                }}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
