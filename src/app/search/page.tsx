"use client"

import { FormEvent, useState } from "react";
import { PhoneInput, NameInput, AlphanumericInput, ReadonlyInput } from "@/components/Input";
import { replaceNonNumeric, processECJK, replaceNonAlphanumeric } from "@/utilities/stringProcessors";
import Textarea from "@/components/Textarea";
import Typography from "@/components/Typography";
import { DarkButton } from "@/components/Button";
import ResponsiveGrid from "@/components/ResponsiveGrid";
import {api} from '@/api';
import Drawer from "@/components/Drawer";
import Styles from './index.module.css';
import { FlightInformation } from "@/models/flightInformation";

export default function Search() {
  const [flightInfo, setFlightInfo] = useState<FlightInformation | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const flights = await api.getFlights();
    if (!flights) return;

    const flight = flights.find(({flightNumber}) => flightNumber === formData.get('flightNumber'));
    if (flight) setFlightInfo(flight);
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <Typography tag="h1">送機行程</Typography>
      <Typography className={Styles.subTitle} tag="h2">送機計劃</Typography>
      <ResponsiveGrid>
        <ReadonlyInput 
          name="airportDetails" 
          title="下車機場" 
          value="桃園國際機場 第一航廈" 
        />
        <AlphanumericInput 
          name="flightNumber" 
          title="航班編號" 
          placeholder="e.g. BR003" 
          processor={replaceNonAlphanumeric} 
        />
      </ResponsiveGrid>
      <Typography className={Styles.subTitle} tag="h2">旅客資訊</Typography>
      <ResponsiveGrid>
        <PhoneInput processor={replaceNonNumeric} />
        <NameInput processor={processECJK} />
        <AlphanumericInput 
          name="documentDetails" 
          title="身份證字號/護照編號" 
          placeholder="e.g. A123456789" 
          processor={replaceNonAlphanumeric} 
        />
      </ResponsiveGrid>
      <Textarea
        title="乘車備註" 
        name="additionalNotes" 
      />
      <DarkButton value="Send Request" type="submit">下一步</DarkButton>
      <Drawer show={true}>
        Test 
      </Drawer>
    </form>
  );
}
