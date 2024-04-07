import { FlightInformation, FlightInformationProps } from "@/models/flightInformation";

class API {
	async getFlights(): Promise<FlightInformation[] | undefined> {
		try {
			const flights = await fetch('https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/Departure/TPE?$orderby=ScheduleDepartureTime&$format=JSON');
    	const parsedFlights = await flights.json();

			return parsedFlights.map((flight: FlightInformationProps) => new FlightInformation(flight));
		} catch (error) {
			console.error('There was an error: ', error);
			alert('Error, try again later');
		}
	}
}

const api = new API();

export {api, API};