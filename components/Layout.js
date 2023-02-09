import GlobalStyles from "./Global.js";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
