export const COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
	},
	{
		Header: "First Name",
		Footer: "First Name",
		accessor: "first_name",
	},
	{
		Header: "Last Name",
		Footer: "Last Name",
		accessor: "last_name",
	},
	{
		Header: "Email",
		Footer: "Email",
		accessor: "email",
	},
	{
		Header: "Age",
		Footer: "Age",
		accessor: "age",
	},
	{
		Header: "Country",
		Footer: "Country",
		accessor: "country",
	},
	{
		Header: "Phone",
		Footer: "Phone",
		accessor: "phone",
	},
];

export const GROUPED_COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
	},
	{
		Header: "Name",
		Footer: "Name",
		columns: [
			{
				Header: "First Name",
				Footer: "First Name",
				accessor: "first_name",
			},
			{
				Header: "Last Name",
				Footer: "Last Name",
				accessor: "last_name",
			},
		],
	},
	{
		Header: "User Info",
		Footer: "User Info",
		columns: [
			{
				Header: "Email",

				accessor: "email",
			},
			{
				Header: "Age",

				accessor: "age",
			},
			{
				Header: "Country",

				accessor: "country",
			},
			{
				Header: "Phone",

				accessor: "phone",
			},
		],
	},
];
