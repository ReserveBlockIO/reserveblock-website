const clientId =
  "fbead81541802024f03356d1e0597516d1c007c3329f2ceedad5714bafa1e03d";
const redirectUrl = window.location.href;
const scope = "wallet:accounts:read";

export const requestAccess = () => {
  const url = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}`;

  window.location.href = url;
};
