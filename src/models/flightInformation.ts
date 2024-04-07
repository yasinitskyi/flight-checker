interface FlightInformationProps {
	FlightDate: string;
	FlightNumber: string;
	AirlineID: string;
	DepartureAirportID: string;
	ArrivalAirportID: string;
	ScheduleDepartureTime: string;
	ActualDepartureTime: string;
	EstimatedDepartureTime: string;
	DepartureRemark: string;
	Terminal: string;
	Apron: string;
	IsCargo: boolean;
	CheckCounter: string;
	UpdateTime: string;
}

class FlightInformation {
	flightDate: Date;
	flightNumber: string;
	airlineId: string;
	departureAirportId: string;
	arrivalAirportId: string;
	scheduleDepartureTime: Date;
	actualDepartureTime: Date;
	estimatedDepartureTime: Date;
	departureRemark: string;
	terminal: string;
	apron: string;
	isCargo: boolean;
	checkCounter: string;
	updateTime: Date;

	constructor(data: FlightInformationProps) {
		this.flightDate = new Date(data.FlightDate);
		this.flightNumber = data.FlightNumber;
		this.airlineId = data.AirlineID;
		this.departureAirportId = data.DepartureAirportID;
		this.arrivalAirportId = data.ArrivalAirportID;
		this.scheduleDepartureTime = new Date(data.ScheduleDepartureTime);
		this.actualDepartureTime = new Date(data.ActualDepartureTime);
		this.estimatedDepartureTime = new Date(data.EstimatedDepartureTime);
		this.departureRemark = data.DepartureRemark;
		this.terminal = data.Terminal;
		this.apron = data.Apron;
		this.isCargo = data.IsCargo;
		this.checkCounter = data.CheckCounter;
		this.updateTime = new Date(data.UpdateTime);
	}

	get detailedFlightNumber() {
		return `${this.airlineId}${this.flightNumber}`
	}
}

export { FlightInformation };
export type { FlightInformationProps };
