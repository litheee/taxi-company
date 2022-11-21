export type DriverStatus = 'blocked' | 'active'

export interface Driver {
	owner: string
	role: string
	status: DriverStatus
	car: string
	workConditions: string
	phone: string
	driveLicense: string
	balance: string
	deposit: string
	aggregators: string
}
