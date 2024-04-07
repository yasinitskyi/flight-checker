"use client"

import { useEffect, useState } from "react";
import { PhoneInput, NameInput, AlphanumericInput, ReadonlyInput } from "@/components/Input";
import { replaceNonNumeric, processECJK, replaceNonAlphanumeric } from "@/utilities/stringProcessors";
import Textarea from "@/components/Textarea";
import Typography from "@/components/Typography";
import { DarkButton, LightButton } from "@/components/Button";
import ResponsiveGrid from "@/components/ResponsiveGrid";
import {api} from '@/api';
import RenderIf from '@/components/RenderIf';
import Image from 'next/image'
import Drawer from "@/components/Drawer";
import Styles from './index.module.css';

export default function Search() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const hideDetails = () => {
    setIsConfirmed(false);
    setShowDetails(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hideDetails();

    const newFormData = new FormData(e.currentTarget);
    setFormData(newFormData);
    const flights = await api.getFlights();
    if (!flights) return;
    const flight = flights.some((flight) => flight.detailedFlightNumber === newFormData.get('flightNumber'));
    
    if (flight) {
      // Send POST request for pick-up placement (api.postPickUp(newFormData))
      // If successful set setIsConfirmed(true) if not - show error dialogue and return from this function
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }

    setShowDetails(true);
  };

  const handleForcedSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Send POST request for pick-up placement (api.postPickUp(newFormData))
    // If successful set setIsConfirmed(true) if not - set setShowDetails(true); show error dialogue and return from this function
    setIsConfirmed(true);
  }

  useEffect(() => {
    if (isConfirmed) setTimeout(() => setShowDetails(false), 2000);
  }, [isConfirmed]);

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
      <Textarea title="乘車備註"  name="additionalNotes" />
      <DarkButton value="Send Request" type="submit">下一步</DarkButton>
      <Drawer show={showDetails}>
        <RenderIf value={!isConfirmed}>
          <Typography tag="h1">查不到「{`${formData?.get('flightNumber')}`}」航班資訊</Typography>
          <Typography className={Styles.subTitle} tag="h2">請確認航班資訊，起飛時間等。你也可以直接填寫此航班作爲機場接送資訊</Typography>
          <DarkButton onClick={(e) => handleForcedSubmit(e)} value="Send Force Request">確認航班資訊，並送出</DarkButton>
          <LightButton onClick={() => setShowDetails(false)} value="Back to form">重新填寫</LightButton>
        </RenderIf>
        <RenderIf value={isConfirmed}>
          <Image alt="Successful operation" src="/check-circle.svg" width={50} height={50} />
          <Typography tag="h1">完成送機行程</Typography>
        </RenderIf>
      </Drawer>
    </form>
  );
}
