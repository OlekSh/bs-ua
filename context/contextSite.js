import { createContext } from "react";

const ContextSite = createContext({
  logo: null,// 'BS_UA',
  studia: null, // "OlexWeb",
  email: null, //'sourceregister@gmail.com'
  postsOnPage: 4,
});


export default ContextSite;