const formatNumber = (number) => {
	return new Intl.NumberFormat("ID").format(number);
};

export default formatNumber;
