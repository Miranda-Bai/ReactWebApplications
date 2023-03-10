// npm install google-translate-api-x
import translate from "google-translate-api-x";

export async function myTranslator(text) {
  if (!text || text==="") return "";
  const res = await translate(text, { to: "zh", client: 'gtx',autoCorrect: true });

  console.log("@@@", res.text); //=> I speak English
  console.log(res.from.language.iso); //=> nl
  return res.text;
}
