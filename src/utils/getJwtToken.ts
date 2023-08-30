type IJwtKeys =
  | "#access_token"
  | "expires_at"
  | "expires_in"
  | "provider_token"
  | "refresh_token"
  | "token_type";

type IJwtResult = Record<IJwtKeys, string>;

export const getJwtToken = (jwt: string): IJwtResult => {
  const spllitedToken = jwt.split("&");

  const getKeyValue = (content: string) => {
    const [key, value] = content.split("=") as [IJwtKeys, string];
    return { key, value };
  };

  let jwtTokenObject = {} as IJwtResult;

  spllitedToken.forEach((keyToken) => {
    const { key, value } = getKeyValue(keyToken);
    jwtTokenObject[key] = value;
  });

  return jwtTokenObject;
};
