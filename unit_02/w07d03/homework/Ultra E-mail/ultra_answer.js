### Data Model

Entity: User
id number
username
email addresses
phone number
password

Entity: Email Address
id number
username
provider domain
folders
password

Entity: Providers
id number
domain
users
years in business
parent company


### Javascript Objects

var user = {
	id: Number,
	username: String,
	emailAddresses: [],
	phoneNumber: Number,
	password: String
}

var emailAddress = {
	id: Number,
	username: String,
	password: String,
	provider: String,
	folders: []
}

var provider = {
	id: Number,
	domain: String,
	users: [], 
	yearsInBusiness: Number,
	parentCompany: String
}


### Relationships

var exampleUser = {
	id: 64,
	username: "Joe Blow",
	emailAddresses: [{
		id: 3834349834,
		username: "joeblow72",
		password: "sweetie45!",
		provider: "Gmail",
		folders: ["Inbox", "Sent", "Drafts", "Trash"]
	}, {
		id: 347493479347,
		username: "blow.j",
		password: "sweetie45",
		provider: "Yahoo",
		folders: ["Inbox", "Sent", "Drafts", "Trash"]
	}],
	phoneNumber: 4045551234,
	password: "sweetie45"
}

var exampleEmailAdress = {
	id: 3834349834,
	username: "joeblow72",
	password: "sweetie45!",
	provider: "Gmail",
	folders: ["Inbox", "Sent", "Drafts", "Trash"]
}