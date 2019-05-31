import { Orderdetails } from './Orderdetails';

export class Orders{

    orderNumber : number;
	orderDate : Date;
	requiredDate : Date;
	shippedDate : Date;
	status : string;
	comments : string;
	customerNumber : number;

	orderdetailList: Orderdetails[];

}

