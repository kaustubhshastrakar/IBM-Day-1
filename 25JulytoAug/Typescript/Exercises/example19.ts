interface Invoice {
	id: string;
	clientId: number;
}

class FranchiseeAccountancyTool {
	private _invoice;

	constructor(public accToolKey: string, public taxRate: string) {
	}

	get invoice() {
		return this._invoice;
	}

	set invoice(inv: Invoice) {
		this._invoice = inv;
	}
}

var consultancyInv = { id: 'INV_20_12072015', clientId: 234 };

var accToolInstance = new FranchiseeAccountancyTool('cnaj837tjdhsu

accToolInstance.invoice = consultancyInv;