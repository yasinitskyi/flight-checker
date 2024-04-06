"use client"

import { FormEvent } from "react";
import { PhoneInput, NameInput, AlphanumericInput, ReadonlyInput } from "@/components/Input";
import { replaceNonNumeric, processECJK, replaceNonAlphanumeric } from "@/utilities/stringProcessors";
import Textarea from "@/components/Textarea";
import Typography from "@/components/Typography";
import { DarkButton } from "@/components/Button";
import Styles from './index.module.css';

export default function Search() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <Typography tag="h1">送機行程</Typography>
      <Typography className={Styles.subTitle} tag="h2">送機計劃</Typography>
      <ReadonlyInput 
        name="airport details" 
        title="下車機場" 
        value="桃園國際機場 第一航廈" 
      />
      <AlphanumericInput 
        name="flight number" 
        title="航班編號" 
        placeholder="e.g. BR003" 
        processor={replaceNonAlphanumeric} 
      />
      <Typography className={Styles.subTitle} tag="h2">旅客資訊</Typography>
      <PhoneInput processor={replaceNonNumeric} />
      <NameInput processor={processECJK} />
      <AlphanumericInput 
        name="document details" 
        title="身份證字號/護照編號" 
        placeholder="e.g. A123456789" 
        processor={replaceNonAlphanumeric} 
      />
      <Textarea
        title="乘車備註" 
        name="additional notes" 
      />
      <DarkButton value="Send Request" type="submit">下一步</DarkButton>
    </form>
  );
}
