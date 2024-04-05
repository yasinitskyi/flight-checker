"use client"

import { PhoneInput, NameInput, AlphanumericInput, ReadonlyInput } from "@/components/Input";
import { replaceNonNumeric, processECJK, replaceNonAlphanumeric } from "@/utilities/stringProcessors";
import Styles from './index.module.css';

export default function Search() {
  return (
    <form className={Styles.form}>
      <ReadonlyInput name="airport details" title="下車機場" value="桃園國際機場 第一航廈" />
      <AlphanumericInput 
        name="flight number" 
        title="航班編號" 
        placeholder="e.g. BR003" 
        processor={replaceNonAlphanumeric} 
      />
      <PhoneInput processor={replaceNonNumeric} />
      <NameInput processor={processECJK} />
      <AlphanumericInput 
        name="document details" 
        title="身份證字號/護照編號" 
        placeholder="e.g. A123456789" 
        processor={replaceNonAlphanumeric} 
      />
    </form>
  );
}
