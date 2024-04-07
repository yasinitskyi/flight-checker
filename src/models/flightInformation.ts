interface FlightInformationProps {
	FlightDate: string,
	FlightNumber: string,
	AirlineID: string,
	DepartureAirportID: string,
	ArrivalAirportID: string,
	ScheduleDepartureTime: string,
	ActualDepartureTime: string,
	EstimatedDepartureTime: string,
	DepartureRemark: string,
	Terminal: string,
	Apron: string,
	IsCargo: boolean,
	CheckCounter: string,
	UpdateTime: string,
	AirRouteType: number,
	DepartureRemarkEn: string,
	Gate: string,
	CodeShare: string,
	AcType: string,
	BaggageClaim: string,
}

class FlightInformation {
	flightDate: string = '';
	flightNumber: string = '';
	airlineId: string = '';
	departureAirportId: string = '';
	arrivalAirportId: string = '';
	scheduleDepartureTime: string = '';
	actualDepartureTime: string = '';
	estimatedDepartureTime: string = '';
	departureRemark: string = '';
	terminal: string = '';
	apron: string = '';
	isCargo: boolean | null = null;
	checkCounter: string = '';
	updateTime: string = '';
	airRouteType: number | null = null;
	departureRemarkEn: string = '';
	gate: string = '';
	codeShare: string = '';
	acType: string = '';
	baggageClaim: string = '';

	constructor(data: FlightInformationProps) {
		this.flightDate = data.FlightDate ?? this.flightDate;
		this.flightNumber = data.FlightNumber;
		this.airlineId = data.AirlineID;
		this.departureAirportId = data.DepartureAirportID;
		this.arrivalAirportId = data.ArrivalAirportID;
		this.scheduleDepartureTime = data.ScheduleDepartureTime ?? this.scheduleDepartureTime;
		this.actualDepartureTime = data.ActualDepartureTime ?? this.actualDepartureTime;
		this.estimatedDepartureTime = data.EstimatedDepartureTime ?? this.estimatedDepartureTime;
		this.departureRemark = data.DepartureRemark;
		this.terminal = data.Terminal;
		this.apron = data.Apron;
		this.isCargo = data.IsCargo ?? this.isCargo;
		this.checkCounter = data.CheckCounter;
		this.updateTime = data.UpdateTime ?? this.updateTime;
		this.airRouteType = data.AirRouteType ?? this.airRouteType;
		this.departureRemarkEn = data.DepartureRemarkEn;
		this.gate = data.Gate;
		this.codeShare = data.CodeShare;
		this.acType = data.AcType;
		this.baggageClaim = data.BaggageClaim;
	}

	get detailedFlightNumber() {
		return `${this.airlineId}${this.flightNumber}`
	}
}

export { FlightInformation };
export type { FlightInformationProps };
